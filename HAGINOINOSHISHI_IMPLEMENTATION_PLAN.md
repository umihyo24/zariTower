# Haginoinoshishi / ハギノシシ Boss Implementation Plan (Revised)

## 1) Design Intent
Haginoinoshishi is a **territorial heavyweight** boss, not an indicator-dodging encounter.

The player must read:
- body posture,
- weight shift,
- turn commitment,
- timing windows,
- and terrain interaction.

The fight loop is:
**read posture → bait charge → dodge by positioning → force crash into rock → stun → repeat**.

Victory is achieved by **terrain-driven crashes**, not ordinary HP depletion.

---

## 2) Hard Prohibitions (Do Not Implement)
The following are explicitly forbidden:
- direction prediction line
- red warning line
- danger laser
- danger zone overlay
- explicit attack trajectory UI
- large AoE telegraph shapes

No precise path UI should appear before or during charge.

---

## 3) Allowed Readability Signals (Use These Instead)
Readable intent must come from diegetic, physical cues:
- body orientation and committed facing
- short stillness before launch
- head-lowering charge pose
- front-leg stomping / pawing
- dust puffs at front feet
- grass shaking/swaying in front of boss
- subtle pre-charge screen shake
- stronger movement shake during charge

These cues must be legible but not mathematically exact.

---

## 4) Win Condition & Combat Objective
- Add `crashCount` to boss state.
- Boss is defeated when `crashCount >= CONFIG.HAGINOINOSHISHI.REQUIRED_CRASHES`.
- Player weapon damage is optional flavor only; it must not be the main clear path.
- Clear flow triggers from crash objective completion.

---

## 5) Required CONFIG
All gameplay numbers must live in CONFIG:

```js
CONFIG.HAGINOINOSHISHI = {
  REQUIRED_CRASHES: 3,
  BOSS_WIDTH_RATIO: 0.3,
  IDLE_TIME: 0.8,
  AIM_TIME: 1.1,
  CHARGE_SPEED: 520,
  CHARGE_TURN_RATE: 1.4,
  STUN_TIME: 1.5,
  PLAYER_DAMAGE: 25,
  PLAYER_HIT_COOLDOWN: 0.8,
  GRASS_SLOW_MULTIPLIER: 0.82,
  DUST_SPAWN_INTERVAL: 0.08,
  PRE_CHARGE_SHAKE: 2
};
```

No hardcoded gameplay constants outside CONFIG.

---

## 6) State Machine
Use exactly these primary states:
- `idle`
- `aim`
- `charge`
- `stun`
- `defeated`

### idle
- Slow breathing / stomp loop.
- Face or drift toward player.
- No attack indicator UI.
- After `IDLE_TIME`, transition to `aim`.

### aim
- Boss mostly stops translation.
- Gradually rotates toward player only (no snap).
- Head lowers.
- Front legs paw ground.
- Dust particles near front feet at `DUST_SPAWN_INTERVAL`.
- Grass in front may sway.
- No prediction line or danger zone.
- After `AIM_TIME`, transition to `charge`.

### charge
- Launch forward in current facing direction.
- May lightly track target by applying angular change capped by `CHARGE_TURN_RATE`.
- Never instant-rotate.
- If colliding with rock: increment crash count and transition to `stun`.
- If traversing grass: convert `grass -> flattenedGrass`.
- If colliding with player: apply `PLAYER_DAMAGE`, knockback, and enforce `PLAYER_HIT_COOLDOWN`.

### stun
- Wobble/slump feedback state (successful terrain exploit).
- Recover after `STUN_TIME` unless crash requirement reached.
- On completion: if crashes reached, transition `defeated`; else `idle`.

### defeated
- Stop offensive behavior.
- Trigger stage clear / duel clear flow.

---

## 7) Data Model (Inside gameState Only)
All mutable values under `gameState` (example shape):

```js
gameState.duel.boss = {
  id: 'haginoinoshishi',
  state: 'idle',
  stateTimer: CONFIG.HAGINOINOSHISHI.IDLE_TIME,
  x: 0, y: 0,
  vx: 0, vy: 0,
  facing: 0,
  crashCount: 0,
  playerHitCooldownTimer: 0,
  dustTimer: 0,
  preChargeShakeTimer: 0,
  // optional visual-only anim phase fields
};
```

No scattered globals, no duplicated boss logic.

---

## 8) Update / Render Separation
- `update()` contains only simulation and state transitions.
- `render()` contains only drawing and effects.
- No gameplay state mutation from render.

Implementation guidance:
- Keep boss logic in one compact update handler + one render handler.
- Avoid ECS migration and excessive class hierarchy.

---

## 9) Movement Readability Rules
To preserve fairness without explicit telegraph UI:
1. During `aim`, rotation is visible and gradual.
2. At `charge` start, facing is committed.
3. During `charge`, turning is limited by `CHARGE_TURN_RATE` (rad/sec).
4. Any tracking should be intentionally weak and capped.
5. Player should succeed by positional baiting, not twitch reaction to overlays.

---

## 10) Terrain Interaction Rules
- Rocks are tactical reflectors of player intent (crash target).
- Grass acts as speed friction during charge using `GRASS_SLOW_MULTIPLIER`.
- Charge path should physically alter traversed grass to `flattenedGrass`.
- Terrain response should reinforce creature mass and momentum.

---

## 11) Asset & Rendering Constraints
- Assets live under `/assets/monsters` and `/assets/cards`.
- Use `createImage("monsters.haginoinoshishi")` (or existing helper-equivalent pattern).
- Always draw through `safeDrawImage()`.
- If image unavailable, render a large boar silhouette fallback.
- Never call raw `drawImage` on unloaded/broken images.

---

## 12) Acceptance Checklist
A revision is complete only if all are true:
- No prediction/danger UI exists for this boss.
- Charge intent is readable from posture + timing + turn limit.
- Boss defeat is crash-count based (`REQUIRED_CRASHES`).
- Required CONFIG block exists and is used.
- Mutable gameplay state exists only in `gameState`.
- Update/render responsibilities are separated.
- Rock crash, grass flattening, and player hit cooldown all function.
- Missing image path still renders silhouette safely.
