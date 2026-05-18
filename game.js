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
    playerCardCooldown: 0.34,
    playerCardSpeed: 560,
    playerCardLifetime: 1.1,
    playerCardDamage: 11,
    playerCardRadius: 8,
    playerCardKnockback: 95,
    playerCardMaxProjectiles: 3,
    playerCardSpreadAngle: 0.04,
    playerCardVisualWidth: 15,
    playerCardVisualHeight: 24,
    playerCardRotationSpeed: 7.2,
    playerCardTrailAlpha: 0.3,
    playerCardHitFlashDuration: 0.12,
    playerCardBossDamageMultiplier: 1,
    playerCardEnemyDamageMultiplier: 0.7,
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
      tsurumatsu: 'basic',
      umeguisu: 'drifter',
      utagezakura: 'drifter',
      hototofuji: 'support',
      yatsutsubata: 'basic',
      botancho: 'drifter',
      hagnoshishi: 'charger',
      gachirinbo: 'support',
      kikusakazuki: 'support',
      momijika: 'charger',
      yanagaeru: 'drifter',
      gotouou: 'heavy',
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
      tsurumatsu: 'damage_passable',
      umeguisu: 'passable',
      utagezakura: 'passable',
      hototofuji: 'snare',
      yatsutsubata: 'snare_damage',
      botancho: 'passable',
      hagnoshishi: 'damage_passable',
      gachirinbo: 'passable',
      kikusakazuki: 'snare',
      momijika: 'damage_passable',
      yanagaeru: 'passable',
      gotouou: 'solid_damage',
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
    transitionOverlayAlpha: 0.32,
    zoneTransitionCooldown: 0.18,
    messageDuration: 3,
    boundaryMessageDuration: 1.8,
    boundaryMessageCooldown: 1,
    boundaryPushback: 22,
    pressureSpawnRateMultiplier: 0.2,
    pressureEnemyBonus: 1,
    exitIndicatorWidth: 36,
    exitIndicatorPulseSpeed: 3.2,
    hub: { id: 'hub', label: '中央庭園' },
    seasons: {
      spring: { id: 'spring', label: '春回廊', zones: ['pine', 'plum', 'cherry'] },
      summer: { id: 'summer', label: '夏回廊', zones: ['wisteria', 'iris', 'peony'] },
      autumn: { id: 'autumn', label: '秋回廊', zones: ['bush_clover', 'pampas', 'chrysanthemum'] },
      winter: { id: 'winter', label: '冬回廊', zones: ['maple', 'willow', 'paulownia'] },
    },
  },
  hanafudaBeasts: {
    pine_crane: { label: 'ツルマツ', month: 1, motionProfile: 'glide', territoryBehavior: 'wide_patrol', terrainAffinity: 'wind' },
    plum_warbler: { label: 'ウメグイス', month: 2, motionProfile: 'flutter', territoryBehavior: 'evasive', terrainAffinity: 'branches' },
    cherry_feast: { label: 'ウタゲザクラ', month: 3, motionProfile: 'drift', territoryBehavior: 'swarm', terrainAffinity: 'open_ground' },
    wisteria_cuckoo: { label: 'ホトトフジ', month: 4, motionProfile: 'sway', territoryBehavior: 'vertical_movement', terrainAffinity: 'vines' },
    iris_bridge: { label: 'ヤツツバタ', month: 5, motionProfile: 'slide', territoryBehavior: 'lane_control', terrainAffinity: 'bridges' },
    peony_butterfly: { label: 'ボタンチョウ', month: 6, motionProfile: 'float', territoryBehavior: 'drifter', terrainAffinity: 'flowers' },
    bushclover_boar: { label: 'ハギノシシ', month: 7, motionProfile: 'stomp', territoryBehavior: 'charge', terrainAffinity: 'narrow_paths' },
    moon_pampas: { label: 'ガチリンボウ', month: 8, motionProfile: 'pulse', territoryBehavior: 'orbit', terrainAffinity: 'moonlight' },
    chrysanthemum_sake: { label: 'キクサカズキ', month: 9, motionProfile: 'sway', territoryBehavior: 'counter', terrainAffinity: 'circles' },
    maple_deer: { label: 'モミジカ', month: 10, motionProfile: 'dash', territoryBehavior: 'retreat_charge', terrainAffinity: 'forest' },
    willow_frog: { label: 'ヤナガエル', month: 11, motionProfile: 'bounce', territoryBehavior: 'water_hop', terrainAffinity: 'wetlands' },
    phoenix_paulownia: { label: 'ゴトウオウ', month: 12, motionProfile: 'rise', territoryBehavior: 'territorial_circle', terrainAffinity: 'sky' },
  },
  zones: {
    hub: { id: 'hub', name: '中央庭園', label: '中央庭園', terrainStyle: 'sanctuary', palette: { bg: '#e7f1ec', overlay: 'rgba(206,255,230,0.08)' }, enemyTypes: [], maxEnemies: 0, spawnInterval: 99, durationBeforePressure: 999, durationBeforeExit: 0, exits: { north: 'spring_corridor', east: 'summer_corridor', south: 'autumn_corridor', west: 'winter_corridor' }, obstacles: [] },
    spring_corridor: { id: 'spring_corridor', name: '春回廊', label: '春回廊', terrainStyle: 'corridor', palette: { bg: '#dae8cf', overlay: 'rgba(244,255,234,0.08)' }, enemyTypes: ['umeguisu'], maxEnemies: 2, spawnInterval: 2.5, durationBeforePressure: 999, durationBeforeExit: 2, exits: { south: 'hub', east: 'pine', north: 'plum', west: 'cherry' }, obstacles: [] },
    summer_corridor: { id: 'summer_corridor', name: '夏回廊', label: '夏回廊', terrainStyle: 'corridor', palette: { bg: '#d4eee3', overlay: 'rgba(210,255,238,0.08)' }, enemyTypes: ['hototofuji'], maxEnemies: 2, spawnInterval: 2.4, durationBeforePressure: 999, durationBeforeExit: 2, exits: { west: 'hub', north: 'wisteria', east: 'iris', south: 'peony' }, obstacles: [] },
    autumn_corridor: { id: 'autumn_corridor', name: '秋回廊', label: '秋回廊', terrainStyle: 'corridor', palette: { bg: '#f1dec4', overlay: 'rgba(255,236,210,0.08)' }, enemyTypes: ['gachirinbo'], maxEnemies: 2, spawnInterval: 2.4, durationBeforePressure: 999, durationBeforeExit: 2, exits: { north: 'hub', east: 'bush_clover', south: 'pampas', west: 'chrysanthemum' }, obstacles: [] },
    winter_corridor: { id: 'winter_corridor', name: '冬回廊', label: '冬回廊', terrainStyle: 'corridor', palette: { bg: '#d7e2ef', overlay: 'rgba(225,240,255,0.08)' }, enemyTypes: ['yanagaeru'], maxEnemies: 2, spawnInterval: 2.4, durationBeforePressure: 999, durationBeforeExit: 2, exits: { east: 'hub', north: 'maple', west: 'willow', south: 'paulownia' }, obstacles: [] },
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
    debug: {
      hudPanelX: 16,
      hudPanelY: 16,
      hudPanelWidth: 320,
      hudBaseHeight: 170,
      hudLineHeight: 18,
      hudTextStartX: 26,
      hudTextStartY: 36,
      hudBossDebugStartY: 366,
      menuMaxHeightVh: 80,
    },
  },
  meta: {
    coinsPerKill: 1,
    coinsPerLevel: 3,
    clearBonusCoins: 25,
    debugRewardsEnabled: false,
  },
  debug: {
    visible: false,
    menuOpen: false,
    bossMenuOpen: false,
    enabled: false,
    fastExitUnlockEnabled: true,
    fastExitUnlockSeconds: 3,
    targetSurvivalTimeOverride: null,
    debugPlayerInvincibleDefault: false,
    matsuruFastModeDefault: false,
    matsuruActionSpeedMultiplier: 1.18,
    matsuruIdleDurationFast: 0.62,
    matsuruPrepareDurationFast: 0.42,
    matsuruNeedleCooldownFast: 1.25,
    matsubaTurretActivationDelay: 0.9,
    matsubaTurretFireInterval: 1.6,
    matsubaDebugGrowthMultiplier: 1.55,
    matsuruDebugActionSpeedMultiplier: 1.9,
    modes: [
      { id: 'normal', label: 'Normal Start', startMode: 'normal' },
      {
        id: 'boss_battle',
        label: 'Boss Battle',
        startMode: 'boss_battle',
        bosses: [
          { id: 'tododon', label: 'VS Tododon', description: 'Territorial giant creature battle', imageKey: 'boss_tododon' },
          { id: 'red_light', label: 'VS Red Light Biolume', description: 'Pulse rhythm ecosystem battle', imageKey: 'boss_red_light' },
          { id: 'matsuru', label: 'VS Matsuru / マツル', description: 'Counter timing fight in the pine field', imageKey: 'boss_matsuru' },
        ],
      },
    ],
  },
  bossBattle: {
    bosses: {
      tododon: { id: 'tododon', label: 'VS Tododon', description: '巨大な縄張り生物との位置取り戦', imageKey: 'boss_tododon' },
      red_light: { id: 'red_light', label: 'VS Red Light Biolume', description: '光脈のリズムを読む生態戦', imageKey: 'boss_red_light' },
      matsuru: { id: 'matsuru', label: 'VS Matsuru / マツル', description: '松風の隙を突く間合い戦', imageKey: 'boss_matsuru' },
    },
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
  redLight: {
    maxHp: 120,
    gazeDuration: 3.8,
    blindDuration: 2.2,
    movementThreshold: 2,
    punishmentDamage: 18,
    punishmentStunDuration: 0.9,
    punishmentFlashDuration: 0.45,
    dangerPhrase: 'だッ！',
    punishmentKnockbackX: 16,
    punishmentKnockbackY: 12,
    dialogueNormalMinDelay: 0.03,
    dialogueNormalMaxDelay: 0.12,
    dialoguePauseMinDelay: 0.15,
    dialoguePauseMaxDelay: 0.35,
    dialogueDramaticMinDelay: 0.11,
    dialogueDramaticMaxDelay: 0.2,
    dialogueHoldAfterComplete: 0.4,
    dialogueBoxHeight: 52,
    dialogueBottomMargin: 18,
    eyeOpenScale: 1,
    eyeClosedScale: 0.72,
    gazeOverlayAlpha: 0.18,
    punishmentOverlayAlpha: 0.38,
    bossX: 760,
    bossY: 210,
    bodyRadius: 130,
    weakPointRadius: 58,
    vulnerabilityMultiplier: 1.8,
    gazeDamageMultiplier: 0,
    vulnerableDamageMultiplier: 1.8,
    lineOfSightGrace: 0.08,
  },

  haginoinoshishi: {
    arena: { arenaWidth: 960, arenaHeight: 540, playerStartX: 180, playerStartY: 270, bossStartX: 760, bossStartY: 260 },
    boss: {
      radius: 76, maxHp: 240, maxHpForBarOrDisplay: 240, idleDuration: 1.2, prepareDuration: 0.95, chargeDuration: 2.1, recoveryDuration: 1.0,
      exhaustedDuration: 2.0, finalExhaustedDuration: 8.0, walkSpeed: 70, chargeSpeed: 320, chargeSpeedRage: 350, chargeTurnRate: 0.34, chargeTurnRateRage: 0.42, chargeAimLockAtPrepare: true, chargeMaxCorrectionDegrees: 16, chargeCorrectionFalloff: 0.74, ruinedGroundChargeTurnRateMultiplier: 0.5,
      contactDamage: 14, chargeDamage: 24, damageCooldown: 0.34, playerKnockback: 140, fatigueRequiredForFinal: 100, fatigueFromChargeMiss: 18,
      fatigueFromLongCharge: 10, fatigueFromSlidingOnRuinedGround: 14, rageThreshold: 0.6, rageSpeedMultiplier: 1.1, rageCooldownMultiplier: 0.86, ragePrepareMultiplier: 0.8,
    },
    maxHp: 240, normalHitDamage: 12, recoveryHitDamageMultiplier: 1.7, exhaustedHitDamageMultiplier: 2.2, contactHitResistanceMultiplier: 0.5, hitFlashDuration: 0.25, hitKnockback: 18, defeatMessageDuration: 2.4,
    phase2HpRatio: 0.66, phase3HpRatio: 0.33,
    phase1ChargeCooldown: 1.2, phase1PrepareDuration: 0.95, phase1ChargeSpeed: 320, phase1RecoveryDuration: 1.05, phase1GroundRecoveryPerSecond: 0.09,
    phase2ChargeCooldown: 0.85, phase2PrepareDuration: 0.82, phase2ChargeSpeed: 340, phase2RecoveryDuration: 0.8, phase2GroundRecoveryPerSecond: 0.055, phase2TrailSpawnDistanceMultiplier: 0.84,
    phase3ChargeCooldown: 0.55, phase3PrepareDuration: 0.72, phase3ChargeSpeed: 360, phase3RecoveryDuration: 0.62, phase3GroundRecoveryPerSecond: 0.032, phase3TrailSpawnDistanceMultiplier: 0.68,
    rewardTechniqueId: 'haginoinoshishi_charge', rewardTechniqueName: 'ハギノシシの突進', rewardMessage: 'ハギノシシの技を取得した', returnToHubDelay: 2.1, hubZoneId: 'hub',
    ruinedGround: {
      trailSpawnDistance: 26, chargeTrailRadius: 38, recoveryTrailRadius: 30, walkTrailRadius: 22, trailDeepenRadius: 46, trailDeepenAmount: 0.22, maxTrailPatches: 96,
      trailLifetime: 16, trailRecoveryPerSecond: 0.06, ruinedGroundSpeedMultiplier: 0.5, minimumRuinedGroundSpeedMultiplier: 0.4,
      turnPenaltyMultiplier: 0.72, maxRuinLevel: 1, playerCleanGroundSpeedMultiplier: 1, boarSlideMultiplierOnRuinedGround: 1.18,
    },
    visuals: {
      dustParticleCount: 0, stompParticleCount: 6, trailColorFresh: 'rgba(111,82,61,0.22)', trailColorDeep: 'rgba(66,45,32,0.45)',
      bossColorFallback: '#3e342f', impactShakeDuration: 0.2, impactShakeStrength: 5,
      imageScale: 2.3, prepareSquashY: 0.9, chargeStretchX: 1.1, exhaustedTilt: 0.09, shadowScale: 1.15, spriteFaces: 'right',
    },
    debug: { debugInvincibleDefault: false, debugFastBossMultiplier: 1 },
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
    matsuruX: 770,
    matsuruY: 270,
    matsuruRadius: 84,
    matsuruHp: 560,
    matsuruMoveSpeed: 90,
    matsuruIdleDuration: 0.9,
    matsuruPrepareDuration: 0.62,
    matsuruOpeningIdleDuration: 0.24,
    matsuruWindDuration: 1.5,
    matsuruReturnDuration: 1.0,
    matsuruRecoveryDuration: 2.0,
    matsuruCounterTellDuration: 0.3,
    matsuruCounterDuration: 0.45,
    matsuruNeedleCooldown: 5.2,
    matsuruNeedleSpeed: 130,
    matsuruNeedleDamage: 10,
    matsuruNeedleFanCount: 2,
    matsuruNeedleLife: 3.6,
    matsuruLeafSpeed: 122,
    matsuruLeafLifetime: 6.2,
    matsuruLeafInitialCount: 2,
    matsuruLeafStickPadding: 16,
    matsuruTurretActivationDelay: 1.2,
    matsuruTurretFireInterval: 2.1,
    matsubaPulseInterval: 2.1,
    matsubaPulseTelegraphDuration: 0.52,
    matsubaPulseWaveVisualDuration: 0.32,
    matsubaPulseSpreadDegrees: 16,
    matsubaPulseMaxTurretsPerWave: 10,
    matsubaPulseFireJitter: 0.09,
    matsubaPulseShakeStrength: 0.85,
    matsukazePulseSynergyDelay: 0.35,
    matsukazePulseAcceleration: 0.22,
    matsuruTurretMaxCorrectionAngle: 0.38,
    matsuruTurretBaseSpreadAngle: 0.28,
    matsuruTurretLeafSpawnSpeedScale: 0.9,
    matsuruTurretLeafDamageScale: 0.8,
    matsuruTurretMaxActive: 12,
    matsuruTurretDormantTimeout: 11.5,
    matsuruTurretDecayDuration: 6.5,
    matsuruLeafMaxCount: 80,
    matsuruLeafMaxMovingCount: 28,
    matsuruMatsukazeLeafSpeedBoost: 1.38,
    matsuruMatsukazeTurretTurnStrength: 0.48,
    matsuruMatsukazeReactivateCount: 3,
    matsuruMatsukazeBlowAwayCount: 2,
    matsuruWindDamage: 0,
    matsuruWindWidth: 160,
    matsuruWindHeight: 120,
    matsukazeDamage: 0,
    matsukazeWidth: 330,
    matsukazeHeight: 220,
    matsukazePrepareDuration: 0.62,
    matsukazeDuration: 1.5,
    matsukazePush: 280,
    matsukazeTargetClampMargin: 32,
    matsuruMatsukazeTargetLockAhead: 0.2,
    matsuruMatsukazePulseBlockWindow: 0.35,
    matsuruWindHitCooldown: 0.25,
    matsuruWindPush: 280,
    matsuruTurretMinSeparation: 10,
    matsuruTurretSpawnSafetyRadius: 42,
    matsuruTurretTrapNeighborRadius: 34,
    matsuruTurretTrapNeighborLimit: 5,
    matsuruDecorativeLeafDuration: 3.2,
    matsuruTurretAimRandomness: 0.2,
    matsuruTurretWallAvoidanceStrength: 0.32,
    matsubaTurretAimSpreadDegrees: 16,
    matsubaTurretAimJitterDistance: 28,
    matsubaTurretPairAngleDegrees: 12,
    matsubaTurretAimBiasToPlayer: 0.78,
    matsubaAntiWallBiasStrength: 0.22,
    matsubaLeafSpeed: 122,
    matsuruProjectileMaxCount: 120,
    matsuruCounterDamage: 22,
    matsuruCounterRange: 170,
    matsuruCounterSpeed: 560,
    matsuruPassiveReduction: 0.15,
    matsuruPassiveKnockbackScale: 0.22,
    matsuruPassiveEmpowerDelay: 4.5,
    matsuruPassiveEmpowerDamageScale: 1.35,
    TSURUGAESHI_TRIGGER_RANGE: 90,
    TSURUGAESHI_TRIGGER_CHANCE: 0.85,
    TSURUGAESHI_TELL_TIME: 0.28,
    TSURUGAESHI_SPEED: 620,
    TSURUGAESHI_DURATION: 0.28,
    TSURUGAESHI_DAMAGE: 35,
    TSURUGAESHI_KNOCKBACK: 260,
    TSURUGAESHI_COOLDOWN: 1.2,
    MATSUBA_PROJECTILE_COUNT: 5,
    MATSUBA_SPREAD_ANGLE: 0.9,
    MATSUBA_PROJECTILE_SPEED: 170,
    MATSUBA_PROJECTILE_DAMAGE: 12,
    MATSUBA_PROJECTILE_RADIUS: 7,
    MATSUBA_CAST_TIME: 0.45,
    MATSUBA_COOLDOWN: 2.4,
  },
  assets: {
    playerImage: 'assets/Crayfish.png',
    playerCardImage: 'assets/cards/hanafuda_card.png',
    creatures: {
      tsurumatsu: 'assets/Crayfish.png',
      botancho: 'assets/botancho.png',
      hagnoshishi: 'assets/inoshissi.png',
      yanagaeru: 'assets/yanagaeru.png',
      gotouou: 'assets/gotouou.png',
      kikusakazuki: 'assets/kikusakazuki.png',
    },
    bosses: {
      tododon: 'assets/bosses/tododon.png',
      red_light: 'assets/bosses/red_light.png',
      matsuru: 'assets/monsters/matsuru.png',
      haginoshishi: 'assets/bosses/haginoshishi.png',
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
    currentZoneId: 'hub',
    previousZoneId: null,
    zoneTimer: 0,
    pressure: 0,
    transitionReady: false,
    exitUnlocked: false,
    transitionTimer: 0,
    isTransitioning: false,
    transitionDirection: null,
    transitionTargetZone: null,
    zoneTransitionCooldownTimer: 0,
    zoneMessage: '',
    zoneMessageTimer: 0,
    tododonEncounterTriggered: false,
    redLightBossTriggered: false,
    boundaryMessage: '',
    boundaryMessageTimer: 0,
    boundaryMessageCooldown: 0,
  },
};


Object.assign(CONFIG.zones, {
  pine: { id:'pine', name:'松領', label:'松領', terrainStyle:'wind_arena', palette:{bg:'#b9d6b8',overlay:'rgba(209,242,210,0.08)'}, enemyTypes:['tsurumatsu'], maxEnemies:7, spawnInterval:1.25, durationBeforePressure:999, durationBeforeExit:5, exits:{west:'spring_corridor'}, territoryBoss:'matsuru', obstacles:[] },
  plum: { id:'plum', name:'梅領', label:'梅領', terrainStyle:'branch_arena', palette:{bg:'#e1d7ee',overlay:'rgba(244,228,255,0.08)'}, enemyTypes:['umeguisu'], maxEnemies:8, spawnInterval:1.15, durationBeforePressure:999, durationBeforeExit:5, exits:{south:'spring_corridor'}, obstacles:[] },
  cherry: { id:'cherry', name:'桜領', label:'桜領', terrainStyle:'open_arena', palette:{bg:'#f2d7e3',overlay:'rgba(255,232,242,0.08)'}, enemyTypes:['utagezakura'], maxEnemies:10, spawnInterval:1.0, durationBeforePressure:999, durationBeforeExit:5, exits:{east:'spring_corridor'}, obstacles:[] },
  wisteria: { id:'wisteria', name:'藤領', label:'藤領', terrainStyle:'vine_arena', palette:{bg:'#d9d0f1',overlay:'rgba(236,223,255,0.08)'}, enemyTypes:['hototofuji'], maxEnemies:8, spawnInterval:1.18, durationBeforePressure:999, durationBeforeExit:5, exits:{south:'summer_corridor'}, obstacles:[] },
  iris: { id:'iris', name:'杜若領', label:'杜若領', terrainStyle:'bridge_lanes', palette:{bg:'#cde5f1',overlay:'rgba(224,246,255,0.08)'}, enemyTypes:['yatsutsubata'], maxEnemies:8, spawnInterval:1.15, durationBeforePressure:999, durationBeforeExit:5, exits:{west:'summer_corridor'}, obstacles:[] },
  peony: { id:'peony', name:'牡丹領', label:'牡丹領', terrainStyle:'flower_arena', palette:{bg:'#f0d1da',overlay:'rgba(255,225,235,0.08)'}, enemyTypes:['botancho'], maxEnemies:9, spawnInterval:1.05, durationBeforePressure:999, durationBeforeExit:5, exits:{north:'summer_corridor'}, obstacles:[] },
  bush_clover: { id:'bush_clover', name:'萩領', label:'萩領', terrainStyle:'narrow_paths', palette:{bg:'#d9c8b6',overlay:'rgba(245,224,198,0.08)'}, enemyTypes:['hagnoshishi'], maxEnemies:7, spawnInterval:1.2, durationBeforePressure:999, durationBeforeExit:5, exits:{west:'autumn_corridor'}, obstacles:[] },
  pampas: { id:'pampas', name:'芒領', label:'芒領', terrainStyle:'moon_field', palette:{bg:'#d6d0b7',overlay:'rgba(244,239,210,0.08)'}, enemyTypes:['gachirinbo'], maxEnemies:8, spawnInterval:1.15, durationBeforePressure:999, durationBeforeExit:5, exits:{north:'autumn_corridor'}, obstacles:[] },
  chrysanthemum: { id:'chrysanthemum', name:'菊領', label:'菊領', terrainStyle:'ring_arena', palette:{bg:'#ebdf9f',overlay:'rgba(255,245,196,0.08)'}, enemyTypes:['kikusakazuki'], maxEnemies:7, spawnInterval:1.2, durationBeforePressure:999, durationBeforeExit:5, exits:{east:'autumn_corridor'}, obstacles:[] },
  maple: { id:'maple', name:'紅葉領', label:'紅葉領', terrainStyle:'forest_arena', palette:{bg:'#e0b892',overlay:'rgba(255,214,186,0.08)'}, enemyTypes:['momijika'], maxEnemies:8, spawnInterval:1.1, durationBeforePressure:999, durationBeforeExit:5, exits:{south:'winter_corridor'}, obstacles:[] },
  willow: { id:'willow', name:'柳領', label:'柳領', terrainStyle:'wetland_arena', palette:{bg:'#c4d8c0',overlay:'rgba(210,245,213,0.08)'}, enemyTypes:['yanagaeru'], maxEnemies:9, spawnInterval:1.1, durationBeforePressure:999, durationBeforeExit:5, exits:{east:'winter_corridor'}, obstacles:[] },
  paulownia: { id:'paulownia', name:'桐領', label:'桐領', terrainStyle:'sky_ring', palette:{bg:'#d9d2ea',overlay:'rgba(236,229,255,0.08)'}, enemyTypes:['gotouou'], maxEnemies:6, spawnInterval:1.25, durationBeforePressure:999, durationBeforeExit:5, exits:{north:'winter_corridor'}, territoryBoss:'red_light', obstacles:[] }
});

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
  playerProjectiles: [],
  input: { manualFirePressed: false, manualFireHeld: false },
  screenDarkness: 0,
  currentMutationOptions: [],
  nextEnemyId: 1,
  debug: {
    enabled: false,
    targetSurvivalTimeOverride: null,
    bossBattleMode: false,
    bossType: null,
    playerInvincible: Boolean(CONFIG.debug?.debugPlayerInvincibleDefault),
    matsuruFastMode: Boolean(CONFIG.debug?.matsuruFastModeDefault),
    matsuruActionSpeedMultiplierOverride: Number(CONFIG.debug?.matsuruActionSpeedMultiplier) || 1,
    matsubaGrowthMultiplierOverride: 1,
  },
  startUi: {
    debugMenuOpen: false,
    bossBattleMenuOpen: false,
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
  haginoinoshishi_defeat: {
    speaker: 'ハギノシシ',
    text: 'フゴ……',
    script: [
      { speaker: 'ハギノシシ', text: 'フゴ……' },
      { speaker: 'ハギノシシ', text: 'オマエ、ヨク ヨケタ' },
      { speaker: 'System', text: 'ハギノシシの技を取得した' },
      { speaker: 'System', text: '中央庭園へ戻ります' },
    ],
    nextFlow: 'haginoinoshishi_return_hub',
  },
};

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const startModal = document.getElementById('startModal');
const startNormalBtn = document.getElementById('startNormalBtn');
const openDebugMenuBtn = document.getElementById('openDebugMenuBtn');
const startMainMenu = document.getElementById('startMainMenu');
const debugMenuModal = document.getElementById('debugMenuModal');
const debugPresetOptions = document.getElementById('debugPresetOptions');
const debugToggleBtn = document.getElementById('debugToggleBtn');
const debugInfoPanel = document.getElementById('debugInfoPanel');
const debugMenuCloseBtn = document.getElementById('debugMenuCloseButton');
const startMetaStats = document.getElementById('startMetaStats');
const startDebugBtn = document.getElementById('startDebugBtn');
const debugBackBtn = document.getElementById('debugBackBtn');

const BOSS_REGISTRY = {
  tododon: {
    id: 'tododon',
    label: 'VS Tododon',
    status: 'playable',
    description: '巨大な縄張り生物との位置取り戦',
    imageKey: 'boss_tododon',
    start: () => startDuelBattle(),
  },
  red_light: {
    id: 'red_light',
    label: 'VS Red Light Biolume',
    status: 'playable',
    description: '光脈のリズムを読む生態戦',
    imageKey: 'boss_red_light',
    start: () => startRedLightEncounter(),
  },
  matsuru: {
    id: 'matsuru',
    label: 'VS Matsuru / マツル',
    status: 'playable',
    description: '松風の隙を突く間合い戦',
    imageKey: 'boss_matsuru',
    start: () => startMatsuruEncounter(),
  },
  haginoinoshishi: {
    id: 'haginoinoshishi',
    label: 'VS Haginoinoshishi / ハギノシシ',
    status: 'playable',
    description: '荒れ地と突進を制御する縄張り戦',
    imageKey: 'boss_haginoshishi',
    start: () => startHaginoinoshishiEncounter(),
  },
  gachirinbou: {
    id: 'gachirinbou',
    label: 'ガチリンボウ',
    status: 'concept',
    description: '設計済み。満月光とすすきの露出管理戦。',
    start: null,
  },
};

const BOSS_STATUS_LABELS = {
  playable: 'PLAYABLE',
  prototype: 'PROTOTYPE',
  concept: 'CONCEPT ONLY',
};

const BOSS_STATUS_ORDER = ['playable', 'prototype', 'concept'];
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


function ensureDebugState() {
  if (!gameState.debug || typeof gameState.debug !== 'object') {
    gameState.debug = {
      visible: false,
      menuOpen: false,
      bossMenuOpen: false,
      showStats: false,
      playerInvincible: Boolean(CONFIG.debug?.debugPlayerInvincibleDefault),
      matsuruFastMode: Boolean(CONFIG.debug?.matsuruFastModeDefault),
      matsuruActionSpeedMultiplierOverride: Number(CONFIG.debug?.matsuruActionSpeedMultiplier) || 1,
      matsubaGrowthMultiplierOverride: 1,
    };
  }
}

function syncDebugMenuDom() {
  ensureDebugState();
  if (!debugMenuModal) return;
  const shouldShow = Boolean(gameState.debug.visible) && (Boolean(gameState.debug.menuOpen) || Boolean(gameState.debug.bossMenuOpen));
  debugMenuModal.classList.toggle('hidden', !shouldShow);
  debugMenuModal.setAttribute('aria-hidden', shouldShow ? 'false' : 'true');
  debugMenuModal.style.display = shouldShow ? 'flex' : 'none';
  debugMenuModal.style.pointerEvents = shouldShow ? 'auto' : 'none';
}

function closeDebugMenu() {
  ensureDebugState();
  gameState.debug.menuOpen = false;
  gameState.debug.bossMenuOpen = false;
  if (gameState.startUi && typeof gameState.startUi === 'object') {
    gameState.startUi.debugMenuOpen = false;
    gameState.startUi.bossBattleMenuOpen = false;
  }
  syncDebugMenuDom();
}

function resetState(nextPhase = gameState.phase || 'start') {
  if (!gameState.debug || typeof gameState.debug !== 'object') gameState.debug = {};
  if (!gameState.startUi || typeof gameState.startUi !== 'object') gameState.startUi = {};
  const preservedDebug = {
    visible: Boolean(gameState?.debug?.visible),
    menuOpen: Boolean(gameState?.debug?.menuOpen),
    bossMenuOpen: Boolean(gameState?.debug?.bossMenuOpen),
    enabled: Boolean(gameState?.debug?.enabled),
    targetSurvivalTimeOverride: Number.isFinite(gameState?.debug?.targetSurvivalTimeOverride) ? gameState.debug.targetSurvivalTimeOverride : null,
    bossBattleMode: Boolean(gameState?.debug?.bossBattleMode),
    bossType: typeof gameState?.debug?.bossType === 'string' ? gameState.debug.bossType : null,
    playerInvincible: Boolean(gameState?.debug?.playerInvincible),
    matsuruFastMode: Boolean(gameState?.debug?.matsuruFastMode),
    matsuruActionSpeedMultiplierOverride: Number.isFinite(gameState?.debug?.matsuruActionSpeedMultiplierOverride) ? gameState.debug.matsuruActionSpeedMultiplierOverride : (Number(CONFIG.debug?.matsuruActionSpeedMultiplier) || 1),
    matsubaGrowthMultiplierOverride: Number.isFinite(gameState?.debug?.matsubaGrowthMultiplierOverride) ? gameState.debug.matsubaGrowthMultiplierOverride : 1,
  };
  const preservedStartUi = {
    debugMenuOpen: Boolean(gameState?.startUi?.debugMenuOpen),
    bossBattleMenuOpen: Boolean(gameState?.startUi?.bossBattleMenuOpen),
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
    playerProjectiles: [],
    input: { manualFirePressed: false, manualFireHeld: false },
    rangeVisibility: { visible: false, timer: 0 },
    world: { ...CONFIG.worldStateDefaults, visitedZones: { hub: true }, clearedZones: {}, availableExits: {} },
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
      facingY: 0,
      contactSlowMultiplier: 1,
      prevX: CONFIG.canvas.width / 2,
      prevY: CONFIG.canvas.height / 2,
      redLightStunTimer: 0,
      redLightPunishFlashTimer: 0,
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
  if (!gameState.debug || typeof gameState.debug !== 'object') gameState.debug = { visible: false, menuOpen: false, bossMenuOpen: false };
  const preservedDebug = {
    visible: Boolean(gameState?.debug?.visible),
    menuOpen: Boolean(gameState?.debug?.menuOpen),
    bossMenuOpen: Boolean(gameState?.debug?.bossMenuOpen),
    enabled: Boolean(gameState?.debug?.enabled),
    targetSurvivalTimeOverride: Number.isFinite(gameState?.debug?.targetSurvivalTimeOverride) ? gameState.debug.targetSurvivalTimeOverride : null,
    bossBattleMode: Boolean(gameState?.debug?.bossBattleMode),
    bossType: typeof gameState?.debug?.bossType === 'string' ? gameState.debug.bossType : null,
    playerInvincible: Boolean(gameState?.debug?.playerInvincible),
    matsuruFastMode: Boolean(gameState?.debug?.matsuruFastMode),
    matsuruActionSpeedMultiplierOverride: Number.isFinite(gameState?.debug?.matsuruActionSpeedMultiplierOverride) ? gameState.debug.matsuruActionSpeedMultiplierOverride : (Number(CONFIG.debug?.matsuruActionSpeedMultiplier) || 1),
    matsubaGrowthMultiplierOverride: Number.isFinite(gameState?.debug?.matsubaGrowthMultiplierOverride) ? gameState.debug.matsubaGrowthMultiplierOverride : 1,
  };
  resetState('playing');
  gameState.debug = preservedDebug;
  gameState.startUi.debugMenuOpen = false;
  gameState.startUi.bossBattleMenuOpen = false;
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
  const isDebugMenuOpen = Boolean(gameState?.startUi?.debugMenuOpen) && Boolean(gameState?.debug?.visible);
  startMainMenu?.classList.toggle('hidden', isDebugMenuOpen);
  syncDebugMenuDom();
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

function startScriptedEvent(eventId, nextFlowOverride = null) {
  const def = eventId ? EVENT_DEFINITIONS[eventId] : null;
  if (!def) return;
  const script = Array.isArray(def.script) ? def.script.filter(step => step && typeof step === 'object') : [];
  if (!script.length) return;
  gameState.phase = 'event';
  gameState.previousPhaseBeforePause = null;
  gameState.isPaused = true;
  gameState.pendingEvent = null;
  gameState.event = {
    id: eventId,
    step: 'script',
    showingResult: true,
    script,
    scriptIndex: 0,
    resultText: String(script[0]?.text || ''),
    speaker: String(script[0]?.speaker || def.speaker || 'System'),
    nextFlow: nextFlowOverride || def.nextFlow || 'clear',
  };
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

function advanceScriptedEventOrClose() {
  const script = Array.isArray(gameState?.event?.script) ? gameState.event.script : [];
  if (!script.length) {
    closeEventToFlow(gameState?.event?.nextFlow || 'clear');
    return;
  }
  const nextIndex = (Number(gameState?.event?.scriptIndex) || 0) + 1;
  if (nextIndex >= script.length) {
    closeEventToFlow(gameState?.event?.nextFlow || 'clear');
    return;
  }
  const nextStep = script[nextIndex] || {};
  gameState.event.scriptIndex = nextIndex;
  gameState.event.resultText = String(nextStep.text || '');
  gameState.event.speaker = String(nextStep.speaker || 'System');
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

function returnToHubFromBoss() {
  const duel = gameState?.duel;
  const player = gameState?.player;
  if (!player) return;
  const cfg = CONFIG.haginoinoshishi || {};
  const hubId = String(cfg.hubZoneId || 'hub');
  if (gameState.world) {
    gameState.world.currentZoneId = hubId;
    gameState.world.clearedZones = gameState.world.clearedZones || {};
    gameState.world.clearedZones.haginoinoshishi = true;
  }
  gameState.duel = null;
  gameState.projectiles = [];
  gameState.manualShots = [];
  gameState.playerProjectiles = [];
  gameState.particles = [];
  gameState.phase = 'playing';
  gameState.isPaused = false;
  gameState.previousPhaseBeforePause = null;
  eventModal?.classList.add('hidden');
  player.x = CONFIG.canvas.width * 0.5;
  player.y = CONFIG.canvas.height * 0.5;
  player.contactSlowMultiplier = 1;
  player.turnPenaltyMultiplier = 1;
  if (duel && Array.isArray(duel.ruinedGround)) duel.ruinedGround = [];
}

function closeEventToFlow(nextFlow = 'clear') {
  if (nextFlow === 'haginoinoshishi_return_hub') {
    gameState.event = null;
    returnToHubFromBoss();
    return;
  }
  closeTododonEventToFlow(nextFlow);
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
  gameState.playerProjectiles = [];
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


function startHaginoinoshishiEncounter() {
  const cfg = CONFIG.haginoinoshishi || {}; const a = cfg.arena || {}; const bcfg = cfg.boss || {};
  gameState.phase = 'duel'; gameState.isPaused = false; gameState.isGameOver = false; gameState.projectiles = []; gameState.manualShots = []; gameState.playerProjectiles = []; gameState.particles = [];
  const p = gameState.player; if (!p) return;
  p.x = clamp(Number(a.playerStartX) || 180, p.radius, (Number(a.arenaWidth) || CONFIG.canvas.width) - p.radius); p.y = clamp(Number(a.playerStartY) || 270, p.radius, (Number(a.arenaHeight) || CONFIG.canvas.height) - p.radius);
  gameState.duel = { active: true, isComplete: false, timer: 0, bossType: 'haginoinoshishi', ruinedGround: [], duelParticles: [], cameraShakeTimer: 0, cameraShakeStrength: 0,
    boss: { id:'duel_haginoinoshishi', x:Number(a.bossStartX)||760, y:Number(a.bossStartY)||260, radius:Number(bcfg.radius)||76, hp:Number(cfg.maxHp)||Number(bcfg.maxHp)||100, maxHp:Number(cfg.maxHp)||Number(bcfg.maxHp)||100, phaseLevel:1,
      state:'idle', stateTimer:Number(bcfg.idleDuration)||1.2, facing:Math.PI, chargeDirX:-1, chargeDirY:0, facingX:-1, lockedTargetX:Number(a.playerStartX)||180, lockedTargetY:Number(a.playerStartY)||270,
      lastTrailX:Number(a.bossStartX)||760, lastTrailY:Number(a.bossStartY)||260, trailDistanceAccumulator:0, chargeCorrectionBudget:0, chargeCorrectionApplied:0, chargeCount:0, currentChargeSpeed:0, currentChargeTurnRate:0, damageTimer:0, fatigue:0, fatigueBonusWindow:0, chargeMissTimer:0, slideTime:0, resistantFlashTimer:0, weakPointFlashTimer:0, hitCooldown:0, returnTimer:0 }
  };
}

function getHaginoinoshishiPhaseConfig(boss) {
  const cfg = CONFIG.haginoinoshishi || {};
  const hp = Math.max(0, Number(boss?.hp) || 0);
  const maxHp = Math.max(1, Number(boss?.maxHp) || Number(cfg.maxHp) || 1);
  const ratio = clamp(hp / maxHp, 0, 1);
  const p2 = clamp(Number(cfg.phase2HpRatio) || 0.66, 0.05, 0.95);
  const p3 = clamp(Number(cfg.phase3HpRatio) || 0.33, 0.01, p2 - 0.01);
  const level = ratio <= p3 ? 3 : (ratio <= p2 ? 2 : 1);
  if (boss) boss.phaseLevel = level;
  const prefix = `phase${level}`;
  return {
    phaseLevel: level,
    chargeCooldown: Math.max(0.05, Number(cfg[`${prefix}ChargeCooldown`]) || 1),
    prepareDuration: Math.max(0.05, Number(cfg[`${prefix}PrepareDuration`]) || 0.8),
    chargeSpeed: Math.max(120, Number(cfg[`${prefix}ChargeSpeed`]) || 320),
    recoveryDuration: Math.max(0.05, Number(cfg[`${prefix}RecoveryDuration`]) || 1),
    groundRecoveryPerSecond: Math.max(0, Number(cfg[`${prefix}GroundRecoveryPerSecond`]) || 0.06),
    trailSpawnDistanceMultiplier: Math.max(0.3, Number(cfg[`${prefix}TrailSpawnDistanceMultiplier`]) || 1),
  };
}

function startRedLightEncounter() {
  const p = gameState?.player;
  const c = CONFIG.redLight || {};
  if (!p) return;
  gameState.phase = 'duel';
  gameState.isPaused = false;
  gameState.event = null;
  gameState.pendingEvent = null;
  gameState.enemies = [];
  gameState.projectiles = [];
  gameState.playerProjectiles = [];
  gameState.particles = [];
  gameState.manualShots = [];
  if (Array.isArray(gameState.enemyBullets)) gameState.enemyBullets = [];
  if (gameState.world) {
    gameState.world.exitUnlocked = false;
    gameState.world.availableExits = {};
  }
  p.x = clamp(CONFIG.canvas.width * 0.5, p.radius, CONFIG.canvas.width - p.radius);
  p.y = clamp(CONFIG.canvas.height - 90, p.radius, CONFIG.canvas.height - p.radius);
  gameState.duel = {
    active: true,
    bossType: 'red_light',
    boss: {
      hp: c.maxHp,
      maxHp: c.maxHp,
      x: c.bossX,
      y: c.bossY,
      hitRadius: Number(c.bodyRadius) || 120,
      phase: 'gaze',
      phaseTimer: c.gazeDuration,
      currentPhrase: '',
      isDangerWindow: false,
      gazeLocked: false,
      eyeOpen: false,
      vulnerable: false,
      punishmentFlashTimer: 0,
      visibleEyes: 3,
      movementAccumulator: 0,
      lastPlayerX: p.x,
      lastPlayerY: p.y,
      phaseMessage: '',
      phaseMessageTimer: 0,
      weakPointFlashTimer: 0,
      currentPhraseIndex: 0,
      phraseHoldTimer: 0,
      punishmentCooldownTimer: 0,
      dialogue: {
        fullText: '',
        visibleText: '',
        charIndex: 0,
        charTimer: 0,
        nextCharDelay: 0,
        active: false,
        completed: false,
      },
    },
    timer: 0,
    isComplete: false,
  };
}

function startMatsuruEncounter() {
  const p = gameState?.player;
  const c = CONFIG.duel || {};
  if (!p) return;
  gameState.phase = 'duel';
  gameState.isPaused = false;
  gameState.event = null;
  gameState.pendingEvent = null;
  gameState.enemies = [];
  gameState.projectiles = [];
  gameState.playerProjectiles = [];
  gameState.particles = [];
  gameState.xpGems = [];
  gameState.manualShots = [];
  p.x = clamp((Number(c.matsuruX) || 770) - 290, p.radius, CONFIG.canvas.width - p.radius);
  p.y = clamp(Number(c.matsuruY) || 270, p.radius, CONFIG.canvas.height - p.radius);
  gameState.duel = {
    active: true,
    bossType: 'matsuru',
    boss: {
      id: 'duel_matsuru', x: Number(c.matsuruX) || 770, y: Number(c.matsuruY) || 270, radius: Number(c.matsuruRadius) || 84, hp: Number(c.matsuruHp) || 560, maxHp: Number(c.matsuruHp) || 560,
      state: 'openingMatsuba', stateTimer: Math.max(0.05, Number(c.matsuruOpeningIdleDuration) || 0.24), facingX: -1, attackText: '', attackTextTimer: 0, windX: 0, windVx: 0, windReturning: false,
      passiveActive: true, lastHitTimer: 0, empowered: false, multiHitTimer: 0, counterTell: false, needles: [], counterVx: 0, contactDamageTimer: 0, counterCooldown: 0, matsubaCooldown: 0, needlesSpawned: false, hasCounterHit: false, motionTime: 0, bodySway: 0, glidePhase: 0,
      openingDone: false, matsukazeTargetX: Number(c.matsuruX) || 770, matsukazeTargetY: Number(c.matsuruY) || 270, matsukazeTargetLocked: false,
      matsubaPulseTimer: Number(c.matsubaPulseInterval) || Number(c.matsuruTurretFireInterval) || 2.1,
      matsubaPulseInterval: Number(c.matsubaPulseInterval) || Number(c.matsuruTurretFireInterval) || 2.1,
      matsubaPulsePhase: 0,
      matsubaPulseWaveTimer: 0,
      lastMatsubaPulseCount: 0,
      matsukazePulseDelayTimer: 0,
      nextTurretPulseStartIndex: 0,
      matsubaPulseFiringTurrets: 0,
    },
    timer: 0,
    isComplete: false,
  };
}

function getRedLightCharDelay(char) {
  const c = CONFIG.redLight || {};
  const normalMin = Number(c.dialogueNormalMinDelay) || 0.03;
  const normalMax = Number(c.dialogueNormalMaxDelay) || 0.12;
  const pauseMin = Number(c.dialoguePauseMinDelay) || 0.15;
  const pauseMax = Number(c.dialoguePauseMaxDelay) || 0.35;
  const dramaticMin = Number(c.dialogueDramaticMinDelay) || 0.11;
  const dramaticMax = Number(c.dialogueDramaticMaxDelay) || 0.2;
  if (char === '…' || char === '.' || char === '。' || char === '！' || char === '!' || char === '？' || char === '?') return rand(pauseMin, pauseMax);
  if (char === 'ッ') return rand(dramaticMin, dramaticMax);
  return rand(normalMin, normalMax);
}

function startRedLightPhrase(text) {
  const dialogue = gameState?.duel?.boss?.dialogue;
  if (!dialogue) return;
  dialogue.fullText = String(text || '');
  dialogue.visibleText = '';
  dialogue.charIndex = 0;
  dialogue.charTimer = 0;
  dialogue.nextCharDelay = getRedLightCharDelay(dialogue.fullText.charAt(0));
  dialogue.active = true;
  dialogue.completed = false;
}

function updateRedLightDialogue(dt) {
  const boss = gameState?.duel?.boss;
  const dialogue = boss?.dialogue;
  if (!dialogue || !dialogue.active || dialogue.completed) return;
  dialogue.charTimer += dt;
  while (dialogue.charTimer >= dialogue.nextCharDelay && !dialogue.completed) {
    dialogue.charTimer -= dialogue.nextCharDelay;
    dialogue.charIndex += 1;
    dialogue.visibleText = dialogue.fullText.slice(0, dialogue.charIndex);
    if (dialogue.charIndex >= dialogue.fullText.length) {
      dialogue.completed = true;
      dialogue.active = false;
      boss.phraseHoldTimer = Number(CONFIG.redLight?.dialogueHoldAfterComplete) || 0.4;
      break;
    }
    dialogue.nextCharDelay = getRedLightCharDelay(dialogue.fullText.charAt(dialogue.charIndex));
  }
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
    loadImage('playerCard', CONFIG.assets.playerCardImage),
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

function renderDebugMenu() {
  if (!gameState.debug || typeof gameState.debug !== 'object') gameState.debug = { visible: false, menuOpen: false, bossMenuOpen: false };
  if (!debugPresetOptions) return;
  debugPresetOptions.innerHTML = '';
  const fragment = document.createDocumentFragment();

  const normalBtn = document.createElement('button');
  normalBtn.type = 'button';
  normalBtn.className = 'debug-preset-btn';
  normalBtn.textContent = 'Normal Start';
  normalBtn.addEventListener('click', () => {
    if (gameState.phase !== 'start') return;
    gameState.debug.enabled = false;
    gameState.debug.targetSurvivalTimeOverride = null;
    gameState.debug.bossBattleMode = false;
    gameState.debug.bossType = null;
    startRun();
    startModal?.classList.add('hidden');
    gameOverModal?.classList.add('hidden');
    clearModal?.classList.add('hidden');
  });
  fragment.appendChild(normalBtn);

  const isBossOpen = Boolean(gameState?.debug?.bossMenuOpen);
  const toggleBossBtn = document.createElement('button');
  toggleBossBtn.type = 'button';
  toggleBossBtn.className = 'debug-preset-btn';
  toggleBossBtn.textContent = `${isBossOpen ? '▼' : '▶'} Boss Battle`;
  toggleBossBtn.addEventListener('click', () => {
    if (gameState.phase !== 'start') return;
    if (!gameState?.debug?.visible) return;
    gameState.debug.bossMenuOpen = !Boolean(gameState?.debug?.bossMenuOpen);
    renderDebugMenu();
  });
  fragment.appendChild(toggleBossBtn);

  const invBtn = document.createElement('button');
  invBtn.type = 'button';
  invBtn.className = 'debug-preset-btn';
  invBtn.textContent = `Invincible: ${gameState?.debug?.playerInvincible ? 'ON' : 'OFF'}`;
  invBtn.addEventListener('click', () => {
    ensureDebugState();
    gameState.debug.playerInvincible = !Boolean(gameState?.debug?.playerInvincible);
    renderDebugMenu();
  });
  fragment.appendChild(invBtn);

  const matsuruFastBtn = document.createElement('button');
  matsuruFastBtn.type = 'button';
  matsuruFastBtn.className = 'debug-preset-btn';
  matsuruFastBtn.textContent = `Matsuru Fast: ${gameState?.debug?.matsuruFastMode ? 'ON' : 'OFF'}`;
  matsuruFastBtn.addEventListener('click', () => {
    ensureDebugState();
    gameState.debug.matsuruFastMode = !Boolean(gameState?.debug?.matsuruFastMode);
    renderDebugMenu();
  });
  fragment.appendChild(matsuruFastBtn);

  if (isBossOpen) {
    BOSS_STATUS_ORDER.forEach((status) => {
      const sectionEntries = Object.values(BOSS_REGISTRY).filter(boss => boss?.status === status);
      if (!sectionEntries.length) return;
      const section = document.createElement('section');
      section.className = 'debug-boss-group';
      section.innerHTML = `<h4 class="debug-boss-group-title">${BOSS_STATUS_LABELS[status] || status}</h4>`;
      const bossCards = document.createElement('div');
      bossCards.className = 'debug-boss-cards';
      sectionEntries.forEach((boss) => {
        if (!boss?.id) return;
        const card = document.createElement('button');
        card.type = 'button';
        const isEnabled = boss.status === 'playable' || boss.status === 'prototype';
        card.className = `debug-boss-card${isEnabled ? '' : ' disabled'}`;
        card.disabled = !isEnabled;
        const img = gameState?.images?.[boss.imageKey];
        const hasImage = Boolean(img && img.complete && img.naturalWidth > 0);
        const media = hasImage
          ? `<img src="${img?.src || ''}" alt="${boss.label || boss.id}" class="debug-boss-image">`
          : '<div class="debug-boss-fallback" aria-hidden="true">◎</div>';
        card.innerHTML = `${media}<div class="debug-boss-info"><h4>${boss.label || boss.id}</h4><span class="debug-boss-status">${BOSS_STATUS_LABELS[boss.status] || boss.status}</span><p>${boss.description || ''}</p></div>`;
        card.addEventListener('click', (event) => handleDebugBossSelect(boss.id, event));
        bossCards.appendChild(card);
      });
      section.appendChild(bossCards);
      fragment.appendChild(section);
    });
  }
  debugPresetOptions.appendChild(fragment);
}

function handleDebugBossSelect(bossId, event) {
  event?.preventDefault?.();
  event?.stopPropagation?.();
  const boss = BOSS_REGISTRY[bossId];
  if (!boss) return;
  if (boss.status !== 'playable' && boss.status !== 'prototype') {
    console.warn(`Boss ${bossId} is not playable yet.`);
    return;
  }
  if (typeof boss.start !== 'function') {
    console.warn(`Boss ${bossId} has no start function.`);
    return;
  }
  startBossBattleMode(boss);
}

function startBossBattleMode(bossEntry) {
  if (!gameState?.debug?.visible) return;
  if (gameState.phase !== 'start') return;
  if (!bossEntry?.id || typeof bossEntry?.start !== 'function') return;
  closeDebugMenu();
  if (gameState.debug) gameState.debug.showStats = false;
  resetState('playing');
  gameState.debug.enabled = true;
  gameState.debug.targetSurvivalTimeOverride = null;
  gameState.debug.bossBattleMode = true;
  gameState.debug.bossType = bossEntry.id;
  gameState.debug.menuOpen = false;
  gameState.debug.bossMenuOpen = false;
  gameState.startUi.debugMenuOpen = false;
  gameState.startUi.bossBattleMenuOpen = false;
  startModal?.classList.add('hidden');
  gameOverModal?.classList.add('hidden');
  clearModal?.classList.add('hidden');
  bossEntry.start();
}

function notifyUnimplementedTerritoryBoss(zone) {
  const bossId = zone?.territoryBoss;
  if (!bossId || !gameState?.world) return;
  const boss = BOSS_REGISTRY[bossId];
  const isPlayable = boss?.status === 'playable' || boss?.status === 'prototype';
  if (!isPlayable) setZoneMessage('この生息地のボスは未実装です', CONFIG.world?.messageDuration);
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
  const zoneId = String(gameState?.world?.currentZoneId || 'hub');
  return zones[zoneId] || zones.hub || null;
}

function getCurrentZoneObstacles() {
  const zone = getCurrentZone();
  return Array.isArray(zone?.obstacles) ? zone.obstacles : [];
}

function isObstacleBlockingLine(x1, y1, x2, y2) {
  const ox1 = Number(x1) || 0;
  const oy1 = Number(y1) || 0;
  const ox2 = Number(x2) || 0;
  const oy2 = Number(y2) || 0;
  const dx = ox2 - ox1;
  const dy = oy2 - oy1;
  const lenSq = dx * dx + dy * dy;
  return getCurrentZoneObstacles().some(obstacle => {
    if (!obstacle || !obstacle.type) return false;
    if (obstacle.type === 'circle') {
      const cx = Number(obstacle.x) || 0;
      const cy = Number(obstacle.y) || 0;
      const r = Math.max(0, Number(obstacle.radius) || 0);
      const t = lenSq <= 0 ? 0 : clamp((((cx - ox1) * dx) + ((cy - oy1) * dy)) / lenSq, 0, 1);
      const px = ox1 + dx * t;
      const py = oy1 + dy * t;
      return Math.hypot(cx - px, cy - py) <= r;
    }
    if (obstacle.type === 'rect') {
      const rx = Number(obstacle.x) || 0;
      const ry = Number(obstacle.y) || 0;
      const rw = Math.max(0, Number(obstacle.width) || 0);
      const rh = Math.max(0, Number(obstacle.height) || 0);
      for (let i = 0; i <= 10; i += 1) {
        const t = i / 10;
        const sx = ox1 + dx * t;
        const sy = oy1 + dy * t;
        if (sx >= rx && sx <= rx + rw && sy >= ry && sy <= ry + rh) return true;
      }
    }
    return false;
  });
}

function resolveEntityObstacleCollisions(entity, slideFactor = 1) {
  if (!entity || !Number.isFinite(entity.x) || !Number.isFinite(entity.y)) return;
  const radius = Math.max(1, Number(entity.radius) || 1);
  const pushStrength = Math.max(1, Number(CONFIG.environment?.obstaclePushStrength) || 14);
  const softIterations = Math.max(1, Number(CONFIG.environment?.obstacleSoftCollisionIterations) || 1);
  const safeSlide = clamp(Number(slideFactor) || 1, 0, 1);
  const obstacles = getCurrentZoneObstacles();
  if (!obstacles.length) return;

  for (let iter = 0; iter < softIterations; iter += 1) {
    obstacles.forEach(obstacle => {
      if (!obstacle || !obstacle.type) return;
      if (obstacle.type === 'circle') {
        const ox = Number(obstacle.x) || 0;
        const oy = Number(obstacle.y) || 0;
        const or = Math.max(0, Number(obstacle.radius) || 0);
        let dx = (entity.x ?? 0) - ox;
        let dy = (entity.y ?? 0) - oy;
        let dist = Math.hypot(dx, dy);
        if (dist === 0) {
          dx = 1;
          dy = 0;
          dist = 1;
        }
        const minDist = radius + or;
        const overlap = minDist - dist;
        if (overlap > 0) {
          const push = Math.min(overlap, pushStrength);
          const nx = dx / dist;
          const ny = dy / dist;
          entity.x += nx * push;
          entity.y += ny * push * safeSlide;
        }
      } else if (obstacle.type === 'rect') {
        const rx = Number(obstacle.x) || 0;
        const ry = Number(obstacle.y) || 0;
        const rw = Math.max(0, Number(obstacle.width) || 0);
        const rh = Math.max(0, Number(obstacle.height) || 0);
        const nearestX = clamp(entity.x, rx, rx + rw);
        const nearestY = clamp(entity.y, ry, ry + rh);
        let dx = entity.x - nearestX;
        let dy = entity.y - nearestY;
        let dist = Math.hypot(dx, dy);
        if (dist < radius) {
          if (dist < 0.0001) {
            const left = Math.abs(entity.x - rx);
            const right = Math.abs((rx + rw) - entity.x);
            const top = Math.abs(entity.y - ry);
            const bottom = Math.abs((ry + rh) - entity.y);
            const minEdge = Math.min(left, right, top, bottom);
            if (minEdge === left) { dx = -1; dy = 0; }
            else if (minEdge === right) { dx = 1; dy = 0; }
            else if (minEdge === top) { dx = 0; dy = -1; }
            else { dx = 0; dy = 1; }
            dist = 1;
          }
          const overlap = radius - dist;
          const push = Math.min(overlap, pushStrength);
          const nx = dx / dist;
          const ny = dy / dist;
          entity.x += nx * push;
          entity.y += ny * push * safeSlide;
        }
      }
    });
  }
  entity.x = clamp(entity.x, radius, CONFIG.canvas.width - radius);
  entity.y = clamp(entity.y, radius, CONFIG.canvas.height - radius);
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

function isBossGateTarget(targetZoneId) {
  return (
    targetZoneId === 'tododon_gate'
    || targetZoneId === 'tododon_duel'
    || targetZoneId === 'red_light_gate'
    || targetZoneId === 'red_light_duel'
  );
}

function repositionPlayerAfterZoneTransition(direction) {
  const p = gameState?.player;
  if (!p) return;
  const margin = Number.isFinite(CONFIG.world?.boundaryPushback)
    ? CONFIG.world.boundaryPushback * 2
    : 44;
  let targetX = CONFIG.canvas.width * 0.5;
  let targetY = CONFIG.canvas.height * 0.5;
  if (direction === 'east') targetX = p.radius + margin;
  if (direction === 'west') targetX = CONFIG.canvas.width - p.radius - margin;
  if (direction === 'south') targetY = p.radius + margin;
  if (direction === 'north') targetY = CONFIG.canvas.height - p.radius - margin;
  p.x = clamp(targetX, p.radius, CONFIG.canvas.width - p.radius);
  p.y = clamp(targetY, p.radius, CONFIG.canvas.height - p.radius);
}

function transitionToZoneImmediately(targetZoneId, direction) {
  const world = gameState?.world;
  const zones = getSafeZones();
  const nextZone = zones?.[targetZoneId];
  if (!world || !nextZone) return false;

  const previousZoneId = world.currentZoneId || null;
  world.previousZoneId = previousZoneId;
  world.currentZoneId = nextZone.id;
  world.visitedZones = world.visitedZones || {};
  world.visitedZones[nextZone.id] = true;
  world.clearedZones = world.clearedZones || {};
  const prevZone = zones[previousZoneId] || null;
  if (prevZone && Array.isArray(prevZone.forwardExits) && prevZone.forwardExits.includes(direction)) {
    world.clearedZones[prevZone.id] = true;
  }

  world.zoneTimer = 0;
  world.pressure = 0;
  world.isTransitioning = false;
  world.transitionTimer = 0;
  world.transitionTargetZone = null;
  world.transitionDirection = null;
  world.transitionReady = false;

  world.exitUnlocked = areZoneExitsUnlocked(nextZone, world);
  world.availableExits = getAvailableExitsForZone(nextZone, world);
  world.exitRenderWarnings = {};
  world.exitOverwriteWarnings = {};
  world.exitUnlockMismatchWarnings = {};

  repositionPlayerAfterZoneTransition(direction);

  gameState.enemies = [];
  gameState.projectiles = [];
  gameState.xpGems = [];
  gameState.particles = [];

  world.zoneTransitionCooldownTimer = Math.max(0, Number(CONFIG.world?.zoneTransitionCooldown) || 0);
  notifyUnimplementedTerritoryBoss(nextZone);

  console.info('[zone] immediate transition', {
    from: previousZoneId,
    to: nextZone.id,
    direction,
  });

  return true;
}

function startBossEncounterFromGate(targetZoneId) {
  const world = gameState?.world;
  if (!world) return;
  if (targetZoneId === 'tododon_gate' || targetZoneId === 'tododon_duel') {
    if (world.tododonEncounterTriggered) return;
    world.tododonEncounterTriggered = true;
    world.isTransitioning = false;
    world.transitionTimer = 0;
    world.transitionReady = false;
    world.transitionTargetZone = null;
    world.transitionDirection = null;
    startEndingEvent();
    return;
  }
  if (targetZoneId === 'red_light_gate' || targetZoneId === 'red_light_duel') {
    if (world.redLightBossTriggered) return;
    world.redLightBossTriggered = true;
    startRedLightEncounter();
  }
}

function beginZoneTransition(direction, targetZoneId) {
  if (gameState?.phase !== 'playing') return;
  const world = gameState?.world;
  const safeDirection = typeof direction === 'string' ? direction : null;
  const safeTargetZoneId = typeof targetZoneId === 'string' ? targetZoneId : '';

  if (!world || !safeDirection || !safeTargetZoneId) return;
  if (world.exitUnlocked !== true) return;

  if (isBossGateTarget(safeTargetZoneId)) {
    startBossEncounterFromGate(safeTargetZoneId);
    return;
  }

  if (!getSafeZones()?.[safeTargetZoneId]) {
    console.warn('[zone] invalid transition target', {
      from: world.currentZoneId,
      direction: safeDirection,
      targetZoneId: safeTargetZoneId,
    });
    return;
  }

  transitionToZoneImmediately(safeTargetZoneId, safeDirection);
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
    startRedLightEncounter();
    return;
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

  repositionPlayerAfterZoneTransition(transitionDirection);
  notifyUnimplementedTerritoryBoss(nextZone);

  gameState.enemies = [];
  gameState.projectiles = [];
  gameState.xpGems = [];
  gameState.particles = [];
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
  const zoneCreatures = Array.isArray(zone?.enemyTypes) && zone.enemyTypes.length > 0 ? zone.enemyTypes : ['tsurumatsu'];
  const creatureId = zoneCreatures[Math.floor(Math.random() * zoneCreatures.length)] || 'tsurumatsu';
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

  p.prevX = p.x;
  p.prevY = p.y;
  const xMove = (gameState.keys.ArrowRight || gameState.keys.d ? 1 : 0) - (gameState.keys.ArrowLeft || gameState.keys.a ? 1 : 0);
  const yMove = (gameState.keys.ArrowDown || gameState.keys.s ? 1 : 0) - (gameState.keys.ArrowUp || gameState.keys.w ? 1 : 0);
  if (xMove < 0) p.facingX = -1;
  else if (xMove > 0) p.facingX = 1;
  if (Math.abs(xMove) > 0.001 || Math.abs(yMove) > 0.001) {
    const moveMag = Math.hypot(xMove, yMove) || 1;
    p.facingY = yMove / moveMag;
  }

  const mag = Math.hypot(xMove, yMove) || 1;
  const contactSlowMultiplier = Number.isFinite(p.contactSlowMultiplier) && p.contactSlowMultiplier > 0 ? p.contactSlowMultiplier : 1;
  const effectiveSpeed = p.speed * contactSlowMultiplier;
  const prevX = p.x;
  const prevY = p.y;
  p.x += (xMove / mag) * effectiveSpeed * dt;
  p.y += (yMove / mag) * effectiveSpeed * dt;
  p.x = clamp(p.x, p.radius, CONFIG.canvas.width - p.radius);
  p.y = clamp(p.y, p.radius, CONFIG.canvas.height - p.radius);
  resolveEntityObstacleCollisions(
    gameState.player,
    CONFIG.environment?.obstaclePlayerSlideFactor
  );
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
    if ((Number(world.zoneTransitionCooldownTimer) || 0) > 0) return;
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
    const activeBoss = getActiveBossTarget();
    if (gameState?.phase === 'duel') {
      if (activeBoss) duelTargets.push(activeBoss);
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
  updatePlayerCardAttack(dt);
}

function getPlayerCardAimDirection(player) {
  const fx = Number(player?.facingX);
  const fy = Number(player?.facingY);
  const nx = Number.isFinite(fx) ? fx : -1;
  const ny = Number.isFinite(fy) ? fy : 0;
  const mag = Math.hypot(nx, ny);
  if (!Number.isFinite(mag) || mag <= 0.0001) return { x: -1, y: 0 };
  return { x: nx / mag, y: ny / mag };
}

function spawnPlayerCardProjectile(player, angle) {
  if (!player || gameState?.phase !== 'duel') return;
  const maxProjectiles = Math.max(1, Math.floor(Number(CONFIG.player?.playerCardMaxProjectiles) || 1));
  const list = Array.isArray(gameState.playerProjectiles) ? gameState.playerProjectiles : [];
  while (list.length >= maxProjectiles) list.shift();
  const speed = Math.max(1, Number(CONFIG.player?.playerCardSpeed) || 1);
  const radius = Math.max(1, Number(CONFIG.player?.playerCardRadius) || 6);
  const lifetime = Math.max(0.05, Number(CONFIG.player?.playerCardLifetime) || 1);
  const spread = Number(CONFIG.player?.playerCardSpreadAngle) || 0;
  const launchAngle = angle + rand(-spread, spread);
  const dirX = Math.cos(launchAngle);
  const dirY = Math.sin(launchAngle);
  list.push({
    x: Number(player.x) || 0,
    y: Number(player.y) || 0,
    vx: dirX * speed,
    vy: dirY * speed,
    radius,
    lifetime,
    damage: Math.max(0, Number(CONFIG.player?.playerCardDamage) || 0),
    rotation: launchAngle,
    rotationSpeed: Number(CONFIG.player?.playerCardRotationSpeed) || 0,
    active: true,
  });
  gameState.playerProjectiles = list;
}

function updatePlayerCardAttack(dt) {
  if (gameState?.phase !== 'duel') return;
  const input = gameState?.input || {};
  const player = gameState?.player;
  if (!player) return;
  player.cardAttackCooldownTimer = Math.max(0, (Number(player.cardAttackCooldownTimer) || 0) - dt);
  if (!input.manualFirePressed) return;
  if (player.cardAttackCooldownTimer > 0) return;
  const dir = getPlayerCardAimDirection(player);
  const angle = Math.atan2(dir.y, dir.x);
  spawnPlayerCardProjectile(player, angle);
  player.cardAttackCooldownTimer = Math.max(0.01, Number(CONFIG.player?.playerCardCooldown) || 0.3);
  input.manualFirePressed = false;
}

function updatePlayerProjectiles(dt) {
  const list = Array.isArray(gameState?.playerProjectiles) ? gameState.playerProjectiles : [];
  const next = [];
  const bossTarget = getActiveBossTarget();
  list.forEach((proj) => {
    if (!proj || proj.active === false) return;
    proj.x = (Number(proj.x) || 0) + (Number(proj.vx) || 0) * dt;
    proj.y = (Number(proj.y) || 0) + (Number(proj.vy) || 0) * dt;
    proj.lifetime = (Number(proj.lifetime) || 0) - dt;
    proj.rotation = (Number(proj.rotation) || 0) + (Number(proj.rotationSpeed) || 0) * dt;
    if (proj.lifetime <= 0) return;
    const padded = Number(proj.radius) || 0;
    if (proj.x < -padded || proj.x > CONFIG.canvas.width + padded || proj.y < -padded || proj.y > CONFIG.canvas.height + padded) return;
    if (isPointInsideObstacle(proj.x, proj.y, 0)) return;
    if (bossTarget && distance(proj, bossTarget) <= (Number(proj.radius) || 0) + (Number(bossTarget.radius) || 0)) {
      const bossMul = Number(CONFIG.player?.playerCardBossDamageMultiplier) || 1;
      const dealt = Math.max(0, (Number(proj.damage) || 0) * bossMul);
      damageActiveBoss(dealt, 'projectile');
      bossTarget.weakPointFlashTimer = Math.max(Number(CONFIG.player?.playerCardHitFlashDuration) || 0, Number(bossTarget.weakPointFlashTimer) || 0);
      proj.active = false;
      return;
    }
    next.push(proj);
  });
  gameState.playerProjectiles = next;
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
    const bossTarget = getActiveBossTarget();
    const bossHit = updateProjectileBossCollision(proj, bossTarget, projectileHitIds);
    const waveHit = duel?.waveProjectiles?.find((b, i) => b?.alive !== false && !projectileHitIds.has(`wave_${i}`) && distance(proj, b) <= proj.radius + b.radius);
    const hitEnemyOrBullet = hitEnemy || bossHit || waveHit;
    if (hitEnemyOrBullet) {
      const hitEnemy = hitEnemyOrBullet;
      if (hitEnemy !== bossTarget && !(duel && hitEnemy.id === 'duel_tododon')) hitEnemy.hp -= proj.damage;

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
      if (hitEnemy === bossTarget) {
        damageActiveBoss(proj.damage, 'projectile');
        projectileHitIds.add('active_boss');
      } else if (duel && hitEnemy.id === 'duel_tododon') {
        damageActiveBoss(proj.damage, 'projectile');
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


function updateProjectileBossCollision(projectile, bossTarget = getActiveBossTarget(), hitIds = null) {
  if (!projectile || !bossTarget) return null;
  if (hitIds instanceof Set && hitIds.has('active_boss')) return null;
  const dx = (Number(projectile.x) || 0) - (Number(bossTarget.x) || 0);
  const dy = (Number(projectile.y) || 0) - (Number(bossTarget.y) || 0);
  const hitRadius = (Number(projectile.radius) || 0) + (Number(bossTarget.radius) || 0);
  if (dx * dx + dy * dy > hitRadius * hitRadius) return null;
  return bossTarget;
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
    resolveEntityObstacleCollisions(
      enemy,
      CONFIG.environment?.obstacleEnemySlideFactor
    );
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
  world.zoneTransitionCooldownTimer = Math.max(0, (Number(world.zoneTransitionCooldownTimer) || 0) - dt);
  const pressureStart = Math.max(0, Number(zone?.durationBeforePressure) || 0);
  const exitStart = Math.max(pressureStart, getZoneExitUnlockTime(zone));
  world.availableExits = getAvailableExitsForZone(zone, world);
  world.pressure = world.zoneTimer <= pressureStart ? 0 : clamp((world.zoneTimer - pressureStart) / Math.max(0.1, exitStart - pressureStart), 0, 1);
  if (zone?.id === 'paulownia' && world.exitUnlocked && !world.redLightBossTriggered) {
    setZoneMessage('光の鼓動が中央庭園への路をひらく。', CONFIG.world?.messageDuration);
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
  if (gameState?.duel?.bossType === 'matsuru') return updateMatsuruBossBattle(dt);
  if (gameState?.duel?.bossType === 'haginoinoshishi') return updateHaginoinoshishiBossBattle(dt);
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
  gameState.manualShots.forEach(s => {
    s.x += s.vx * dt; s.y += s.vy * dt; s.life -= dt;
    duel.waveProjectiles.forEach(w => {
      if (w.alive && s.life > 0 && distance(s, w) <= s.radius + w.radius) {
        w.hp -= (s.damage || 0); s.life = 0; if (w.hp <= 0) w.alive = false;
      }
    });
    const boss = getActiveBossTarget();
    if (boss && s.life > 0) {
      const dx = (Number(s.x) || 0) - (Number(boss.x) || 0);
      const dy = (Number(s.y) || 0) - (Number(boss.y) || 0);
      const distanceSq = dx * dx + dy * dy;
      const collisionRadius = (Number(s.radius) || 0) + (Number(boss.radius) || 0);
      if (distanceSq <= collisionRadius * collisionRadius) {
        damageActiveBoss(Number(s.damage) || Number(c.manualShotDamage) || 0, 'manual');
        s.life = 0;
      }
    }
  });
  gameState.damageTimer -= dt;
  duel.waveProjectiles = (duel.waveProjectiles || []).filter(b => b?.alive && Number.isFinite(b.x) && Number.isFinite(b.y) && b.x > -120 && b.x < (c.arenaWidth || CONFIG.canvas.width) + 120);
  gameState.manualShots = (gameState.manualShots || []).filter(s => Number.isFinite(s?.x) && Number.isFinite(s?.y) && s.life > 0);
  const contactR = (t.radius || 0) + (p.radius || 0) + (c.DUEL_TODODON_CONTACT_RADIUS || 48) * (1 + (t.advanceLevel || 0));
  t.contactDamageTimer = Math.max(0, (t.contactDamageTimer || 0) - dt);
  if (distance(t,p) <= contactR && t.contactDamageTimer <= 0) { p.hp -= (c.contactDamage || 14); t.contactDamageTimer = c.contactInterval || 0.33; }
  if (t.cannon?.active) { const half = (c.cannonWidth || 86) * 0.5; if (Math.abs((p.y || 0) - (t.cannon.y || 0)) <= half && gameState.damageTimer <= 0) { p.hp -= (c.cannonDamage || 38); gameState.damageTimer = CONFIG.enemy.damageCooldown; } }
  if ((p.hp || 0) <= 0) { showGameOver(); return; }
  if ((t.hp || 0) <= 0) completeBossEncounter('tododon');
}


function updateHaginoinoshishiBossBattle(dt) { const duel=gameState?.duel; const p=gameState?.player; const cfg=CONFIG.haginoinoshishi||{}; const a=cfg.arena||{}; const c=cfg.boss||{}; const rg=cfg.ruinedGround||{}; const b=duel?.boss; if(!duel||!p||!b)return; const inv=Boolean(gameState?.debug?.enabled)&&Boolean(gameState?.debug?.playerInvincible); updatePlayerMovement(dt); updatePlayerAttack(dt); updateProjectiles(dt); updateParticles(dt); duel.timer=(duel.timer||0)+dt; b.hp=clamp(Number(b.hp)||0,0,Math.max(1,Number(b.maxHp)||1)); const phaseCfg=getHaginoinoshishiPhaseConfig(b); duel.phaseConfig=phaseCfg; b.stateTimer=Math.max(0,(b.stateTimer||0)-dt); b.damageTimer=Math.max(0,(b.damageTimer||0)-dt); b.hitCooldown=Math.max(0,(b.hitCooldown||0)-dt); b.resistantFlashTimer=Math.max(0,(b.resistantFlashTimer||0)-dt); b.weakPointFlashTimer=Math.max(0,(b.weakPointFlashTimer||0)-dt); const px=Number(p.x)||0,py=Number(p.y)||0; const dx=px-(b.x||0),dy=py-(b.y||0); const dist=Math.hypot(dx,dy)||1; const fatigueRatio=clamp((Number(b.fatigue)||0)/Math.max(1,Number(c.fatigueRequiredForFinal)||100),0,1); const rage=fatigueRatio>=(Number(c.rageThreshold)||0.6);
 const patches=Array.isArray(duel.ruinedGround)?duel.ruinedGround:[]; duel.ruinedGround=patches; const sample=(x,y)=>{let max=0;for(const t of patches){if(!t)continue;const dd=Math.hypot((x||0)-(t.x||0),(y||0)-(t.y||0)); if(dd<=(t.radius||0)) max=Math.max(max, Number(t.ruinLevel)||0);} return clamp(max,0,Number(rg.maxRuinLevel)||1);};
 const addTrail=(x,y,r,l)=>{const maxP=Math.max(8,Math.floor(Number(rg.maxTrailPatches)||96)); const deepenR=Math.max(Number(rg.trailDeepenRadius)||46,Number(r)||1); let found=null; for(const t of patches){if(!t)continue; if(Math.hypot((x||0)-(t.x||0),(y||0)-(t.y||0))<=deepenR){found=t;break;}} if(found){found.ruinLevel=clamp((found.ruinLevel||0)+Math.max(0.01,Number(rg.trailDeepenAmount)||0.22)*(Number(l)||1),0,Number(rg.maxRuinLevel)||1); found.life=Math.max(found.life||0,Number(rg.trailLifetime)||16); found.radius=Math.max(Number(found.radius)||0,Number(r)||0);} else {if(patches.length>=maxP) patches.shift(); patches.push({x,y,radius:r,ruinLevel:clamp(Number(l)||0.2,0,Number(rg.maxRuinLevel)||1),life:Number(rg.trailLifetime)||16});}};
 const ruin=sample(p.x,p.y); const ruinSlow=clamp(Number(rg.ruinedGroundSpeedMultiplier)||0.5,0.1,1); const minSlow=Number(rg.minimumRuinedGroundSpeedMultiplier)||0.4; p.contactSlowMultiplier=ruin>0?clamp(ruinSlow,minSlow,1):1; p.turnPenaltyMultiplier=clamp(1-ruin*(1-(Number(rg.turnPenaltyMultiplier)||0.72)),Number(rg.turnPenaltyMultiplier)||0.72,1);
 if(b.state==='defeated'){b.stateTimer=0; b.vx=0; b.vy=0; b.chargeDirX=0; b.chargeDirY=0;}
 else if(b.state==='idle'){b.facing=Math.atan2(dy,dx); b.facingX=Math.cos(b.facing); b.x += Math.cos(b.facing)*(Number(c.walkSpeed)||70)*dt; b.y += Math.sin(b.facing)*(Number(c.walkSpeed)||70)*dt;  if(b.stateTimer<=0){b.state='prepareCharge'; b.stateTimer=phaseCfg.prepareDuration*(rage?(Number(c.ragePrepareMultiplier)||0.8):1);} }
 else if(b.state==='prepareCharge'){const lock=(c.chargeAimLockAtPrepare===true)?1:clamp(Number(c.chargeAimLockAtPrepare)||0.92,0,1); b.lockedTargetX=(b.lockedTargetX||px)*(1-lock)+px*lock; b.lockedTargetY=(b.lockedTargetY||py)*(1-lock)+py*lock; const ldx=b.lockedTargetX-(b.x||0), ldy=b.lockedTargetY-(b.y||0); const ldist=Math.hypot(ldx,ldy)||1; b.chargeDirX=ldx/ldist; b.chargeDirY=ldy/ldist; b.facing=Math.atan2(b.chargeDirY,b.chargeDirX); b.facingX=b.chargeDirX;  if(b.stateTimer<=0){b.state='charging'; b.stateTimer=Number(c.chargeDuration)||2.1; b.chargeMissTimer=0; b.slideTime=0; b.lastTrailX=b.x; b.lastTrailY=b.y; b.trailDistanceAccumulator=0; b.chargeCount=(Number(b.chargeCount)||0)+1; b.chargeCorrectionBudget=(Number(c.chargeMaxCorrectionDegrees)||20)*(Math.PI/180); b.chargeCorrectionApplied=0; addTrail(b.x,b.y,Number(rg.chargeTrailRadius)||38,1);} }
 else if(b.state==='charging'){const localR=sample(b.x,b.y); const baseTurn=rage?(Number(c.chargeTurnRateRage)||0.42):(Number(c.chargeTurnRate)||0.34); const turn=Math.max(0,baseTurn*(1-localR*(1-(Number(c.ruinedGroundChargeTurnRateMultiplier)||0.5)))); const targetA=Math.atan2(dy,dx), currA=Math.atan2(b.chargeDirY||0,b.chargeDirX||1); let da=((targetA-currA+Math.PI*3)%(Math.PI*2))-Math.PI; const budget=Math.max(0,Number(b.chargeCorrectionBudget)||0); da=clamp(da,-budget,budget); const step=clamp(turn*dt*(1-clamp((Number(c.chargeCorrectionFalloff)||0.74)*fatigueRatio,0,0.85)),0,Math.PI); const applied=clamp(da,-step,step); const na=currA+applied; b.chargeDirX=Math.cos(na); b.chargeDirY=Math.sin(na); b.chargeCorrectionBudget=Math.max(0,budget-Math.abs(applied)); b.facing=Math.atan2(b.chargeDirY,b.chargeDirX); b.facingX=b.chargeDirX; const speed=clamp(phaseCfg.chargeSpeed*(rage?(Number(c.rageSpeedMultiplier)||1.1):1)*(1+localR*((Number(rg.boarSlideMultiplierOnRuinedGround)||1.18)-1)),120,450); b.currentChargeTurnRate=turn; b.currentChargeSpeed=speed; b.x += b.chargeDirX*speed*dt; b.y += b.chargeDirY*speed*dt; const seg=Math.hypot((b.x||0)-(b.lastTrailX||b.x),(b.y||0)-(b.lastTrailY||b.y)); b.trailDistanceAccumulator=(Number(b.trailDistanceAccumulator)||0)+seg; const trailDist=Math.max(6,(Number(rg.trailSpawnDistance)||26)*phaseCfg.trailSpawnDistanceMultiplier); let spawns=0; while(b.trailDistanceAccumulator>=trailDist&&spawns<8){b.trailDistanceAccumulator-=trailDist; const dirLen=Math.hypot((b.x||0)-(b.lastTrailX||b.x),(b.y||0)-(b.lastTrailY||b.y))||1; const dirX=((b.x||0)-(b.lastTrailX||b.x))/dirLen; const dirY=((b.y||0)-(b.lastTrailY||b.y))/dirLen; const nx=(b.lastTrailX||b.x)+dirX*trailDist, ny=(b.lastTrailY||b.y)+dirY*trailDist; addTrail(nx,ny,Number(rg.chargeTrailRadius)||38,1); b.lastTrailX=nx; b.lastTrailY=ny; spawns++;} if(b.stateTimer<=0||b.x<=b.radius||b.x>=(Number(a.arenaWidth)||960)-b.radius||b.y<=b.radius||b.y>=(Number(a.arenaHeight)||540)-b.radius){b.state='recovery'; b.stateTimer=phaseCfg.recoveryDuration; addTrail(b.x,b.y,Number(rg.recoveryTrailRadius)||30,0.85);} }
 else if(b.state==='exhausted' && b.stateTimer<=0){b.state='recovery'; b.stateTimer=Number(c.recoveryDuration)||1.0;}
 else if((b.state==='recovery' || b.state==='exhausted' || b.state==='finalExhausted') && b.stateTimer<=0){b.state='idle'; b.stateTimer=phaseCfg.chargeCooldown;}
 const cr=(Number(b.radius)||76)+(Number(p.radius)||0); if(distance(b,p)<=cr && b.damageTimer<=0){ if(!inv) p.hp-=(b.state==='charging'?(Number(c.chargeDamage)||24):(Number(c.contactDamage)||14)); b.damageTimer=Number(c.damageCooldown)||0.34; const kb=Number(c.playerKnockback)||140; p.x-=dx/dist*kb*dt; p.y-=dy/dist*kb*dt; }
 p.x=clamp(p.x,p.radius,(Number(a.arenaWidth)||960)-p.radius); p.y=clamp(p.y,p.radius,(Number(a.arenaHeight)||540)-p.radius); b.x=clamp(b.x,b.radius,(Number(a.arenaWidth)||960)-b.radius); b.y=clamp(b.y,b.radius,(Number(a.arenaHeight)||540)-b.radius);
 for(let i=patches.length-1;i>=0;i--){const t=patches[i]; if(!t){patches.splice(i,1);continue;} t.life=(t.life||0)-dt; t.ruinLevel=clamp((t.ruinLevel||0)-phaseCfg.groundRecoveryPerSecond*dt,0,Number(rg.maxRuinLevel)||1); if(t.life<=0||t.ruinLevel<=0.02) patches.splice(i,1);} if((p.hp||0)<=0) showGameOver(); }


function getMatsukazeDamage() {
  const c = CONFIG.duel || {};
  if (Number.isFinite(c.matsukazeDamage)) return Math.max(0, c.matsukazeDamage);
  if (Number.isFinite(c.matsuruWindDamage)) return Math.max(0, c.matsuruWindDamage);
  return 0;
}

function getMovingMatsukazeHitbox(boss) {
  const c = CONFIG.duel || {};
  const width = Math.max(1, Number(c.matsukazeWidth) || Number(c.matsuruWindWidth) || 160);
  const height = Math.max(1, Number(c.matsukazeHeight) || Number(c.matsuruWindHeight) || 120);
  const margin = Math.max(0, Number(c.matsukazeTargetClampMargin) || 0);
  const minY = margin + height * 0.5;
  const maxY = CONFIG.canvas.height - margin - height * 0.5;
  const targetY = clamp(Number.isFinite(Number(boss?.matsukazeTargetY)) ? Number(boss?.matsukazeTargetY) : (Number(boss?.y) || CONFIG.canvas.height * 0.5), minY, maxY);
  const centerX = clamp(Number.isFinite(Number(boss?.windX)) ? Number(boss?.windX) : (Number(boss?.x) || CONFIG.canvas.width * 0.5), width * 0.5, CONFIG.canvas.width - width * 0.5);
  return { x: centerX - width * 0.5, y: targetY - height * 0.5, width, height };
}

function getMatsubaTurretFireAngles(turret, player, config) {
  const tx = Number(turret?.x) || 0;
  const ty = Number(turret?.y) || 0;
  const px = Number(player?.x) || 0;
  const py = Number(player?.y) || 0;
  const baseToPlayer = Math.atan2(py - ty, px - tx);
  const jitterDistance = Math.max(0, Number(config?.matsubaTurretAimJitterDistance) || 0);
  const jitterAngle = Math.atan2((py + rand(-jitterDistance, jitterDistance)) - ty, (px + rand(-jitterDistance, jitterDistance)) - tx);
  const aimBiasRaw = Number(config?.matsubaTurretAimBiasToPlayer);
  const aimBias = Number.isFinite(aimBiasRaw) ? clamp(aimBiasRaw, 0, 1) : 0.78;
  const jitterBase = Number.isFinite(jitterAngle) ? jitterAngle : baseToPlayer;
  let base = baseToPlayer * aimBias + jitterBase * (1 - aimBias);
  const antiWall = clamp(Number(config?.matsubaAntiWallBiasStrength) || 0, 0, 0.8);
  const centerAngle = Math.atan2((CONFIG.canvas.height * 0.5) - ty, (CONFIG.canvas.width * 0.5) - tx);
  base = base * (1 - antiWall) + centerAngle * antiWall;
  const spread = ((Number(config?.matsubaTurretAimSpreadDegrees) || 0) * Math.PI) / 180;
  const pair = ((Number(config?.matsubaTurretPairAngleDegrees) || 0) * Math.PI) / 180;
  const center = base + rand(-spread, spread);
  const a = Number.isFinite(center - pair * 0.5) ? center - pair * 0.5 : 0;
  const b = Number.isFinite(center + pair * 0.5) ? center + pair * 0.5 : Math.PI;
  return [a, b];
}

function updateMatsuruBossBattle(dt) {
  const duel = gameState?.duel; const p = gameState?.player; const c = CONFIG.duel || {}; const b = duel?.boss;
  if (!duel || !p || !b) return;
  const isInvincible = Boolean(gameState?.debug?.enabled) && Boolean(gameState?.debug?.playerInvincible);
  const debugFastMode = Boolean(gameState?.debug?.enabled) && Boolean(gameState?.debug?.matsuruFastMode);
  const speedBase = Number(CONFIG.debug?.matsuruActionSpeedMultiplier) || 1;
  const speedOverride = Number(gameState?.debug?.matsuruActionSpeedMultiplierOverride);
  const speedExtra = Number.isFinite(speedOverride) ? speedOverride : speedBase;
  const fastSpeed = Number(CONFIG.debug?.matsuruDebugActionSpeedMultiplier) || 1;
  const actionSpeed = clamp((Number(CONFIG.debug?.matsuruActionSpeedMultiplier) || 1) * (debugFastMode ? fastSpeed : 1) * clamp(speedExtra, 0.6, 3.2), 0.6, 3.6);
  const scaledDt = dt * actionSpeed;
  const matsubaGrowth = clamp((Number(gameState?.debug?.matsubaGrowthMultiplierOverride) || 1) * (debugFastMode ? (Number(CONFIG.debug?.matsubaDebugGrowthMultiplier) || 1) : 1), 0.6, 3.2);
  updatePlayerMovement(dt); updatePlayerAttack(dt); updateProjectiles(dt); updateParticles(dt);
  p.x = clamp(p.x, p.radius, CONFIG.canvas.width - p.radius); p.y = clamp(p.y, p.radius, CONFIG.canvas.height - p.radius);
  b.stateTimer = Math.max(0, (b.stateTimer || 0) - scaledDt); b.attackTextTimer = Math.max(0, (b.attackTextTimer || 0) - scaledDt); if (b.attackTextTimer <= 0) b.attackText = '';
  b.counterCooldown = Math.max(0, (b.counterCooldown || 0) - scaledDt); b.matsubaCooldown = Math.max(0, (b.matsubaCooldown || 0) - scaledDt * matsubaGrowth);
  b.motionTime = (b.motionTime || 0) + scaledDt;
  b.glidePhase = (b.glidePhase || 0) + scaledDt * 0.7;
  b.bodySway = Math.sin((b.motionTime || 0) * 1.8) * 0.06;
  b.lastHitTimer += dt; b.empowered = b.lastHitTimer >= (c.matsuruPassiveEmpowerDelay || 4.5); b.passiveActive = b.state === 'recovery' ? false : true;
  b.facingX = p.x < b.x ? -1 : 1;
  if (b.state === 'openingMatsuba') {
    if (!b.needlesSpawned) {
      const n = Math.max(1, Number(c.matsuruLeafInitialCount) || 2);
      const spread = Number(c.matsuruTurretBaseSpreadAngle) || 0.28;
      for (let i = 0; i < n; i += 1) {
        const t = n === 1 ? 0.5 : i / (n - 1);
        const a = -spread * 0.5 + spread * t;
        const angle = Math.PI + a;
        b.needles.push({ x: b.x - b.radius * 0.45, y: b.y, vx: Math.cos(angle) * (Number(c.matsuruLeafSpeed) || 122), vy: Math.sin(angle) * (Number(c.matsuruLeafSpeed) || 122), radius: Number(c.MATSUBA_PROJECTILE_RADIUS) || 7, life: Number(c.matsuruLeafLifetime) || 6.2, damage: Number(c.matsuruNeedleDamage) || 10, angle, spin: rand(-3, 3), sway: rand(0.6, 1.4), type: 'moving', source: 'matsuru' });
      }
      b.needlesSpawned = true;
      b.matsubaCooldown = (debugFastMode ? (Number(CONFIG.debug?.matsuruNeedleCooldownFast) || (c.MATSUBA_COOLDOWN || 2.4)) : (c.MATSUBA_COOLDOWN || 2.4)) / matsubaGrowth;
      b.attackText = '開幕・松葉散らし';
      b.attackTextTimer = 0.7;
    }
    if (b.stateTimer <= 0) { b.state = 'openingReposition'; b.stateTimer = Math.max(0.05, Number(c.matsuruOpeningIdleDuration) || 0.24); b.needlesSpawned = false; }
  } else if (b.state === 'openingReposition' && b.stateTimer <= 0) {
    b.state = 'prepareMatsukaze';
    b.stateTimer = debugFastMode ? (Number(CONFIG.debug?.matsuruPrepareDurationFast) || Number(c.matsukazePrepareDuration) || c.matsuruPrepareDuration || 0.8) : (Number(c.matsukazePrepareDuration) || c.matsuruPrepareDuration || 0.8);
    b.attackText = '松風の構え…';
    b.attackTextTimer = 0.8;
  } else if (b.state === 'idle' && b.stateTimer <= 0) {
    const canMatsuba = (b.matsubaCooldown || 0) <= 0;
    const doMatsuba = canMatsuba && Math.random() < 0.42;
    b.state = doMatsuba ? 'pineNeedles' : 'prepareMatsukaze';
    b.stateTimer = doMatsuba ? (c.MATSUBA_CAST_TIME || 0.45) : (debugFastMode ? (Number(CONFIG.debug?.matsuruPrepareDurationFast) || Number(c.matsukazePrepareDuration) || c.matsuruPrepareDuration || 0.8) : (Number(c.matsukazePrepareDuration) || c.matsuruPrepareDuration || 0.8));
    b.attackText = doMatsuba ? '松葉散らし' : '松風の構え…';
    b.attackTextTimer = 0.8;
    b.needlesSpawned = false;
  }
  else if (b.state === 'prepareMatsukaze' && b.stateTimer <= 0) { b.state = 'matsukaze'; b.stateTimer = Number(c.matsukazeDuration) || c.matsuruWindDuration || 1.5; const lead = Number(c.matsuruMatsukazeTargetLockAhead) || 0; const margin = Math.max(0, Number(c.matsukazeTargetClampMargin) || p.radius); b.matsukazeTargetX = clamp((p.x || 0) + (p.vx || 0) * lead, margin, CONFIG.canvas.width - margin); b.matsukazeTargetY = clamp((p.y || 0) + (p.vy || 0) * lead, margin, CONFIG.canvas.height - margin); b.windVx = b.matsukazeTargetX < b.x ? -1 : 1; b.windReturning = false; const windWidth = Math.max(1, Number(c.matsukazeWidth) || Number(c.matsuruWindWidth) || 160); const halfWidth = windWidth * 0.5; b.windX = b.windVx >= 0 ? halfWidth : CONFIG.canvas.width - halfWidth; b.multiHitTimer = 0; b.matsukazePulseDelayTimer = clamp(Number(c.matsukazePulseSynergyDelay) || 0, 0, Number(c.matsubaPulseInterval) || 2.1); }
  else if (b.state === 'matsukaze' && b.stateTimer <= 0) { b.state = 'matsukazeReturn'; b.stateTimer = c.matsuruReturnDuration || 1.0; b.windVx = b.windVx > 0 ? -1 : 1; b.windReturning = true; const windWidth = Math.max(1, Number(c.matsukazeWidth) || Number(c.matsuruWindWidth) || 160); const halfWidth = windWidth * 0.5; b.windX = b.windVx >= 0 ? halfWidth : CONFIG.canvas.width - halfWidth; b.openingDone = true; }
  else if (b.state === 'matsukazeReturn' && b.stateTimer <= 0) { b.state = 'recovery'; b.stateTimer = c.matsuruRecoveryDuration || 2.0; b.attackText = '松鶴延年が緩んだ！'; b.attackTextTimer = 1.0; }
  else if (b.state === 'recovery' && b.stateTimer <= 0) { b.state = 'idle'; b.stateTimer = debugFastMode ? (Number(CONFIG.debug?.matsuruIdleDurationFast) || c.matsuruIdleDuration || 1.2) : (c.matsuruIdleDuration || 1.2); }
  else if (b.state === 'pineNeedles') {
    if (!b.needlesSpawned) {
      const n = Math.max(1, Number(c.matsuruLeafInitialCount) || 2);
      const spread = c.matsuruTurretBaseSpreadAngle || 0.28;
      for (let i = 0; i < n; i += 1) {
        const t = n === 1 ? 0.5 : i / (n - 1);
        const a = -spread * 0.5 + spread * t;
        const d = (b.facingX || -1) < 0 ? Math.PI : 0;
        const angle = d + a;
        b.needles.push({ x: b.x + (b.facingX || -1) * b.radius * 0.45, y: b.y, vx: Math.cos(angle) * (c.matsuruLeafSpeed || 122), vy: Math.sin(angle) * (c.matsuruLeafSpeed || 122), radius: c.MATSUBA_PROJECTILE_RADIUS || 7, life: c.matsuruLeafLifetime || 6.2, damage: c.matsuruNeedleDamage || 10, angle, spin: rand(-3, 3), sway: rand(0.6, 1.4), type: 'moving', source: 'matsuru' });
      }
      b.needlesSpawned = true;
      b.matsubaCooldown = (debugFastMode ? (Number(CONFIG.debug?.matsuruNeedleCooldownFast) || (c.MATSUBA_COOLDOWN || 2.4)) : (c.MATSUBA_COOLDOWN || 2.4)) / matsubaGrowth;
    }
    if (b.stateTimer <= 0) { b.state = 'idle'; b.stateTimer = c.matsuruIdleDuration || 1.2; }
  } else if (b.state === 'counterTell' && b.stateTimer <= 0) {
    b.state = 'counterThrust'; b.stateTimer = c.TSURUGAESHI_DURATION || 0.28; b.counterVx = (b.facingX || -1) * (c.TSURUGAESHI_SPEED || 620); b.hasCounterHit = false;
  } else if (b.state === 'counterThrust') {
    b.x = clamp((b.x || 0) + (b.counterVx || 0) * dt, b.radius, CONFIG.canvas.width - b.radius);
    if (!b.hasCounterHit && distance(b, p) <= (b.radius || 84) + (p.radius || 18) + 20 && gameState.damageTimer <= 0) {
      if (!isInvincible) p.hp -= c.TSURUGAESHI_DAMAGE || 35;
      const dir = b.facingX || -1;
      p.x = clamp(p.x + dir * (c.TSURUGAESHI_KNOCKBACK || 260) * dt, p.radius, CONFIG.canvas.width - p.radius);
      gameState.damageTimer = CONFIG.enemy.damageCooldown;
      b.hasCounterHit = true;
    }
    if (b.stateTimer <= 0) { b.state = 'idle'; b.stateTimer = c.matsuruIdleDuration || 1.2; b.counterVx = 0; }
  }
  if (b.state === 'matsukaze' || b.state === 'matsukazeReturn') {
    const windDuration = Math.max(0.05, Number(c.matsukazeDuration) || Number(c.matsuruWindDuration) || 1.5);
    const returnDuration = Math.max(0.05, Number(c.matsuruReturnDuration) || 1.0);
    const activeDuration = b.state === 'matsukazeReturn' ? returnDuration : windDuration;
    const windWidth = Math.max(1, Number(c.matsukazeWidth) || Number(c.matsuruWindWidth) || 160);
    const halfWidth = windWidth * 0.5;
    const t = clamp(1 - ((Number(b.stateTimer) || 0) / activeDuration), 0, 1);
    const startX = (b.windVx || 1) >= 0 ? halfWidth : CONFIG.canvas.width - halfWidth;
    const endX = (b.windVx || 1) >= 0 ? CONFIG.canvas.width - halfWidth : halfWidth;
    b.windX = clamp(startX + (endX - startX) * t, halfWidth, CONFIG.canvas.width - halfWidth);
    b.multiHitTimer = Math.max(0, (b.multiHitTimer || 0) - dt); const windRect = getMovingMatsukazeHitbox(b); const windHit = p.x >= windRect.x && p.x <= windRect.x + windRect.width && p.y >= windRect.y && p.y <= windRect.y + windRect.height;
    if (windHit) {
      const push = Number.isFinite(Number(c.matsukazePush)) ? Number(c.matsukazePush) : (Number(c.matsuruWindPush) || 0);
      p.x = clamp(p.x + (b.windVx || 0) * Math.max(0, push) * dt, p.radius, CONFIG.canvas.width - p.radius);
      if (b.multiHitTimer <= 0) {
        const damage = getMatsukazeDamage() * (b.empowered ? (Number(c.matsuruPassiveEmpowerDamageScale) || 1.35) : 1);
        if (damage > 0 && !isInvincible) p.hp = Math.max(0, p.hp - damage);
        b.multiHitTimer = Number(c.matsuruWindHitCooldown) || 0.25;
      }
    }
    const leaves = Array.isArray(b.needles) ? b.needles : [];
    const dormant = leaves.filter(n => n && (n.type === 'dormant' || n.type === 'decaying'));
    dormant.slice(0, Math.max(0, Number(c.matsuruMatsukazeReactivateCount) || 3)).forEach(n => { n.type = 'turret'; n.dormantTimer = 0; });
    const turrets = leaves.filter(n => n && n.type === 'turret');
    turrets.forEach(n => { n.baseAngle = (n.baseAngle || 0) + b.windVx * (Number(c.matsuruMatsukazeTurretTurnStrength) || 0.48) * dt; });
    const movers = leaves.filter(n => n && n.type === 'moving').slice(0, 8);
    movers.forEach(n => { n.vx *= 1 + ((Number(c.matsuruMatsukazeLeafSpeedBoost) || 1.38) - 1) * dt * 2.2; n.vy *= 1 + ((Number(c.matsuruMatsukazeLeafSpeedBoost) || 1.38) - 1) * dt * 2.2; });
    const toBlow = leaves.filter(n => n && n.type === 'turret').sort((a, z) => (a.age || 0) - (z.age || 0)).slice(0, Math.max(0, Number(c.matsuruMatsukazeBlowAwayCount) || 2));
    toBlow.forEach(n => { n.type = 'decaying'; n.decayTimer = Number(c.matsuruTurretDecayDuration) || 6.5; });
  }
  b.needles = (Array.isArray(b.needles) ? b.needles : []).filter(n => n && n.life > 0);
  const maxLeaves = Math.max(20, Number(c.matsuruLeafMaxCount) || 80);
  if (b.needles.length > maxLeaves) b.needles.sort((a, z) => (a.age || 0) - (z.age || 0)).splice(0, b.needles.length - maxLeaves);
  const maxMoving = Math.max(8, Number(c.matsuruLeafMaxMovingCount) || 28);
  let movingCount = 0;
  const fireFromTurret = (turret) => {
    const leafSpeed = Math.max(1, Number(c.matsubaLeafSpeed) || Number(c.matsuruLeafSpeed) || 122);
    const angles = getMatsubaTurretFireAngles(turret, p, c);
    angles.forEach((angle) => {
      b.needles.push({ x: turret.x, y: turret.y, vx: Math.cos(angle) * leafSpeed * (Number(c.matsuruTurretLeafSpawnSpeedScale) || 0.9), vy: Math.sin(angle) * leafSpeed * (Number(c.matsuruTurretLeafSpawnSpeedScale) || 0.9), radius: Number(c.MATSUBA_PROJECTILE_RADIUS) || 7, life: Number(c.matsuruLeafLifetime) || 6.2, damage: (Number(c.matsuruNeedleDamage) || 10) * (Number(c.matsuruTurretLeafDamageScale) || 0.8), angle, spin: rand(-2.4, 2.4), sway: rand(0.7, 1.3), type: 'moving', source: 'turret' });
    });
  };
  b.needles.forEach(n => {
    n.age = (n.age || 0) + dt; n.wave = (n.wave || rand(0, Math.PI * 2)) + dt * (n.sway || 1);
    if (n.type === 'moving') {
      movingCount += 1;
      if (movingCount > maxMoving) { n.type = 'decaying'; n.decayTimer = Number(c.matsuruTurretDecayDuration) || 6.5; }
      n.x += (n.vx || 0) * dt; n.y += (n.vy || 0) * dt; n.angle = Math.atan2(n.vy || 0, n.vx || 1) + Math.sin(n.wave || 0) * 0.12; n.life -= dt;
      const pad = Number(c.matsuruLeafStickPadding) || 16;
      const hitWall = n.x <= pad || n.x >= CONFIG.canvas.width - pad || n.y <= pad || n.y >= CONFIG.canvas.height - pad;
      const expiredInside = n.life <= 0;
      if (hitWall || expiredInside) { n.x = clamp(n.x, pad, CONFIG.canvas.width - pad); n.y = clamp(n.y, pad, CONFIG.canvas.height - pad); n.type = 'dormant'; n.activationTimer = (Number(CONFIG.debug?.matsubaTurretActivationDelay) || Number(c.matsuruTurretActivationDelay) || 1.7) / matsubaGrowth; n.dormantTimer = 0; n.baseAngle = n.angle || Math.PI; n.vx = 0; n.vy = 0; n.life = Math.max(n.life, (Number(c.matsuruTurretDormantTimeout) || 11.5) + (Number(c.matsuruTurretDecayDuration) || 6.5) + 2); }
      if (distance(n, p) <= (n.radius || 7) + (p.radius || 18) && gameState.damageTimer <= 0) { if (!isInvincible) p.hp -= n.damage || 8; gameState.damageTimer = CONFIG.enemy.damageCooldown; n.type = 'decaying'; n.decayTimer = 0.4; }
    } else if (n.type === 'dormant') {
      n.activationTimer = Math.max(0, (n.activationTimer || 0) - dt); n.dormantTimer = (n.dormantTimer || 0) + dt;
      if (n.activationTimer <= 0) {
        const minSep = Math.max(0, Number(c.matsuruTurretMinSeparation) || 10);
        const spawnSafety = Math.max(0, Number(c.matsuruTurretSpawnSafetyRadius) || 42);
        const trapR = Math.max(0, Number(c.matsuruTurretTrapNeighborRadius) || 34);
        const trapLimit = Math.max(1, Math.floor(Number(c.matsuruTurretTrapNeighborLimit) || 5));
        const overlap = b.needles.some(o => o && o !== n && (o.type === 'turret' || o.type === 'dormant') && distance(o, n) < minSep);
        const instantTrap = distance(n, p) < ((p.radius || 18) + spawnSafety);
        const neighbors = b.needles.filter(o => o && o !== n && o.type === 'turret' && distance(o, n) <= trapR).length;
        if (overlap || instantTrap || neighbors >= trapLimit) { n.type = 'decaying'; n.decayTimer = Math.max(0.2, Number(c.matsuruDecorativeLeafDuration) || 3.2); }
        else n.type = 'turret';
      }
    } else if (n.type === 'turret') {
      n.dormantTimer = (n.dormantTimer || 0) + dt;
      if (distance(n, p) <= (n.radius || 7) + (p.radius || 18) && gameState.damageTimer <= 0) { if (!isInvincible) p.hp -= (n.damage || 8) * 0.65; gameState.damageTimer = CONFIG.enemy.damageCooldown; }
    } else if (n.type === 'decaying') {
      n.decayTimer = (n.decayTimer || Number(c.matsuruTurretDecayDuration) || 6.5) - dt;
      if ((n.decayTimer || 0) <= 0) n.life = 0;
    }
  });
  const turrets = b.needles.filter(n => n && n.type === 'turret');
  const maxActiveTurrets = Math.max(4, Number(c.matsuruTurretMaxActive) || 12);
  const pulseInterval = Math.max(0.2, Number(b.matsubaPulseInterval) || Number(c.matsubaPulseInterval) || Number(c.matsuruTurretFireInterval) || 2.1);
  b.matsubaPulseInterval = pulseInterval;
  if (!Number.isFinite(b.matsubaPulseTimer)) b.matsubaPulseTimer = pulseInterval;
  if (!Number.isFinite(b.matsubaPulsePhase)) b.matsubaPulsePhase = 0;
  b.matsubaPulseWaveTimer = Math.max(0, Number(b.matsubaPulseWaveTimer) || 0);
  const pulseAcceleration = clamp(Number(c.matsukazePulseAcceleration) || 0, 0, 0.8);
  if ((b.matsukazePulseDelayTimer || 0) > 0) {
    b.matsukazePulseDelayTimer = Math.max(0, b.matsukazePulseDelayTimer - dt);
  } else if (b.state === 'matsukaze' || b.state === 'matsukazeReturn') {
    b.matsubaPulseTimer = Math.max(0.08, b.matsubaPulseTimer - scaledDt * pulseAcceleration);
  }
  const inMatsukazeBlockWindow = b.state === 'prepareMatsukaze' && b.stateTimer <= (Number(c.matsuruMatsukazePulseBlockWindow) || 0.35);
  if (!(b.state === 'matsukaze' || b.state === 'matsukazeReturn' || inMatsukazeBlockWindow)) b.matsubaPulseTimer = Math.max(0, b.matsubaPulseTimer - scaledDt);
  b.matsubaPulsePhase = clamp(1 - (b.matsubaPulseTimer / pulseInterval), 0, 1);
  const telegraphDuration = clamp(Number(c.matsubaPulseTelegraphDuration) || 0.5, 0.05, pulseInterval);
  const maxTurretsPerWave = clamp(Math.floor(Number(c.matsubaPulseMaxTurretsPerWave) || 10), 1, Math.max(1, turrets.length || maxActiveTurrets));
  if (b.matsubaPulseTimer <= 0) {
    const sortedTurrets = turrets.slice().sort((a, z) => (a.age || 0) - (z.age || 0));
    const startIndex = Math.max(0, Math.floor(Number(b.nextTurretPulseStartIndex) || 0)) % Math.max(1, sortedTurrets.length);
    const waveTurrets = [];
    for (let i = 0; i < Math.min(maxTurretsPerWave, sortedTurrets.length); i += 1) waveTurrets.push(sortedTurrets[(startIndex + i) % sortedTurrets.length]);
    let firedProjectiles = 0;
    waveTurrets.forEach((turret) => { fireFromTurret(turret); firedProjectiles += 2; });
    b.matsubaPulseFiringTurrets = waveTurrets.length;
    b.nextTurretPulseStartIndex = startIndex + waveTurrets.length;
    b.lastMatsubaPulseCount = firedProjectiles;
    b.matsubaPulseWaveTimer = clamp(Number(c.matsubaPulseWaveVisualDuration) || 0.3, 0.05, 2);
    b.matsubaPulseTimer = pulseInterval;
    b.matsubaPulsePhase = 0;
    b.matsukazePulseDelayTimer = clamp(Number(c.matsukazePulseSynergyDelay) || 0, 0, pulseInterval);
  }
  if (b.matsubaPulseWaveTimer > 0) b.matsubaPulseWaveTimer = Math.max(0, b.matsubaPulseWaveTimer - dt);
  b.matsubaPulseTelegraph = b.matsubaPulseTimer <= telegraphDuration ? (1 - (b.matsubaPulseTimer / telegraphDuration)) : 0;
  const maxProjectiles = Math.max(12, Math.floor(Number(c.matsuruProjectileMaxCount) || 120));
  const movingProjectiles = b.needles.filter(n => n && n.type === 'moving');
  if (movingProjectiles.length > maxProjectiles) movingProjectiles.sort((a, z) => (z.age || 0) - (a.age || 0)).slice(maxProjectiles).forEach(n => { n.type = 'decaying'; n.decayTimer = Number(c.matsuruTurretDecayDuration) || 6.5; });
  if ((p.hp || 0) <= 0) return showGameOver();
  if ((b.hp || 0) <= 0) { b.state = 'defeated'; completeBossEncounter('matsuru'); }
}

function normalizeBossRadius(boss) {
  const fallback = Number(CONFIG.redLight?.bodyRadius) || Number(CONFIG.duel?.tododonRadius) || 60;
  const radius = Number.isFinite(boss?.radius) && boss.radius > 0 ? boss.radius : fallback;
  return Math.max(1, radius);
}

function getActiveBossTarget() {
  const duel = gameState.duel;
  if (!duel || duel.active !== true) return null;

  if (duel.bossType === 'red_light') {
    const boss = duel.boss;
    if (!boss) return null;
    return {
      type: 'boss',
      bossType: 'red_light',
      x: Number(boss.x) || 0,
      y: Number(boss.y) || 0,
      radius: Number(boss.hitRadius) || Number(CONFIG.redLight?.bodyRadius) || 120,
      hp: Number(boss.hp) || 0,
      maxHp: Number(boss.maxHp) || 1,
      ref: boss,
    };
  }

  if (duel.bossType === 'tododon') {
    const boss = duel.boss || duel.tododon;
    if (!boss) return null;
    return {
      type: 'boss',
      bossType: 'tododon',
      x: Number(boss.x) || 0,
      y: Number(boss.y) || 0,
      radius: Number(boss.hitRadius) || Number(boss.radius) || 140,
      hp: Number(boss.hp) || 0,
      maxHp: Number(boss.maxHp) || 1,
      ref: boss,
    };
  }
  if (duel.bossType === 'haginoinoshishi') { const boss = duel.boss; if (!boss) return null; return { type:'boss', bossType:'haginoinoshishi', x:Number(boss.x)||0, y:Number(boss.y)||0, radius:Number(boss.radius)||76, hp:Number(boss.hp)||0, maxHp:Number(boss.maxHp)||1, ref:boss }; }
  if (duel.bossType === 'matsuru') {
    const boss = duel.boss;
    if (!boss) return null;
    return { type: 'boss', bossType: 'matsuru', x: Number(boss.x) || 0, y: Number(boss.y) || 0, radius: Number(boss.radius) || 84, hp: Number(boss.hp) || 0, maxHp: Number(boss.maxHp) || 1, ref: boss };
  }
  return null;
}

function damageActiveBoss(amount, source = 'unknown') {
  const target = getActiveBossTarget();
  if (!target || !target.ref) return false;
  const duel = gameState.duel;
  const boss = target.ref;
  const normalizedAmount = Number(amount) || 0;
  if (!Number.isFinite(normalizedAmount) || normalizedAmount <= 0) return false;
  if (duel?.isComplete) return false;
  if (duel?.active !== true) return false;
  let mult = 1;
  if (target.bossType === 'red_light') {
    const gazeMult = Number.isFinite(CONFIG.redLight?.gazeDamageMultiplier) ? CONFIG.redLight.gazeDamageMultiplier : 0;
    const vulnerableMult = Number.isFinite(CONFIG.redLight?.vulnerableDamageMultiplier) ? CONFIG.redLight.vulnerableDamageMultiplier : 1.8;
    const vulnerable = boss.vulnerable === true || boss.phase === 'blind';
    mult = vulnerable ? vulnerableMult : gazeMult;
  }
  if (target.bossType === 'tododon' && (boss.state === 'dead' || duel?.isComplete || duel?.active !== true)) return false;
  if (target.bossType === 'haginoinoshishi') {
    const c = CONFIG.haginoinoshishi || {};
    const state = boss.state || 'idle';
    if (state === 'defeated') return false;
    const hitCd = Math.max(0, Number(boss.hitCooldown) || 0);
    if (hitCd > 0) return false;
    const base = Math.max(1, Number(c.normalHitDamage) || normalizedAmount || 1);
    const contactRes = clamp(Number(c.contactHitResistanceMultiplier) || 0.5, 0.1, 1);
    let bonus = 1;
    if (state === 'recovery') bonus = Math.max(1, Number(c.recoveryHitDamageMultiplier) || 1.5);
    if (state === 'exhausted' || state === 'finalExhausted') bonus = Math.max(1, Number(c.exhaustedHitDamageMultiplier) || 2);
    if (state === 'charging' || state === 'prepareCharge') bonus *= contactRes;
    const dealt = base * bonus;
    const maxHp = Math.max(1, Number(boss.maxHp) || Number(c.maxHp) || 1);
    boss.hp = clamp((Number(boss.hp) || maxHp) - dealt, 0, maxHp);
    boss.weakPointFlashTimer = Math.max(Number(boss.weakPointFlashTimer) || 0, Number(c.hitFlashDuration) || 0.2);
    boss.resistantFlashTimer = state === 'charging' ? Math.max(Number(boss.resistantFlashTimer) || 0, Number(c.hitFlashDuration) || 0.2) : 0;
    boss.hitCooldown = 0.12;
    spawnHitParticles(Number(boss.x) || 0, Number(boss.y) || 0);
    if (boss.hp <= 0) completeBossEncounter('haginoinoshishi');
    return true;
  }
  if (target.bossType === 'matsuru') {
    const passiveReduction = Number(CONFIG.duel?.matsuruPassiveReduction) || 0.15;
    const p = gameState?.player;
    const isPassive = boss.passiveActive !== false;
    if (isPassive && source === 'projectile') {
      const p = gameState?.player;
      if (p) {
        const dirX = (p.x || 0) - (boss.x || 0);
        const dirY = (p.y || 0) - (boss.y || 0);
        const d = Math.hypot(dirX, dirY) || 1;
        gameState.manualShots.push({ x: boss.x - dirX / d * (boss.radius || 84), y: boss.y - dirY / d * 12, vx: -(dirX / d) * (CONFIG.duel?.matsuruNeedleSpeed || 160), vy: -(dirY / d) * (CONFIG.duel?.matsuruNeedleSpeed || 160), radius: 6, damage: CONFIG.duel?.matsuruNeedleDamage || 12, life: 1.8 });
      }
    }
    const canCounter = boss.passiveActive && boss.state !== 'recovery' && boss.state !== 'matsukaze' && boss.state !== 'matsukazeReturn' && boss.state !== 'counterTell' && boss.state !== 'counterThrust' && (boss.counterCooldown || 0) <= 0;
    if (isPassive && source === 'manual' && canCounter && p) {
      const d = distance(boss, p);
      if (d <= (c.TSURUGAESHI_TRIGGER_RANGE || 90) && Math.random() < (c.TSURUGAESHI_TRIGGER_CHANCE || 0.85)) {
        boss.facingX = (p.x || 0) < (boss.x || 0) ? -1 : 1;
        boss.state = 'counterTell';
        boss.stateTimer = c.TSURUGAESHI_TELL_TIME || 0.28;
        boss.counterCooldown = c.TSURUGAESHI_COOLDOWN || 1.2;
        boss.attackText = '鶴返し';
        boss.attackTextTimer = 0.5;
      }
    }
    mult *= isPassive ? passiveReduction : 1;
    boss.lastHitTimer = 0;
  }
  const finalDamage = Math.max(0, normalizedAmount * Math.max(0, mult));
  if (!Number.isFinite(finalDamage) || finalDamage <= 0) return false;
  const maxHp = Number.isFinite(boss.maxHp) ? boss.maxHp : Math.max(1, Number(boss.hp) || 1);
  boss.hp = clamp((Number(boss.hp) || 0) - finalDamage, 0, maxHp);
  spawnHitParticles(Number(boss.x) || 0, Number(boss.y) || 0);
  boss.weakPointFlashTimer = Math.max(Number(boss.weakPointFlashTimer) || 0, 0.18);
  console.info('[boss] hit', { bossType: target.bossType, damage: finalDamage, hp: boss.hp, source });
  if (boss.hp <= 0) completeBossEncounter(target.bossType);
  return true;
}

function damageBossTarget(amount, source = 'projectile') { return damageActiveBoss(amount, source); }

function isActiveBossDamageable() {
  const target = getActiveBossTarget();
  if (!target || !target.ref) return false;
  if (target.bossType === 'red_light') return target.ref.phase === 'blind';
  if (target.bossType === 'tododon') return target.ref.state !== 'dead';
  return true;
}

function completeBossEncounter(bossType) {
  const duel = gameState?.duel;
  if (!duel || duel.isComplete) return;
  duel.isComplete = true;
  duel.active = false;
  if (Array.isArray(duel.waveProjectiles)) duel.waveProjectiles = [];
  if (Array.isArray(gameState.projectiles)) gameState.projectiles = [];
  if (Array.isArray(gameState.manualShots)) gameState.manualShots = [];
  if (bossType === 'tododon') unlockTododonShop();
  if (bossType === 'red_light' && gameState.world) gameState.world.redLightBossDefeated = true;
  if (bossType === 'haginoinoshishi') {
    const boss = duel?.boss || {};
    boss.state = 'defeated';
    boss.stateTimer = 0;
    boss.vx = 0;
    boss.vy = 0;
    boss.chargeDirX = 0;
    boss.chargeDirY = 0;
    duel.ruinedGround = [];
    duel.duelParticles = [];
    if (!gameState.meta.unlockedFlags || typeof gameState.meta.unlockedFlags !== 'object') gameState.meta.unlockedFlags = {};
    gameState.meta.unlockedFlags.haginoinoshishiTechnique = true;
    startScriptedEvent('haginoinoshishi_defeat', 'haginoinoshishi_return_hub');
    return;
  }
  showClear();
}

function getMovementDistance(entity) {
  if (!entity) return 0;

  const currentX = Number(entity.x) || 0;
  const currentY = Number(entity.y) || 0;

  const prevX = Number(entity.prevX);
  const prevY = Number(entity.prevY);

  if (!Number.isFinite(prevX) || !Number.isFinite(prevY)) {
    return 0;
  }

  return Math.hypot(
    currentX - prevX,
    currentY - prevY
  );
}

function isRedLightDangerActive() {
  const duel = gameState.duel;
  const boss = duel?.boss;

  if (!duel || duel.active !== true) return false;
  if (duel.bossType !== 'red_light') return false;
  if (!boss) return false;

  return (
    boss.phase === 'gaze'
    && boss.isDangerWindow === true
    && boss.gazeLocked === true
    && boss.eyeOpen === true
    && boss.currentPhrase === CONFIG.redLight.dangerPhrase
  );
}

function isPlayerHiddenFromRedLight() {
  const duel = gameState.duel;
  const boss = duel?.boss;
  const player = gameState.player;

  if (!boss || !player) return false;

  if (typeof isObstacleBlockingLine !== 'function') {
    return false;
  }

  return isObstacleBlockingLine(
    boss.x,
    boss.y,
    player.x,
    player.y
  );
}

function playRedLightGazeSound() {}
function playRedLightPunishmentSound() {}
function playRedLightBlindSound() {}

function applyRedLightPunishment() {
  console.warn('[red_light] APPLY PUNISHMENT');

  const player = gameState.player;
  const duel = gameState.duel;
  const boss = duel?.boss;

  if (!player || !boss) return;

  const damage = Number(CONFIG.redLight?.punishmentDamage) || 0;
  const beforeHp = Number.isFinite(player.hp) ? player.hp : CONFIG.player.maxHp;

  player.hp = Math.max(
    0,
    beforeHp - damage
  );

  console.warn('[red_light] hp changed', {
    beforeHp,
    afterHp: player.hp
  });

  player.redLightStunTimer =
    Number(CONFIG.redLight?.punishmentStunDuration) || 0;

  player.redLightPunishFlashTimer =
    Number(CONFIG.redLight?.punishmentFlashDuration) || 0;

  boss.punishmentCooldownTimer =
    Number(CONFIG.redLight?.punishmentCooldown) || 0.5;

  boss.punishmentFlashTimer = 0.25;

  spawnHitParticles(player.x, player.y);
  playRedLightPunishmentSound();

  console.info('[red_light] punishment applied', {
    damage,
    beforeHp,
    afterHp: player.hp
  });

  if (player.hp <= 0) {
    showGameOver();
  }
}

function updateRedLightPunishment(dt) {
  const duel = gameState.duel;
  const boss = duel?.boss;
  const player = gameState.player;

  if (!duel || duel.active !== true) return;
  if (duel.bossType !== 'red_light') return;
  if (!boss || !player) return;

  boss.punishmentCooldownTimer = Math.max(
    0,
    (Number(boss.punishmentCooldownTimer) || 0) - dt
  );

  if (!isRedLightDangerActive()) return;
  if (boss.punishmentCooldownTimer > 0) return;

  const hidden = isPlayerHiddenFromRedLight();

  console.info('[red_light] hidden check', {
    hidden
  });

  const movedDistance = getMovementDistance(player);
  const threshold = Number(CONFIG.redLight?.movementThreshold) || 14;

  console.info('[red_light] movement check', {
    movedDistance,
    threshold: CONFIG.redLight.movementThreshold,
    danger: isRedLightDangerActive(),
    hidden: isPlayerHiddenFromRedLight?.(),
    phrase: boss.currentPhrase
  });

  // DEBUG: temporarily bypass hidden gate for line-of-sight verification
  // if (hidden) return;

  if (movedDistance < threshold) return;

  console.info('[red_light] punishment triggered', {
    movedDistance,
    threshold,
    hidden,
    phrase: boss.currentPhrase,
    phase: boss.phase,
    eyeOpen: boss.eyeOpen,
    isDangerWindow: boss.isDangerWindow
  });

  applyRedLightPunishment();
}

function updateRedLightBossBattle(dt) {
  const p = gameState?.player; const duel = gameState?.duel; const boss = duel?.boss; const c = CONFIG.redLight || {};
  if (!p || !duel || !boss) return;
  duel.timer = (duel.timer || 0) + dt;
  p.redLightPunishFlashTimer = Math.max(0, (p.redLightPunishFlashTimer || 0) - dt);
  if (p.redLightStunTimer > 0) {
    p.redLightStunTimer = Math.max(0, p.redLightStunTimer - dt);
  } else {
    updatePlayerMovement(dt);
  }
  updatePlayerAttack(dt);
  updateProjectiles(dt);
  updateParticles(dt);
  boss.phaseTimer = Math.max(0, (boss.phaseTimer || 0) - dt);
  boss.punishmentFlashTimer = Math.max(0, (boss.punishmentFlashTimer || 0) - dt);
  boss.weakPointFlashTimer = Math.max(0, (boss.weakPointFlashTimer || 0) - dt);
  updateRedLightDialogue(dt);
  const phraseSequence = ['だるまさんが……', 'ころん……', CONFIG.redLight.dangerPhrase];
  if (boss.phase === 'gaze') {
    if (!(boss.dialogue?.active) && !(boss.dialogue?.completed) && (boss.currentPhraseIndex || 0) < phraseSequence.length) {
      boss.currentPhrase = phraseSequence[boss.currentPhraseIndex] || '';
      startRedLightPhrase(boss.currentPhrase);
    }
    if (boss.dialogue?.completed) {
      boss.phraseHoldTimer = Math.max(0, (boss.phraseHoldTimer || 0) - dt);
      if (boss.phraseHoldTimer <= 0) {
        boss.currentPhraseIndex += 1;
        boss.dialogue.completed = false;
      }
    }
    const phrase = boss.currentPhrase || '';
    const dangerPhrase = CONFIG.redLight?.dangerPhrase;
    const inDangerPhrase = phrase === dangerPhrase;
    boss.isDangerWindow = inDangerPhrase;
    boss.gazeLocked = inDangerPhrase;
    boss.eyeOpen = inDangerPhrase;
    boss.vulnerable = false;
  } else {
    boss.currentPhrase = '';
    boss.isDangerWindow = false;
    boss.gazeLocked = false;
    boss.eyeOpen = false;
    boss.vulnerable = true;
  }
  if (boss.phaseTimer <= 0) {
    const nextPhase = boss.phase === 'gaze' ? 'blind' : 'gaze';
    boss.phase = nextPhase;
    boss.phaseTimer = nextPhase === 'gaze' ? (c.gazeDuration || 0) : (c.blindDuration || 0);
    boss.movementAccumulator = 0;
    boss.currentPhraseIndex = 0;
    boss.phraseHoldTimer = 0;
    boss.currentPhrase = '';
    boss.isDangerWindow = false;
    boss.gazeLocked = false;
    boss.eyeOpen = false;
    boss.vulnerable = nextPhase === 'blind';
    if (boss.dialogue) {
      boss.dialogue.fullText = '';
      boss.dialogue.visibleText = '';
      boss.dialogue.charIndex = 0;
      boss.dialogue.charTimer = 0;
      boss.dialogue.nextCharDelay = 0;
      boss.dialogue.active = false;
      boss.dialogue.completed = false;
    }
    if (nextPhase === 'gaze') playRedLightGazeSound(); else playRedLightBlindSound();
  }
  updateRedLightPunishment(dt);
  if ((p.hp || 0) <= 0) { showGameOver(); return; }
  if ((boss.hp || 0) <= 0) { boss.phase = 'dead'; completeBossEncounter('red_light'); }
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
  updateDebugUiState();
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
  if (gameState?.phase === 'duel') updatePlayerProjectiles(dt);

  detectExitUnlockedOverwrite();
}

function updateDebugUiState() {
  if (!gameState.debug || typeof gameState.debug !== 'object') gameState.debug = { visible: false, menuOpen: false, bossMenuOpen: false };
  if (!gameState.debug.visible) {
    gameState.debug.menuOpen = false;
    gameState.debug.bossMenuOpen = false;
  }
  if (!debugInfoPanel) return;
  if (!gameState.debug.visible) {
    debugInfoPanel.textContent = '';
    return;
  }
  const zone = getCurrentZone();
  const hp = Math.ceil(gameState?.player?.hp || 0);
  const maxHp = Math.ceil(gameState?.player?.maxHp || 0);
  debugInfoPanel.textContent = `HP ${hp}/${maxHp} | Lv ${gameState.level} | Enemies ${(gameState.enemies || []).length}/${getZoneMaxEnemies()} | Time ${formatTime(gameState.runTime)} | Zone ${zone?.name || '中央庭園'}`;
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

function renderPlayerProjectiles() {
  const projectiles = Array.isArray(gameState?.playerProjectiles) ? gameState.playerProjectiles : [];
  const cardW = Math.max(1, Number(CONFIG.player?.playerCardVisualWidth) || 14);
  const cardH = Math.max(1, Number(CONFIG.player?.playerCardVisualHeight) || 22);
  const trailAlpha = clamp(Number(CONFIG.player?.playerCardTrailAlpha) || 0, 0, 1);
  const cardImage = gameState?.images?.playerCard;
  projectiles.forEach((proj) => {
    if (!proj) return;
    ctx.save();
    const ang = Number(proj.rotation) || 0;
    const vx = Number(proj.vx) || 0;
    const vy = Number(proj.vy) || 0;
    const speed = Math.hypot(vx, vy) || 1;
    ctx.globalAlpha = trailAlpha;
    ctx.strokeStyle = 'rgba(230, 211, 187, 0.6)';
    ctx.lineWidth = Math.max(1, cardW * 0.2);
    ctx.beginPath();
    ctx.moveTo(proj.x, proj.y);
    ctx.lineTo(proj.x - (vx / speed) * cardH * 0.8, proj.y - (vy / speed) * cardH * 0.8);
    ctx.stroke();
    ctx.globalAlpha = 1;
    ctx.translate(Number(proj.x) || 0, Number(proj.y) || 0);
    ctx.rotate(ang);
    if (!cardImage || !safeDrawImage(cardImage.img, -cardW * 0.5, -cardH * 0.5, cardW, cardH)) {
      ctx.fillStyle = '#f8f1e2';
      ctx.strokeStyle = '#d4c3a4';
      ctx.lineWidth = 1.2;
      ctx.fillRect(-cardW * 0.5, -cardH * 0.5, cardW, cardH);
      ctx.strokeRect(-cardW * 0.5, -cardH * 0.5, cardW, cardH);
      ctx.fillStyle = '#9f342f';
      ctx.fillRect(-cardW * 0.28, -cardH * 0.34, cardW * 0.56, cardH * 0.2);
    }
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
  if (gameState?.duel?.bossType === 'matsuru') return renderMatsuruBossBattle();
  if (gameState?.duel?.bossType === 'haginoinoshishi') return renderHaginoinoshishiBossBattle();
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
function safeDrawImage(img, x, y, w, h) { if (!img || !img.complete || img.naturalWidth <= 0 || img.naturalHeight <= 0) return false; ctx.drawImage(img, x, y, w, h); return true; }

function renderHaginoinoshishiBossBattle() { const duel=gameState?.duel; const b=duel?.boss; const cfg=CONFIG.haginoinoshishi||{}; const rg=cfg.ruinedGround||{}; const v=cfg.visuals||{}; if(!b)return; for(const t of (duel?.ruinedGround||[])){const a=clamp((t.ruinLevel||0)/(Number(rg.maxRuinLevel)||1),0,1); ctx.fillStyle = a>0.55 ? (v.trailColorDeep||'rgba(66,45,32,0.45)') : (v.trailColorFresh||'rgba(111,82,61,0.22)'); ctx.beginPath(); ctx.arc(t.x||0,t.y||0,t.radius||20,0,Math.PI*2); ctx.fill(); }
 const radius=(b.radius||76); const state=b.state||'idle'; const baseScale=Number(v.imageScale)||2.3; const shadowScale=Number(v.shadowScale)||1.15; const prepareSquashY=Number(v.prepareSquashY)||0.9; const chargeStretchX=Number(v.chargeStretchX)||1.1; const exhaustedTilt=Number(v.exhaustedTilt)||0.09;
 const spriteFaces=(v.spriteFaces==='left')?'left':'right'; const faceX=(Number(b.facingX)||0)<0?-1:1; const spriteFlip=(spriteFaces==='left')?faceX:(-faceX); const moveAngle=state==='charging'?Math.atan2(Number(b.chargeDirY)||0,Number(b.chargeDirX)||faceX):Math.atan2(Math.sin(Number(b.facing)||0),Math.cos(Number(b.facing)||0));
 let sx=1,sy=1,tilt=0,offsetY=0; if(state==='prepareCharge'){sx=1.04; sy=prepareSquashY; tilt=0.08*faceX;} else if(state==='charging'){sx=chargeStretchX; sy=0.92; tilt=clamp(moveAngle*0.22,-0.2,0.2);} else if(state==='exhausted'||state==='finalExhausted'){sx=0.96; sy=1.02; tilt=exhaustedTilt*faceX; offsetY=radius*0.16;}
 ctx.save(); ctx.fillStyle='rgba(0,0,0,0.28)'; ctx.beginPath(); ctx.ellipse(b.x,b.y+radius*0.72,radius*shadowScale,radius*0.34,0,0,Math.PI*2); ctx.fill(); ctx.restore();
 const img=getBossImage('haginoshishi'); const s=radius*baseScale*2;
 if(img&&img.img){ctx.save(); ctx.translate(b.x,b.y+offsetY); ctx.rotate(tilt); ctx.scale(spriteFlip*sx,sy); safeDrawImage(img.img,-s*0.5,-s*0.5,s,s); ctx.restore();}
 else {ctx.save(); ctx.translate(b.x,b.y+offsetY); ctx.rotate(tilt); ctx.scale(spriteFlip*sx,sy); ctx.fillStyle=v.bossColorFallback||'#3e342f'; ctx.beginPath(); ctx.ellipse(0,0,radius*1.2,state==='prepareCharge'||state==='charging'?radius*0.78:radius*0.92,0,0,Math.PI*2); ctx.fill(); ctx.fillStyle='#e9dfd1'; ctx.fillRect((faceX*radius*0.62)-6,-4,12,8); ctx.restore();}
 const dbg=gameState?.debug||{}; const cfgBoss=CONFIG.haginoinoshishi?.boss||{}; const localR=(duel?.ruinedGround||[]).reduce((m,t)=>{if(!t)return m; const dd=Math.hypot((b.x||0)-(t.x||0),(b.y||0)-(t.y||0)); return dd<=(t.radius||0)?Math.max(m,Number(t.ruinLevel)||0):m;},0); const fatigueRatio=clamp((Number(b.fatigue)||0)/Math.max(1,Number(cfgBoss.fatigueRequiredForFinal)||100),0,1); const rage=fatigueRatio>=(Number(cfgBoss.rageThreshold)||0.6); const turn=(rage?(Number(cfgBoss.chargeTurnRateRage)||0.42):(Number(cfgBoss.chargeTurnRate)||0.34))*(1-localR*(1-(Number(cfgBoss.ruinedGroundChargeTurnRateMultiplier)||0.5)));
 ctx.fillStyle='rgba(10,16,24,0.65)'; ctx.fillRect(540,12,410,98); ctx.fillStyle='#f4f7f9'; ctx.fillText(`HAGINOINOSHISHI ${b.state} | Charge# ${Math.floor(b.chargeCount||0)}`,552,30); ctx.fillText(`Spd ${(Number(b.currentChargeSpeed)||0).toFixed(1)} | Turn ${(Number(b.currentChargeTurnRate)||turn).toFixed(2)} | Ruin ${(duel?.ruinedGround||[]).length}`,552,50); ctx.fillText(`PlayerTerrain x${(Number(gameState?.player?.contactSlowMultiplier)||1).toFixed(2)} | faceX ${faceX} | flip ${spriteFlip}`,552,70); ctx.fillText(`Invincible ${Boolean(dbg.enabled&&dbg.playerInvincible)?'ON':'OFF'}`,552,90);
 if((duel?.rewardTimer||0)>0){ctx.fillStyle='rgba(0,0,0,0.55)'; ctx.fillRect(180,190,600,160); ctx.fillStyle='#fff7da'; ctx.font='30px sans-serif'; ctx.fillText(String(duel.rewardMessage||cfg.rewardMessage||''),220,255); ctx.font='20px sans-serif'; ctx.fillStyle='#f0f6ff'; ctx.fillText(String(duel.rewardSubtitle||'中央庭園へ戻ります'),260,300);}
}

function renderMatsuruBossBattle() {
  const b = gameState?.duel?.boss; if (!b) return;
  const img = getBossImage('matsuru');
  drawEntityShadow(b, 'rgba(0,0,0,0.45)');
  ctx.save();
  const stretch = b.state === 'matsukaze' || b.state === 'matsukazeReturn' ? 1.12 : 1 + Math.sin((b.motionTime || 0) * 1.2) * 0.03;
  const tellLean = b.state === 'counterTell' ? 0.86 : 1;
  const observeLean = b.state === 'idle' ? 1 + Math.sin((b.motionTime || 0) * 0.85) * 0.03 : 1;
  const s = b.radius * 2.3;
  const renderX = b.x + Math.sin((b.glidePhase || 0) * 0.9) * 10;
  const renderY = b.y + Math.cos((b.glidePhase || 0) * 0.7) * 5;
  if (!img || !safeDrawImage(img.img, renderX - (s * stretch) * 0.5, renderY - s * 0.5, s * stretch * tellLean * observeLean, s)) {
    ctx.fillStyle = b.passiveActive ? '#2b4a35' : '#88b395';
    ctx.beginPath(); ctx.ellipse(renderX, renderY, b.radius * stretch, b.radius * 0.75, b.bodySway || 0, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = '#d9f5df'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(renderX - b.radius * 0.9, renderY); ctx.lineTo(renderX + b.radius * 0.9, renderY); ctx.stroke();
  }
  if (b.state === 'matsukaze' || b.state === 'matsukazeReturn') { const windRect = getMovingMatsukazeHitbox(b); ctx.fillStyle = 'rgba(195,235,255,0.25)'; ctx.fillRect(windRect.x, windRect.y, windRect.width, windRect.height); }
  if (b.state === 'counterTell') { ctx.fillStyle = 'rgba(255,255,255,0.85)'; ctx.fillRect(b.x + (b.facingX || -1) * 26, b.y - 16, 22, 3); }
  if (b.state === 'counterThrust') { ctx.fillStyle = 'rgba(240,255,245,0.35)'; ctx.fillRect(b.x - (b.facingX || -1) * 46, b.y - 10, 58, 20); }
  (b.needles || []).forEach(n => {
    if (!n) return;
    ctx.save();
    const alpha = n.type === 'decaying' ? clamp((n.decayTimer || 0) / ((CONFIG.duel?.matsuruTurretDecayDuration) || 6.5), 0, 1) : 1;
    ctx.globalAlpha = alpha;
    ctx.translate(n.x || 0, n.y || 0);
    const sway = Math.sin(n.wave || 0) * 0.18;
    ctx.rotate((n.angle || 0) + sway);
    if (n.type === 'turret') {
      const telegraph = clamp(Number(b.matsubaPulseTelegraph) || 0, 0, 1);
      const shake = telegraph * (Number(CONFIG.duel?.matsubaPulseShakeStrength) || 0.85);
      if (shake > 0.001) ctx.translate(rand(-shake, shake), rand(-shake, shake));
      ctx.fillStyle = `rgba(${Math.round(160 + telegraph * 40)},${Math.round(220 + telegraph * 20)},120,0.95)`;
      ctx.fillRect(-8, -2.2, 16, 4.4);
      ctx.fillStyle = `rgba(230,255,220,${0.65 + telegraph * 0.25})`;
      ctx.fillRect(6, -3, 5, 6);
    }
    else if (n.type === 'dormant') { ctx.fillStyle = 'rgba(125,170,102,0.88)'; ctx.fillRect(-7, -1.8, 14, 3.6); ctx.fillStyle = 'rgba(50,80,45,0.6)'; ctx.fillRect(-1, -4, 2, 8); }
    else { ctx.fillStyle = 'rgba(215,255,205,0.95)'; ctx.fillRect(-6, -2, 12, 4); }
    ctx.restore();
  });
  if ((b.matsubaPulseWaveTimer || 0) > 0) {
    const waveDuration = Math.max(0.05, Number(CONFIG.duel?.matsubaPulseWaveVisualDuration) || 0.32);
    const pct = clamp((b.matsubaPulseWaveTimer || 0) / waveDuration, 0, 1);
    ctx.save();
    ctx.fillStyle = `rgba(165,220,145,${0.1 * pct})`;
    ctx.fillRect(0, 0, CONFIG.canvas.width, CONFIG.canvas.height);
    ctx.restore();
  }
  ctx.restore();
}
function renderRedLightBossBattle() {
  const duel = gameState?.duel; const boss = duel?.boss; const c = CONFIG.redLight || {};
  if (!boss) return;
  renderRedLightBoss(ctx);
  ctx.save();
  const gazeAlpha = isRedLightDangerActive() ? (c.gazeOverlayAlpha || 0) : 0;
  ctx.fillStyle = `rgba(140,20,20,${gazeAlpha})`;
  ctx.fillRect(0, 0, CONFIG.canvas.width, CONFIG.canvas.height);
  if ((boss.punishmentFlashTimer || 0) > 0) {
    const flashPct = clamp((boss.punishmentFlashTimer || 0) / (c.punishmentFlashDuration || 0.45), 0, 1);
    ctx.fillStyle = `rgba(220,30,30,${(c.punishmentOverlayAlpha || 0) * flashPct})`;
    ctx.fillRect(0, 0, CONFIG.canvas.width, CONFIG.canvas.height);
  }
  const vg = ctx.createRadialGradient(CONFIG.canvas.width * 0.5, CONFIG.canvas.height * 0.5, 120, CONFIG.canvas.width * 0.5, CONFIG.canvas.height * 0.5, 560);
  vg.addColorStop(0, 'rgba(0,0,0,0)');
  vg.addColorStop(1, 'rgba(30,0,0,0.26)');
  ctx.fillStyle = vg; ctx.fillRect(0, 0, CONFIG.canvas.width, CONFIG.canvas.height);
  if ((gameState?.player?.redLightPunishFlashTimer || 0) > 0) {
    const flashPct = clamp((gameState.player.redLightPunishFlashTimer || 0) / (c.punishmentFlashDuration || 0.45), 0, 1);
    ctx.fillStyle = `rgba(255,50,50,${0.24 * flashPct})`;
    ctx.fillRect(0, 0, CONFIG.canvas.width, CONFIG.canvas.height);
  }
  ctx.restore();
  renderRedLightDialogue(ctx);
}

function renderRedLightDialogue(drawCtx) {
  const boss = gameState?.duel?.boss;
  const dialogue = boss?.dialogue;
  if (!drawCtx || !dialogue) return;
  const text = dialogue.visibleText || '';
  if (!text && !dialogue.active && !dialogue.completed) return;
  const c = CONFIG.redLight || {};
  const panelW = CONFIG.canvas.width - 120;
  const panelH = Number(c.dialogueBoxHeight) || 52;
  const x = (CONFIG.canvas.width - panelW) * 0.5;
  const y = CONFIG.canvas.height - panelH - (Number(c.dialogueBottomMargin) || 18);
  drawCtx.save();
  drawCtx.fillStyle = 'rgba(8,10,16,0.62)';
  drawCtx.fillRect(x, y, panelW, panelH);
  drawCtx.strokeStyle = 'rgba(255,170,170,0.26)';
  drawCtx.strokeRect(x, y, panelW, panelH);
  drawCtx.fillStyle = '#ffd8d8';
  drawCtx.font = 'bold 24px sans-serif';
  drawCtx.textAlign = 'left';
  drawCtx.fillText(text, x + 20, y + 34);
  const pulseOn = Math.sin((gameState.time || 0) * 5.6) > -0.2;
  if (pulseOn) drawCtx.fillText('▌', x + panelW - 28, y + 34);
  drawCtx.restore();
}
function renderRedLightBoss(drawCtx) {
  const duel = gameState?.duel; const boss = duel?.boss; const c = CONFIG.redLight || {};
  if (!boss || !drawCtx) return;
  const bodyRadius = c.bodyRadius || 130;
  const pulse = 1 + Math.sin((gameState.time || 0) * 1.2) * 0.025;
  drawCtx.save();
  const img = getBossImage('red_light');
  if (img) {
    const s = bodyRadius * 2.2;
    drawCtx.globalAlpha = 0.9;
    drawCtx.drawImage(img, (boss.x || 0) - s * 0.5, (boss.y || 0) - s * 0.5, s, s);
  } else {
    drawCtx.fillStyle = 'rgba(12,8,14,0.85)';
    drawCtx.beginPath(); drawCtx.arc(boss.x, boss.y, bodyRadius * pulse, 0, Math.PI * 2); drawCtx.fill();
  }
  const eyeScale = boss.eyeOpen ? (c.eyeOpenScale || 1) : (c.eyeClosedScale || 0.72);
  const er = (c.weakPointRadius || 58) * eyeScale;
  drawCtx.shadowBlur = 28; drawCtx.shadowColor = 'rgba(255,60,60,0.65)';
  drawCtx.fillStyle = boss.vulnerable ? 'rgba(255,120,120,0.95)' : 'rgba(255,40,40,0.95)';
  drawCtx.beginPath(); drawCtx.ellipse(boss.x, boss.y, er * 1.1, er * (boss.eyeOpen ? 0.75 : 0.22), 0, 0, Math.PI * 2); drawCtx.fill();
  if ((boss.weakPointFlashTimer || 0) > 0) { drawCtx.strokeStyle = 'rgba(255,240,220,0.9)'; drawCtx.lineWidth = 3; drawCtx.stroke(); }
  drawCtx.restore();
}
function drawBossActionText() { const t = gameState?.duel?.tododon; if (!t || !t.actionText) return; const w = CONFIG.canvas.width - 120; const h = 38; const x = 60; const y = CONFIG.canvas.height - 60; const alpha = t.actionTextTimer < 0.3 ? clamp(t.actionTextTimer / 0.3, 0, 1) : 1; ctx.save(); ctx.globalAlpha = alpha; ctx.fillStyle = 'rgba(8,14,24,0.58)'; ctx.fillRect(x, y, w, h); ctx.strokeStyle = 'rgba(220,236,255,0.35)'; ctx.strokeRect(x, y, w, h); ctx.fillStyle = '#ecf6ff'; ctx.font = '18px sans-serif'; ctx.fillText(t.actionText, x + 16, y + 25); ctx.restore(); }
function drawDuelBossHpBar() {
  if (gameState?.duel?.bossType === 'red_light') {
    const b = gameState?.duel?.boss; if (!b || gameState.phase !== 'duel') return;
    const w = 520; const h = 18; const x = (CONFIG.canvas.width - w) / 2; const y = 18; const pct = clamp((b.hp || 0) / (b.maxHp || 1), 0, 1);
    ctx.fillStyle = 'rgba(0,0,0,0.55)'; ctx.fillRect(x, y, w, h); ctx.fillStyle = '#ff7272'; ctx.fillRect(x, y, w * pct, h); ctx.strokeStyle = '#ffd5d5'; ctx.strokeRect(x, y, w, h); ctx.fillStyle = '#fff'; ctx.font = 'bold 16px sans-serif'; ctx.fillText('Red Light Biolume', x, y - 6); return;
  }
  const t = gameState?.duel?.tododon; if (!t || gameState.phase !== 'duel') return;
  if (gameState?.duel?.bossType === 'matsuru') {
    const b = gameState?.duel?.boss; if (!b) return;
    const w = 520; const h = 18; const x = (CONFIG.canvas.width - w) / 2; const y = 18; const pct = clamp((b.hp || 0) / (b.maxHp || 1), 0, 1);
    ctx.fillStyle = 'rgba(0,0,0,0.55)'; ctx.fillRect(x, y, w, h); ctx.fillStyle = '#9fe7b7'; ctx.fillRect(x, y, w * pct, h); ctx.strokeStyle = '#e6ffe8'; ctx.strokeRect(x, y, w, h); ctx.fillStyle = '#fff'; ctx.font = 'bold 16px sans-serif'; ctx.fillText('Matsuru / マツル', x, y - 6);
    return;
  }
  const w = 520; const h = 18; const x = (CONFIG.canvas.width - w) / 2; const y = 18; const pct = clamp((t.hp||0)/(t.maxHp||1),0,1);
  ctx.fillStyle = 'rgba(0,0,0,0.55)'; ctx.fillRect(x,y,w,h); ctx.fillStyle = '#8ed0ff'; ctx.fillRect(x,y,w*pct,h); ctx.strokeStyle='#dff4ff'; ctx.strokeRect(x,y,w,h); ctx.fillStyle='#fff'; ctx.font='bold 16px sans-serif'; ctx.fillText('Tododon', x, y-6);
}

function drawHud() {
  const debugUi = CONFIG.ui?.debug || {};
  const showDebug = Boolean(gameState?.debug?.visible);
  const p = gameState.player;
  const hpPct = p.hp / p.maxHp;
  const xpPct = gameState.xp / gameState.xpToNext;

  ctx.fillStyle = '#0008';
  ctx.fillRect(debugUi.hudPanelX, debugUi.hudPanelY, debugUi.hudPanelWidth, debugUi.hudBaseHeight);
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
  if (showDebug && gameState?.debug?.enabled && Number.isFinite(gameState?.debug?.targetSurvivalTimeOverride)) {
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
  ctx.fillText(`Zone: ${zone?.name || '中央庭園'}`, 26, 182);
  if (showDebug && CONFIG.debug?.fastExitUnlockEnabled) {
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

  if (showDebug && gameState?.debug?.enabled && gameState?.duel?.bossType === 'red_light') {
    const boss = gameState?.duel?.boss;
    const danger = isRedLightDangerActive();
    const hidden = isPlayerHiddenFromRedLight();
    const moveDist = getMovementDistance(gameState?.player);
    ctx.fillStyle = 'rgba(255,220,220,0.9)';
    ctx.font = '12px monospace';
    ctx.fillText(`Phrase: ${boss?.currentPhrase || ''}`, 26, 302);
    ctx.fillText(`Danger Window: ${boss?.isDangerWindow === true}`, 26, 318);
    ctx.fillText(`Eye Open: ${boss?.eyeOpen === true}`, 26, 334);
    ctx.fillText(`Gaze Locked: ${boss?.gazeLocked === true}`, 26, 350);
    ctx.fillText(`Hidden: ${hidden}`, 26, 366);
    ctx.fillText(`Movement Distance: ${moveDist.toFixed(2)}`, 26, 382);
    ctx.fillText(`Player HP: ${Math.ceil(gameState?.player?.hp || 0)} / ${Math.ceil(gameState?.player?.maxHp || 0)}`, 26, 398);
    ctx.fillText(`Danger Active: ${danger}`, 26, 414);
  }
  if (showDebug && (gameState?.duel?.active === true || gameState?.duel?.bossType)) {
    const boss = getActiveBossTarget();
    if (boss) {
      ctx.fillStyle = 'rgba(230,255,230,0.9)';
      ctx.font = '12px monospace';
      ctx.fillText(`Boss: ${boss.bossType}`, 26, 366);
      ctx.fillText(`Boss HP: ${Math.ceil(boss.hp)} / ${Math.ceil(boss.maxHp)}`, 26, 382);
      const p = gameState?.player;
      const inRange = p ? distance({ x: boss.x, y: boss.y }, p) <= (Number(p.attackRange) || Number(CONFIG.player?.attackRange) || 0) : false;
      ctx.fillText(`Boss Target Exists: ${Boolean(boss)}`, 26, 398);
      ctx.fillText(`Boss Type: ${boss.bossType}`, 26, 414);
      ctx.fillText(`Boss HP: ${Math.ceil(boss.hp)} / ${Math.ceil(boss.maxHp)}`, 26, 430);
      ctx.fillText(`Damageable: ${isActiveBossDamageable()}`, 26, 446);
      ctx.fillText(`Boss In Attack Range: ${inRange}`, 26, 462);
      ctx.fillText(`Card Proj: ${(gameState?.playerProjectiles || []).length}`, 26, 478);
      ctx.fillText(`Card CD: ${(Number(gameState?.player?.cardAttackCooldownTimer) || 0).toFixed(2)}`, 26, 494);
    }
  }
  if (showDebug && gameState?.duel?.bossType === 'matsuru') {
    const b = gameState?.duel?.boss;
    const leaves = Array.isArray(b?.needles) ? b.needles : [];
    const activeTurrets = leaves.filter(n => n && n.type === 'turret').length;
    const speedMul = clamp((Number(CONFIG.debug?.matsuruActionSpeedMultiplier) || 1) * (gameState?.debug?.matsuruFastMode ? (Number(CONFIG.debug?.matsuruDebugActionSpeedMultiplier) || 1) : 1) * clamp(Number(gameState?.debug?.matsuruActionSpeedMultiplierOverride) || 1, 0.6, 3.2), 0.6, 3.6);
    ctx.fillStyle = 'rgba(200,255,200,0.95)';
    ctx.font = '12px monospace';
    ctx.fillText(`Invincible: ${Boolean(gameState?.debug?.playerInvincible)}`, 300, 430);
    ctx.fillText(`Matsuru State: ${b?.state || 'none'}`, 300, 446);
    const stuckLeaves = leaves.filter(n => n && (n.type === 'dormant' || n.type === 'turret')).length;
    ctx.fillText(`Boss Timer: ${(Number(b?.stateTimer) || 0).toFixed(2)}`, 300, 462);
    ctx.fillText(`Opening Done: ${Boolean(b?.openingDone)}`, 300, 478);
    const windRect = getMovingMatsukazeHitbox(b || {});
    ctx.fillText(`Matsukaze Target: (${Math.round(Number(b?.matsukazeTargetX) || 0)}, ${Math.round(Number(b?.matsukazeTargetY) || 0)})`, 300, 494);
    ctx.fillText(`Matsukaze Rect: (${Math.round(windRect.x)}, ${Math.round(windRect.y)}) ${Math.round(windRect.width)}x${Math.round(windRect.height)}`, 300, 510);
    ctx.fillText(`Matsukaze Damage: ${getMatsukazeDamage()}`, 300, 526);
    ctx.fillText(`Pulse Timer: ${(Number(b?.matsubaPulseTimer) || 0).toFixed(2)}`, 300, 542);
    ctx.fillText(`Turrets: ${activeTurrets} (Firing: ${Math.floor(Number(b?.matsubaPulseFiringTurrets) || 0)})`, 300, 558);
    ctx.fillText(`Last Pulse Projectiles: ${Math.floor(Number(b?.lastMatsubaPulseCount) || 0)}`, 300, 574);
    ctx.fillText(`Stuck Leaves: ${stuckLeaves}`, 300, 590);
    ctx.fillText(`Projectiles: ${leaves.filter(n => n && n.type === 'moving').length}`, 300, 606);
    ctx.fillText(`Speed Mult: ${speedMul.toFixed(2)}x`, 300, 622);
    if (b && (b.state === 'matsukaze' || b.state === 'matsukazeReturn')) { ctx.strokeStyle = 'rgba(120,220,255,0.95)'; ctx.lineWidth = 1.5; ctx.strokeRect(windRect.x, windRect.y, windRect.width, windRect.height); }
  }
  if (showDebug && gameState?.duel?.bossType === 'haginoinoshishi') {
    const b = gameState?.duel?.boss;
    const phaseCfg = gameState?.duel?.phaseConfig || getHaginoinoshishiPhaseConfig(b);
    ctx.fillStyle = 'rgba(255,240,210,0.95)';
    ctx.font = '12px monospace';
    ctx.fillText(`Hagino Phase: ${Math.floor(Number(b?.phaseLevel) || 1)}`, 300, 430);
    ctx.fillText(`Charge Timer: ${(Number(b?.stateTimer) || 0).toFixed(2)}`, 300, 446);
    ctx.fillText(`Ruined Patches: ${(gameState?.duel?.ruinedGround || []).length}`, 300, 462);
    ctx.fillText(`Ground Recover/s: ${(Number(phaseCfg?.groundRecoveryPerSecond) || 0).toFixed(3)}`, 300, 478);
    ctx.fillText(`Player Terrain x${(Number(gameState?.player?.contactSlowMultiplier) || 1).toFixed(2)}`, 300, 494);
    ctx.fillText(`Reward Unlocked: ${Boolean(gameState?.meta?.unlockedFlags?.haginoinoshishiTechnique)}`, 300, 510);
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
  if (world.isTransitioning && (world.transitionTimer || 0) > 0) {
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
    const key = `creature_${e?.creatureId || 'tsurumatsu'}`;
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
  ctx.fillText(gameState?.event?.speaker || layout.def.speaker || '???', layout.innerX, layout.speakerY, layout.textW);
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

function renderZoneObstacles(context) {
  const obstacles = getCurrentZoneObstacles();
  if (!context || !obstacles.length) return;
  obstacles.forEach(obstacle => {
    if (!obstacle || !obstacle.type) return;
    const visual = String(obstacle.visual || '');
    if (obstacle.type === 'circle') {
      const x = Number(obstacle.x) || 0;
      const y = Number(obstacle.y) || 0;
      const radius = Math.max(0, Number(obstacle.radius) || 0);
      if (visual === 'hole') {
        const grad = context.createRadialGradient(x, y, radius * 0.2, x, y, radius);
        grad.addColorStop(0, 'rgba(8, 15, 26, 0.75)');
        grad.addColorStop(1, 'rgba(8, 15, 26, 0.25)');
        context.fillStyle = grad;
      } else if (visual === 'carcass') {
        context.fillStyle = 'rgba(142, 70, 76, 0.52)';
      } else if (visual === 'pillar') {
        context.fillStyle = 'rgba(104, 116, 138, 0.5)';
      } else {
        context.fillStyle = 'rgba(49, 62, 78, 0.56)';
      }
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fill();
    } else if (obstacle.type === 'rect') {
      const x = Number(obstacle.x) || 0;
      const y = Number(obstacle.y) || 0;
      const width = Math.max(0, Number(obstacle.width) || 0);
      const height = Math.max(0, Number(obstacle.height) || 0);
      if (visual === 'kelp') context.fillStyle = 'rgba(88, 156, 124, 0.42)';
      else if (visual === 'carcass') context.fillStyle = 'rgba(138, 78, 68, 0.46)';
      else if (visual === 'pillar') context.fillStyle = 'rgba(106, 112, 128, 0.55)';
      else context.fillStyle = 'rgba(63, 70, 82, 0.48)';
      context.fillRect(x, y, width, height);
    }
    if (CONFIG.environment?.obstacleDebugRender === true) {
      context.save();
      context.strokeStyle = 'rgba(255, 244, 120, 0.9)';
      context.lineWidth = 1.5;
      if (obstacle.type === 'circle') {
        context.beginPath();
        context.arc(Number(obstacle.x) || 0, Number(obstacle.y) || 0, Math.max(0, Number(obstacle.radius) || 0), 0, Math.PI * 2);
        context.stroke();
      } else if (obstacle.type === 'rect') {
        context.strokeRect(Number(obstacle.x) || 0, Number(obstacle.y) || 0, Math.max(0, Number(obstacle.width) || 0), Math.max(0, Number(obstacle.height) || 0));
      }
      context.fillStyle = '#fff2a8';
      context.font = '12px sans-serif';
      context.fillText(String(obstacle.id || 'obstacle'), (Number(obstacle.x) || 0) + 4, (Number(obstacle.y) || 0) - 4);
      context.restore();
    }
  });
}

function render() {
  drawBackground();
  drawDuelArena();
  if (!gameState.player) return;
  renderZoneObstacles(ctx);
  drawRanges();
  drawXpGems();
  drawParticles();
  drawProjectiles();
  renderPlayerProjectiles();
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
    const isScriptEvent = Array.isArray(gameState?.event?.script) && gameState.event.script.length > 0;
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
      if (isScriptEvent) advanceScriptedEventOrClose();
      else closeEventToFlow(gameState?.event?.nextFlow || 'clear');
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
    if (e.repeat) return;
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


  if (e.key === 'F3') {
    e.preventDefault();
    if (!gameState.debug || typeof gameState.debug !== 'object') gameState.debug = { visible: false, menuOpen: false, bossMenuOpen: false };
    gameState.debug.visible = !Boolean(gameState.debug.visible);
    if (!gameState.debug.visible) {
      gameState.debug.menuOpen = false;
      gameState.debug.bossMenuOpen = false;
      gameState.startUi.debugMenuOpen = false;
      gameState.startUi.bossBattleMenuOpen = false;
      syncStartMenuUi();
    }
    syncDebugUi();
    return;
  }
  if (e.key === 'F6') {
    e.preventDefault();
    ensureDebugState();
    gameState.debug.playerInvincible = !Boolean(gameState.debug.playerInvincible);
    return;
  }
  if (e.key === 'F7') {
    e.preventDefault();
    ensureDebugState();
    gameState.debug.matsuruFastMode = !Boolean(gameState.debug.matsuruFastMode);
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
  gameState.debug.enabled = false;
  gameState.debug.targetSurvivalTimeOverride = null;
  gameState.debug.bossBattleMode = false;
  gameState.debug.bossType = null;
  startRun();
  startModal?.classList.add('hidden');
  gameOverModal.classList.add('hidden');
  clearModal?.classList.add('hidden');
});

openDebugMenuBtn?.addEventListener('click', () => {
  if (gameState.phase !== 'start') return;
  ensureDebugState();
  gameState.debug.visible = true;
  gameState.debug.menuOpen = true;
  gameState.debug.bossMenuOpen = true;
  gameState.startUi.debugMenuOpen = true;
  gameState.startUi.bossBattleMenuOpen = true;
  syncStartMenuUi();
  renderDebugMenu();
  syncStartMetaStats();
  syncDebugUi();
});

debugBackBtn?.addEventListener('click', () => {
  if (gameState.phase !== 'start') return;
  closeDebugMenu();
  syncStartMenuUi();
});
debugMenuCloseBtn?.addEventListener('click', () => {
  if (gameState.phase !== 'start') return;
  closeDebugMenu();
  syncStartMenuUi();
});

debugMenuModal?.addEventListener('click', (event) => {
  if (gameState.phase !== 'start') return;
  const target = event.target;
  if (!(target instanceof Element)) return;
  if (target === debugMenuModal || target.classList.contains('debug-menu-backdrop')) {
    closeDebugMenu();
    syncStartMenuUi();
  }
});
debugToggleBtn?.addEventListener('click', () => {
  if (!gameState.debug || typeof gameState.debug !== 'object') gameState.debug = { visible: false, menuOpen: false, bossMenuOpen: false };
  gameState.debug.visible = !Boolean(gameState.debug.visible);
  if (!gameState.debug.visible) {
    gameState.debug.menuOpen = false;
    gameState.debug.bossMenuOpen = false;
    gameState.startUi.debugMenuOpen = false;
    gameState.startUi.bossBattleMenuOpen = false;
  }
  syncStartMenuUi();
  renderDebugMenu();
  syncDebugUi();
});

function syncDebugUi() {
  if (!gameState.debug || typeof gameState.debug !== 'object') gameState.debug = { visible: false, menuOpen: false, bossMenuOpen: false };
  const visible = Boolean(gameState.debug.visible);
  if (debugToggleBtn) debugToggleBtn.setAttribute('aria-pressed', String(visible));
  const shouldShowDebugPanel = visible && (gameState.phase === 'playing' || gameState.phase === 'ending' || gameState.phase === 'duel');
  if (debugInfoPanel) debugInfoPanel.classList.toggle('hidden', !shouldShowDebugPanel);
  const maxHeightVh = Number.isFinite(CONFIG.ui?.debug?.menuMaxHeightVh) ? CONFIG.ui.debug.menuMaxHeightVh : 80;
  const menuContent = debugMenuModal?.querySelector?.('.debug-menu-content');
  if (menuContent) menuContent.style.maxHeight = `${maxHeightVh}vh`;
}


restartBtn.addEventListener('click', () => {
  gameState.startUi.debugMenuOpen = false;
  gameState.startUi.bossBattleMenuOpen = false;
  resetState('start');
  syncStartMenuUi();
  renderDebugMenu();
  syncStartMetaStats();
});
clearRestartBtn?.addEventListener('click', () => {
  gameState.startUi.debugMenuOpen = false;
  gameState.startUi.bossBattleMenuOpen = false;
  resetState('start');
  syncStartMenuUi();
  renderDebugMenu();
});
eventModal?.addEventListener('click', e => {
  if (gameState.phase !== 'event') return;
  if (gameState?.event?.showingResult) {
    if (Array.isArray(gameState?.event?.script) && gameState.event.script.length > 0) advanceScriptedEventOrClose();
    else closeEventToFlow(gameState?.event?.nextFlow || 'clear');
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
  syncStartMenuUi();
  syncDebugUi();
  renderDebugMenu();
  syncStartMetaStats();
  await preloadImages();
  requestAnimationFrame(loop);
})();
