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
    magnetRadius: 90,
    projectilePierce: 0,
    attackConeDegrees: 150,
    maxAttackConeDegrees: 200,
    castOffsetX: -18,
    castOffsetY: -6,
  },
  enemy: {
    baseRadius: 14,
    baseSpeed: 70,
    baseHp: 28,
    touchDamage: 8,
    damageCooldown: 0.7,
    spawnInterval: 0.8,
    minSpawnInterval: 0.22,
    maxEnemiesBase: 35,
    maxEnemiesGrowthPerMinute: 12,
    maxEnemiesCap: 120,
    spawnIntervalDecayPerMinute: 0.18,
    hpGrowthPerMinute: 0.08,
    speedGrowthPerMinute: 0.04,
    separationRadius: 30,
    separationStrength: 0.45,
    maxSeparationPush: 45,
  },
  projectile: {
    radius: 5,
    speed: 460,
    life: 0.9,
    color: '#8fb6c9',
    hitColor: '#c7dce7',
  },
  xpGem: {
    radius: 7,
    color: '#b7ff8e',
    glowColor: 'rgba(168,255,122,0.42)',
    value: 12,
    magnetSpeed: 240,
    maxMagnetSpeed: 420,
  },
  upgrades: {
    pickupRadiusBonus: 18,
    magnetRadiusBonus: 35,
    projectilePierceBonus: 1,
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
  run: {
    targetSurvivalTime: 300,
    endEventDarknessAlpha: 0.35,
  },
  eventUi: {
    overlayAlpha: 0.2,
    panelWidthRatio: 0.84,
    panelHeight: 188,
    panelLeftMargin: 24,
    panelBottomMargin: 20,
    panelBorderRadius: 14,
    speakerFontSize: 24,
    textFontSize: 22,
    hintFontSize: 16,
    choiceHeight: 44,
    choiceGap: 10,
    choicePaddingX: 14,
    choiceBlockTop: 94,
    choiceBlockLeft: 16,
    resultAdvanceHintY: 166,
  },
  meta: {
    coinsPerKill: 1,
    coinsPerLevel: 3,
    clearBonusCoins: 25,
    debugRewardsEnabled: false,
  },
  debug: {
    enabled: false,
    targetSurvivalTimeOverride: null,
    presets: [
      { id: 'normal', label: 'Normal', targetSurvivalTime: null },
      { id: 'tododon_60', label: 'Tododon in 60s', targetSurvivalTime: 60 },
      { id: 'tododon_30', label: 'Tododon in 30s', targetSurvivalTime: 30 },
    ],
  },
  tododon: {
    radius: 420,
    speed: 30,
    touchRadius: 380,
    color: '#3f5870',
    spawnOffset: 520,
    screenDarkenSpeed: 0.12,
  },
  assets: {
    playerImage: 'assets/crayfish.png',
    enemyImage: 'assets/tododon.png',
  },
  visuals: {
    playerShadowColor: 'rgba(0, 0, 0, 0.35)',
    enemyShadowColor: 'rgba(0, 0, 0, 0.25)',
    playerRangeColor: 'rgba(123, 232, 255, 0.14)',
    attackConeFillColor: 'rgba(143,182,201,0.10)',
    attackConeStrokeColor: 'rgba(143,182,201,0.28)',
    pickupRadiusColor: 'rgba(123, 232, 255, 0.08)',
    magnetRadiusColor: 'rgba(123, 232, 255, 0.035)',
    playerRangeLineWidth: 1.5,
    entityShadowRadiusScale: 0.85,
    entityImageScale: 2.4,
    enemyHpBarWidth: 24,
    enemyHpBarHeight: 4,
    enemyHpBarYOffset: 16,
    enemyHpBarBackColor: 'rgba(0, 0, 0, 0.5)',
    enemyHpBarFillColor: '#6dff8c',
    projectileGlowColor: 'rgba(143, 182, 201, 0.52)',
    projectileCoreColor: '#7caec4',
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
    rangeVisibilityDuration: 3.0,
    rangeFadeDuration: 0.6,
  },
};

const gameState = {
  time: 0,
  runTime: 0,
  phase: 'start',
  previousPhaseBeforePause: null,
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
  tododon: null,
  pendingEvent: null,
  event: null,
  screenDarkness: 0,
  currentMutationOptions: [],
  nextEnemyId: 1,
  debug: {
    selectedPresetId: 'normal',
    enabled: false,
    targetSurvivalTimeOverride: null,
  },
  startUi: {
    debugMenuOpen: false,
  },
  rangeVisibility: {
    visible: false,
    timer: 0,
  },
  meta: {
    coins: 0,
    totalRuns: 0,
    bestSurvivalTime: 0,
    unlockedFlags: {},
  },
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
  { id: 'magnetic_sense', name: 'Magnetic Sense', desc: '+35 magnet radius', apply: s => { if (s?.player) s.player.magnetRadius += CONFIG.upgrades.magnetRadiusBonus; } },
  { id: 'piercing_shot', name: 'Piercing Shot', desc: '+1 projectile pierce', apply: s => { if (s?.player) s.player.projectilePierce += CONFIG.upgrades.projectilePierceBonus; } },
  { id: 'predator_eyes', name: 'Predator Eyes', desc: '+15 attack cone', apply: s => { if (s?.player) { const maxCone = Number.isFinite(CONFIG.player?.maxAttackConeDegrees) ? CONFIG.player.maxAttackConeDegrees : 200; const nextCone = (Number.isFinite(s.player.attackConeDegrees) ? s.player.attackConeDegrees : CONFIG.player.attackConeDegrees) + 15; s.player.attackConeDegrees = Math.min(maxCone, nextCone); } } },
];

const EVENT_DEFINITIONS = {
  tododon_shop_unlock: {
    speaker: 'Tododon',
    text: 'オデ　オミセヤル',
    choices: [
      { label: 'ミセ　ヤル！', resultText: 'オデ　ヤル！', action: 'unlockTododonShop' },
      { label: 'オデ　トドドン　ユルサナイ！', resultText: 'トドドンは悲しい顔をして去っていった。\nただ、あきらめていないようだ……', action: 'unlockTododonShop' },
    ],
  },
};

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const startModal = document.getElementById('startModal');
const startNormalBtn = document.getElementById('startNormalBtn');
const openDebugMenuBtn = document.getElementById('openDebugMenuBtn');
const startMainMenu = document.getElementById('startMainMenu');
const debugMenu = document.getElementById('debugMenu');
const debugPresetOptions = document.getElementById('debugPresetOptions');
const startMetaStats = document.getElementById('startMetaStats');
const startDebugBtn = document.getElementById('startDebugBtn');
const debugBackBtn = document.getElementById('debugBackBtn');
const levelupModal = document.getElementById('levelupModal');
const mutationOptions = document.getElementById('mutationOptions');
const gameOverModal = document.getElementById('gameOverModal');
const finalStats = document.getElementById('finalStats');
const restartBtn = document.getElementById('restartBtn');
const clearModal = document.getElementById('clearModal');
const clearStats = document.getElementById('clearStats');
const clearRestartBtn = document.getElementById('clearRestartBtn');
const eventModal = document.getElementById('eventModal');
const eventBodyText = document.getElementById('eventBodyText');
const eventChoiceButtons = document.getElementById('eventChoiceButtons');
const eventChoice1Btn = document.getElementById('eventChoice1Btn');
const eventChoice2Btn = document.getElementById('eventChoice2Btn');
const eventContinueBtn = document.getElementById('eventContinueBtn');
const openTododonShopBtn = document.getElementById('openTododonShopBtn');
const tododonShopModal = document.getElementById('tododonShopModal');
const tododonShopCloseBtn = document.getElementById('tododonShopCloseBtn');

// ==============================
// State / Run Lifecycle
// ==============================

function resetState(nextPhase = gameState.phase || 'start') {
  const preservedDebug = {
    selectedPresetId: gameState?.debug?.selectedPresetId || 'normal',
    enabled: Boolean(gameState?.debug?.enabled),
    targetSurvivalTimeOverride: Number.isFinite(gameState?.debug?.targetSurvivalTimeOverride) ? gameState.debug.targetSurvivalTimeOverride : null,
  };
  const preservedStartUi = {
    debugMenuOpen: Boolean(gameState?.startUi?.debugMenuOpen),
  };
  Object.assign(gameState, {
    time: 0, runTime: 0, phase: nextPhase, previousPhaseBeforePause: null, isPaused: false, isGameOver: false, keys: {}, enemies: [],
    projectiles: [], particles: [], xpGems: [],
    spawnTimer: 0, damageTimer: 0, xp: 0, xpToNext: CONFIG.progression.baseXpToLevel,
    level: 1, score: 0, chosenMutations: [], resumeGraceTimer: 0, tododon: null, screenDarkness: 0, currentMutationOptions: [], nextEnemyId: 1,
    pendingEvent: null,
    event: null,
    rangeVisibility: { visible: false, timer: 0 },
    runCoinsEarned: 0, runCompleted: false,
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
      magnetRadius: CONFIG.player.magnetRadius,
      projectilePierce: CONFIG.player.projectilePierce,
      attackConeDegrees: CONFIG.player.attackConeDegrees,
      attackTimer: 0,
      reflectPct: 0,
      facingX: -1,
    },
    debug: preservedDebug,
    startUi: preservedStartUi,
    meta: {
      coins: Math.max(0, Math.floor(gameState?.meta?.coins || 0)),
      totalRuns: Math.max(0, Math.floor(gameState?.meta?.totalRuns || 0)),
      bestSurvivalTime: Math.max(0, Number(gameState?.meta?.bestSurvivalTime || 0)),
      unlockedFlags: {
        tododonShop: Boolean(gameState?.meta?.unlockedFlags?.tododonShop),
      },
    },
  });
  levelupModal.classList.add('hidden');
  gameOverModal.classList.add('hidden');
  clearModal?.classList.add('hidden');
  eventModal?.classList.add('hidden');
  tododonShopModal?.classList.add('hidden');
  startModal?.classList.toggle('hidden', nextPhase !== 'start');
}

function startRun() {
  const preservedDebug = {
    selectedPresetId: gameState?.debug?.selectedPresetId || 'normal',
    enabled: Boolean(gameState?.debug?.enabled),
    targetSurvivalTimeOverride: Number.isFinite(gameState?.debug?.targetSurvivalTimeOverride) ? gameState.debug.targetSurvivalTimeOverride : null,
  };
  resetState('playing');
  gameState.debug = preservedDebug;
  gameState.startUi.debugMenuOpen = false;
}

function startEndingEvent() {
  const offset = Number.isFinite(CONFIG.tododon?.spawnOffset) ? CONFIG.tododon.spawnOffset : 320;
  const radius = Number.isFinite(CONFIG.tododon?.radius) ? CONFIG.tododon.radius : 240;
  const speed = Number.isFinite(CONFIG.tododon?.speed) ? CONFIG.tododon.speed : 26;
  gameState.phase = 'ending';
  gameState.tododon = {
    x: CONFIG.canvas.width + radius * 0.65 + offset * 0.3,
    y: CONFIG.canvas.height + radius * 0.38 + offset * 0.18,
    radius,
    speed,
    facingX: -1,
  };
}

function buildRunSummary() {
  const survived = Number.isFinite(gameState.runTime) ? gameState.runTime.toFixed(1) : '0.0';
  const isDebugRun = Boolean(gameState?.debug?.enabled);
  const rewardsBlocked = isDebugRun && !CONFIG.meta.debugRewardsEnabled;
  const runCoinsText = rewardsBlocked
    ? '0 (debug run)'
    : `${Math.max(0, Math.floor(gameState.runCoinsEarned || 0))}`;
  const totalCoins = Math.max(0, Math.floor(gameState?.meta?.coins || 0));
  return [
    `Level ${gameState.level} • Defeated ${gameState.score} enemies • Survived ${survived}s`,
    `Coins earned: ${runCoinsText}`,
    `Total coins: ${totalCoins}`,
  ].join('<br>');
}

function calculateRunCoins(isClear) {
  const isDebugRun = Boolean(gameState?.debug?.enabled);
  if (isDebugRun && !CONFIG.meta.debugRewardsEnabled) return 0;
  const kills = Math.max(0, Math.floor(gameState?.score || 0));
  const level = Math.max(0, Math.floor(gameState?.level || 0));
  const killCoins = kills * Math.max(0, Math.floor(CONFIG.meta.coinsPerKill || 0));
  const levelCoins = level * Math.max(0, Math.floor(CONFIG.meta.coinsPerLevel || 0));
  const clearBonus = isClear ? Math.max(0, Math.floor(CONFIG.meta.clearBonusCoins || 0)) : 0;
  return killCoins + levelCoins + clearBonus;
}

function finalizeRun(isClear) {
  if (gameState.runCompleted) return;
  gameState.runCompleted = true;
  const earned = calculateRunCoins(isClear);
  gameState.runCoinsEarned = earned;
  gameState.meta.coins = Math.max(0, Math.floor((gameState?.meta?.coins || 0) + earned));
  gameState.meta.totalRuns = Math.max(0, Math.floor((gameState?.meta?.totalRuns || 0) + 1));
  const runTime = Number.isFinite(gameState?.runTime) ? gameState.runTime : 0;
  gameState.meta.bestSurvivalTime = Math.max(gameState?.meta?.bestSurvivalTime || 0, runTime);
}

function syncStartMetaStats() {
  if (!startMetaStats) return;
  const totalCoins = Math.max(0, Math.floor(gameState?.meta?.coins || 0));
  const bestTime = formatTime(gameState?.meta?.bestSurvivalTime || 0);
  startMetaStats.textContent = `Total coins: ${totalCoins} • Best survival: ${bestTime}`;
}

function syncStartMenuUi() {
  const isDebugMenuOpen = Boolean(gameState?.startUi?.debugMenuOpen);
  startMainMenu?.classList.toggle('hidden', isDebugMenuOpen);
  debugMenu?.classList.toggle('hidden', !isDebugMenuOpen);
  const shopUnlocked = Boolean(gameState?.meta?.unlockedFlags?.tododonShop);
  openTododonShopBtn?.classList.toggle('hidden', !shopUnlocked);
}

function unlockTododonShop() {
  if (!gameState.meta || typeof gameState.meta !== 'object') gameState.meta = {};
  if (!gameState.meta.unlockedFlags || typeof gameState.meta.unlockedFlags !== 'object') gameState.meta.unlockedFlags = {};
  gameState.meta.unlockedFlags.tododonShop = true;
}

function showGameOver() {
  finalizeRun(false);
  gameState.phase = 'gameover';
  gameState.previousPhaseBeforePause = null;
  gameState.isPaused = true;
  if (finalStats) finalStats.innerHTML = buildRunSummary();
  syncStartMetaStats();
  gameOverModal?.classList.remove('hidden');
}

function showClear() {
  finalizeRun(true);
  gameState.phase = 'clear';
  gameState.previousPhaseBeforePause = null;
  gameState.isPaused = true;
  if (clearStats) {
    clearStats.innerHTML = buildRunSummary();
  }
  syncStartMetaStats();
  clearModal?.classList.remove('hidden');
}

function showTododonEvent() {
  const eventId = gameState?.pendingEvent;
  const def = eventId ? EVENT_DEFINITIONS[eventId] : null;
  if (!def) return;
  gameState.phase = 'event';
  gameState.previousPhaseBeforePause = null;
  gameState.isPaused = true;
  gameState.event = { id: eventId, step: 'choice', selectedChoiceIndex: null, showingResult: false, resultText: '' };
  eventModal?.classList.remove('hidden');
}

function applyEventAction(action) {
  if (action === 'unlockTododonShop') unlockTododonShop();
  if (action === 'startBossDuel' && gameState?.event) gameState.event.resultText = '決戦ステージはまだ準備中です。';
}

function resolveEventChoice(choiceIndex) {
  const def = getActiveEventDefinition();
  const choices = Array.isArray(def?.choices) ? def.choices : [];
  const selected = choices[choiceIndex];
  if (!selected || !gameState?.event) return;
  gameState.event.selectedChoiceIndex = choiceIndex;
  gameState.event.step = 'result';
  gameState.event.showingResult = true;
  gameState.event.resultText = selected.resultText || '';
  applyEventAction(selected.action);
  gameState.pendingEvent = null;
  syncStartMenuUi();
}

function closeTododonEventToClear() {
  gameState.event = null;
  eventModal?.classList.add('hidden');
  showClear();
}

function getActiveEventDefinition() {
  const eventId = gameState?.event?.id;
  return eventId ? EVENT_DEFINITIONS[eventId] || null : null;
}

function updateTododon(dt) {
  const tododon = gameState.tododon;
  const player = gameState.player;
  if (!tododon || !player) return;
  const dx = (player.x ?? 0) - (tododon.x ?? 0);
  const dy = (player.y ?? 0) - (tododon.y ?? 0);
  const dist = Math.hypot(dx, dy) || 1;
  const dirX = dx / dist;
  const dirY = dy / dist;
  if (dirX < -0.001) tododon.facingX = -1;
  else if (dirX > 0.001) tododon.facingX = 1;
  tododon.x += dirX * tododon.speed * dt;
  tododon.y += dirY * tododon.speed * dt;

  const darkenSpeed = Number.isFinite(CONFIG.tododon?.screenDarkenSpeed) ? CONFIG.tododon.screenDarkenSpeed : 0;
  const darknessCap = Number.isFinite(CONFIG.run?.endEventDarknessAlpha) ? CONFIG.run.endEventDarknessAlpha : 0.35;
  gameState.screenDarkness = clamp(gameState.screenDarkness + darkenSpeed * dt, 0, darknessCap);

  const touchRadius = Number.isFinite(CONFIG.tododon?.touchRadius) ? CONFIG.tododon.touchRadius : tododon.radius;
  if (dist <= touchRadius + (player.radius ?? 0)) {
    gameState.pendingEvent = 'tododon_shop_unlock';
    showTododonEvent();
  }
}

// ==============================
// Assets
// ==============================

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

// ==============================
// Utilities
// ==============================

function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }
function rand(min, max) { return Math.random() * (max - min) + min; }
function distance(a, b) { return Math.hypot(a.x - b.x, a.y - b.y); }
function degToRad(deg) { return deg * Math.PI / 180; }
function isFiniteNumber(value) { return Number.isFinite(value); }


function getPlayerCastPosition() {
  const p = gameState?.player;
  const castOffsetX = Number.isFinite(CONFIG.player?.castOffsetX) ? CONFIG.player.castOffsetX : 0;
  const castOffsetY = Number.isFinite(CONFIG.player?.castOffsetY) ? CONFIG.player.castOffsetY : 0;
  const facingX = p?.facingX === 1 ? 1 : -1;
  const px = Number.isFinite(p?.x) ? p.x : 0;
  const py = Number.isFinite(p?.y) ? p.y : 0;
  return {
    x: px + castOffsetX * facingX,
    y: py + castOffsetY,
  };
}

function isInsideAttackCone(target) {
  const p = gameState?.player;
  if (!p || !target) return false;
  const dx = (target.x ?? 0) - (p.x ?? 0);
  const dy = (target.y ?? 0) - (p.y ?? 0);
  const distanceToTarget = Math.hypot(dx, dy);
  if (!Number.isFinite(distanceToTarget) || distanceToTarget <= 0) return false;
  const facingX = p.facingX === 1 ? 1 : -1;
  const forwardX = facingX;
  const forwardY = 0;
  const dirX = dx / distanceToTarget;
  const dirY = dy / distanceToTarget;
  const dot = forwardX * dirX + forwardY * dirY;
  const coneDegrees = Number.isFinite(p.attackConeDegrees) ? p.attackConeDegrees : (Number.isFinite(CONFIG.player?.attackConeDegrees) ? CONFIG.player.attackConeDegrees : 150);
  const clampedCone = clamp(coneDegrees, 0, Number.isFinite(CONFIG.player?.maxAttackConeDegrees) ? CONFIG.player.maxAttackConeDegrees : 200);
  const threshold = Math.cos((clampedCone * 0.5) * (Math.PI / 180));
  return dot >= threshold;
}


function getTargetSurvivalTime() {
  const debugEnabled = Boolean(gameState?.debug?.enabled);
  const override = gameState?.debug?.targetSurvivalTimeOverride;
  if (debugEnabled && Number.isFinite(override)) {
    return Math.max(1, override);
  }
  const base = Number.isFinite(CONFIG.run?.targetSurvivalTime) ? CONFIG.run.targetSurvivalTime : 300;
  return Math.max(1, base);
}

function getDebugPresetById(presetId) {
  const presets = Array.isArray(CONFIG.debug?.presets) ? CONFIG.debug.presets : [];
  return presets.find(p => p?.id === presetId) || presets[0] || null;
}

function applyDebugPreset(presetId) {
  const preset = getDebugPresetById(presetId);
  const nextId = preset?.id || 'normal';
  gameState.debug.selectedPresetId = nextId;
  const value = preset?.targetSurvivalTime;
  if (Number.isFinite(value)) {
    gameState.debug.enabled = true;
    gameState.debug.targetSurvivalTimeOverride = value;
    return;
  }
  gameState.debug.enabled = false;
  gameState.debug.targetSurvivalTimeOverride = null;
}


function resetDebugToNormal() {
  applyDebugPreset('normal');
}

function renderDebugPresetOptions() {
  if (!debugPresetOptions) return;
  const presets = Array.isArray(CONFIG.debug?.presets) ? CONFIG.debug.presets : [];
  debugPresetOptions.innerHTML = '';
  presets.forEach(preset => {
    if (!preset?.id) return;
    const optionBtn = document.createElement('button');
    optionBtn.type = 'button';
    optionBtn.textContent = preset.label || preset.id;
    const isSelected = gameState?.debug?.selectedPresetId === preset.id;
    optionBtn.className = `debug-preset-btn${isSelected ? ' selected' : ''}`;
    optionBtn.addEventListener('click', () => {
      if (gameState.phase !== 'start') return;
      applyDebugPreset(preset.id);
      renderDebugPresetOptions();
    });
    debugPresetOptions.appendChild(optionBtn);
  });
}

function formatTime(seconds) {
  const totalSeconds = Math.max(0, Math.floor(Number.isFinite(seconds) ? seconds : 0));
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  return `${mins}:${String(secs).padStart(2, '0')}`;
}

function getDifficultyMinutes() {
  const seconds = Number.isFinite(gameState?.runTime) ? gameState.runTime : 0;
  return Math.max(0, seconds / 60);
}

function getCurrentSpawnInterval() {
  const minutes = getDifficultyMinutes();
  const baseInterval = Number.isFinite(CONFIG.enemy?.spawnInterval) ? CONFIG.enemy.spawnInterval : 0.8;
  const minInterval = Number.isFinite(CONFIG.enemy?.minSpawnInterval) ? CONFIG.enemy.minSpawnInterval : 0.22;
  const decayPerMinute = Number.isFinite(CONFIG.enemy?.spawnIntervalDecayPerMinute) ? CONFIG.enemy.spawnIntervalDecayPerMinute : 0;
  return Math.max(minInterval, baseInterval - decayPerMinute * minutes);
}

function getCurrentMaxEnemies() {
  const minutes = getDifficultyMinutes();
  const base = Number.isFinite(CONFIG.enemy?.maxEnemiesBase) ? CONFIG.enemy.maxEnemiesBase : 35;
  const growth = Number.isFinite(CONFIG.enemy?.maxEnemiesGrowthPerMinute) ? CONFIG.enemy.maxEnemiesGrowthPerMinute : 0;
  const cap = Number.isFinite(CONFIG.enemy?.maxEnemiesCap) ? CONFIG.enemy.maxEnemiesCap : base;
  return Math.floor(clamp(base + growth * minutes, base, Math.max(base, cap)));
}

function getEnemyHpMultiplier() {
  const minutes = getDifficultyMinutes();
  const growth = Number.isFinite(CONFIG.enemy?.hpGrowthPerMinute) ? CONFIG.enemy.hpGrowthPerMinute : 0;
  return Math.max(1, 1 + growth * minutes);
}

function getEnemySpeedMultiplier() {
  const minutes = getDifficultyMinutes();
  const growth = Number.isFinite(CONFIG.enemy?.speedGrowthPerMinute) ? CONFIG.enemy.speedGrowthPerMinute : 0;
  return Math.max(1, 1 + growth * minutes);
}

// ==============================
// Spawning
// ==============================

function spawnEnemy() {
  const edge = Math.floor(Math.random() * 4);
  const margin = 30;
  let x = 0, y = 0;
  if (edge === 0) { x = rand(0, CONFIG.canvas.width); y = -margin; }
  if (edge === 1) { x = CONFIG.canvas.width + margin; y = rand(0, CONFIG.canvas.height); }
  if (edge === 2) { x = rand(0, CONFIG.canvas.width); y = CONFIG.canvas.height + margin; }
  if (edge === 3) { x = -margin; y = rand(0, CONFIG.canvas.height); }

  const hpMultiplier = getEnemyHpMultiplier();
  const speedMultiplier = getEnemySpeedMultiplier();
  const baseHp = Number.isFinite(CONFIG.enemy.baseHp) ? CONFIG.enemy.baseHp : 1;
  const hp = baseHp * hpMultiplier;

  gameState.enemies.push({
    id: gameState.nextEnemyId++,
    x, y,
    radius: CONFIG.enemy.baseRadius,
    speed: (Number.isFinite(CONFIG.enemy.baseSpeed) ? CONFIG.enemy.baseSpeed : 0) * speedMultiplier,
    hp,
    maxHp: hp,
    knockbackX: 0,
    knockbackY: 0,
    facingX: -1,
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
    vx: 0,
    vy: 0,
  });
}

function chooseMutations() {
  const pool = [...MUTATIONS].sort(() => Math.random() - 0.5);
  return pool.slice(0, 3);
}

function showLevelUp() {
  gameState.phase = 'levelup';
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
  gameState.phase = 'playing';
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

// ==============================
// Update Systems
// ==============================

function updatePlayerMovement(dt) {
  const p = gameState.player;
  const xMove = (gameState.keys.ArrowRight || gameState.keys.d ? 1 : 0) - (gameState.keys.ArrowLeft || gameState.keys.a ? 1 : 0);
  const yMove = (gameState.keys.ArrowDown || gameState.keys.s ? 1 : 0) - (gameState.keys.ArrowUp || gameState.keys.w ? 1 : 0);
  if (xMove < 0) p.facingX = -1;
  else if (xMove > 0) p.facingX = 1;

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
    const nearest = (gameState.enemies || [])
      .map(e => ({ e, d: distance(e, p) }))
      .filter(v => v.d <= p.attackRange && isInsideAttackCone(v.e))
      .sort((a, b) => a.d - b.d)[0];

    if (nearest?.e) {
      const target = nearest.e;
      const spawn = getPlayerCastPosition();
      const dx = (target.x ?? 0) - spawn.x;
      const dy = (target.y ?? 0) - spawn.y;
      const d = Math.hypot(dx, dy) || 1;
      const speed = CONFIG.projectile.speed;
      gameState.projectiles.push({
        x: spawn.x,
        y: spawn.y,
        vx: (dx / d) * speed,
        vy: (dy / d) * speed,
        radius: CONFIG.projectile.radius,
        damage: p.attackDamage,
        life: CONFIG.projectile.life,
        pierceLeft: Number.isFinite(p.projectilePierce) ? p.projectilePierce : 0,
        hitEnemyIds: new Set(),
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

    const projectileHitIds = proj.hitEnemyIds instanceof Set ? proj.hitEnemyIds : new Set(proj.hitEnemyIds || []);
    proj.hitEnemyIds = projectileHitIds;
    const hitEnemy = gameState.enemies.find(enemy => {
      if (!enemy) return false;
      if (projectileHitIds.has(enemy.id)) return false;
      return distance(proj, enemy) <= proj.radius + enemy.radius;
    });
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
      projectileHitIds.add(hitEnemy.id);
      proj.pierceLeft = (Number.isFinite(proj.pierceLeft) ? proj.pierceLeft : 0) - 1;
      if (proj.pierceLeft < 0) {
        proj._remove = true;
      }
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


function applyEnemySeparation(dt) {
  const enemies = Array.isArray(gameState?.enemies) ? gameState.enemies : [];
  if (enemies.length <= 1) return;

  const separationRadius = Number.isFinite(CONFIG.enemy?.separationRadius) && CONFIG.enemy.separationRadius > 0
    ? CONFIG.enemy.separationRadius
    : 0;
  const separationStrength = Number.isFinite(CONFIG.enemy?.separationStrength) && CONFIG.enemy.separationStrength > 0
    ? CONFIG.enemy.separationStrength
    : 0;
  const maxSeparationPush = Number.isFinite(CONFIG.enemy?.maxSeparationPush) && CONFIG.enemy.maxSeparationPush > 0
    ? CONFIG.enemy.maxSeparationPush
    : 0;

  if (separationRadius <= 0 || separationStrength <= 0 || maxSeparationPush <= 0 || !isFiniteNumber(dt) || dt <= 0) return;

  for (let i = 0; i < enemies.length; i += 1) {
    const enemyA = enemies[i];
    if (!enemyA) continue;

    for (let j = i + 1; j < enemies.length; j += 1) {
      const enemyB = enemies[j];
      if (!enemyB) continue;

      const ax = isFiniteNumber(enemyA.x) ? enemyA.x : 0;
      const ay = isFiniteNumber(enemyA.y) ? enemyA.y : 0;
      const bx = isFiniteNumber(enemyB.x) ? enemyB.x : 0;
      const by = isFiniteNumber(enemyB.y) ? enemyB.y : 0;

      let dx = ax - bx;
      let dy = ay - by;
      let dist = Math.hypot(dx, dy);

      if (!isFiniteNumber(dist)) continue;
      if (dist < 0.0001) {
        const angle = (i * 12.9898 + j * 78.233) % (Math.PI * 2);
        dx = Math.cos(angle);
        dy = Math.sin(angle);
        dist = 1;
      }

      if (dist >= separationRadius) continue;

      const overlapFactor = 1 - (dist / separationRadius);
      if (!isFiniteNumber(overlapFactor) || overlapFactor <= 0) continue;

      const push = overlapFactor * separationStrength * maxSeparationPush * dt;
      if (!isFiniteNumber(push) || push <= 0) continue;

      const dirX = dx / dist;
      const dirY = dy / dist;
      if (!isFiniteNumber(dirX) || !isFiniteNumber(dirY)) continue;

      const halfPush = push * 0.5;
      const pushX = dirX * halfPush;
      const pushY = dirY * halfPush;

      enemyA.x = ax + pushX;
      enemyA.y = ay + pushY;
      enemyB.x = bx - pushX;
      enemyB.y = by - pushY;

      if (!isFiniteNumber(enemyA.x) || !isFiniteNumber(enemyA.y)) {
        enemyA.x = ax;
        enemyA.y = ay;
      }
      if (!isFiniteNumber(enemyB.x) || !isFiniteNumber(enemyB.y)) {
        enemyB.x = bx;
        enemyB.y = by;
      }
    }
  }
}

function updateEnemies(dt) {
  const p = gameState.player;
  const isEnding = gameState.phase === 'ending';
  const centerX = CONFIG.canvas.width / 2;
  const centerY = CONFIG.canvas.height / 2;
  gameState.enemies.forEach(enemy => {
    if (!enemy) return;

    const enemyX = enemy.x ?? 0;
    const enemyY = enemy.y ?? 0;
    let dx = (p.x ?? 0) - enemyX;
    let dy = (p.y ?? 0) - enemyY;
    if (isEnding) {
      dx = enemyX - centerX;
      dy = enemyY - centerY;
    }
    const d = Math.hypot(dx, dy) || 1;
    const moveX = dx / d;
    if (moveX < -0.001) enemy.facingX = -1;
    else if (moveX > 0.001) enemy.facingX = 1;
    enemy.x = (enemy.x ?? 0) + moveX * (enemy.speed ?? 0) * dt;
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

  if (!isEnding) applyEnemySeparation(dt);

  gameState.damageTimer -= dt;
  if (!isEnding && gameState.damageTimer <= 0) {
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
    if (isEnding) {
      const margin = (Number.isFinite(enemy.radius) ? enemy.radius : 0) + 40;
      if (
        (enemy.x ?? 0) < -margin
        || (enemy.x ?? 0) > CONFIG.canvas.width + margin
        || (enemy.y ?? 0) < -margin
        || (enemy.y ?? 0) > CONFIG.canvas.height + margin
      ) {
        return;
      }
    }
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

function updateXpGems(dt) {
  const gems = gameState.xpGems || [];
  const player = gameState.player || { x: 0, y: 0, radius: 0 };
  const pickupRadius = Number.isFinite(player?.pickupRadius) && player.pickupRadius >= 0
    ? player.pickupRadius
    : 0;
  const magnetRadius = Number.isFinite(player?.magnetRadius) && player.magnetRadius >= 0
    ? player.magnetRadius
    : 0;
  const magnetSpeed = Number.isFinite(CONFIG.xpGem?.magnetSpeed) && CONFIG.xpGem.magnetSpeed >= 0
    ? CONFIG.xpGem.magnetSpeed
    : 0;
  const maxMagnetSpeed = Number.isFinite(CONFIG.xpGem?.maxMagnetSpeed) && CONFIG.xpGem.maxMagnetSpeed >= 0
    ? CONFIG.xpGem.maxMagnetSpeed
    : magnetSpeed;
  const nextGems = [];

  gems.forEach(gem => {
    if (!gem) return;
    const x = Number.isFinite(gem.x) ? gem.x : 0;
    const y = Number.isFinite(gem.y) ? gem.y : 0;
    const radius = Number.isFinite(gem.radius) && gem.radius > 0 ? gem.radius : (CONFIG.xpGem.radius || 1);
    const value = Number.isFinite(gem.value) && gem.value > 0 ? gem.value : 0;
    if (value <= 0) return;
    const playerX = player.x ?? 0;
    const playerY = player.y ?? 0;
    const dx = playerX - x;
    const dy = playerY - y;
    const dist = Math.hypot(dx, dy);
    if (dist <= pickupRadius) {
      addXp(value);
      return;
    }
    let nextX = x;
    let nextY = y;
    let vx = Number.isFinite(gem.vx) ? gem.vx : 0;
    let vy = Number.isFinite(gem.vy) ? gem.vy : 0;
    if (dist > 0 && dist <= magnetRadius) {
      const dirX = dx / dist;
      const dirY = dy / dist;
      const targetSpeed = clamp(magnetSpeed, 0, maxMagnetSpeed);
      vx = dirX * targetSpeed;
      vy = dirY * targetSpeed;
      nextX += vx * dt;
      nextY += vy * dt;
    } else {
      vx = 0;
      vy = 0;
    }
    if (!Number.isFinite(nextX) || !Number.isFinite(nextY)) return;
    nextGems.push({ x: nextX, y: nextY, radius, value, vx, vy });
  });

  gameState.xpGems = nextGems;
}

function updateResumeGrace(dt) {
  gameState.resumeGraceTimer = Math.max(0, gameState.resumeGraceTimer - dt);
  gameState.runTime += dt;
  updatePlayerMovement(dt);
  updateProjectiles(dt);
  updateParticles(dt);
  gameState.spawnTimer = getCurrentSpawnInterval();
  if (gameState.phase === 'ending') updateTododon(dt);
}

function updatePlaying(dt) {
  gameState.runTime += dt;
  updatePlayerMovement(dt);
  updatePlayerAttack(dt);
  updateProjectiles(dt);
  updateXpGems(dt);
  updateParticles(dt);
  updateEnemies(dt);

  if (gameState.runTime >= getTargetSurvivalTime()) startEndingEvent();

  gameState.spawnTimer -= dt;
  if (gameState.spawnTimer <= 0) {
    const maxEnemies = getCurrentMaxEnemies();
    if ((gameState.enemies || []).length < maxEnemies) spawnEnemy();
    gameState.spawnTimer = getCurrentSpawnInterval();
  }
  if ((gameState.player?.hp ?? 0) <= 0) showGameOver();
}

function updateEnding(dt) {
  gameState.runTime += dt;
  updatePlayerMovement(dt);
  updatePlayerAttack(dt);
  updateProjectiles(dt);
  updateXpGems(dt);
  updateParticles(dt);
  updateEnemies(dt);
  updateTododon(dt);
  gameState.spawnTimer = getCurrentSpawnInterval();
  gameState.projectiles = (gameState.projectiles || []).filter(proj => {
    if (!proj) return false;
    const margin = 140;
    const x = proj.x ?? 0;
    const y = proj.y ?? 0;
    if (x < -margin || x > CONFIG.canvas.width + margin || y < -margin || y > CONFIG.canvas.height + margin) return false;
    return true;
  });
  gameState.xpGems = (gameState.xpGems || []).filter(gem => {
    if (!gem) return false;
    const margin = 220;
    const x = gem.x ?? 0;
    const y = gem.y ?? 0;
    if (x < -margin || x > CONFIG.canvas.width + margin || y < -margin || y > CONFIG.canvas.height + margin) return false;
    return true;
  });
  if ((gameState.player?.hp ?? 0) <= 0) showGameOver();
}


function revealRangeVisibility() {
  if (!gameState || !CONFIG?.visuals) return;
  const duration = Number.isFinite(CONFIG.visuals.rangeVisibilityDuration) ? CONFIG.visuals.rangeVisibilityDuration : 3;
  if (!gameState.rangeVisibility || typeof gameState.rangeVisibility !== 'object') {
    gameState.rangeVisibility = { visible: false, timer: 0 };
  }
  gameState.rangeVisibility.visible = true;
  gameState.rangeVisibility.timer = Math.max(0, duration);
}

function updateRangeVisibility(dt) {
  if (!gameState.rangeVisibility || typeof gameState.rangeVisibility !== 'object') {
    gameState.rangeVisibility = { visible: false, timer: 0 };
  }
  if (!gameState.rangeVisibility.visible) return;
  const nextTimer = (Number.isFinite(gameState.rangeVisibility.timer) ? gameState.rangeVisibility.timer : 0) - dt;
  gameState.rangeVisibility.timer = nextTimer;
  if (nextTimer <= 0) {
    gameState.rangeVisibility.visible = false;
    gameState.rangeVisibility.timer = 0;
  }
}

function update(dt) {
  updateRangeVisibility(dt);
  switch (gameState.phase) {
    case 'playing':
      if (gameState.resumeGraceTimer > 0) updateResumeGrace(dt);
      else updatePlaying(dt);
      break;
    case 'ending':
      if (gameState.resumeGraceTimer > 0) updateResumeGrace(dt);
      else updateEnding(dt);
      break;
    case 'event':
      break;
    default:
      break;
  }
}

// ==============================
// Render Systems
// ==============================

function drawTododon() {
  const tododon = gameState.tododon;
  if (!tododon) return;
  const imageResult = gameState.images?.enemy;
  ctx.save();
  ctx.globalAlpha = 0.96;
  drawEntityShadow(tododon, 'rgba(0, 0, 0, 0.45)');
  drawEntityWithFallback(tododon, imageResult, CONFIG.tododon.color);
  if (!imageResult?.ok || !imageResult?.img) {
    ctx.globalAlpha = 0.88;
    ctx.fillStyle = 'rgba(18, 28, 38, 0.82)';
    ctx.beginPath();
    ctx.arc(tododon.x + tododon.radius * 0.12, tododon.y + tododon.radius * 0.05, tododon.radius * 0.88, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = 'rgba(64, 84, 104, 0.45)';
    ctx.beginPath();
    ctx.arc(tododon.x - tododon.radius * 0.3, tododon.y - tododon.radius * 0.18, tododon.radius * 0.58, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = 'rgba(10, 16, 26, 0.55)';
    ctx.beginPath();
    ctx.arc(tododon.x + tododon.radius * 0.32, tododon.y - tododon.radius * 0.28, tododon.radius * 0.46, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.fillStyle = 'rgba(255,255,255,0.06)';
  ctx.beginPath();
  ctx.arc(tododon.x - tododon.radius * 0.18, tododon.y - tododon.radius * 0.22, tododon.radius * 0.36, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawImageFacing(img, x, y, size, facingX = -1) {
  if (!img) return;
  ctx.save();
  if (facingX === 1) {
    ctx.translate(x + size / 2, y + size / 2);
    ctx.scale(-1, 1);
    ctx.drawImage(img, -size / 2, -size / 2, size, size);
  } else {
    ctx.drawImage(img, x, y, size, size);
  }
  ctx.restore();
}

function drawEntityWithFallback(entity, imageResult, fallbackColor) {
  if (!entity) return;
  const imageScale = CONFIG.visuals.entityImageScale;
  const facingX = entity?.facingX === 1 ? 1 : -1;
  ctx.save();
  if (imageResult?.ok && imageResult.img) {
    const s = (entity.radius ?? 0) * imageScale;
    const x = (entity.x ?? 0) - s / 2;
    const y = (entity.y ?? 0) - s / 2;
    drawImageFacing(imageResult.img, x, y, s, facingX);
  } else {
    ctx.fillStyle = fallbackColor;
    ctx.beginPath();
    ctx.arc(entity.x ?? 0, entity.y ?? 0, entity.radius ?? 0, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
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
    const pierceBoost = Math.max(0, Number.isFinite(proj.pierceLeft) ? proj.pierceLeft : 0);
    const glowSize = proj.radius * (3 + pierceBoost * 0.35);
    ctx.shadowBlur = glowSize;
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
    const pulse = 1 + Math.sin((gameState.time + x * 0.01 + y * 0.01) * 6) * 0.06;
    ctx.shadowBlur = radius * 3.6 * pulse;
    ctx.shadowColor = gemGlowColor;
    ctx.fillStyle = gemGlowColor;
    ctx.beginPath();
    ctx.arc(x, y, radius * 1.95 * pulse, 0, Math.PI * 2);
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
  ctx.fillRect(16, 16, 290, 132);
  ctx.fillStyle = '#fff';
  ctx.font = '14px sans-serif';
  ctx.fillText(`HP: ${Math.ceil(p.hp)} / ${p.maxHp}`, 26, 36);
  ctx.fillText(`Level: ${gameState.level}`, 26, 54);
  ctx.fillText(`Kills: ${gameState.score}`, 26, 72);
  ctx.fillText(`Enemies: ${(gameState.enemies || []).length}/${getCurrentMaxEnemies()}`, 26, 90);
  ctx.fillText(`Time: ${formatTime(gameState.runTime)}`, 26, 108);
  ctx.fillText(`Goal: ${formatTime(getTargetSurvivalTime())}`, 26, 126);
  if (gameState?.debug?.enabled && Number.isFinite(gameState?.debug?.targetSurvivalTimeOverride)) {
    ctx.fillText(`DEBUG: Tododon ${formatTime(gameState.debug.targetSurvivalTimeOverride)}`, 160, 126);
  }

  ctx.fillStyle = '#2a334f';
  ctx.fillRect(120, 26, 140, 10);
  ctx.fillRect(120, 44, 140, 10);
  ctx.fillStyle = '#ff6b6b';
  ctx.fillRect(120, 26, 140 * hpPct, 10);
  ctx.fillStyle = '#7be8ff';
  ctx.fillRect(120, 44, 140 * xpPct, 10);
}


function drawPauseOverlay() {
  if (gameState.phase !== 'paused') return;
  ctx.save();
  ctx.fillStyle = 'rgba(0, 0, 0, 0.58)';
  ctx.fillRect(0, 0, CONFIG.canvas.width, CONFIG.canvas.height);
  ctx.fillStyle = '#fff';
  ctx.textAlign = 'center';
  ctx.font = 'bold 52px sans-serif';
  ctx.fillText('PAUSED', CONFIG.canvas.width / 2, CONFIG.canvas.height / 2 - 22);
  ctx.font = '22px sans-serif';
  ctx.fillText(`Elapsed: ${formatTime(gameState.runTime)}`, CONFIG.canvas.width / 2, CONFIG.canvas.height / 2 + 20);
  ctx.font = '18px sans-serif';
  ctx.fillText('Press P or Esc to resume', CONFIG.canvas.width / 2, CONFIG.canvas.height / 2 + 54);
  ctx.restore();
}

function drawBackground() {
  ctx.clearRect(0, 0, CONFIG.canvas.width, CONFIG.canvas.height);
  ctx.fillStyle = '#0d1730';
  ctx.fillRect(0, 0, CONFIG.canvas.width, CONFIG.canvas.height);
}
function getRangeVisibilityAlpha() {
  const visibility = gameState?.rangeVisibility;
  if (!visibility?.visible) return 0;
  const timer = Number.isFinite(visibility.timer) ? visibility.timer : 0;
  const fadeDuration = Number.isFinite(CONFIG.visuals?.rangeFadeDuration) ? CONFIG.visuals.rangeFadeDuration : 0.6;
  if (fadeDuration <= 0) return 1;
  if (timer >= fadeDuration) return 1;
  return clamp(timer / fadeDuration, 0, 1);
}

function drawPickupRadius() {
  const player = gameState?.player;
  if (!player) return;
  const alpha = getRangeVisibilityAlpha();
  if (alpha <= 0) return;
  const pickupRadius = Number.isFinite(player.pickupRadius) ? player.pickupRadius : 0;
  ctx.save();
  ctx.strokeStyle = `rgba(123, 232, 255, ${0.08 * alpha})`;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(player.x, player.y, pickupRadius, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();
}

function drawAttackCone() {
  const player = gameState?.player;
  if (!player) return;
  const alpha = getRangeVisibilityAlpha();
  if (alpha <= 0) return;
  const attackRange = Number.isFinite(player.attackRange) ? player.attackRange : 0;
  const coneDegrees = Number.isFinite(player.attackConeDegrees)
    ? player.attackConeDegrees
    : (Number.isFinite(CONFIG.player?.attackConeDegrees) ? CONFIG.player.attackConeDegrees : 150);
  const forwardAngle = player.facingX === 1 ? 0 : Math.PI;
  const halfCone = degToRad(coneDegrees) / 2;
  const startAngle = forwardAngle - halfCone;
  const endAngle = forwardAngle + halfCone;
  ctx.save();
  ctx.fillStyle = `rgba(143, 182, 201, ${0.05 * alpha})`;
  ctx.strokeStyle = `rgba(143, 182, 201, ${0.22 * alpha})`;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(player.x, player.y);
  ctx.arc(player.x, player.y, attackRange, startAngle, endAngle);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
}

function drawRanges() {
  if (!gameState?.player) return;
  if (!gameState?.rangeVisibility?.visible) return;
  drawPickupRadius();
  drawAttackCone();
}
function drawEnemies() { (gameState.enemies || []).forEach(e => { drawEntityShadow(e, CONFIG.visuals.enemyShadowColor); drawEntityWithFallback(e, gameState.images.enemy, '#85ff8a'); drawEnemyHpBar(e); }); }
function drawPlayer() { if (!gameState.player) return; drawEntityShadow(gameState.player, CONFIG.visuals.playerShadowColor); drawEntityWithFallback(gameState.player, gameState.images.player, '#ff8c4a'); }
function drawOverlays() {
  if (gameState.screenDarkness > 0) { ctx.fillStyle = `rgba(0, 0, 0, ${clamp(gameState.screenDarkness, 0, 1)})`; ctx.fillRect(0, 0, CONFIG.canvas.width, CONFIG.canvas.height); }
  drawPauseOverlay();
}
function roundRect(context, x, y, w, h, r) {
  const radius = Math.max(0, Math.min(r, w * 0.5, h * 0.5));
  context.beginPath();
  context.moveTo(x + radius, y);
  context.arcTo(x + w, y, x + w, y + h, radius);
  context.arcTo(x + w, y + h, x, y + h, radius);
  context.arcTo(x, y + h, x, y, radius);
  context.arcTo(x, y, x + w, y, radius);
  context.closePath();
}
function drawMultilineText(text, x, y, maxWidth, lineHeight) {
  String(text || '').split('\n').forEach((line, idx) => ctx.fillText(line, x, y + lineHeight * idx, maxWidth));
}
function drawEventChoiceButtons(panelX, panelY, panelW) {
  const def = getActiveEventDefinition();
  if (!def) return;
  const choices = Array.isArray(def.choices) ? def.choices : [];
  const ui = CONFIG.eventUi;
  const buttonW = panelW - ui.choiceBlockLeft * 2;
  choices.forEach((choice, idx) => {
    const bx = panelX + ui.choiceBlockLeft;
    const by = panelY + ui.choiceBlockTop + (ui.choiceHeight + ui.choiceGap) * idx;
    ctx.fillStyle = 'rgba(29, 58, 92, 0.9)';
    ctx.strokeStyle = 'rgba(166, 208, 245, 0.95)';
    ctx.lineWidth = 1.5;
    roundRect(ctx, bx, by, buttonW, ui.choiceHeight, 10);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#ecf6ff';
    ctx.font = '20px sans-serif';
    ctx.fillText(`${idx + 1}. ${choice?.label || ''}`, bx + ui.choicePaddingX, by + 28, buttonW - ui.choicePaddingX * 2);
  });
}
function drawEventUi() {
  if (gameState.phase !== 'event') return;
  const def = getActiveEventDefinition();
  if (!def) return;
  const ui = CONFIG.eventUi;
  const panelW = clamp(CONFIG.canvas.width * ui.panelWidthRatio, 560, CONFIG.canvas.width - ui.panelLeftMargin * 2);
  const panelH = clamp(ui.panelHeight, 150, CONFIG.canvas.height - 40);
  const panelX = ui.panelLeftMargin;
  const panelY = CONFIG.canvas.height - panelH - ui.panelBottomMargin;
  ctx.save();
  ctx.fillStyle = `rgba(0, 0, 0, ${clamp(ui.overlayAlpha, 0, 0.5)})`;
  ctx.fillRect(0, 0, CONFIG.canvas.width, CONFIG.canvas.height);
  ctx.fillStyle = 'rgba(10, 18, 34, 0.82)';
  ctx.strokeStyle = 'rgba(151, 191, 226, 0.9)';
  ctx.lineWidth = 2;
  roundRect(ctx, panelX, panelY, panelW, panelH, ui.panelBorderRadius);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = '#a8daff';
  ctx.font = `bold ${ui.speakerFontSize}px sans-serif`;
  ctx.fillText(def.speaker || '???', panelX + 16, panelY + 32);
  ctx.fillStyle = '#fff';
  ctx.font = `${ui.textFontSize}px sans-serif`;
  const bodyText = gameState?.event?.showingResult ? (gameState?.event?.resultText || '') : (def.text || '');
  drawMultilineText(bodyText, panelX + 16, panelY + 62, panelW - 32, ui.textFontSize + 8);
  if (gameState?.event?.showingResult) {
    ctx.fillStyle = '#d8e8ff';
    ctx.font = `${ui.hintFontSize}px sans-serif`;
    ctx.fillText('Enter / Click で続行', panelX + 16, panelY + ui.resultAdvanceHintY);
  } else {
    drawEventChoiceButtons(panelX, panelY, panelW);
  }
  ctx.restore();
}

function render() {
  drawBackground();
  if (!gameState.player) return;
  drawRanges();
  drawXpGems();
  drawParticles();
  drawProjectiles();
  drawEnemies();
  if (gameState.phase === 'ending' && gameState.tododon) {
    ctx.save();
    ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
    ctx.fillRect(0, 0, CONFIG.canvas.width, CONFIG.canvas.height);
    ctx.restore();
  }
  if ((gameState.phase === 'ending' || gameState.phase === 'event' || gameState.phase === 'clear') && gameState.tododon) drawTododon();
  drawPlayer();
  drawHud();
  drawOverlays();
  drawEventUi();
}

// ==============================
// Main Loop
// ==============================

function loop(ts) {
  const dt = Math.min(0.033, (ts - gameState.time) / 1000 || 0);
  gameState.time = ts;
  update(dt);
  render();
  requestAnimationFrame(loop);
}

// ==============================
// Input
// ==============================

window.addEventListener('keydown', e => {
  const key = e.key;
  const lowerKey = typeof key === 'string' ? key.toLowerCase() : '';
  const isPauseKey = key === 'Escape' || lowerKey === 'p';
  if (isPauseKey) {
    const phase = gameState.phase;
    if (phase === 'playing' || phase === 'ending') {
      e.preventDefault();
      gameState.previousPhaseBeforePause = phase;
      gameState.phase = 'paused';
      gameState.isPaused = true;
      return;
    }
    if (phase === 'paused') {
      e.preventDefault();
      gameState.phase = gameState.previousPhaseBeforePause || 'playing';
      gameState.previousPhaseBeforePause = null;
      gameState.isPaused = false;
      return;
    }
  }

  const isMutationSelectionActive = gameState.phase === 'levelup' && (gameState.currentMutationOptions?.length || 0) > 0;
  if (isMutationSelectionActive && ['1', '2', '3'].includes(key)) {
    e.preventDefault();
    selectMutation(Number(key) - 1);
    return;
  }
  if (gameState.phase === 'event') {
    const choicesVisible = !gameState?.event?.showingResult;
    if (choicesVisible && (key === '1' || key === '2')) {
      e.preventDefault();
      resolveEventChoice(Number(key) - 1);
      return;
    }
    if (gameState?.event?.showingResult && (key === 'Enter' || key === ' ')) {
      e.preventDefault();
      closeTododonEventToClear();
      return;
    }
    return;
  }

  const canRevealRanges = gameState.phase === 'playing' || gameState.phase === 'ending';
  if (lowerKey === 'v' && canRevealRanges) {
    e.preventDefault();
    revealRangeVisibility();
    return;
  }

  if (BLOCK_KEYS.includes(key)) e.preventDefault();
  gameState.keys[key] = true;
});
window.addEventListener('keyup', e => {
  if (BLOCK_KEYS.includes(e.key)) e.preventDefault();
  gameState.keys[e.key] = false;
});
// ==============================
// UI / Modals
// ==============================

startNormalBtn?.addEventListener('click', () => {
  if (gameState.phase !== 'start') return;
  applyDebugPreset('normal');
  startRun();
  startModal?.classList.add('hidden');
  gameOverModal.classList.add('hidden');
  clearModal?.classList.add('hidden');
});

openDebugMenuBtn?.addEventListener('click', () => {
  if (gameState.phase !== 'start') return;
  gameState.startUi.debugMenuOpen = true;
  syncStartMenuUi();
  renderDebugPresetOptions();
  syncStartMetaStats();
});

debugBackBtn?.addEventListener('click', () => {
  if (gameState.phase !== 'start') return;
  gameState.startUi.debugMenuOpen = false;
  syncStartMenuUi();
});

startDebugBtn?.addEventListener('click', () => {
  if (gameState.phase !== 'start') return;
  applyDebugPreset(gameState?.debug?.selectedPresetId || 'normal');
  startRun();
  startModal?.classList.add('hidden');
  gameOverModal.classList.add('hidden');
  clearModal?.classList.add('hidden');
});

restartBtn.addEventListener('click', () => {
  gameState.startUi.debugMenuOpen = false;
  resetState('start');
  syncStartMenuUi();
  renderDebugPresetOptions();
  syncStartMetaStats();
});
clearRestartBtn?.addEventListener('click', () => {
  gameState.startUi.debugMenuOpen = false;
  resetState('start');
  syncStartMenuUi();
  renderDebugPresetOptions();
});
eventModal?.addEventListener('click', e => {
  if (gameState.phase !== 'event') return;
  if (gameState?.event?.showingResult) {
    closeTododonEventToClear();
    return;
  }
  const def = getActiveEventDefinition();
  if (!def) return;
  const rect = canvas?.getBoundingClientRect?.();
  if (!rect) return;
  const mx = (e.clientX - rect.left) * (CONFIG.canvas.width / rect.width);
  const my = (e.clientY - rect.top) * (CONFIG.canvas.height / rect.height);
  const ui = CONFIG.eventUi;
  const panelW = clamp(CONFIG.canvas.width * ui.panelWidthRatio, 560, CONFIG.canvas.width - ui.panelLeftMargin * 2);
  const panelH = clamp(ui.panelHeight, 150, CONFIG.canvas.height - 40);
  const panelX = ui.panelLeftMargin;
  const panelY = CONFIG.canvas.height - panelH - ui.panelBottomMargin;
  const buttonW = panelW - ui.choiceBlockLeft * 2;
  const choices = Array.isArray(def.choices) ? def.choices : [];
  choices.forEach((_, idx) => {
    const bx = panelX + ui.choiceBlockLeft;
    const by = panelY + ui.choiceBlockTop + (ui.choiceHeight + ui.choiceGap) * idx;
    if (mx >= bx && mx <= bx + buttonW && my >= by && my <= by + ui.choiceHeight) resolveEventChoice(idx);
  });
});
openTododonShopBtn?.addEventListener('click', () => {
  if (!gameState?.meta?.unlockedFlags?.tododonShop) return;
  tododonShopModal?.classList.remove('hidden');
});
tododonShopCloseBtn?.addEventListener('click', () => {
  tododonShopModal?.classList.add('hidden');
});

(async function init() {
  resetState('start');
  applyDebugPreset(gameState?.debug?.selectedPresetId || 'normal');
  syncStartMenuUi();
  renderDebugPresetOptions();
  syncStartMetaStats();
  await preloadImages();
  requestAnimationFrame(loop);
})();
