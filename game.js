const CONFIG = {
  canvas: { width: 960, height: 540 },
  player: {
    radius: 18,
    color: '#ff8c4a',
    speed: 220,
    maxHp: 100,
    attackRange: 130,
    attackDamage: 18,
    attackCooldown: 0.55,
    pickupRadius: 42,
  },
  enemy: {
    baseRadius: 14,
    baseSpeed: 70,
    baseHp: 28,
    touchDamage: 8,
    damageCooldown: 0.7,
    spawnInterval: 0.8,
  },
  projectile: {
    radius: 6,
    speed: 420,
    life: 0.9,
    color: '#7be8ff',
    hitColor: '#c8f7ff',
  },
  xpGem: {
    radius: 7,
    color: '#7be8ff',
    glowColor: 'rgba(123,232,255,0.35)',
    value: 12,
  },
  upgrades: {
    pickupRadiusBonus: 18,
  },
  combat: {
    knockbackForce: 180,
    knockbackDamping: 8,
    maxKnockbackSpeed: 260,
  },
  progression: {
    xpPerEnemy: 12,
    baseXpToLevel: 80,
    xpGrowth: 1.35,
  },
  levelUp: {
    resumeGraceDuration: 0.65,
  },
  assets: {
    playerImage: 'assets/crayfish.png',
    enemyImage: 'assets/tododon.png',
  },
  visuals: {
    playerShadowColor: 'rgba(0, 0, 0, 0.35)',
    enemyShadowColor: 'rgba(0, 0, 0, 0.25)',
    playerRangeColor: 'rgba(123, 232, 255, 0.14)',
    pickupRadiusColor: 'rgba(123, 232, 255, 0.08)',
    playerRangeLineWidth: 1.5,
    entityShadowRadiusScale: 0.85,
    entityImageScale: 2.4,
    enemyHpBarWidth: 24,
    enemyHpBarHeight: 4,
    enemyHpBarYOffset: 16,
    enemyHpBarBackColor: 'rgba(0, 0, 0, 0.5)',
    enemyHpBarFillColor: '#6dff8c',
    projectileGlowColor: 'rgba(200, 247, 255, 0.85)',
    projectileCoreColor: '#7be8ff',
    hitParticleColor: 'rgba(200, 247, 255, 0.9)',
    hitParticleCount: 8,
    hitParticleLife: 0.2,
    hitParticleSpeed: 170,
    hitParticleRadius: 2.5,
    deathParticleColor: 'rgba(255, 150, 120, 0.9)',
    deathParticleCount: 18,
    deathParticleLife: 0.38,
    deathParticleSpeed: 240,
    deathParticleRadius: 3.2,
  },
};

const gameState = {
  time: 0,
  runTime: 0,
  isPaused: false,
  isGameOver: false,
  keys: {},
  images: {},
  player: {},
  enemies: [],
  projectiles: [],
  particles: [],
  xpGems: [],
  spawnTimer: 0,
  damageTimer: 0,
  xp: 0,
  xpToNext: CONFIG.progression.baseXpToLevel,
  level: 1,
  score: 0,
  chosenMutations: [],
  resumeGraceTimer: 0,
  currentMutationOptions: [],
};

const BLOCK_KEYS = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '];

const MUTATIONS = [
  { id: 'hard_shell', name: 'Hard Shell', desc: '+25 max HP, heal 20', apply: s => { s.player.maxHp += 25; s.player.hp = Math.min(s.player.maxHp, s.player.hp + 20); } },
  { id: 'claw_sharp', name: 'Razor Claws', desc: '+8 attack damage', apply: s => { s.player.attackDamage += 8; } },
  { id: 'jet_tail', name: 'Jet Tail', desc: '+35 movement speed', apply: s => { s.player.speed += 35; } },
  { id: 'sensing_antennae', name: 'Sensing Antennae', desc: '+25 attack range', apply: s => { s.player.attackRange += 25; } },
  { id: 'rapid_strikes', name: 'Rapid Strikes', desc: '-0.08s attack cooldown', apply: s => { s.player.attackCooldown = Math.max(0.12, s.player.attackCooldown - 0.08); } },
  { id: 'barbed_plating', name: 'Barbed Plating', desc: 'Reflect 20% touch damage', apply: s => { s.player.reflectPct += 0.2; } },
  { id: 'wide_sense', name: 'Wide Sense', desc: '+18 pickup radius', apply: s => { if (s?.player) s.player.pickupRadius += CONFIG.upgrades.pickupRadiusBonus; } },
];

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const levelupModal = document.getElementById('levelupModal');
const mutationOptions = document.getElementById('mutationOptions');
const gameOverModal = document.getElementById('gameOverModal');
const finalStats = document.getElementById('finalStats');
const restartBtn = document.getElementById('restartBtn');

function resetState() {
  Object.assign(gameState, {
    time: 0, runTime: 0, isPaused: false, isGameOver: false, keys: {}, enemies: [],
    projectiles: [], particles: [], xpGems: [],
    spawnTimer: 0, damageTimer: 0, xp: 0, xpToNext: CONFIG.progression.baseXpToLevel,
    level: 1, score: 0, chosenMutations: [], resumeGraceTimer: 0, currentMutationOptions: [],
    player: {
      x: CONFIG.canvas.width / 2,
      y: CONFIG.canvas.height / 2,
      radius: CONFIG.player.radius,
      color: CONFIG.player.color,
      speed: CONFIG.player.speed,
      hp: CONFIG.player.maxHp,
      maxHp: CONFIG.player.maxHp,
      attackRange: CONFIG.player.attackRange,
      attackDamage: CONFIG.player.attackDamage,
      attackCooldown: CONFIG.player.attackCooldown,
      pickupRadius: CONFIG.player.pickupRadius,
      attackTimer: 0,
      reflectPct: 0,
    },
  });
  levelupModal.classList.add('hidden');
  gameOverModal.classList.add('hidden');
}

function loadImage(key, src) {
  return new Promise(resolve => {
    const img = new Image();
    img.onload = () => resolve({ key, img, ok: true });
    img.onerror = () => resolve({ key, img: null, ok: false });
    img.src = src;
  });
}

async function preloadImages() {
  const results = await Promise.all([
    loadImage('player', CONFIG.assets.playerImage),
    loadImage('enemy', CONFIG.assets.enemyImage),
  ]);
  results.forEach(r => gameState.images[r.key] = r);
}

function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }
function rand(min, max) { return Math.random() * (max - min) + min; }
function distance(a, b) { return Math.hypot(a.x - b.x, a.y - b.y); }

function spawnEnemy() {
  const edge = Math.floor(Math.random() * 4);
  const margin = 30;
  let x = 0, y = 0;
  if (edge === 0) { x = rand(0, CONFIG.canvas.width); y = -margin; }
  if (edge === 1) { x = CONFIG.canvas.width + margin; y = rand(0, CONFIG.canvas.height); }
  if (edge === 2) { x = rand(0, CONFIG.canvas.width); y = CONFIG.canvas.height + margin; }
  if (edge === 3) { x = -margin; y = rand(0, CONFIG.canvas.height); }

  const difficulty = 1 + gameState.runTime * 0.03;
  gameState.enemies.push({
    x, y,
    radius: CONFIG.enemy.baseRadius,
    speed: CONFIG.enemy.baseSpeed * difficulty,
    hp: CONFIG.enemy.baseHp * (1 + gameState.level * 0.04),
    maxHp: CONFIG.enemy.baseHp * (1 + gameState.level * 0.04),
    knockbackX: 0,
    knockbackY: 0,
  });
}

function spawnHitParticles(x, y) {
  const count = CONFIG.visuals.hitParticleCount;
  const life = CONFIG.visuals.hitParticleLife;
  const speed = CONFIG.visuals.hitParticleSpeed;
  const radius = CONFIG.visuals.hitParticleRadius;
  const color = CONFIG.visuals.hitParticleColor;
  for (let i = 0; i < count; i += 1) {
    const angle = Math.random() * Math.PI * 2;
    const velocity = rand(speed * 0.5, speed);
    gameState.particles.push({
      x,
      y,
      vx: Math.cos(angle) * velocity,
      vy: Math.sin(angle) * velocity,
      radius,
      life,
      maxLife: life,
      color,
    });
  }
}

function createDeathEffect(enemy) {
  if (!enemy) return;
  const x = Number.isFinite(enemy.x) ? enemy.x : 0;
  const y = Number.isFinite(enemy.y) ? enemy.y : 0;
  const count = Math.max(0, Math.floor(CONFIG.visuals.deathParticleCount));
  const life = Math.max(0.01, CONFIG.visuals.deathParticleLife);
  const speed = Math.max(0, CONFIG.visuals.deathParticleSpeed);
  const radius = Math.max(0.1, CONFIG.visuals.deathParticleRadius);
  const color = CONFIG.visuals.deathParticleColor;
  for (let i = 0; i < count; i += 1) {
    const angle = Math.random() * Math.PI * 2;
    const velocity = rand(speed * 0.55, speed * 1.25);
    gameState.particles.push({
      x,
      y,
      vx: Math.cos(angle) * velocity,
      vy: Math.sin(angle) * velocity,
      radius: rand(radius * 0.7, radius * 1.3),
      life: rand(life * 0.7, life * 1.1),
      maxLife: life,
      color,
    });
  }
}

function spawnXpGem(x, y, value) {
  const gemRadius = Number.isFinite(CONFIG.xpGem?.radius) && CONFIG.xpGem.radius > 0 ? CONFIG.xpGem.radius : 7;
  const gemValue = Number.isFinite(value) && value > 0
    ? value
    : (Number.isFinite(CONFIG.xpGem?.value) && CONFIG.xpGem.value > 0 ? CONFIG.xpGem.value : 1);
  const gemX = Number.isFinite(x) ? x : 0;
  const gemY = Number.isFinite(y) ? y : 0;
  gameState.xpGems.push({
    x: gemX,
    y: gemY,
    radius: gemRadius,
    value: gemValue,
  });
}

function chooseMutations() {
  const pool = [...MUTATIONS].sort(() => Math.random() - 0.5);
  return pool.slice(0, 3);
}

function showLevelUp() {
  gameState.isPaused = true;
  gameState.currentMutationOptions = chooseMutations();
  mutationOptions.innerHTML = '';
  gameState.currentMutationOptions.forEach((m, index) => {
    const btn = document.createElement('button');
    btn.className = 'mutation-card';
    btn.innerHTML = `<h3>${m.name}</h3><p>${m.desc}</p>`;
    btn.onclick = () => selectMutation(index);
    mutationOptions.appendChild(btn);
  });
  levelupModal.classList.remove('hidden');
}

function selectMutation(index) {
  const mutation = gameState.currentMutationOptions?.[index];
  if (!mutation) return;
  mutation.apply(gameState);
  gameState.chosenMutations.push(mutation.name);
  levelupModal.classList.add('hidden');
  gameState.currentMutationOptions = [];
  gameState.isPaused = false;
  gameState.resumeGraceTimer = CONFIG.levelUp.resumeGraceDuration;
}

function addXp(amount) {
  gameState.xp += amount;
  while (gameState.xp >= gameState.xpToNext) {
    gameState.xp -= gameState.xpToNext;
    gameState.level += 1;
    gameState.xpToNext = Math.floor(gameState.xpToNext * CONFIG.progression.xpGrowth);
    showLevelUp();
  }
}

function updatePlayerMovement(dt) {
  const p = gameState.player;
  const xMove = (gameState.keys.ArrowRight || gameState.keys.d ? 1 : 0) - (gameState.keys.ArrowLeft || gameState.keys.a ? 1 : 0);
  const yMove = (gameState.keys.ArrowDown || gameState.keys.s ? 1 : 0) - (gameState.keys.ArrowUp || gameState.keys.w ? 1 : 0);
  const mag = Math.hypot(xMove, yMove) || 1;
  p.x += (xMove / mag) * p.speed * dt;
  p.y += (yMove / mag) * p.speed * dt;
  p.x = clamp(p.x, p.radius, CONFIG.canvas.width - p.radius);
  p.y = clamp(p.y, p.radius, CONFIG.canvas.height - p.radius);
}

function updatePlayerAttack(dt) {
  const p = gameState.player;
  p.attackTimer -= dt;
  if (p.attackTimer <= 0) {
    const nearest = gameState.enemies
      .map(e => ({ e, d: distance(e, p) }))
      .filter(v => v.d <= p.attackRange)
      .sort((a, b) => a.d - b.d)[0];

    if (nearest?.e) {
      const target = nearest.e;
      const dx = target.x - p.x;
      const dy = target.y - p.y;
      const d = Math.hypot(dx, dy) || 1;
      const speed = CONFIG.projectile.speed;
      gameState.projectiles.push({
        x: p.x,
        y: p.y,
        vx: (dx / d) * speed,
        vy: (dy / d) * speed,
        radius: CONFIG.projectile.radius,
        damage: p.attackDamage,
        life: CONFIG.projectile.life,
      });
      p.attackTimer = p.attackCooldown;
    }
  }
}

function updateProjectiles(dt) {
  const maxX = CONFIG.canvas.width;
  const maxY = CONFIG.canvas.height;
  const projectiles = gameState.projectiles || [];

  projectiles.forEach(proj => {
    proj.x += proj.vx * dt;
    proj.y += proj.vy * dt;
    proj.life -= dt;

    if (proj.life <= 0) {
      proj._remove = true;
      return;
    }

    if (proj.x < -proj.radius || proj.x > maxX + proj.radius || proj.y < -proj.radius || proj.y > maxY + proj.radius) {
      proj._remove = true;
      return;
    }

    const hitEnemy = gameState.enemies.find(enemy => distance(proj, enemy) <= proj.radius + enemy.radius);
    if (hitEnemy) {
      hitEnemy.hp -= proj.damage;

      const dirFromProjectileX = (hitEnemy.x ?? 0) - (proj.x ?? 0);
      const dirFromProjectileY = (hitEnemy.y ?? 0) - (proj.y ?? 0);
      let knockbackDistance = Math.hypot(dirFromProjectileX, dirFromProjectileY);

      let dirX = 0;
      let dirY = 0;
      if (knockbackDistance > 0) {
        dirX = dirFromProjectileX / knockbackDistance;
        dirY = dirFromProjectileY / knockbackDistance;
      } else {
        const player = gameState.player || { x: 0, y: 0 };
        const fallbackDirX = (hitEnemy.x ?? 0) - (player.x ?? 0);
        const fallbackDirY = (hitEnemy.y ?? 0) - (player.y ?? 0);
        knockbackDistance = Math.hypot(fallbackDirX, fallbackDirY);
        if (knockbackDistance > 0) {
          dirX = fallbackDirX / knockbackDistance;
          dirY = fallbackDirY / knockbackDistance;
        }
      }

      hitEnemy.knockbackX = (hitEnemy.knockbackX ?? 0) + dirX * CONFIG.combat.knockbackForce;
      hitEnemy.knockbackY = (hitEnemy.knockbackY ?? 0) + dirY * CONFIG.combat.knockbackForce;

      const knockbackSpeed = Math.hypot(hitEnemy.knockbackX, hitEnemy.knockbackY);
      if (knockbackSpeed > CONFIG.combat.maxKnockbackSpeed && knockbackSpeed > 0) {
        const scale = CONFIG.combat.maxKnockbackSpeed / knockbackSpeed;
        hitEnemy.knockbackX *= scale;
        hitEnemy.knockbackY *= scale;
      }

      spawnHitParticles(proj.x, proj.y);
      proj._remove = true;
    }
  });

  gameState.projectiles = projectiles.filter(proj => !proj._remove);
}

function updateParticles(dt) {
  const particles = gameState.particles || [];
  const nextParticles = [];
  particles.forEach(particle => {
    if (!particle) return;
    const x = Number.isFinite(particle.x) ? particle.x : 0;
    const y = Number.isFinite(particle.y) ? particle.y : 0;
    const vx = Number.isFinite(particle.vx) ? particle.vx : 0;
    const vy = Number.isFinite(particle.vy) ? particle.vy : 0;
    const radius = Number.isFinite(particle.radius) && particle.radius > 0 ? particle.radius : 1;
    const maxLife = Number.isFinite(particle.maxLife) && particle.maxLife > 0 ? particle.maxLife : 0.01;
    const life = (Number.isFinite(particle.life) ? particle.life : 0) - dt;
    if (!Number.isFinite(life) || life <= 0) return;
    particle.x = x + vx * dt;
    particle.y = y + vy * dt;
    particle.vx = vx;
    particle.vy = vy;
    particle.radius = radius;
    particle.maxLife = maxLife;
    particle.life = life;
    if (Number.isFinite(particle.x) && Number.isFinite(particle.y)) nextParticles.push(particle);
  });
  gameState.particles = nextParticles;
}

function updateEnemies(dt) {
  const p = gameState.player;
  gameState.enemies.forEach(enemy => {
    if (!enemy) return;

    const dx = (p.x ?? 0) - (enemy.x ?? 0);
    const dy = (p.y ?? 0) - (enemy.y ?? 0);
    const d = Math.hypot(dx, dy) || 1;
    enemy.x = (enemy.x ?? 0) + (dx / d) * (enemy.speed ?? 0) * dt;
    enemy.y = (enemy.y ?? 0) + (dy / d) * (enemy.speed ?? 0) * dt;

    enemy.knockbackX = enemy.knockbackX ?? 0;
    enemy.knockbackY = enemy.knockbackY ?? 0;

    enemy.x += enemy.knockbackX * dt;
    enemy.y += enemy.knockbackY * dt;

    enemy.knockbackX -= enemy.knockbackX * CONFIG.combat.knockbackDamping * dt;
    enemy.knockbackY -= enemy.knockbackY * CONFIG.combat.knockbackDamping * dt;

    if (Math.abs(enemy.knockbackX) < 0.5) enemy.knockbackX = 0;
    if (Math.abs(enemy.knockbackY) < 0.5) enemy.knockbackY = 0;

    if (!Number.isFinite(enemy.x) || !Number.isFinite(enemy.y)) {
      enemy.x = Number.isFinite(enemy.x) ? enemy.x : (p.x ?? CONFIG.canvas.width / 2);
      enemy.y = Number.isFinite(enemy.y) ? enemy.y : (p.y ?? CONFIG.canvas.height / 2);
      enemy.knockbackX = 0;
      enemy.knockbackY = 0;
    }
  });

  gameState.damageTimer -= dt;
  if (gameState.damageTimer <= 0) {
    gameState.enemies.forEach(enemy => {
      if (distance(enemy, p) < enemy.radius + p.radius) {
        p.hp -= CONFIG.enemy.touchDamage;
        if (p.reflectPct > 0) enemy.hp -= CONFIG.enemy.touchDamage * p.reflectPct;
      }
    });
    gameState.damageTimer = CONFIG.enemy.damageCooldown;
  }

  const aliveEnemies = [];
  gameState.enemies.forEach(enemy => {
    if (!enemy) return;
    if ((enemy.hp ?? 0) <= 0) {
      createDeathEffect(enemy);
      spawnXpGem(enemy.x, enemy.y, CONFIG.xpGem.value);
      gameState.score += 1;
      return;
    }
    aliveEnemies.push(enemy);
  });
  gameState.enemies = aliveEnemies;
}

function updateXpGems() {
  if (gameState.isPaused) return;
  const gems = gameState.xpGems || [];
  const player = gameState.player || { x: 0, y: 0, radius: 0 };
  const pickupRadius = Number.isFinite(player?.pickupRadius) && player.pickupRadius >= 0
    ? player.pickupRadius
    : 0;
  const nextGems = [];

  gems.forEach(gem => {
    if (!gem) return;
    const x = Number.isFinite(gem.x) ? gem.x : 0;
    const y = Number.isFinite(gem.y) ? gem.y : 0;
    const radius = Number.isFinite(gem.radius) && gem.radius > 0 ? gem.radius : (CONFIG.xpGem.radius || 1);
    const value = Number.isFinite(gem.value) && gem.value > 0 ? gem.value : 0;
    if (value <= 0) return;
    const dist = Math.hypot((player.x ?? 0) - x, (player.y ?? 0) - y);
    if (dist <= pickupRadius) {
      addXp(value);
      return;
    }
    nextGems.push({ x, y, radius, value });
  });

  gameState.xpGems = nextGems;
}

function update(dt) {
  if (gameState.isGameOver) return;
  if (gameState.isPaused) return;

  if (gameState.resumeGraceTimer > 0) {
    gameState.resumeGraceTimer = Math.max(0, gameState.resumeGraceTimer - dt);
    gameState.runTime += dt;
    updatePlayerMovement(dt);
    updateProjectiles(dt);
    updateParticles(dt);
    return;
  }

  gameState.runTime += dt;
  updatePlayerMovement(dt);
  updatePlayerAttack(dt);
  updateProjectiles(dt);
  updateXpGems(dt);
  updateParticles(dt);
  updateEnemies(dt);

  gameState.spawnTimer -= dt;
  if (gameState.spawnTimer <= 0) {
    spawnEnemy();
    gameState.spawnTimer = Math.max(0.2, CONFIG.enemy.spawnInterval - gameState.runTime * 0.01);
  }

  if (gameState.player.hp <= 0) {
    gameState.isGameOver = true;
    finalStats.textContent = `Level ${gameState.level} • Defeated ${gameState.score} enemies • Survived ${gameState.runTime.toFixed(1)}s`;
    gameOverModal.classList.remove('hidden');
  }
}

function drawEntityWithFallback(entity, imageResult, fallbackColor) {
  const imageScale = CONFIG.visuals.entityImageScale;
  if (imageResult?.ok && imageResult.img) {
    const s = entity.radius * imageScale;
    ctx.drawImage(imageResult.img, entity.x - s / 2, entity.y - s / 2, s, s);
  } else {
    ctx.fillStyle = fallbackColor;
    ctx.beginPath();
    ctx.arc(entity.x, entity.y, entity.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawEntityShadow(entity, color) {
  const shadowRadius = entity.radius * CONFIG.visuals.entityShadowRadiusScale;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.ellipse(entity.x, entity.y + shadowRadius * 0.45, shadowRadius, shadowRadius * 0.55, 0, 0, Math.PI * 2);
  ctx.fill();
}

function drawEnemyHpBar(enemy) {
  const w = CONFIG.visuals.enemyHpBarWidth;
  const h = CONFIG.visuals.enemyHpBarHeight;
  const yOffset = CONFIG.visuals.enemyHpBarYOffset;
  const maxHp = enemy.maxHp || enemy.hp || 1;
  const hpPct = clamp((enemy.hp || 0) / maxHp, 0, 1);
  const x = enemy.x - w / 2;
  const y = enemy.y - enemy.radius - yOffset;
  ctx.fillStyle = CONFIG.visuals.enemyHpBarBackColor;
  ctx.fillRect(x, y, w, h);
  ctx.fillStyle = CONFIG.visuals.enemyHpBarFillColor;
  ctx.fillRect(x, y, w * hpPct, h);
}

function drawProjectiles() {
  const projectiles = gameState.projectiles || [];
  projectiles.forEach(proj => {
    ctx.save();
    ctx.shadowBlur = proj.radius * 3;
    ctx.shadowColor = CONFIG.visuals.projectileGlowColor;
    ctx.fillStyle = CONFIG.visuals.projectileGlowColor;
    ctx.beginPath();
    ctx.arc(proj.x, proj.y, proj.radius * 1.7, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = CONFIG.visuals.projectileCoreColor;
    ctx.beginPath();
    ctx.arc(proj.x, proj.y, proj.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  });
}

function drawParticles() {
  const particles = gameState.particles || [];
  particles.forEach(particle => {
    if (!particle) return;
    const life = particle?.life ?? 0;
    const maxLife = particle?.maxLife ?? 1;
    if (!Number.isFinite(life) || !Number.isFinite(maxLife) || life <= 0 || maxLife <= 0) return;
    const alpha = clamp(life / maxLife, 0, 1);
    const radius = Number.isFinite(particle?.radius) && particle.radius > 0 ? particle.radius : 1;
    const x = Number.isFinite(particle?.x) ? particle.x : 0;
    const y = Number.isFinite(particle?.y) ? particle.y : 0;
    if (!Number.isFinite(alpha) || alpha <= 0 || !Number.isFinite(radius) || !Number.isFinite(x) || !Number.isFinite(y)) return;
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = particle?.color || CONFIG.visuals.hitParticleColor;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  });
}

function drawXpGems() {
  const gems = gameState.xpGems || [];
  const gemColor = CONFIG.xpGem?.color || '#7be8ff';
  const gemGlowColor = CONFIG.xpGem?.glowColor || 'rgba(123,232,255,0.35)';
  gems.forEach(gem => {
    if (!gem) return;
    const x = Number.isFinite(gem.x) ? gem.x : 0;
    const y = Number.isFinite(gem.y) ? gem.y : 0;
    const radius = Number.isFinite(gem.radius) && gem.radius > 0 ? gem.radius : 1;
    ctx.save();
    ctx.shadowBlur = radius * 3.2;
    ctx.shadowColor = gemGlowColor;
    ctx.fillStyle = gemGlowColor;
    ctx.beginPath();
    ctx.arc(x, y, radius * 1.8, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = gemColor;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#dffbff';
    ctx.beginPath();
    ctx.arc(x - radius * 0.25, y - radius * 0.25, radius * 0.35, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  });
}

function drawHud() {
  const p = gameState.player;
  const hpPct = p.hp / p.maxHp;
  const xpPct = gameState.xp / gameState.xpToNext;

  ctx.fillStyle = '#0008';
  ctx.fillRect(16, 16, 260, 90);
  ctx.fillStyle = '#fff';
  ctx.font = '14px sans-serif';
  ctx.fillText(`HP: ${Math.ceil(p.hp)} / ${p.maxHp}`, 26, 36);
  ctx.fillText(`Level: ${gameState.level}`, 26, 54);
  ctx.fillText(`Kills: ${gameState.score}`, 26, 72);

  ctx.fillStyle = '#2a334f';
  ctx.fillRect(120, 26, 140, 10);
  ctx.fillRect(120, 44, 140, 10);
  ctx.fillStyle = '#ff6b6b';
  ctx.fillRect(120, 26, 140 * hpPct, 10);
  ctx.fillStyle = '#7be8ff';
  ctx.fillRect(120, 44, 140 * xpPct, 10);
}

function render() {
  ctx.clearRect(0, 0, CONFIG.canvas.width, CONFIG.canvas.height);
  ctx.fillStyle = '#0d1730';
  ctx.fillRect(0, 0, CONFIG.canvas.width, CONFIG.canvas.height);

  ctx.fillStyle = CONFIG.visuals.pickupRadiusColor;
  ctx.beginPath();
  ctx.arc(gameState.player.x, gameState.player.y, gameState.player.pickupRadius || 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = CONFIG.visuals.playerRangeColor;
  ctx.lineWidth = CONFIG.visuals.playerRangeLineWidth;
  ctx.beginPath();
  ctx.arc(gameState.player.x, gameState.player.y, gameState.player.attackRange, 0, Math.PI * 2);
  ctx.stroke();

  drawXpGems();
  drawParticles();
  drawProjectiles();
  gameState.enemies.forEach(e => {
    drawEntityShadow(e, CONFIG.visuals.enemyShadowColor);
    drawEntityWithFallback(e, gameState.images.enemy, '#85ff8a');
    drawEnemyHpBar(e);
  });
  drawEntityShadow(gameState.player, CONFIG.visuals.playerShadowColor);
  drawEntityWithFallback(gameState.player, gameState.images.player, '#ff8c4a');
  drawHud();
}

function loop(ts) {
  const dt = Math.min(0.033, (ts - gameState.time) / 1000 || 0);
  gameState.time = ts;
  update(dt);
  render();
  requestAnimationFrame(loop);
}

window.addEventListener('keydown', e => {
  const isMutationSelectionActive = gameState.isPaused && (gameState.currentMutationOptions?.length || 0) > 0;
  if (isMutationSelectionActive && ['1', '2', '3'].includes(e.key)) {
    e.preventDefault();
    selectMutation(Number(e.key) - 1);
    return;
  }
  if (BLOCK_KEYS.includes(e.key)) e.preventDefault();
  gameState.keys[e.key] = true;
});
window.addEventListener('keyup', e => {
  if (BLOCK_KEYS.includes(e.key)) e.preventDefault();
  gameState.keys[e.key] = false;
});
restartBtn.addEventListener('click', () => resetState());

(async function init() {
  resetState();
  await preloadImages();
  requestAnimationFrame(loop);
})();
