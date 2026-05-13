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
    archetypes: {
      basic: 'basic',
      drifter: 'drifter',
      charger: 'charger',
      heavy: 'heavy',
      support: 'support',
    },
    creatureRoles: {
      crayfish: 'basic',
      botancho: 'drifter',
      inoshishi: 'charger',
      frostfang: 'drifter',
      golem: 'heavy',
      shinju: 'support',
    },
    baseRadius: 14,
    baseSpeed: 70,
    baseHp: 28,
    touchDamage: 8,
    damageCooldown: 0.7,
    defaultContactProfile: 'damage_passable',
    contactProfiles: {
      passable: { blocksPlayer: false, slowsPlayer: false, slowMultiplier: 1, touchDamageScale: 0 },
      damage_passable: { blocksPlayer: false, slowsPlayer: false, slowMultiplier: 1, touchDamageScale: 1 },
      snare: { blocksPlayer: false, slowsPlayer: true, slowMultiplier: 0.45, touchDamageScale: 0 },
      snare_damage: { blocksPlayer: false, slowsPlayer: true, slowMultiplier: 0.55, touchDamageScale: 0.5 },
      solid_damage: { blocksPlayer: true, slowsPlayer: false, slowMultiplier: 1, touchDamageScale: 1.25 },
    },
    creatureContactProfiles: {
      botancho: 'passable',
      shinju: 'passable',
      crayfish: 'damage_passable',
      frostfang: 'snare_damage',
      inoshishi: 'damage_passable',
      golem: 'solid_damage',
    },
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
    drifterSpeedMultiplier: 0.96,
    drifterDriftStrength: 0.26,
    drifterDirectionJitterInterval: 1.8,
    drifterUnlockTime: 45,
    drifterSpawnChance: 0.22,
    archetypeTuning: {
      basic: { speedScale: 1, hpScale: 1, aggro: 1, strafe: 0.08 },
      drifter: { speedScale: 0.94, hpScale: 0.92, aggro: 0.72, strafe: 0.28 },
      charger: { speedScale: 0.86, hpScale: 1.08, aggro: 0.9, burstCooldown: 2.8, burstDuration: 0.55, burstSpeedScale: 2.2 },
      heavy: { speedScale: 0.63, hpScale: 1.85, aggro: 0.62, slowAura: 0.18 },
      support: { speedScale: 0.78, hpScale: 1.2, aggro: 0.3, healPulseInterval: 3.4, healPulseRadius: 110, healPulseAmount: 4 },
    },
    fleeHpThreshold: 0.28,
    fleePressureThreshold: 0.62,
    fleeSpeedMultiplier: 1.35,
    maxMoveSpeed: 270,
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
  world: {
    transitionDuration: 1.2,
    transitionOverlayAlpha: 0.4,
    messageDuration: 3.4,
    boundaryMessageDuration: 2.2,
    boundaryMessageCooldown: 1.1,
    boundaryPushback: 22,
    pressureSpawnRateMultiplier: 0.7,
    pressureEnemyBonus: 3,
    exitIndicatorWidth: 36,
    exitIndicatorPulseSpeed: 3.2,
  },
  zones: {
    shallows: { id: 'shallows', name: '浅瀬', biome: 'shallows', exits: { east: 'kelp' }, enemyTypes: ['crayfish', 'botancho'], maxEnemies: 14, spawnInterval: 1.4, pressureLevel: 0.45, backgroundColor: '#173457', overlayColor: 'rgba(208,236,255,0.08)', transitionMessage: '海流がかわりはじめた……', durationBeforePressure: 20, durationBeforeExit: 35 },
    kelp: { id: 'kelp', name: '海藻地帯', biome: 'kelp', exits: { east: 'carcass', west: 'shallows' }, enemyTypes: ['botancho', 'shinju'], maxEnemies: 18, spawnInterval: 1.18, pressureLevel: 0.54, backgroundColor: '#163b3f', overlayColor: 'rgba(122,188,164,0.08)', transitionMessage: '生きものたちが奥へ逃げていく……', durationBeforePressure: 18, durationBeforeExit: 34 },
    carcass: { id: 'carcass', name: '死骸地帯', biome: 'carcass', exits: { east: 'branch_point', west: 'kelp' }, enemyTypes: ['crayfish', 'inoshishi', 'golem'], maxEnemies: 21, spawnInterval: 1.0, pressureLevel: 0.72, backgroundColor: '#392d37', overlayColor: 'rgba(210,122,112,0.10)', transitionMessage: '腐肉のにおいが濃くなる……', durationBeforePressure: 17, durationBeforeExit: 32 },
    branch_point: { id: 'branch_point', name: '分岐海流', biome: 'branch', exits: { east: 'todo_domain', south: 'drowned_shrine', west: 'carcass' }, forwardExits: ['east', 'south'], enemyTypes: ['inoshishi', 'botancho'], maxEnemies: 15, spawnInterval: 1.15, pressureLevel: 0.8, backgroundColor: '#1f2b3d', overlayColor: 'rgba(180,210,240,0.10)', transitionMessage: '流れが二手に裂ける……', durationBeforePressure: 14, durationBeforeExit: 22 },
    todo_domain: { id: 'todo_domain', name: 'トド領域', biome: 'tododon', exits: { west: 'branch_point', east: 'tododon_approach' }, forwardExits: ['east'], enemyTypes: ['golem', 'inoshishi'], maxEnemies: 9, spawnInterval: 1.28, pressureLevel: 0.94, backgroundColor: '#20263a', overlayColor: 'rgba(255,255,255,0.14)', transitionMessage: 'トド王のなわばりが近い……', durationBeforePressure: 12, durationBeforeExit: 24 },
    tododon_approach: { id: 'tododon_approach', name: 'トドドン接近海路', biome: 'tododon', exits: { west: 'todo_domain', east: 'tododon_gate' }, forwardExits: ['east'], enemyTypes: ['golem', 'frostfang'], maxEnemies: 8, spawnInterval: 1.2, pressureLevel: 1, backgroundColor: '#1d2434', overlayColor: 'rgba(230,244,255,0.12)', transitionMessage: '巨大な影が海を覆う……', durationBeforePressure: 10, durationBeforeExit: 20 },
    tododon_gate: { id: 'tododon_gate', name: 'Tododon出現部屋', biome: 'tododon', exits: { west: 'tododon_approach' }, enemyTypes: ['golem'], maxEnemies: 0, spawnInterval: 2.4, pressureLevel: 1, backgroundColor: '#181f30', overlayColor: 'rgba(220,245,255,0.14)', transitionMessage: '王の咆哮が水を震わせる……', durationBeforePressure: 8, durationBeforeExit: 16, boss: 'tododon' },
    drowned_shrine: { id: 'drowned_shrine', name: '水没神殿', biome: 'shrine', exits: { north: 'branch_point', south: 'gaze_lair' }, forwardExits: ['south'], enemyTypes: ['shinju', 'botancho'], maxEnemies: 10, spawnInterval: 1.35, pressureLevel: 0.95, backgroundColor: '#1a2131', overlayColor: 'rgba(186,154,224,0.10)', transitionMessage: '視線の気配が水底からのぼる……', durationBeforePressure: 12, durationBeforeExit: 22 },
    gaze_lair: { id: 'gaze_lair', name: '凝視の巣', biome: 'gaze', exits: { north: 'drowned_shrine', south: 'red_light_approach' }, forwardExits: ['south'], enemyTypes: ['shinju'], maxEnemies: 4, spawnInterval: 1.6, pressureLevel: 0.98, backgroundColor: '#141a28', overlayColor: 'rgba(255,120,120,0.10)', transitionMessage: '赤い視線が満ちていく……', durationBeforePressure: 10, durationBeforeExit: 18 },
    red_light_approach: { id: 'red_light_approach', name: '赤光接近回廊', biome: 'gaze', exits: { north: 'gaze_lair', south: 'red_light_gate' }, forwardExits: ['south'], enemyTypes: ['shinju', 'frostfang'], maxEnemies: 8, spawnInterval: 1.28, pressureLevel: 1, backgroundColor: '#171826', overlayColor: 'rgba(255,100,120,0.12)', transitionMessage: '脈動する赤光が迫る……', durationBeforePressure: 9, durationBeforeExit: 18 },
    red_light_gate: { id: 'red_light_gate', name: 'Red Light出現部屋', biome: 'gaze', exits: { north: 'red_light_approach' }, enemyTypes: ['shinju'], maxEnemies: 0, spawnInterval: 2.4, pressureLevel: 1, backgroundColor: '#111522', overlayColor: 'rgba(255,120,120,0.14)', transitionMessage: '赤い瞳が闇を切り裂く……', durationBeforePressure: 8, durationBeforeExit: 15, boss: 'red_light' },
  },
  special: {
    maxEnergy: 100,
    energyRegenPerSecond: 14,
    wideEnergyCostPerShot: 6,
    wideAttackConeDegrees: 260,
    wideAttackCooldownMultiplier: 1.55,
    minEnergyToActivateWide: 10,
    lowEnergyThreshold: 0.25,
    emptyEnergyThreshold: 1,
    wideTargetingPriority: 'nearest',
    tododonWaveEnergyDrainPerSecond: 32,
    tododonWaveDamagePerSecond: 18,
    tododonWaveKnockbackPerSecond: 260,
    tododonWaveConeDegrees: 95,
    tododonWaveRange: 220,
    tododonWaveMinEnergyToActivate: 25,
    tododonWaveColor: 'rgba(220,245,255,0.18)',
    tododonWaveEdgeColor: 'rgba(235,255,255,0.35)',
  },
  eventUi: {
    overlayAlpha: 0.2,
    panelWidthRatio: 0.84,
    panelMaxHeightRatio: 0.42,
    panelMinHeight: 150,
    panelSideMargin: 24,
    panelBottomMargin: 20,
    panelBorderRadius: 14,
    panelPaddingX: 16,
    panelPaddingTop: 14,
    panelPaddingBottom: 14,
    speakerFontSize: 24,
    speakerBottomGap: 10,
    textFontSize: 22,
    textLineHeight: 30,
    textBottomGap: 14,
    hintFontSize: 16,
    hintLineHeight: 22,
    choiceFontSize: 20,
    choiceLineHeight: 26,
    choiceMinHeight: 44,
    choiceGap: 10,
    choicePaddingX: 14,
    choicePaddingY: 10,
    portraitWidth: 116,
    portraitHeight: 116,
    portraitInsetX: 14,
    portraitInsetY: 10,
    portraitSafeGap: 10,
  },
  ui: {
    maxNumberShortcuts: 9,
  },
  meta: {
    coinsPerKill: 1,
    coinsPerLevel: 3,
    clearBonusCoins: 25,
    debugRewardsEnabled: false,
  },
  debug: {
    enabled: false,
    fastExitUnlockEnabled: true,
    fastExitUnlockSeconds: 3,
    targetSurvivalTimeOverride: null,
    presets: [
      { id: 'normal', label: 'Normal', targetSurvivalTime: null },
      { id: 'tododon_60', label: 'Tododon in 60s', targetSurvivalTime: 60 },
      { id: 'tododon_30', label: 'Tododon in 30s', targetSurvivalTime: 30 },
      { id: 'tododon_3', label: 'Tododon in 3s', targetSurvivalTime: 3 },
    ],
  },
  tododon: {
    radius: 420,
    speed: 30,
    touchRadius: 380,
    color: '#3f5870',
    spawnOffset: 520,
    darknessStartAlpha: 0.08,
    darknessMaxAlpha: 0.55,
    darknessRampSpeed: 1.6,
    darknessDistanceInfluence: 0.42,
    darknessVignetteAlpha: 0.22,
  },

  duel: {
    arenaWidth: 960,
    arenaHeight: 540,
    playerStartX: 160,
    playerStartY: 270,
    tododonX: 790,
    tododonY: 270,
    tododonRadius: 95,
    tododonHp: 420,
    DUEL_TODODON_BASE_SCALE: 1.85,
    DUEL_TODODON_ADVANCE_SCALE_BONUS: 0.35,
    DUEL_TODODON_RIGHT_OFFSET: -70,
    DUEL_TODODON_CONTACT_RADIUS: 48,
    bossIdleDuration: 1.1,
    inhaleWaveDuration: 1.0,
    waveDuration: 2.2,
    advanceDuration: 1.0,
    inhaleCannonDuration: 0.9,
    cannonWarningDuration: 0.9,
    cannonBeamDuration: 1.0,
    cannonCooldown: 4.0,
    waveCount: 12,
    waveSpeed: 145,
    waveSpacing: 28,
    waveHp: 18,
    waveWidth: 20,
    waveDamage: 11,
    waveLifetime: 7.5,
    cannonWidth: 86,
    cannonDamage: 38,
    advanceAmount: 0.14,
    maxAdvance: 1,
    contactDamage: 14,
    contactInterval: 0.33,
    manualShotCooldown: 0.17,
    manualShotSpeed: 360,
    manualShotDamage: 13,
    manualShotRadius: 5,
    manualShotLifetime: 1.6,
  },
  assets: {
    playerImage: 'assets/Crayfish.png',
    creatures: {
      crayfish: 'assets/Crayfish.png',
      botancho: 'assets/botancho.png',
      inoshishi: 'assets/inoshissi.png',
      frostfang: 'assets/frostfang.png',
      golem: 'assets/golem.png',
      shinju: 'assets/shinju.png',
    },
    bosses: {
      tododon: 'assets/bosses/tododon.png',
      red_light: 'assets/bosses/red_light.png',
    },
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
    energyColor: '#b78cff',
    energyLowColor: '#ff9f5b',
    energyBackgroundColor: '#2a334f',
    wideModeColor: '#d2b8ff',
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
  worldStateDefaults: {
    currentZoneId: 'shallows',
    previousZoneId: null,
    zoneTimer: 0,
    pressure: 0,
    transitionReady: false,
    exitUnlocked: false,
    transitionTimer: 0,
    isTransitioning: false,
    transitionDirection: null,
    transitionTargetZone: null,
    zoneMessage: '',
    zoneMessageTimer: 0,
    tododonEncounterTriggered: false,
    redLightBossTriggered: false,
    boundaryMessage: '',
    boundaryMessageTimer: 0,
    boundaryMessageCooldown: 0,
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
  endingStarted: false,
  pendingLevelUps: 0,
  pendingEvent: null,
  event: null,
  duel: null,
  manualShots: [],
  input: { manualFirePressed: false, manualFireHeld: false },
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
      { label: 'トドドンに近づく', resultText: 'トドドンが戦闘態勢に入った！', action: 'startBossDuel' },
      { label: 'いったん退く', resultText: '距離をとって様子を見ることにした……', action: 'unlockTododonShop' },
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
    level: 1, score: 0, chosenMutations: [], resumeGraceTimer: 0, tododon: null, endingStarted: false, screenDarkness: 0, currentMutationOptions: [], nextEnemyId: 1,
    pendingLevelUps: 0,
    pendingEvent: null,
    event: null,
    duel: null,
    manualShots: [],
    input: { manualFirePressed: false, manualFireHeld: false },
    rangeVisibility: { visible: false, timer: 0 },
    world: { ...CONFIG.worldStateDefaults, visitedZones: { shallows: true }, clearedZones: {}, availableExits: {} },
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
      specialEnergy: CONFIG.special.maxEnergy,
      maxSpecialEnergy: CONFIG.special.maxEnergy,
      activeAttackMode: 'normal',
      attackTimer: 0,
      reflectPct: 0,
      facingX: -1,
      contactSlowMultiplier: 1,
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
  if (gameState?.endingStarted) return;
  const offset = Number.isFinite(CONFIG.tododon?.spawnOffset) ? CONFIG.tododon.spawnOffset : 320;
  const radius = Number.isFinite(CONFIG.tododon?.radius) ? CONFIG.tododon.radius : 240;
  const speed = Number.isFinite(CONFIG.tododon?.speed) ? CONFIG.tododon.speed : 26;
  const darknessStart = Number.isFinite(CONFIG.tododon?.darknessStartAlpha) ? CONFIG.tododon.darknessStartAlpha : 0;
  gameState.phase = 'ending';
  gameState.endingStarted = true;
  gameState.spawnTimer = getZoneSpawnInterval();
  if (!gameState.tododon) {
    gameState.tododon = {
      x: CONFIG.canvas.width + radius * 0.65 + offset * 0.3,
      y: CONFIG.canvas.height + radius * 0.38 + offset * 0.18,
      radius,
      speed,
      facingX: -1,
    };
  }
  if (!Number.isFinite(gameState.screenDarkness) || gameState.screenDarkness < darknessStart) {
    gameState.screenDarkness = clamp(darknessStart, 0, 1);
  }
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
  if (action === 'startBossDuel' && gameState?.event) gameState.event.nextFlow = 'duel_prepare';
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

function closeTododonEventToFlow(nextFlow = 'clear') {
  if (nextFlow === 'clear') {
    closeTododonEventToClear();
    return;
  }
  if (nextFlow !== 'boss_duel' && nextFlow !== 'duel_prepare') {
    closeTododonEventToClear();
    return;
  }
  gameState.event = null;
  eventModal?.classList.add('hidden');
  if (!Number.isFinite(gameState?.pendingLevelUps) || gameState.pendingLevelUps <= 0) {
    if (nextFlow === 'duel_prepare') { startDuelBattle(); return; }
    gameState.phase = nextFlow;
    gameState.isPaused = false;
    return;
  }
  gameState.phase = 'playing';
  gameState.isPaused = false;
  resolvePendingLevelUpsThen(() => {
    if (nextFlow === 'duel_prepare') { startDuelBattle(); return; }
    gameState.phase = nextFlow;
    gameState.isPaused = false;
  });
}

function getActiveEventDefinition() {
  const eventId = gameState?.event?.id;
  return eventId ? EVENT_DEFINITIONS[eventId] || null : null;
}


function startDuelBattle() {
  const duelConfig = CONFIG.duel || {};
  const player = gameState?.player;
  if (!player) return;
  gameState.phase = 'duel';
  gameState.isPaused = false;
  gameState.previousPhaseBeforePause = null;
  gameState.event = null;
  gameState.pendingEvent = null;
  eventModal?.classList.add('hidden');
  gameState.enemies = [];
  gameState.projectiles = [];
  gameState.xpGems = [];
  gameState.spawnTimer = getCurrentSpawnInterval();
  player.x = clamp(Number(duelConfig.playerStartX) || 160, player.radius, (duelConfig.arenaWidth || CONFIG.canvas.width) - player.radius);
  player.y = clamp(Number(duelConfig.playerStartY) || 270, player.radius, (duelConfig.arenaHeight || CONFIG.canvas.height) - player.radius);
  player.attackTimer = 0;
  gameState.manualShots = [];
  gameState.input = { manualFirePressed: false, manualFireHeld: false };
  gameState.duel = {
    bossType: 'tododon',
    tododon: {
      id: 'duel_tododon',
      x: Number(duelConfig.tododonX) || 790, y: Number(duelConfig.tododonY) || 270, radius: Number(duelConfig.tododonRadius) || 95,
      hp: Number(duelConfig.tododonHp) || 420, maxHp: Number(duelConfig.tododonHp) || 420,
      action: 'idle', actionTimer: Number(duelConfig.bossIdleDuration) || 1, loopStep: 0,
      advanceLevel: 0, contactDamageTimer: 0, actionText: '', actionTextTimer: 0,
      cannon: { active: false, warning: false, timer: 0, y: player.y, height: Number(duelConfig.cannonWidth) || 86 },
      manualShotCooldownTimer: 0,
    },
    waveProjectiles: [],
    isComplete: false,
  };
}

function setBossActionText(text = '', timer = 0) { const t = gameState?.duel?.tododon; if (!t) return; t.actionText = text; t.actionTextTimer = Math.max(0, Number(timer) || 0); }
function spawnDuelWaveProjectiles() { const duel = gameState?.duel; const t = duel?.tododon; const c = CONFIG.duel || {}; if (!duel || !t) return; const count = Math.max(1, Math.floor(c.waveCount || 10)); const spacing = Number(c.waveSpacing) || 28; for (let i = 0; i < count; i += 1) { const y = t.y - ((count - 1) * spacing) / 2 + i * spacing + rand(-8, 8); if (Math.random() < 0.22) continue; duel.waveProjectiles.push({ x: t.x - t.radius * 0.75, y, vx: -(c.waveSpeed || 140), radius: Number(c.waveWidth) || 20, hp: Number(c.waveHp) || 18, damage: Number(c.waveDamage) || 10, life: Number(c.waveLifetime) || 7, alive: true }); } }

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

  const tododonRadius = Number.isFinite(tododon.radius) && tododon.radius > 0 ? tododon.radius : 1;
  const playerRadius = Number.isFinite(player.radius) ? player.radius : 0;
  const touchRadius = Number.isFinite(CONFIG.tododon?.touchRadius) ? CONFIG.tododon.touchRadius : tododonRadius;
  const farDistance = Math.max(touchRadius + playerRadius + tododonRadius * 1.2, 1);
  const nearFactor = clamp(1 - dist / farDistance, 0, 1);
  const darknessStart = Number.isFinite(CONFIG.tododon?.darknessStartAlpha) ? CONFIG.tododon.darknessStartAlpha : 0;
  const darknessCap = Number.isFinite(CONFIG.tododon?.darknessMaxAlpha) ? CONFIG.tododon.darknessMaxAlpha : 0.55;
  const influence = Number.isFinite(CONFIG.tododon?.darknessDistanceInfluence) ? CONFIG.tododon.darknessDistanceInfluence : 0.4;
  const rampSpeed = Number.isFinite(CONFIG.tododon?.darknessRampSpeed) ? CONFIG.tododon.darknessRampSpeed : 1.4;
  const targetDarkness = clamp(darknessStart + nearFactor * influence, darknessStart, darknessCap);
  const currentDarkness = Number.isFinite(gameState.screenDarkness) ? gameState.screenDarkness : darknessStart;
  gameState.screenDarkness = clamp(currentDarkness + (targetDarkness - currentDarkness) * rampSpeed * dt, 0, darknessCap);

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
  const creatureAssets = CONFIG.assets?.creatures || {};
  const bossAssets = CONFIG.assets?.bosses || {};
  const creatureEntries = Object.entries(creatureAssets).map(([key, src]) => loadImage(`creature_${key}`, src));
  const bossEntries = Object.entries(bossAssets).map(([key, src]) => loadImage(`boss_${key}`, src));
  const results = await Promise.all([
    loadImage('player', CONFIG.assets.playerImage),
    ...creatureEntries,
    ...bossEntries,
  ]);
  results.forEach(r => gameState.images[r.key] = r);
  Object.entries(bossAssets).forEach(([key, src]) => {
    const result = gameState.images[`boss_${key}`];
    if (!result?.ok) {
      console.warn(`[assets] boss image failed to load: ${key} (${src})`);
    }
  });
}

// ==============================
// Utilities
// ==============================

function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }
function rand(min, max) { return Math.random() * (max - min) + min; }
function distance(a, b) { return Math.hypot(a.x - b.x, a.y - b.y); }
function degToRad(deg) { return deg * Math.PI / 180; }
function isFiniteNumber(value) { return Number.isFinite(value); }

function isUsableImageResult(imageResult) {
  return Boolean(imageResult?.ok && imageResult?.img && imageResult.img.complete && imageResult.img.naturalWidth > 0 && imageResult.img.naturalHeight > 0);
}

function getBossImage(id) {
  if (!id) return null;
  const result = gameState.images?.[`boss_${id}`];
  return isUsableImageResult(result) ? result : null;
}


function getCurrentAttackConeDegrees() {
  const p = gameState?.player;
  const baseCone = Number.isFinite(p?.attackConeDegrees)
    ? p.attackConeDegrees
    : (Number.isFinite(CONFIG.player?.attackConeDegrees) ? CONFIG.player.attackConeDegrees : 150);
  if (p?.activeAttackMode !== 'wide') return baseCone;
  const wideCone = Number.isFinite(CONFIG.special?.wideAttackConeDegrees) ? CONFIG.special.wideAttackConeDegrees : baseCone;
  return Math.max(baseCone, wideCone);
}

function getCurrentAttackCooldown() {
  const p = gameState?.player;
  const baseCooldown = Number.isFinite(p?.attackCooldown)
    ? p.attackCooldown
    : (Number.isFinite(CONFIG.player?.attackCooldown) ? CONFIG.player.attackCooldown : 0.55);
  if (p?.activeAttackMode !== 'wide') return baseCooldown;
  const multiplier = Number.isFinite(CONFIG.special?.wideAttackCooldownMultiplier) ? CONFIG.special.wideAttackCooldownMultiplier : 1;
  return baseCooldown * Math.max(0, multiplier);
}

function toggleWideMode() {
  if (gameState?.phase !== 'playing') return;
  const p = gameState?.player;
  if (!p) return;
  if (p.activeAttackMode === 'wide') {
    p.activeAttackMode = 'normal';
    return;
  }
  const minEnergy = Number.isFinite(CONFIG.special?.minEnergyToActivateWide) ? CONFIG.special.minEnergyToActivateWide : 0;
  const energy = Number.isFinite(p.specialEnergy) ? p.specialEnergy : 0;
  if (energy >= minEnergy) p.activeAttackMode = 'wide';
}

function toggleTododonWaveMode() {
  if (gameState?.phase !== 'playing') return;
  const p = gameState?.player;
  if (!p) return;
  if (p.activeAttackMode === 'tododonWave') {
    p.activeAttackMode = 'normal';
    return;
  }
  const minEnergy = Number.isFinite(CONFIG.special?.tododonWaveMinEnergyToActivate) ? CONFIG.special.tododonWaveMinEnergyToActivate : 0;
  const energy = Number.isFinite(p.specialEnergy) ? p.specialEnergy : 0;
  if (energy >= minEnergy) p.activeAttackMode = 'tododonWave';
}

function updateSpecialEnergy(dt) {
  if (gameState?.phase !== 'playing') return;
  const p = gameState?.player;
  if (!p || !Number.isFinite(dt) || dt <= 0) return;
  const maxEnergy = Number.isFinite(p.maxSpecialEnergy) ? p.maxSpecialEnergy : (Number.isFinite(CONFIG.special?.maxEnergy) ? CONFIG.special.maxEnergy : 100);
  const regen = Number.isFinite(CONFIG.special?.energyRegenPerSecond) ? CONFIG.special.energyRegenPerSecond : 0;
  const waveDrain = Number.isFinite(CONFIG.special?.tododonWaveEnergyDrainPerSecond) ? CONFIG.special.tododonWaveEnergyDrainPerSecond : 0;
  const current = Number.isFinite(p.specialEnergy) ? p.specialEnergy : 0;
  if (p.activeAttackMode === 'tododonWave') p.specialEnergy = clamp(current - waveDrain * dt, 0, maxEnergy);
  else p.specialEnergy = clamp(current + regen * dt, 0, maxEnergy);
  const emptyThreshold = Number.isFinite(CONFIG.special?.emptyEnergyThreshold) ? CONFIG.special.emptyEnergyThreshold : 0;
  if ((p.activeAttackMode === 'wide' || p.activeAttackMode === 'tododonWave') && p.specialEnergy <= emptyThreshold) {
    p.activeAttackMode = 'normal';
  }
}

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
  const coneDegrees = getCurrentAttackConeDegrees();
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

function getSafeZones() {
  const zones = CONFIG?.zones;
  return zones && typeof zones === 'object' ? zones : {};
}

function getCurrentZone() {
  const zones = getSafeZones();
  const zoneId = String(gameState?.world?.currentZoneId || 'shallows');
  return zones[zoneId] || zones.shallows || null;
}

function getExitDirectionVector(direction) {
  const map = { east: { x: 1, y: 0 }, west: { x: -1, y: 0 }, north: { x: 0, y: -1 }, south: { x: 0, y: 1 } };
  return map[direction] || null;
}

function getEnemyArchetypeId(archetypeKey) {
  const archetypes = CONFIG.enemy?.archetypes || {};
  return archetypes[archetypeKey] || archetypes.basic || 'basic';
}

function getZoneSpawnInterval() {
  const zone = getCurrentZone();
  const base = Number(zone?.spawnInterval);
  const fallback = getCurrentSpawnInterval();
  const safeBase = Number.isFinite(base) && base > 0 ? base : fallback;
  const pressure = clamp(Number(gameState?.world?.pressure) || 0, 0, 1);
  const multiplier = Number.isFinite(CONFIG.world?.pressureSpawnRateMultiplier) ? CONFIG.world.pressureSpawnRateMultiplier : 0.7;
  return safeBase * (1 - pressure * clamp(multiplier, 0, 0.95));
}

function getZoneMaxEnemies() {
  const zone = getCurrentZone();
  const base = Math.max(1, Math.floor(Number(zone?.maxEnemies) || getCurrentMaxEnemies()));
  const pressure = clamp(Number(gameState?.world?.pressure) || 0, 0, 1);
  const bonus = Math.max(0, Math.floor(Number(CONFIG.world?.pressureEnemyBonus) || 0));
  return base + Math.floor(bonus * pressure);
}

function getZoneExitUnlockTime(zone) {
  const debugEnabled = Boolean(CONFIG.debug?.fastExitUnlockEnabled);
  const debugSeconds = Number(CONFIG.debug?.fastExitUnlockSeconds);

  if (debugEnabled && Number.isFinite(debugSeconds) && debugSeconds > 0) {
    return debugSeconds;
  }

  if (Number.isFinite(zone?.durationBeforeExit)) {
    return zone.durationBeforeExit;
  }

  return 30;
}

function areZoneExitsUnlocked(zone, world) {
  if (!zone || !world) return false;

  const zoneId = typeof zone.id === 'string' ? zone.id : String(world.currentZoneId || '');
  const timer = Number(world.zoneTimer) || 0;
  const unlockTime = getZoneExitUnlockTime(zone);

  if (world.clearedZones?.[zoneId] === true) {
    return true;
  }

  return timer >= unlockTime;
}

function getAvailableExitsForZone(zone, world) {
  const exits = zone?.exits && typeof zone.exits === 'object' ? zone.exits : {};
  if (!zone || !world) return {};
  if (world.exitUnlocked !== true) return {};
  return { ...exits };
}

function diagnoseExitUnlockMismatch() {
  const world = gameState.world;
  const zone = getCurrentZone();
  if (!world || !zone) return;

  const unlockTime = getZoneExitUnlockTime(zone);
  const timer = Number(world.zoneTimer) || 0;

  if (
    CONFIG.debug?.fastExitUnlockEnabled === true &&
    timer >= unlockTime &&
    world.exitUnlocked !== true
  ) {
    world.exitUnlockMismatchWarnings = world.exitUnlockMismatchWarnings || {};
    if (world.exitUnlockMismatchWarnings[zone.id]) return;

    world.exitUnlockMismatchWarnings[zone.id] = true;

    console.error('[zone] timer passed unlock time but exitUnlocked is still false', {
      zoneId: zone.id,
      timer,
      unlockTime,
      exitUnlocked: world.exitUnlocked,
      cleared: Boolean(world.clearedZones?.[zone.id]),
      phase: gameState.phase,
      duelActive: Boolean(gameState.duel?.active),
      debugLastZoneProgression: world.debugLastZoneProgression
    });
  }
}


function detectExitUnlockedOverwrite() {
  const world = gameState.world;
  const zone = getCurrentZone();
  if (!world || !zone) return;
  if (CONFIG.debug?.fastExitUnlockEnabled !== true) return;

  const unlockTime = getZoneExitUnlockTime(zone);
  const timer = Number(world.zoneTimer) || 0;

  if (timer < unlockTime) return;

  if (world.exitUnlocked !== true) {
    world.exitOverwriteWarnings = world.exitOverwriteWarnings || {};
    const key = `${zone.id}:${Math.floor(timer)}`;
    if (world.exitOverwriteWarnings[key]) return;
    world.exitOverwriteWarnings[key] = true;

    console.error('[zone] exitUnlocked was false after timer passed unlock time', {
      zoneId: zone.id,
      timer,
      unlockTime,
      exitUnlocked: world.exitUnlocked,
      debugExitUnlockedAfterZoneProgression: world.debugExitUnlockedAfterZoneProgression,
      debugZoneTimerAfterZoneProgression: world.debugZoneTimerAfterZoneProgression,
      currentZoneId: world.currentZoneId,
      clearedZones: world.clearedZones,
      phase: gameState.phase,
      duel: gameState.duel
    });

    world.exitUnlocked = true;
    world.clearedZones = world.clearedZones || {};
    world.clearedZones[zone.id] = true;

    console.warn('[zone] forced exitUnlocked true after overwrite detection', {
      zoneId: zone.id,
      timer,
      unlockTime
    });
  }
}

function updateZoneProgression(dt) {
  if (gameState?.phase !== 'playing') return;
  if (gameState?.duel?.active === true) return;

  const world = gameState.world;
  const zone = getCurrentZone();

  if (!world || !zone) {
    console.warn('[zone] missing world or zone during updateZoneProgression', {
      hasWorld: Boolean(world),
      zoneId: world?.currentZoneId,
      zone
    });
    return;
  }

  if (!Number.isFinite(world.zoneTimer)) {
    world.zoneTimer = 0;
  }

  const previousTimer = world.zoneTimer;
  world.zoneTimer += Math.max(0, Number(dt) || 0);

  const wasUnlocked = Boolean(world.exitUnlocked);
  const unlockTime = getZoneExitUnlockTime(zone);
  const timer = Number(world.zoneTimer) || 0;
  const shouldUnlockByTimer = timer >= unlockTime;
  const shouldUnlock = areZoneExitsUnlocked(zone, world) || shouldUnlockByTimer;

  world.exitUnlocked = shouldUnlock;

  if (!wasUnlocked && shouldUnlock && zone?.id) {
    world.clearedZones = world.clearedZones || {};
    world.clearedZones[zone.id] = true;

    console.info('[zone] exit unlocked', {
      zoneId: zone.id,
      previousTimer,
      currentTimer: world.zoneTimer,
      unlockTime: getZoneExitUnlockTime(zone),
      exitUnlocked: world.exitUnlocked,
      exits: zone.exits
    });
  }

  if (CONFIG.debug?.fastExitUnlockEnabled === true) {
    world.debugLastZoneProgression = {
      zoneId: zone.id,
      previousTimer,
      currentTimer: world.zoneTimer,
      unlockTime: getZoneExitUnlockTime(zone),
      exitUnlocked: world.exitUnlocked,
      phase: gameState.phase
    };
  }

  world.debugExitUnlockedAfterZoneProgression = world.exitUnlocked;
  world.debugZoneTimerAfterZoneProgression = world.zoneTimer;
}

function beginZoneTransition(direction, targetZoneId) {
  if (gameState?.phase !== 'playing') return;
  const world = gameState?.world;
  const safeDirection = typeof direction === 'string' ? direction : null;
  const safeTargetZoneId = typeof targetZoneId === 'string' ? targetZoneId : '';
  if (!world || world.isTransitioning || !world.exitUnlocked || !safeDirection || !safeTargetZoneId) return;
  if (!getSafeZones()?.[safeTargetZoneId]) return;
  const duration = Math.max(0, Number(CONFIG.world?.transitionDuration) || 0);
  world.transitionDirection = safeDirection;
  world.transitionTargetZone = safeTargetZoneId;
  world.transitionTimer = Number.isFinite(duration) ? duration : 0;
  world.transitionReady = false;
  world.exitUnlocked = false;
  world.isTransitioning = true;
  console.info(`[zone] begin transition ${world.currentZoneId || 'unknown'} -> ${safeTargetZoneId} (${safeDirection})`);
}

function completeZoneTransition() {
  if (!gameState?.world || typeof gameState.world !== 'object') return;
  const world = gameState.world;
  const zones = getSafeZones();
  const targetZoneId = String(world.transitionTargetZone || '');
  const nextZone = zones[targetZoneId] || null;
  if (!nextZone) {
    world.isTransitioning = false;
    world.transitionTimer = 0;
    return;
  }
  if (targetZoneId === 'tododon_gate' || nextZone.boss === 'tododon') {
    if (!world.tododonEncounterTriggered) {
      world.tododonEncounterTriggered = true;
      world.isTransitioning = false;
      world.transitionTimer = 0;
      world.transitionReady = false;
      world.exitUnlocked = areZoneExitsUnlocked(nextZone, world);
      startEndingEvent();
    }
    return;
  }
  if (targetZoneId === 'red_light_gate' || nextZone.boss === 'red_light') {
    if (world.redLightBossTriggered) return;
    world.redLightBossTriggered = true;
    gameState.duel = gameState.duel || {};
    gameState.duel.bossType = 'red_light';
  }

  const transitionDirection = world.transitionDirection;
  world.previousZoneId = world.currentZoneId || null;
  world.currentZoneId = nextZone.id;
  world.visitedZones = world.visitedZones || {};
  world.visitedZones[nextZone.id] = true;
  world.clearedZones = world.clearedZones || {};
  const prevZone = zones[world.previousZoneId] || null;
  if (prevZone && Array.isArray(prevZone.forwardExits) && prevZone.forwardExits.includes(transitionDirection)) {
    world.clearedZones[prevZone.id] = true;
  }
  world.zoneTimer = 0;
  world.pressure = 0;
  world.transitionReady = false;
  world.exitUnlocked = areZoneExitsUnlocked(nextZone, world);
  world.availableExits = getAvailableExitsForZone(nextZone, world);
  world.transitionTimer = 0;
  world.isTransitioning = false;
  world.transitionTargetZone = null;
  world.transitionDirection = null;

  const p = gameState?.player;
  if (p) {
    const margin = Number.isFinite(CONFIG.world?.boundaryPushback) ? CONFIG.world.boundaryPushback * 2 : 44;
    let targetX = CONFIG.canvas.width * 0.5;
    let targetY = CONFIG.canvas.height * 0.5;
    if (transitionDirection === 'east') targetX = p.radius + margin;
    if (transitionDirection === 'west') targetX = CONFIG.canvas.width - p.radius - margin;
    if (transitionDirection === 'south') targetY = p.radius + margin;
    if (transitionDirection === 'north') targetY = CONFIG.canvas.height - p.radius - margin;
    p.x = clamp(targetX, p.radius, CONFIG.canvas.width - p.radius);
    p.y = clamp(targetY, p.radius, CONFIG.canvas.height - p.radius);
  }

  gameState.enemies = [];
  gameState.projectiles = [];
  gameState.xpGems = [];
  console.info(`[zone] complete transition to ${nextZone.id}`);
}

function updateWorldTransition(dt) {
  if (gameState?.phase !== 'playing') return;
  const world = gameState?.world;
  if (!world || !world.isTransitioning) return;
  const nextTimer = (Number(world.transitionTimer) || 0) - dt;
  world.transitionTimer = Math.max(0, Number.isFinite(nextTimer) ? nextTimer : 0);
  if (world.transitionTimer <= 0) completeZoneTransition();
}

function setZoneMessage(text, duration) {
  if (!gameState.world) return;
  gameState.world.zoneMessage = String(text || '');
  gameState.world.zoneMessageTimer = Math.max(0, Number(duration) || 0);
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
  const zone = getCurrentZone();
  const zoneCreatures = Array.isArray(zone?.enemyTypes) && zone.enemyTypes.length > 0 ? zone.enemyTypes : ['crayfish'];
  const creatureId = zoneCreatures[Math.floor(Math.random() * zoneCreatures.length)] || 'crayfish';
  const requestedArchetypeKey = CONFIG.enemy?.creatureRoles?.[creatureId] || 'basic';
  const contactProfileId = getEnemyContactProfileId({ creatureId });
  const archetype = getEnemyArchetypeId(requestedArchetypeKey);
  const tuning = CONFIG.enemy?.archetypeTuning?.[archetype] || CONFIG.enemy?.archetypeTuning?.basic || {};
  const speedScale = Number.isFinite(tuning.speedScale) ? tuning.speedScale : 1;
  const hpScale = Number.isFinite(tuning.hpScale) ? tuning.hpScale : 1;

  gameState.enemies.push({
    id: gameState.nextEnemyId++,
    archetype,
    creatureId,
    contactProfileId,
    x, y,
    radius: CONFIG.enemy.baseRadius,
    speed: (Number.isFinite(CONFIG.enemy.baseSpeed) ? CONFIG.enemy.baseSpeed : 0) * speedMultiplier * speedScale,
    hp: hp * hpScale,
    maxHp: hp * hpScale,
    knockbackX: 0,
    knockbackY: 0,
    facingX: -1,
    driftDirection: Math.random() < 0.5 ? -1 : 1,
    driftTimer: rand(0.2, Number.isFinite(CONFIG.enemy?.drifterDirectionJitterInterval) ? CONFIG.enemy.drifterDirectionJitterInterval : 1.8),
    chargeTimer: rand(0.3, 1.4),
    chargeBurstTimer: 0,
    supportPulseTimer: rand(0.6, 2.4),
  });
}

function getEnemyContactProfileId(enemy) {
  const fallbackId = CONFIG.enemy?.defaultContactProfile || 'damage_passable';
  const configuredId = CONFIG.enemy?.creatureContactProfiles?.[enemy?.creatureId];
  return typeof configuredId === 'string' && configuredId ? configuredId : fallbackId;
}

function getEnemyContactProfile(enemy) {
  const fallbackId = CONFIG.enemy?.defaultContactProfile || 'damage_passable';
  const profileId = typeof enemy?.contactProfileId === 'string' && enemy.contactProfileId
    ? enemy.contactProfileId
    : getEnemyContactProfileId(enemy);
  const profiles = CONFIG.enemy?.contactProfiles || {};
  const fallbackProfile = profiles[fallbackId] || {};
  return profiles[profileId] || fallbackProfile;
}

function resolvePlayerEnemyBlocking(enemy) {
  const p = gameState?.player;
  if (!p || !enemy) return;
  const px = Number.isFinite(p.x) ? p.x : 0;
  const py = Number.isFinite(p.y) ? p.y : 0;
  const ex = Number.isFinite(enemy.x) ? enemy.x : 0;
  const ey = Number.isFinite(enemy.y) ? enemy.y : 0;
  const pr = Number.isFinite(p.radius) ? p.radius : 0;
  const er = Number.isFinite(enemy.radius) ? enemy.radius : 0;
  const minDist = pr + er;
  let dx = px - ex;
  let dy = py - ey;
  let dist = Math.hypot(dx, dy);
  if (!Number.isFinite(dist)) return;
  if (dist >= minDist) return;
  if (dist <= 0.00001) {
    dx = 1;
    dy = 0;
    dist = 1;
  }
  const overlap = minDist - dist;
  if (!Number.isFinite(overlap) || overlap <= 0) return;
  p.x = px + (dx / dist) * overlap;
  p.y = py + (dy / dist) * overlap;
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

function getNumberShortcutLabel(index) {
  const maxShortcuts = Number.isFinite(CONFIG.ui?.maxNumberShortcuts) ? CONFIG.ui.maxNumberShortcuts : 9;
  const oneBasedIndex = index + 1;
  if (!Number.isFinite(oneBasedIndex) || oneBasedIndex < 1 || oneBasedIndex > maxShortcuts) return null;
  return String(oneBasedIndex);
}

function showLevelUp() {
  if (gameState?.phase !== 'playing') return;
  gameState.phase = 'levelup';
  gameState.isPaused = true;
  gameState.currentMutationOptions = chooseMutations();
  mutationOptions.innerHTML = '';
  gameState.currentMutationOptions.forEach((m, index) => {
    const shortcutLabel = getNumberShortcutLabel(index);
    const btn = document.createElement('button');
    btn.className = 'mutation-card';
    btn.innerHTML = `
      ${shortcutLabel ? `<span class="mutation-shortcut-badge" aria-hidden="true">${shortcutLabel}</span>` : ''}
      <h3>${m?.name || ''}</h3>
      <p>${m?.desc || ''}</p>
    `;
    btn.onclick = () => selectMutation(index);
    mutationOptions.appendChild(btn);
  });
  levelupModal.classList.remove('hidden');
}

function resolvePendingLevelUpsThen(nextAction) {
  if (!Number.isFinite(gameState?.pendingLevelUps) || gameState.pendingLevelUps <= 0) {
    if (typeof nextAction === 'function') nextAction();
    return;
  }
  gameState.pendingLevelUps -= 1;
  gameState.postLevelUpAction = () => resolvePendingLevelUpsThen(nextAction);
  showLevelUp();
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
  const postLevelUpAction = gameState.postLevelUpAction;
  gameState.postLevelUpAction = null;
  if (typeof postLevelUpAction === 'function') postLevelUpAction();
}

function addXp(amount) {
  const safeAmount = Number.isFinite(amount) ? amount : 0;
  if (safeAmount <= 0) return;
  gameState.xp += safeAmount;
  while (gameState.xp >= gameState.xpToNext) {
    gameState.xp -= gameState.xpToNext;
    gameState.level += 1;
    gameState.xpToNext = Math.floor(gameState.xpToNext * CONFIG.progression.xpGrowth);
    if (gameState?.phase === 'playing') {
      showLevelUp();
      if (gameState?.phase !== 'playing') break;
    } else if (gameState?.phase === 'ending' || gameState?.phase === 'event' || gameState?.phase === 'duel') {
      gameState.pendingLevelUps = (Number.isFinite(gameState?.pendingLevelUps) ? gameState.pendingLevelUps : 0) + 1;
    }
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
  const contactSlowMultiplier = Number.isFinite(p.contactSlowMultiplier) && p.contactSlowMultiplier > 0 ? p.contactSlowMultiplier : 1;
  const effectiveSpeed = p.speed * contactSlowMultiplier;
  const prevX = p.x;
  const prevY = p.y;
  p.x += (xMove / mag) * effectiveSpeed * dt;
  p.y += (yMove / mag) * effectiveSpeed * dt;
  p.x = clamp(p.x, p.radius, CONFIG.canvas.width - p.radius);
  p.y = clamp(p.y, p.radius, CONFIG.canvas.height - p.radius);
  const world = gameState.world;
  if (world && gameState?.phase === 'duel' && world.boundaryMessageCooldown <= 0) {
    const isTododonDuel = gameState?.duel?.bossType === 'tododon';
    const hitBoundary = (
      (p.x <= p.radius + 0.01 && prevX !== p.x)
      || (p.x >= CONFIG.canvas.width - p.radius - 0.01 && prevX !== p.x)
      || (p.y <= p.radius + 0.01 && prevY !== p.y)
      || (p.y >= CONFIG.canvas.height - p.radius - 0.01 && prevY !== p.y)
    );
    if (isTododonDuel && hitBoundary) {
      const pushback = Number.isFinite(CONFIG.world?.boundaryPushback) ? CONFIG.world.boundaryPushback : 0;
      if (p.x <= p.radius + 0.01) p.x = clamp(p.x + pushback * dt, p.radius, CONFIG.canvas.width - p.radius);
      if (p.x >= CONFIG.canvas.width - p.radius - 0.01) p.x = clamp(p.x - pushback * dt, p.radius, CONFIG.canvas.width - p.radius);
      if (p.y <= p.radius + 0.01) p.y = clamp(p.y + pushback * dt, p.radius, CONFIG.canvas.height - p.radius);
      if (p.y >= CONFIG.canvas.height - p.radius - 0.01) p.y = clamp(p.y - pushback * dt, p.radius, CONFIG.canvas.height - p.radius);
      setZoneMessage('トド王のなわばりからはにげられない……', CONFIG.world?.boundaryMessageDuration);
      world.boundaryMessageCooldown = Math.max(0, Number(CONFIG.world?.boundaryMessageCooldown) || 0);
    }
  }
  if (world && !world.isTransitioning) {
    const zone = getCurrentZone();
    const exits = world.availableExits || {};
    const byDir = {
      east: p.x >= CONFIG.canvas.width - p.radius - 2,
      west: p.x <= p.radius + 2,
      north: p.y <= p.radius + 2,
      south: p.y >= CONFIG.canvas.height - p.radius - 2,
    };
    const direction = Object.keys(byDir).find(k => byDir[k]);
    const target = direction ? exits[direction] : null;
    if (world.exitUnlocked && direction && target) {
      console.info('[zone] player touched exit', {
        zoneId: world.currentZoneId,
        direction,
        targetZoneId: target,
      });
    }
    if (target && getSafeZones()?.[target]) {
      beginZoneTransition(direction, target);
    }
  }
}

function updatePlayerAttack(dt) {
  const p = gameState.player;
  if (p?.activeAttackMode === 'tododonWave') return;
  p.attackTimer -= dt;
  if (p.attackTimer <= 0) {
    const priority = CONFIG.special?.wideTargetingPriority;
    const duelTargets = [];
    if (gameState?.phase === 'duel') {
      if (gameState?.duel?.tododon) duelTargets.push(gameState.duel.tododon);
      duelTargets.push(...(gameState?.duel?.waveProjectiles || []));
    }
    const attackTargets = [...(gameState.enemies || []), ...duelTargets];
    const nearest = attackTargets
      .map(e => ({ e, d: distance(e, p) }))
      .filter(v => v.d <= p.attackRange && isInsideAttackCone(v.e))
      .sort((a, b) => {
        if (p?.activeAttackMode === 'wide' && priority === 'nearest') return a.d - b.d;
        return a.d - b.d;
      })[0];

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
        specialMode: p.activeAttackMode === 'wide' ? 'wide' : 'normal',
      });
      if (p.activeAttackMode === 'wide') {
        const wideCost = Number.isFinite(CONFIG.special?.wideEnergyCostPerShot) ? CONFIG.special.wideEnergyCostPerShot : 0;
        const maxEnergy = Number.isFinite(p.maxSpecialEnergy) ? p.maxSpecialEnergy : (Number.isFinite(CONFIG.special?.maxEnergy) ? CONFIG.special.maxEnergy : 100);
        const current = Number.isFinite(p.specialEnergy) ? p.specialEnergy : 0;
        p.specialEnergy = clamp(current - wideCost, 0, maxEnergy);
        const emptyThreshold = Number.isFinite(CONFIG.special?.emptyEnergyThreshold) ? CONFIG.special.emptyEnergyThreshold : 0;
        if (p.specialEnergy <= emptyThreshold) p.activeAttackMode = 'normal';
      }
      p.attackTimer = getCurrentAttackCooldown();
    }
  }
}

function updateTododonWave(dt) {
  const p = gameState?.player;
  if (!p || p.activeAttackMode !== 'tododonWave' || !Number.isFinite(dt) || dt <= 0) return;
  const waveRange = Number.isFinite(CONFIG.special?.tododonWaveRange) ? CONFIG.special.tododonWaveRange : 0;
  const coneDegrees = Number.isFinite(CONFIG.special?.tododonWaveConeDegrees) ? CONFIG.special.tododonWaveConeDegrees : 0;
  const damagePerSecond = Number.isFinite(CONFIG.special?.tododonWaveDamagePerSecond) ? CONFIG.special.tododonWaveDamagePerSecond : 0;
  const knockbackPerSecond = Number.isFinite(CONFIG.special?.tododonWaveKnockbackPerSecond) ? CONFIG.special.tododonWaveKnockbackPerSecond : 0;
  if (waveRange <= 0 || coneDegrees <= 0) return;
  const forwardAngle = p.facingX === 1 ? 0 : Math.PI;
  const halfCone = degToRad(coneDegrees) * 0.5;
  (gameState.enemies || []).forEach(enemy => {
    if (!enemy || enemy === gameState?.tododon) return;
    const dx = (enemy.x ?? 0) - (p.x ?? 0);
    const dy = (enemy.y ?? 0) - (p.y ?? 0);
    const dist = Math.hypot(dx, dy);
    if (!Number.isFinite(dist) || dist <= 0 || dist > waveRange) return;
    const angle = Math.atan2(dy, dx);
    const delta = Math.atan2(Math.sin(angle - forwardAngle), Math.cos(angle - forwardAngle));
    if (Math.abs(delta) > halfCone) return;
    enemy.hp -= damagePerSecond * dt;
    const awayX = dx / dist;
    const awayY = dy / dist;
    enemy.knockbackVX = (Number.isFinite(enemy.knockbackVX) ? enemy.knockbackVX : 0) + awayX * knockbackPerSecond * dt;
    enemy.knockbackVY = (Number.isFinite(enemy.knockbackVY) ? enemy.knockbackVY : 0) + awayY * knockbackPerSecond * dt;
  });
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
    const duel = gameState?.phase === 'duel' ? gameState?.duel : null;
    const waveHit = duel?.waveProjectiles?.find((b, i) => b?.alive !== false && !projectileHitIds.has(`wave_${i}`) && distance(proj, b) <= proj.radius + b.radius);
    const hitEnemyOrBullet = hitEnemy || waveHit;
    if (hitEnemyOrBullet) {
      const hitEnemy = hitEnemyOrBullet;
      if (!(duel && hitEnemy.id === 'duel_tododon')) hitEnemy.hp -= proj.damage;

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

      if (hitEnemy.id !== 'duel_tododon' && hitEnemy.type !== 'waveProjectile') hitEnemy.knockbackX = (hitEnemy.knockbackX ?? 0) + dirX * CONFIG.combat.knockbackForce;
      if (hitEnemy.id !== 'duel_tododon' && hitEnemy.type !== 'waveProjectile') hitEnemy.knockbackY = (hitEnemy.knockbackY ?? 0) + dirY * CONFIG.combat.knockbackForce;

      const knockbackSpeed = Math.hypot(hitEnemy.knockbackX || 0, hitEnemy.knockbackY || 0);
      if (knockbackSpeed > CONFIG.combat.maxKnockbackSpeed && knockbackSpeed > 0) {
        const scale = CONFIG.combat.maxKnockbackSpeed / knockbackSpeed;
        hitEnemy.knockbackX *= scale;
        hitEnemy.knockbackY *= scale;
      }

      spawnHitParticles(proj.x, proj.y);
      if (duel && hitEnemy.id === 'duel_tododon') {
        const mult = (duel?.tododon?.state === 'vulnerable') ? (CONFIG.duel?.tododonVulnerableDamageMultiplier || 1) : (CONFIG.duel?.tododonArmorDamageMultiplier || 0.15);
        duel.tododon.hp -= proj.damage * mult;
      }
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
    const forwardX = dx / d;
    const forwardY = dy / d;
    const archetypes = CONFIG.enemy?.archetypes || {};
    const drifterType = archetypes.drifter || 'drifter';
    const chargerType = archetypes.charger || 'charger';
    const heavyType = archetypes.heavy || 'heavy';
    const supportType = archetypes.support || 'support';
    const isDrifter = enemy.archetype === drifterType;
    const isCharger = enemy.archetype === chargerType;
    const isHeavy = enemy.archetype === heavyType;
    const isSupport = enemy.archetype === supportType;
    let moveDirX = forwardX;
    let moveDirY = forwardY;

    if (!isEnding && isDrifter) {
      const jitterInterval = Number.isFinite(CONFIG.enemy?.drifterDirectionJitterInterval) ? CONFIG.enemy.drifterDirectionJitterInterval : 1.8;
      enemy.driftTimer = (Number.isFinite(enemy.driftTimer) ? enemy.driftTimer : jitterInterval) - dt;
      if (enemy.driftTimer <= 0) {
        enemy.driftDirection = enemy.driftDirection === -1 ? 1 : -1;
        enemy.driftTimer = jitterInterval;
      }
      const driftDirection = enemy.driftDirection === -1 ? -1 : 1;
      const driftStrength = Number.isFinite(CONFIG.enemy?.drifterDriftStrength) ? CONFIG.enemy.drifterDriftStrength : 0;
      const perpX = -forwardY * driftDirection;
      const perpY = forwardX * driftDirection;
      moveDirX = forwardX + perpX * driftStrength;
      moveDirY = forwardY + perpY * driftStrength;
      const moveLen = Math.hypot(moveDirX, moveDirY) || 1;
      moveDirX /= moveLen;
      moveDirY /= moveLen;
    }
    if (!isEnding && isCharger) {
      const tuning = CONFIG.enemy?.archetypeTuning?.[chargerType] || {};
      enemy.chargeTimer = (Number(enemy.chargeTimer) || 0) - dt;
      enemy.chargeBurstTimer = Math.max(0, (Number(enemy.chargeBurstTimer) || 0) - dt);
      if (enemy.chargeTimer <= 0) {
        enemy.chargeTimer = Number(tuning.burstCooldown) || 2.8;
        enemy.chargeBurstTimer = Number(tuning.burstDuration) || 0.55;
      }
      if (enemy.chargeBurstTimer > 0) {
        const burstScale = Number(tuning.burstSpeedScale) || 2.2;
        moveDirX *= burstScale;
        moveDirY *= burstScale;
      }
    }
    if (!isEnding && isSupport) {
      enemy.supportPulseTimer = (Number(enemy.supportPulseTimer) || 0) - dt;
      if (enemy.supportPulseTimer <= 0) {
        const t = CONFIG.enemy?.archetypeTuning?.[supportType] || {};
        const pulseRadius = Number(t.healPulseRadius) || 110;
        const pulseAmount = Number(t.healPulseAmount) || 4;
        gameState.enemies.forEach(other => {
          if (!other || other === enemy) return;
          if (distance(enemy, other) > pulseRadius) return;
          const maxHp = Number(other.maxHp) || 1;
          other.hp = clamp((Number(other.hp) || 0) + pulseAmount, 0, maxHp);
        });
        enemy.supportPulseTimer = Number(t.healPulseInterval) || 3.4;
      }
    }

    if (moveDirX < -0.001) enemy.facingX = -1;
    else if (moveDirX > 0.001) enemy.facingX = 1;
    let speed = Number(enemy.speed) || 0;
    if (isHeavy) speed *= 0.9;
    if (!isEnding && Number(gameState?.world?.pressure) >= (Number(CONFIG.enemy?.fleePressureThreshold) || 0.62) && (isSupport || isDrifter)) {
      moveDirX *= -1;
      moveDirY *= -1;
      speed *= Number(CONFIG.enemy?.fleeSpeedMultiplier) || 1.35;
    } else if (!isEnding && (Number(enemy.hp) || 0) <= (Number(enemy.maxHp) || 1) * (Number(CONFIG.enemy?.fleeHpThreshold) || 0.28) && !isHeavy) {
      moveDirX *= -1;
      moveDirY *= -1;
    }
    speed = clamp(speed, 0, Number(CONFIG.enemy?.maxMoveSpeed) || 270);
    enemy.x = (enemy.x ?? 0) + moveDirX * speed * dt;
    enemy.y = (enemy.y ?? 0) + moveDirY * speed * dt;

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
  if (p) p.contactSlowMultiplier = 1;
  if (!isEnding && p) {
    let contactDamageApplied = false;
    gameState.enemies.forEach(enemy => {
      if (!enemy) return;
      const enemyRadius = Number.isFinite(enemy.radius) ? enemy.radius : 0;
      const playerRadius = Number.isFinite(p.radius) ? p.radius : 0;
      if (distance(enemy, p) >= enemyRadius + playerRadius) return;
      const profile = getEnemyContactProfile(enemy);
      if (profile?.slowsPlayer) {
        const slowMultiplier = Number.isFinite(profile?.slowMultiplier) && profile.slowMultiplier > 0 ? profile.slowMultiplier : 1;
        p.contactSlowMultiplier = Math.min(p.contactSlowMultiplier, slowMultiplier);
      }
      if (profile?.blocksPlayer) resolvePlayerEnemyBlocking(enemy);
      if (!contactDamageApplied && gameState.damageTimer <= 0) {
        const touchDamageScale = Number.isFinite(profile?.touchDamageScale) ? profile.touchDamageScale : 1;
        if (touchDamageScale > 0) {
          const baseTouchDamage = Number.isFinite(CONFIG.enemy?.touchDamage) ? CONFIG.enemy.touchDamage : 0;
          const contactDamage = baseTouchDamage * touchDamageScale;
          if (contactDamage > 0) {
            p.hp -= contactDamage;
            if (p.reflectPct > 0) enemy.hp -= contactDamage * p.reflectPct;
            contactDamageApplied = true;
          }
        }
      }
    });
    p.x = clamp(p.x, p.radius, CONFIG.canvas.width - p.radius);
    p.y = clamp(p.y, p.radius, CONFIG.canvas.height - p.radius);
    if (contactDamageApplied) {
      gameState.damageTimer = Number.isFinite(CONFIG.enemy?.damageCooldown) ? CONFIG.enemy.damageCooldown : 0.7;
    }
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
  if (!gameState.world || typeof gameState.world !== 'object') return;
  const world = gameState.world;
  const zone = getCurrentZone();
  updateZoneProgression(dt);
  world.zoneMessageTimer = Math.max(0, (Number(world.zoneMessageTimer) || 0) - dt);
  world.boundaryMessageCooldown = Math.max(0, (Number(world.boundaryMessageCooldown) || 0) - dt);
  if (!Number.isFinite(world.transitionTimer)) world.transitionTimer = 0;
  world.isTransitioning = Boolean(world.isTransitioning);
  const pressureStart = Math.max(0, Number(zone?.durationBeforePressure) || 0);
  const exitStart = Math.max(pressureStart, getZoneExitUnlockTime(zone));
  world.availableExits = getAvailableExitsForZone(zone, world);
  world.pressure = world.zoneTimer <= pressureStart ? 0 : clamp((world.zoneTimer - pressureStart) / Math.max(0.1, exitStart - pressureStart), 0, 1);
  if (zone?.id === 'gaze_lair' && world.exitUnlocked && !world.redLightBossTriggered) {
    setZoneMessage('紅い灯りがこちらを見ている……', CONFIG.world?.messageDuration);
  }
  updatePlayerMovement(dt);
  updatePlayerAttack(dt);
  updateTododonWave(dt);
  updateProjectiles(dt);
  updateXpGems(dt);
  updateParticles(dt);
  updateEnemies(dt);

  updateWorldTransition(dt);

  gameState.spawnTimer -= dt;
  if (gameState.spawnTimer <= 0) {
    const maxEnemies = getZoneMaxEnemies();
    if ((gameState.enemies || []).length < maxEnemies) spawnEnemy();
    gameState.spawnTimer = getZoneSpawnInterval();
  }
  if ((gameState.player?.hp ?? 0) <= 0) showGameOver();
}

function updateEnding(dt) {
  gameState.runTime += dt;
  updatePlayerMovement(dt);
  updatePlayerAttack(dt);
  updateTododonWave(dt);
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



function updateDuel(dt) {
  if (gameState?.duel?.bossType === 'red_light') return updateRedLightBossBattle(dt);
  const duel = gameState?.duel; const p = gameState?.player; const c = CONFIG.duel || {};
  if (!duel || !p) return;
  updatePlayerMovement(dt);
  updatePlayerAttack(dt);
  updateTododonWave(dt);
  updateProjectiles(dt);
  updateParticles(dt);
  p.x = clamp(p.x, p.radius, (c.arenaWidth || CONFIG.canvas.width) - p.radius);
  p.y = clamp(p.y, p.radius, (c.arenaHeight || CONFIG.canvas.height) - p.radius);
  const t = duel.tododon; if (!t) return;
  t.actionTimer = Math.max(0, (Number(t.actionTimer) || 0) - dt);
  t.actionTextTimer = Math.max(0, (Number(t.actionTextTimer) || 0) - dt);
  if (t.actionTextTimer <= 0) t.actionText = '';
  t.manualShotCooldownTimer = Math.max(0, (Number(t.manualShotCooldownTimer) || 0) - dt);
  const firePressed = Boolean(gameState?.input?.manualFirePressed || gameState?.input?.manualFireHeld);
  if (firePressed && t.manualShotCooldownTimer <= 0) {
    const dirX = (p.facingX === 1 ? 1 : -1);
    gameState.manualShots.push({ x: p.x + dirX * (p.radius + 6), y: p.y, vx: dirX * (c.manualShotSpeed || 360), vy: 0, radius: c.manualShotRadius || 5, damage: c.manualShotDamage || 13, life: c.manualShotLifetime || 1.6 });
    t.manualShotCooldownTimer = c.manualShotCooldown || 0.17;
  }
  gameState.input.manualFirePressed = false;
  if (t.action === 'idle' && t.actionTimer <= 0) { t.action = t.loopStep % 2 === 0 ? 'inhale_wave' : 'inhale_cannon'; t.actionTimer = t.action === 'inhale_wave' ? (c.inhaleWaveDuration || 1) : (c.inhaleCannonDuration || 0.9); setBossActionText(t.action === 'inhale_wave' ? 'トドドンはいきをすいこんでいる……' : 'トドドンがふくらみはじめた……', t.actionTimer); }
  else if (t.action === 'inhale_wave' && t.actionTimer <= 0) { spawnDuelWaveProjectiles(); t.action = 'wave'; t.actionTimer = c.waveDuration || 2.2; setBossActionText('トドドンのトドドン波ッ！', t.actionTimer); }
  else if (t.action === 'wave' && t.actionTimer <= 0) { t.action = 'advance'; t.actionTimer = c.advanceDuration || 1; t.advanceLevel = clamp((t.advanceLevel || 0) + (c.advanceAmount || 0.14), 0, c.maxAdvance || 1); setBossActionText('トドドンがにじりよってくる……', t.actionTimer); }
  else if (t.action === 'inhale_cannon' && t.actionTimer <= 0) { t.action = 'cannon_warning'; t.actionTimer = c.cannonWarningDuration || 0.9; t.cannon.warning = true; t.cannon.active = false; t.cannon.y = p.y; setBossActionText('トドドン砲がくる！', t.actionTimer); }
  else if (t.action === 'cannon_warning' && t.actionTimer <= 0) { t.action = 'cannon'; t.actionTimer = c.cannonBeamDuration || 1; t.cannon.warning = false; t.cannon.active = true; }
  else if (t.action === 'cannon' && t.actionTimer <= 0) { t.cannon.active = false; t.action = 'advance'; t.actionTimer = c.advanceDuration || 1; t.advanceLevel = clamp((t.advanceLevel || 0) + (c.advanceAmount || 0.14), 0, c.maxAdvance || 1); setBossActionText('トドドンがにじりよってくる……', t.actionTimer); t.loopStep += 1; }
  else if (t.action === 'advance' && t.actionTimer <= 0) { t.action = 'idle'; t.actionTimer = c.bossIdleDuration || 1.1; }
  duel.waveProjectiles.forEach(b => { b.x += b.vx * dt; b.life -= dt; if (b.hp <= 0 || b.life <= 0) b.alive = false; if (b.alive && distance(b,p) <= b.radius + p.radius && gameState.damageTimer <= 0) { p.hp -= (b.damage || 0); gameState.damageTimer = CONFIG.enemy.damageCooldown; } });
  gameState.manualShots.forEach(s => { s.x += s.vx * dt; s.y += s.vy * dt; s.life -= dt; duel.waveProjectiles.forEach(w => { if (w.alive && s.life > 0 && distance(s, w) <= s.radius + w.radius) { w.hp -= (s.damage || 0); s.life = 0; if (w.hp <= 0) w.alive = false; } }); });
  gameState.damageTimer -= dt;
  duel.waveProjectiles = (duel.waveProjectiles || []).filter(b => b?.alive && Number.isFinite(b.x) && Number.isFinite(b.y) && b.x > -120 && b.x < (c.arenaWidth || CONFIG.canvas.width) + 120);
  gameState.manualShots = (gameState.manualShots || []).filter(s => Number.isFinite(s?.x) && Number.isFinite(s?.y) && s.life > 0);
  const contactR = (t.radius || 0) + (p.radius || 0) + (c.DUEL_TODODON_CONTACT_RADIUS || 48) * (1 + (t.advanceLevel || 0));
  t.contactDamageTimer = Math.max(0, (t.contactDamageTimer || 0) - dt);
  if (distance(t,p) <= contactR && t.contactDamageTimer <= 0) { p.hp -= (c.contactDamage || 14); t.contactDamageTimer = c.contactInterval || 0.33; }
  if (t.cannon?.active) { const half = (c.cannonWidth || 86) * 0.5; if (Math.abs((p.y || 0) - (t.cannon.y || 0)) <= half && gameState.damageTimer <= 0) { p.hp -= (c.cannonDamage || 38); gameState.damageTimer = CONFIG.enemy.damageCooldown; } }
  if ((p.hp || 0) <= 0) { showGameOver(); return; }
  if ((t.hp || 0) <= 0) { duel.isComplete = true; unlockTododonShop(); showClear(); }
}

function updateRedLightBossBattle(dt) {
  const p = gameState?.player;
  if (!p) return;
  updatePlayerMovement(dt);
  updatePlayerAttack(dt);
  updateProjectiles(dt);
  updateParticles(dt);
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
  updateSpecialEnergy(dt);
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
    case 'duel':
      updateDuel(dt);
      break;
    default:
      break;
  }

  detectExitUnlockedOverwrite();
}

// ==============================
// Render Systems
// ==============================

function drawTododon() {
  const tododon = gameState.tododon;
  if (!tododon) return;
  const imageResult = getBossImage('tododon');
  ctx.save();
  ctx.globalAlpha = 0.96;
  drawEntityShadow(tododon, 'rgba(0, 0, 0, 0.45)');
  drawEntityWithFallback(tododon, imageResult, CONFIG.tododon.color);
  if (!imageResult) {
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
  if (!img || !Number.isFinite(size) || size <= 0 || !Number.isFinite(x) || !Number.isFinite(y)) return;
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
  if (isUsableImageResult(imageResult)) {
    const s = (entity.radius ?? 0) * imageScale;
    const x = (entity.x ?? 0) - s / 2;
    const y = (entity.y ?? 0) - s / 2;
    if (Number.isFinite(s) && s > 0 && Number.isFinite(x) && Number.isFinite(y)) drawImageFacing(imageResult.img, x, y, s, facingX);
    else {
      ctx.fillStyle = fallbackColor;
      ctx.beginPath();
      ctx.arc(entity.x ?? 0, entity.y ?? 0, entity.radius ?? 0, 0, Math.PI * 2);
      ctx.fill();
    }
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
    const projectileCoreColor = proj?.specialMode === 'wide' ? '#a68cff' : CONFIG.visuals.projectileCoreColor;
    ctx.fillStyle = projectileCoreColor;
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


function drawDuelArena() {
  if (gameState.phase !== 'duel') return;
  ctx.save();
  ctx.fillStyle = '#14243c';
  ctx.fillRect(0, 0, CONFIG.canvas.width, CONFIG.canvas.height);
  ctx.strokeStyle = 'rgba(188, 220, 255, 0.35)';
  ctx.lineWidth = 3;
  ctx.strokeRect(6, 6, CONFIG.canvas.width - 12, CONFIG.canvas.height - 12);
  ctx.restore();
}
function drawAirBullets() {
  const waves = gameState?.duel?.waveProjectiles || [];
  waves.forEach(b => { ctx.save(); ctx.fillStyle = 'rgba(210,240,255,0.3)'; ctx.strokeStyle = 'rgba(235,250,255,0.85)'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(b.x,b.y,b.radius,0,Math.PI*2); ctx.fill(); ctx.stroke(); ctx.restore(); });
  const manualShots = gameState?.manualShots || [];
  manualShots.forEach(s => { ctx.save(); ctx.fillStyle = 'rgba(255,220,175,0.95)'; ctx.beginPath(); ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2); ctx.fill(); ctx.restore(); });
}
function drawDuelTododon() {
  if (gameState?.duel?.bossType === 'red_light') return renderRedLightBossBattle();
  if (gameState.phase !== 'duel') return;
  const t = gameState?.duel?.tododon; if (!t) return;
  const c = CONFIG.duel || {};
  const scale = (c.DUEL_TODODON_BASE_SCALE || 1.85) + (c.DUEL_TODODON_ADVANCE_SCALE_BONUS || 0.35) * (t.advanceLevel || 0);
  const rightOffset = c.DUEL_TODODON_RIGHT_OFFSET || -70;
  const h = CONFIG.canvas.height;
  const targetR = clamp(h * 0.3 * scale, h * 0.275, h * 0.35);
  t.radius = targetR;
  t.x = CONFIG.canvas.width - targetR + rightOffset - targetR * (t.advanceLevel || 0) * 0.25;
  drawEntityShadow(t, 'rgba(0,0,0,0.45)');
  const tododonImage = getBossImage('tododon');
  if (!tododonImage && !t.missingImageWarned) {
    console.warn('[render] duel Tododon image unavailable, using fallback shape.');
    t.missingImageWarned = true;
  }
  drawEntityWithFallback(t, tododonImage, '#4f6f8e');
  if (t.cannon?.warning || t.cannon?.active) { ctx.save(); ctx.fillStyle = t.cannon.warning ? 'rgba(255,190,120,0.22)' : 'rgba(255,110,80,0.45)'; ctx.fillRect(0, (t.cannon.y || 0) - (c.cannonWidth || 86) / 2, CONFIG.canvas.width, c.cannonWidth || 86); ctx.restore(); }
}
function renderRedLightBossBattle() {
  const p = gameState?.player;
  if (!p) return;
  ctx.save();
  ctx.fillStyle = 'rgba(180,40,40,0.2)';
  ctx.fillRect(0, 0, CONFIG.canvas.width, CONFIG.canvas.height);
  ctx.fillStyle = '#ffd0d0';
  ctx.font = 'bold 26px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('だるまさんが……ころん……だッ！', CONFIG.canvas.width * 0.5, 54);
  ctx.restore();
}
function drawBossActionText() { const t = gameState?.duel?.tododon; if (!t || !t.actionText) return; const w = CONFIG.canvas.width - 120; const h = 38; const x = 60; const y = CONFIG.canvas.height - 60; const alpha = t.actionTextTimer < 0.3 ? clamp(t.actionTextTimer / 0.3, 0, 1) : 1; ctx.save(); ctx.globalAlpha = alpha; ctx.fillStyle = 'rgba(8,14,24,0.58)'; ctx.fillRect(x, y, w, h); ctx.strokeStyle = 'rgba(220,236,255,0.35)'; ctx.strokeRect(x, y, w, h); ctx.fillStyle = '#ecf6ff'; ctx.font = '18px sans-serif'; ctx.fillText(t.actionText, x + 16, y + 25); ctx.restore(); }
function drawDuelBossHpBar() {
  const t = gameState?.duel?.tododon; if (!t || gameState.phase !== 'duel') return;
  const w = 520; const h = 18; const x = (CONFIG.canvas.width - w) / 2; const y = 18; const pct = clamp((t.hp||0)/(t.maxHp||1),0,1);
  ctx.fillStyle = 'rgba(0,0,0,0.55)'; ctx.fillRect(x,y,w,h); ctx.fillStyle = '#8ed0ff'; ctx.fillRect(x,y,w*pct,h); ctx.strokeStyle='#dff4ff'; ctx.strokeRect(x,y,w,h); ctx.fillStyle='#fff'; ctx.font='bold 16px sans-serif'; ctx.fillText('Tododon', x, y-6);
}

function drawHud() {
  const p = gameState.player;
  const hpPct = p.hp / p.maxHp;
  const xpPct = gameState.xp / gameState.xpToNext;

  ctx.fillStyle = '#0008';
  ctx.fillRect(16, 16, 320, 170);
  ctx.fillStyle = '#fff';
  ctx.font = '14px sans-serif';
  ctx.fillText(`HP: ${Math.ceil(p.hp)} / ${p.maxHp}`, 26, 36);
  ctx.fillText(`Level: ${gameState.level}`, 26, 54);
  ctx.fillText(`Kills: ${gameState.score}`, 26, 72);
  ctx.fillText(`Enemies: ${(gameState.enemies || []).length}/${getZoneMaxEnemies()}`, 26, 90);
  ctx.fillText(`Time: ${formatTime(gameState.runTime)}`, 26, 108);
  ctx.fillText(`Goal: ${formatTime(getTargetSurvivalTime())}`, 26, 126);
  const maxEnergy = Number.isFinite(p.maxSpecialEnergy) ? p.maxSpecialEnergy : 1;
  const energy = Number.isFinite(p.specialEnergy) ? p.specialEnergy : 0;
  const energyPct = maxEnergy > 0 ? clamp(energy / maxEnergy, 0, 1) : 0;
  const modeLabel = p.activeAttackMode === 'tododonWave' ? 'TODODON WAVE' : (p.activeAttackMode === 'wide' ? 'WIDE' : 'NORMAL');
  const lowEnergyThreshold = Number.isFinite(CONFIG.special?.lowEnergyThreshold) ? CONFIG.special.lowEnergyThreshold : 0.25;
  const isLowEnergy = energyPct <= lowEnergyThreshold;
  const defaultTextColor = '#fff';
  ctx.fillStyle = p.activeAttackMode === 'tododonWave'
    ? '#d4f4ff'
    : p.activeAttackMode === 'wide'
      ? (CONFIG.visuals.wideModeColor || '#d2b8ff')
      : defaultTextColor;
  ctx.fillText(`Mode: ${modeLabel}`, 26, 144);
  ctx.fillStyle = defaultTextColor;
  ctx.fillText(`Energy: ${Math.floor(energy)} / ${Math.floor(maxEnergy)}`, 26, 162);
  if (gameState?.debug?.enabled && Number.isFinite(gameState?.debug?.targetSurvivalTimeOverride)) {
    ctx.fillText(`DEBUG: Tododon ${formatTime(gameState.debug.targetSurvivalTimeOverride)}`, 160, 126);
  }

  ctx.fillStyle = CONFIG.visuals.energyBackgroundColor || '#2a334f';
  ctx.fillRect(120, 26, 140, 10);
  ctx.fillRect(120, 44, 140, 10);
  ctx.fillRect(120, 152, 140, 10);
  ctx.fillStyle = '#ff6b6b';
  ctx.fillRect(120, 26, 140 * hpPct, 10);
  ctx.fillStyle = '#7be8ff';
  ctx.fillRect(120, 44, 140 * xpPct, 10);
  ctx.fillStyle = isLowEnergy
    ? (CONFIG.visuals.energyLowColor || '#ff9f5b')
    : (CONFIG.visuals.energyColor || '#b78cff');
  ctx.fillRect(120, 152, 140 * energyPct, 10);
  if (p.activeAttackMode === 'wide' || p.activeAttackMode === 'tododonWave') {
    ctx.strokeStyle = p.activeAttackMode === 'tododonWave' ? '#bdefff' : (CONFIG.visuals.wideModeColor || '#d2b8ff');
    ctx.lineWidth = 1.5;
    ctx.strokeRect(22, 132, 116, 18);
  }
  const zone = getCurrentZone();
  ctx.fillStyle = '#d7ecff';
  ctx.fillText(`Zone: ${zone?.name || '浅瀬'}`, 26, 182);
  if (CONFIG.debug?.fastExitUnlockEnabled) {
    const unlockTime = getZoneExitUnlockTime(zone);
    const timer = Number(gameState.world?.zoneTimer) || 0;
    const shouldUnlockByTimer = Number(gameState.world?.zoneTimer || 0) >= getZoneExitUnlockTime(getCurrentZone());
    const zoneExists = Boolean(zone);
    ctx.fillStyle = 'rgba(215,236,255,0.8)';
    ctx.font = '12px sans-serif';
    ctx.fillText('FAST EXIT DEBUG', 26, 202);
    ctx.fillText(`Current Zone: ${gameState.world?.currentZoneId || 'unknown'}`, 26, 218);
    ctx.fillText(`Zone Exists: ${zoneExists}`, 26, 234);
    ctx.fillText(`Timer: ${timer.toFixed(1)} / ${unlockTime.toFixed(1)}`, 26, 250);
    ctx.fillText(`Exit Unlocked: ${gameState.world?.exitUnlocked}`, 26, 266);
    ctx.fillText(`Should Unlock By Timer: ${shouldUnlockByTimer}`, 26, 282);
  }
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
  const zone = getCurrentZone();
  ctx.fillStyle = zone?.backgroundColor || '#0d1730';
  ctx.fillRect(0, 0, CONFIG.canvas.width, CONFIG.canvas.height);
  const pressure = clamp(Number(gameState?.world?.pressure) || 0, 0, 1);
  if (pressure > 0) {
    ctx.globalAlpha = pressure;
    ctx.fillStyle = zone?.overlayColor || 'rgba(255,255,255,0.08)';
    ctx.fillRect(0, 0, CONFIG.canvas.width, CONFIG.canvas.height);
    ctx.globalAlpha = 1;
  }
}
function drawZoneGuidance() {
  const world = gameState?.world;
  if (!world) return;
  const zone = getCurrentZone();
  const diagnostics = gameState.zoneRenderDiagnostics = gameState.zoneRenderDiagnostics || {};
  const zoneId = zone?.id || 'unknown';
  let indicatorsDrawn = false;
  if (!world.isTransitioning && world.exitUnlocked && world.availableExits && Object.keys(world.availableExits).length > 0) {
    const width = Number.isFinite(CONFIG.world?.exitIndicatorWidth) ? CONFIG.world.exitIndicatorWidth : 32;
    const pulse = 0.3 + 0.3 * (1 + Math.sin((gameState.time / 1000) * (CONFIG.world?.exitIndicatorPulseSpeed || 3.2))) * 0.5;
    ctx.fillStyle = `rgba(180,220,255,${pulse})`;
    const exits = world.availableExits || {};
    if (exits.east) { ctx.fillRect(CONFIG.canvas.width - width, 0, width, CONFIG.canvas.height); indicatorsDrawn = true; }
    if (exits.west) { ctx.fillRect(0, 0, width, CONFIG.canvas.height); indicatorsDrawn = true; }
    if (exits.north) { ctx.fillRect(0, 0, CONFIG.canvas.width, width); indicatorsDrawn = true; }
    if (exits.south) { ctx.fillRect(0, CONFIG.canvas.height - width, CONFIG.canvas.width, width); indicatorsDrawn = true; }
  }
  if (world.exitUnlocked && !indicatorsDrawn && !diagnostics[zoneId]) {
    diagnostics[zoneId] = true;
    console.warn('[zone] exit unlocked but no indicators rendered', {
      zoneId: zone?.id,
      exits: zone?.exits,
      availableExits: world.availableExits,
    });
  }
  if ((world.zoneMessageTimer || 0) > 0 && world.zoneMessage) {
    ctx.save();
    ctx.textAlign = 'center';
    ctx.fillStyle = 'rgba(226,242,255,0.94)';
    ctx.font = '20px sans-serif';
    ctx.fillText(world.zoneMessage, CONFIG.canvas.width * 0.5, CONFIG.canvas.height - 26);
    ctx.restore();
  }
  if ((world.transitionTimer || 0) > 0) {
    const maxDuration = Math.max(0.01, Number(CONFIG.world?.transitionDuration) || 1.2);
    const alpha = clamp((world.transitionTimer / maxDuration) * (Number(CONFIG.world?.transitionOverlayAlpha) || 0.4), 0, 1);
    ctx.fillStyle = `rgba(0,0,0,${alpha})`;
    ctx.fillRect(0, 0, CONFIG.canvas.width, CONFIG.canvas.height);
  }
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
  const coneDegrees = getCurrentAttackConeDegrees();
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


function drawTododonWaveRange() {
  const player = gameState?.player;
  if (!player || player.activeAttackMode !== 'tododonWave') return;
  const alpha = getRangeVisibilityAlpha();
  if (alpha <= 0) return;
  const waveRange = Number.isFinite(CONFIG.special?.tododonWaveRange) ? CONFIG.special.tododonWaveRange : 0;
  const coneDegrees = Number.isFinite(CONFIG.special?.tododonWaveConeDegrees) ? CONFIG.special.tododonWaveConeDegrees : 0;
  const forwardAngle = player.facingX === 1 ? 0 : Math.PI;
  const halfCone = degToRad(coneDegrees) / 2;
  ctx.save();
  ctx.fillStyle = `rgba(220, 245, 255, ${0.045 * alpha})`;
  ctx.strokeStyle = `rgba(235, 255, 255, ${0.2 * alpha})`;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(player.x, player.y);
  ctx.arc(player.x, player.y, waveRange, forwardAngle - halfCone, forwardAngle + halfCone);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
}

function drawTododonWave() {
  const p = gameState?.player;
  if (!p || p.activeAttackMode !== 'tododonWave') return;
  const waveRange = Number.isFinite(CONFIG.special?.tododonWaveRange) ? CONFIG.special.tododonWaveRange : 0;
  const coneDegrees = Number.isFinite(CONFIG.special?.tododonWaveConeDegrees) ? CONFIG.special.tododonWaveConeDegrees : 0;
  if (waveRange <= 0 || coneDegrees <= 0) return;
  const forwardAngle = p.facingX === 1 ? 0 : Math.PI;
  const halfCone = degToRad(coneDegrees) * 0.5;
  const startAngle = forwardAngle - halfCone;
  const endAngle = forwardAngle + halfCone;
  const fillColor = CONFIG.special?.tododonWaveColor || 'rgba(220,245,255,0.18)';
  const edgeColor = CONFIG.special?.tododonWaveEdgeColor || 'rgba(235,255,255,0.35)';
  ctx.save();
  ctx.fillStyle = fillColor;
  ctx.strokeStyle = edgeColor;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(p.x, p.y);
  ctx.arc(p.x, p.y, waveRange, startAngle, endAngle);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  [0.38, 0.62, 0.86].forEach(ratio => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, waveRange * ratio, startAngle, endAngle);
    ctx.stroke();
  });
  ctx.restore();
}

function drawRanges() {
  if (!gameState?.player) return;
  if (!gameState?.rangeVisibility?.visible) return;
  drawPickupRadius();
  drawAttackCone();
  drawTododonWaveRange();
}
function drawEnemies() {
  const archetypes = CONFIG.enemy?.archetypes || {};
  const drifterType = archetypes.drifter || 'drifter';
  (gameState.enemies || []).forEach(e => {
    drawEntityShadow(e, CONFIG.visuals.enemyShadowColor);
    const isDrifter = e?.archetype === drifterType;
    const key = `creature_${e?.creatureId || 'crayfish'}`;
    drawEntityWithFallback(e, gameState.images[key], isDrifter ? '#96c9ff' : '#85ff8a');
    const contactProfile = getEnemyContactProfile(e);
    if (contactProfile?.slowsPlayer) {
      ctx.save();
      ctx.strokeStyle = 'rgba(165, 226, 255, 0.45)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(e.x ?? 0, e.y ?? 0, (e.radius ?? 0) + 5, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }
    if (contactProfile?.blocksPlayer) {
      ctx.save();
      ctx.strokeStyle = 'rgba(240, 240, 240, 0.4)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(e.x ?? 0, e.y ?? 0, (e.radius ?? 0) + 2, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }
    if (isDrifter) {
      ctx.save();
      ctx.strokeStyle = 'rgba(150, 201, 255, 0.55)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(e.x ?? 0, e.y ?? 0, (e.radius ?? 0) + 3, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }
    drawEnemyHpBar(e);
  });
}
function drawPlayer() { if (!gameState.player) return; drawEntityShadow(gameState.player, CONFIG.visuals.playerShadowColor); drawEntityWithFallback(gameState.player, gameState.images.player, '#ff8c4a'); if (gameState.player.activeAttackMode === 'wide') { ctx.save(); ctx.strokeStyle = 'rgba(183, 140, 255, 0.7)'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(gameState.player.x, gameState.player.y, gameState.player.radius + 4, 0, Math.PI * 2); ctx.stroke(); ctx.restore(); } }
function drawOverlays() {
  if (gameState.screenDarkness > 0) { ctx.fillStyle = `rgba(0, 0, 0, ${clamp(gameState.screenDarkness, 0, 1)})`; ctx.fillRect(0, 0, CONFIG.canvas.width, CONFIG.canvas.height); }
  if (gameState.phase === 'ending' && gameState.tododon) {
    const vignetteAlpha = Number.isFinite(CONFIG.tododon?.darknessVignetteAlpha) ? CONFIG.tododon.darknessVignetteAlpha : 0;
    if (vignetteAlpha > 0) {
      const cx = CONFIG.canvas.width * 0.5;
      const cy = CONFIG.canvas.height * 0.5;
      const inner = Math.min(CONFIG.canvas.width, CONFIG.canvas.height) * 0.24;
      const outer = Math.max(CONFIG.canvas.width, CONFIG.canvas.height) * 0.78;
      const gradient = ctx.createRadialGradient(cx, cy, inner, cx, cy, outer);
      gradient.addColorStop(0, `rgba(0, 0, 0, 0)`);
      gradient.addColorStop(1, `rgba(0, 0, 0, ${clamp(vignetteAlpha, 0, 1)})`);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, CONFIG.canvas.width, CONFIG.canvas.height);
    }
  }
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
function wrapTextLines(context, text, maxWidth) {
  if (!context) return [];
  const safeText = String(text || '');
  const width = Number.isFinite(maxWidth) ? Math.max(1, maxWidth) : 1;
  const rawLines = safeText.split('\n');
  const out = [];
  rawLines.forEach(raw => {
    const words = String(raw || '').split(/\s+/).filter(Boolean);
    if (!words.length) {
      out.push('');
      return;
    }
    let current = words[0];
    for (let i = 1; i < words.length; i += 1) {
      const candidate = `${current} ${words[i]}`;
      if (context.measureText(candidate).width <= width) current = candidate;
      else {
        out.push(current);
        current = words[i];
      }
    }
    out.push(current);
  });
  return out;
}
function drawWrappedLines(lines, x, y, maxWidth, lineHeight) {
  const safeLines = Array.isArray(lines) ? lines : [];
  safeLines.forEach((line, idx) => ctx.fillText(String(line || ''), x, y + lineHeight * idx, maxWidth));
}
function computeEventUiLayout() {
  const ui = CONFIG.eventUi || {};
  const def = getActiveEventDefinition();
  const canvasW = CONFIG.canvas.width;
  const canvasH = CONFIG.canvas.height;
  const sideMargin = Number.isFinite(ui.panelSideMargin) ? ui.panelSideMargin : 24;
  const bottomMargin = Number.isFinite(ui.panelBottomMargin) ? ui.panelBottomMargin : 20;
  const panelW = clamp(canvasW * (ui.panelWidthRatio || 0.84), 560, canvasW - sideMargin * 2);
  const panelX = sideMargin;
  const innerX = panelX + (ui.panelPaddingX || 16);
  const innerW = Math.max(1, panelW - (ui.panelPaddingX || 16) * 2);
  const portraitW = Math.max(0, ui.portraitWidth || 0);
  const portraitH = Math.max(0, ui.portraitHeight || 0);
  const portraitX = panelX + panelW - portraitW - (ui.portraitInsetX || 0);
  const portraitY = 0;
  const portraitSafeEndX = portraitW > 0 ? portraitX - (ui.portraitSafeGap || 0) : panelX + panelW;
  const textW = Math.max(1, Math.min(innerW, portraitSafeEndX - innerX));
  const bodyText = gameState?.event?.showingResult ? (gameState?.event?.resultText || '') : (def?.text || '');

  ctx.font = `${ui.textFontSize || 22}px sans-serif`;
  const bodyLines = wrapTextLines(ctx, bodyText, textW);
  const bodyLineHeight = ui.textLineHeight || ((ui.textFontSize || 22) + 8);

  const choices = Array.isArray(def?.choices) ? def.choices : [];
  const choiceRects = [];
  let choicesContentHeight = 0;
  if (!gameState?.event?.showingResult) {
    ctx.font = `${ui.choiceFontSize || 20}px sans-serif`;
    choices.forEach((choice, idx) => {
      const label = `${idx + 1}. ${choice?.label || ''}`;
      const lines = wrapTextLines(ctx, label, Math.max(1, textW - (ui.choicePaddingX || 14) * 2));
      const lineCount = Math.max(1, lines.length);
      const minHeight = ui.choiceMinHeight || 44;
      const buttonH = Math.max(minHeight, lineCount * (ui.choiceLineHeight || 26) + (ui.choicePaddingY || 10) * 2);
      choiceRects.push({ idx, lines, h: buttonH });
      choicesContentHeight += buttonH + (idx < choices.length - 1 ? (ui.choiceGap || 10) : 0);
    });
  }

  const hintHeight = gameState?.event?.showingResult ? (ui.hintLineHeight || ((ui.hintFontSize || 16) + 6)) : 0;
  const contentHeight = (ui.panelPaddingTop || 14)
    + (ui.speakerFontSize || 24)
    + (ui.speakerBottomGap || 10)
    + bodyLines.length * bodyLineHeight
    + (ui.textBottomGap || 14)
    + (gameState?.event?.showingResult ? hintHeight : choicesContentHeight)
    + (ui.panelPaddingBottom || 14);
  const maxPanelH = Math.max(ui.panelMinHeight || 150, canvasH * (ui.panelMaxHeightRatio || 0.42));
  const panelH = clamp(contentHeight, ui.panelMinHeight || 150, maxPanelH);
  const panelY = canvasH - panelH - bottomMargin;

  let cursorY = panelY + (ui.panelPaddingTop || 14);
  const speakerY = cursorY + (ui.speakerFontSize || 24) - 4;
  cursorY += (ui.speakerFontSize || 24) + (ui.speakerBottomGap || 10);
  const bodyY = cursorY;
  cursorY += bodyLines.length * bodyLineHeight + (ui.textBottomGap || 14);

  const availableBottomY = panelY + panelH - (ui.panelPaddingBottom || 14);
  const preferredEndY = cursorY + (gameState?.event?.showingResult ? hintHeight : choicesContentHeight);
  const overflow = preferredEndY > availableBottomY;
  if (overflow && !gameState?.event?.showingResult) {
    const last = choiceRects[choiceRects.length - 1];
    if (last) cursorY = Math.min(cursorY, availableBottomY - last.h);
  }
  let runY = cursorY;
  choiceRects.forEach((r, i) => {
    r.x = innerX;
    r.y = runY;
    r.w = textW;
    runY += r.h + (i < choiceRects.length - 1 ? (ui.choiceGap || 10) : 0);
    r.visible = r.y + r.h <= availableBottomY + 0.01;
  });

  return { ui, def, panelX, panelY, panelW, panelH, innerX, textW, speakerY, bodyY, bodyLines, bodyLineHeight, choiceRects, overflow,
    hintY: Math.min(cursorY + (ui.hintLineHeight || 22) - 4, availableBottomY), portrait: { x: portraitX, y: panelY + (ui.portraitInsetY || 0), w: portraitW, h: portraitH } };
}
function drawEventUi() {
  if (gameState.phase !== 'event') return;
  const layout = computeEventUiLayout();
  if (!layout?.def) return;
  const { ui } = layout;
  ctx.save();
  ctx.fillStyle = `rgba(0, 0, 0, ${clamp(ui.overlayAlpha, 0, 0.5)})`;
  ctx.fillRect(0, 0, CONFIG.canvas.width, CONFIG.canvas.height);
  ctx.fillStyle = 'rgba(10, 18, 34, 0.82)';
  ctx.strokeStyle = 'rgba(151, 191, 226, 0.9)';
  ctx.lineWidth = 2;
  roundRect(ctx, layout.panelX, layout.panelY, layout.panelW, layout.panelH, ui.panelBorderRadius || 14);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = '#a8daff';
  ctx.font = `bold ${ui.speakerFontSize || 24}px sans-serif`;
  ctx.fillText(layout.def.speaker || '???', layout.innerX, layout.speakerY, layout.textW);
  ctx.fillStyle = '#fff';
  ctx.font = `${ui.textFontSize || 22}px sans-serif`;
  drawWrappedLines(layout.bodyLines, layout.innerX, layout.bodyY, layout.textW, layout.bodyLineHeight);
  if (gameState?.event?.showingResult) {
    ctx.fillStyle = '#d8e8ff';
    ctx.font = `${ui.hintFontSize || 16}px sans-serif`;
    ctx.fillText('Enter / Click で続行', layout.innerX, layout.hintY, layout.textW);
  } else {
    ctx.font = `${ui.choiceFontSize || 20}px sans-serif`;
    layout.choiceRects.forEach(rect => {
      if (!rect.visible) return;
      ctx.fillStyle = 'rgba(29, 58, 92, 0.9)';
      ctx.strokeStyle = 'rgba(166, 208, 245, 0.95)';
      ctx.lineWidth = 1.5;
      roundRect(ctx, rect.x, rect.y, rect.w, rect.h, 10);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = '#ecf6ff';
      drawWrappedLines(rect.lines, rect.x + (ui.choicePaddingX || 14), rect.y + (ui.choicePaddingY || 10) + (ui.choiceLineHeight || 26) - 6, rect.w - (ui.choicePaddingX || 14) * 2, ui.choiceLineHeight || 26);
    });
  }
  ctx.restore();
}

function render() {
  drawBackground();
  drawDuelArena();
  if (!gameState.player) return;
  drawRanges();
  drawXpGems();
  drawParticles();
  drawProjectiles();
  drawEnemies();
  if (gameState.phase === 'duel') drawDuelTododon();
  if (gameState.phase === 'duel') drawAirBullets();
  drawTododonWave();
  if (gameState.phase === 'ending') drawOverlays();
  if ((gameState.phase === 'ending' || gameState.phase === 'event' || gameState.phase === 'clear') && gameState.tododon) drawTododon();
  drawPlayer();
  drawHud();
  drawZoneGuidance();
  drawDuelBossHpBar();
  if (gameState.phase === 'duel') drawBossActionText();
  if (gameState.phase !== 'ending') drawOverlays();
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
    if (phase === 'playing' || phase === 'ending' || phase === 'duel') {
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

  if (gameState.phase === 'event') {
    const choicesVisible = !gameState?.event?.showingResult;
    const parsed = Number.parseInt(key, 10);
    const eventChoices = Array.isArray(getActiveEventDefinition()?.choices) ? getActiveEventDefinition().choices : [];
    if (choicesVisible && Number.isInteger(parsed) && parsed >= 1 && parsed <= eventChoices.length) {
      e.preventDefault();
      resolveEventChoice(parsed - 1);
      return;
    }
    if (gameState?.event?.showingResult && (key === 'Enter' || key === ' ')) {
      e.preventDefault();
      closeTododonEventToFlow(gameState?.event?.nextFlow || 'clear')
      return;
    }
    return;
  }

  const isMutationSelectionActive = gameState.phase === 'levelup' && (gameState.currentMutationOptions?.length || 0) > 0;
  if (isMutationSelectionActive) {
    const maxShortcuts = Number.isFinite(CONFIG.ui?.maxNumberShortcuts) ? CONFIG.ui.maxNumberShortcuts : 9;
    const parsed = Number.parseInt(key, 10);
    const isDigitShortcut = Number.isInteger(parsed) && parsed >= 1 && parsed <= maxShortcuts;
    if (isDigitShortcut) {
      const index = parsed - 1;
      if (gameState.currentMutationOptions?.[index]) {
        e.preventDefault();
        selectMutation(index);
      }
      return;
    }
  }

  const canUseCombatHotkeys = gameState.phase === 'playing' || gameState.phase === 'duel';
  if (gameState.phase === 'duel' && key === ' ') {
    e.preventDefault();
    gameState.input.manualFirePressed = true;
    gameState.input.manualFireHeld = true;
    return;
  }
  if (lowerKey === 'v' && canUseCombatHotkeys) {
    e.preventDefault();
    toggleWideMode();
    return;
  }
  if (lowerKey === 'b' && canUseCombatHotkeys) {
    e.preventDefault();
    toggleTododonWaveMode();
    return;
  }

  const canRevealRanges = gameState.phase === 'playing' || gameState.phase === 'ending' || gameState.phase === 'duel';
  if (lowerKey === 'r' && canRevealRanges) {
    e.preventDefault();
    revealRangeVisibility();
    return;
  }

  if (BLOCK_KEYS.includes(key)) e.preventDefault();
  gameState.keys[key] = true;
});
window.addEventListener('keyup', e => {
  if (BLOCK_KEYS.includes(e.key)) e.preventDefault();
  if (e.key === ' ') gameState.input.manualFireHeld = false;
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
    closeTododonEventToFlow(gameState?.event?.nextFlow || 'clear')
    return;
  }
  const def = getActiveEventDefinition();
  if (!def) return;
  const rect = canvas?.getBoundingClientRect?.();
  if (!rect) return;
  const mx = (e.clientX - rect.left) * (CONFIG.canvas.width / rect.width);
  const my = (e.clientY - rect.top) * (CONFIG.canvas.height / rect.height);
  const layout = computeEventUiLayout();
  const hitRect = Array.isArray(layout?.choiceRects) ? layout.choiceRects.find(rect => rect.visible && mx >= rect.x && mx <= rect.x + rect.w && my >= rect.y && my <= rect.y + rect.h) : null;
  if (hitRect) resolveEventChoice(hitRect.idx);
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
