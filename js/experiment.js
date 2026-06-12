/**
 * SelfPacedWM Experiment
 * Translated from PsychoPy to jsPsych 7
 *
 * ─────────────────────────────────────────────
 *  EASY-EDIT TIMING CONSTANTS  (change here only)
 * ─────────────────────────────────────────────
 */
const FIXATION_DURATION_MS  = 1500;   // fixation cross duration (ms)
const IMAGE_DURATION_MS     = 800;    // object presentation duration (ms)

/** ─────────────────────────────────────────────
 *  EXPERIMENT PARAMETERS  (do not change unless redesigning)
 * ───────────────────────────────────────────── */
const N_TOTAL_OBJECTS   = 432;
const TRIALS_PER_BLOCK  = 20;
const N_SELF_PACED_BLOCKS = 5;
const N_TOTAL_BLOCKS    = N_SELF_PACED_BLOCKS * 2;   // 10 blocks total
const OBJECTS_PER_PAIR  = TRIALS_PER_BLOCK * 2;      // 40 per SP+Yoked pair

/** Delay / colour parameters */
const HUE_CYCLE_DURATION  = 6.0;   // seconds for one full hue cycle (self-paced)
const DEFAULT_HUE_SPEED   = 1.0 / HUE_CYCLE_DURATION;

/** Reward parameters (from wWM_reward_scheme_final.docx) */
const REWARD = {
  theta        : 15.0,   // accuracy gate (degrees)
  alpha        : 2.0,    // accuracy curvature
  D_max        : 10.0,   // max credited delay (s)
  d_min        : 1.25,   // minimum rewarded delay (s)
  tau          : 1.2,    // delay curvature
  B            : 10.0,   // max confidence bonus
  w_max        : 25.0,   // wedge half-width at which bonus → 0
  gamma        : 1.0,    // confidence taper
};

/** Rotation / confidence parameters */
const ROT_INCREASE_PER_FRAME = 0.25;   // degrees added to speed each frame (held)
const ROT_MAX_SPEED          = 5.0;    // speed cap before reset
const ROT_INITIAL_SPEED      = 0.5;
const MIN_WEDGE_GAP          = 0.7;    // minimum wedge width (degrees)

/** ─────────────────────────────────────────────
 *  UTILITY FUNCTIONS
 * ───────────────────────────────────────────── */

/** HSV (0-1 each) → CSS rgb(...) string */
function hsvToRgb(h, s, v) {
  h = ((h % 1) + 1) % 1;
  const i = Math.floor(h * 6);
  const f = h * 6 - i;
  const p = v * (1 - s);
  const q = v * (1 - f * s);
  const t = v * (1 - (1 - f) * s);
  let r, g, b;
  switch (i % 6) {
    case 0: r=v; g=t; b=p; break;
    case 1: r=q; g=v; b=p; break;
    case 2: r=p; g=v; b=t; break;
    case 3: r=p; g=q; b=v; break;
    case 4: r=t; g=p; b=v; break;
    case 5: r=v; g=p; b=q; break;
  }
  return `rgb(${Math.round(r*255)},${Math.round(g*255)},${Math.round(b*255)})`;
}

/** Circular angular distance (0–180 degrees) */
function angularDistance(a1, a2) {
  const diff = Math.abs(a1 - a2) % 360;
  return Math.min(diff, 360 - diff);
}

/** Fisher-Yates shuffle (in-place, returns array) */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/** Random integer in [lo, hi] inclusive */
function randInt(lo, hi) {
  return lo + Math.floor(Math.random() * (hi - lo + 1));
}

/** Draw a filled arc (wedge) on a canvas 2D context.
 *  cx,cy = centre; r = radius; startDeg, endDeg = angles in degrees (0 = up, clockwise)
 *  fillStyle = CSS colour string */
function drawWedge(ctx, cx, cy, r, startDeg, endDeg, fillStyle, alpha) {
  const toRad = d => (d - 90) * Math.PI / 180;  // 0° = top
  ctx.save();
  ctx.globalAlpha = alpha !== undefined ? alpha : 0.4;
  ctx.beginPath();
  ctx.moveTo(cx, cy);
  ctx.arc(cx, cy, r, toRad(startDeg), toRad(endDeg));
  ctx.closePath();
  ctx.fillStyle = fillStyle;
  ctx.fill();
  ctx.restore();
}

/** ─────────────────────────────────────────────
 *  EXPERIMENT STATE  (module-level, reset each trial)
 * ───────────────────────────────────────────── */
const state = {
  // Randomisation
  allObjectRows: [],
  // Block
  expBlock: -1,
  conditionType: '',
  sourcePairN: -1,
  rowsInBlock: [],
  blockPoints: 0,
  // Self-paced storage (filled during SP block, read during Yoked block)
  lastSelfPaced_trialInBlock: [],
  lastSelfPaced_objectRow: [],
  lastSelfPaced_startOri1: [],
  lastSelfPaced_delayDuration: [],
  lastSelfPaced_bigPolygonFinalHue: [],
  lastSelfPaced_smallPolygonHue: [],
  // Yoked schedule (built at start of each yoked block)
  currentYokedSchedule: [],
  yoked_sourceTrialInBlock: [],
  yoked_sourceObjectRow: [],
  yoked_sourceOrientation: [],
  yoked_sourceDelayDuration: [],
  yoked_sourceFinalHue: [],
  yoked_sourceSmallPolygonHue: [],
  yoked_objectRow: [],
  // Trial
  trialInBlock: 0,
  objectRow: 0,
  startOri1: 0,
  // Delay
  smallPolygonHue: 0.0,
  hue: 0.0,
  hueStart: 0.0,
  hueSpeed: DEFAULT_HUE_SPEED,
  hueDistance: null,
  targetHue: 0.0,
  yokedScheduledDelay: null,
  delayDuration: null,
  bigPolygonFinalHue: null,
  delayStartTime: null,
  // Response
  responseOri: 0,
  adjustmentStartOri: 0,
  thisOriT1: 0,
  rotKeySpeed: ROT_INITIAL_SPEED,
  // Confidence
  confidenceOri1: 0,
  confidenceOri2: 0,
  confKeySpeed: 1.0,
  confidenceWedgeWidth: 0,
  // Reward
  winningPoints: 0,
  blockPointsTotal: 0,
  feedbackText: '',
};

/** Collected trial data rows (for final POST) */
const trialData = [];

/** ─────────────────────────────────────────────
 *  DATA RECORDING HELPER
 * ───────────────────────────────────────────── */
function recordTrial(extra) {
  trialData.push(Object.assign({}, extra));
}

/** ─────────────────────────────────────────────
 *  REWARD CALCULATION
 * ───────────────────────────────────────────── */
function computeReward(e, delayDuration, yokedScheduledDelay, conditionType, confidenceWedgeWidth) {
  // 1. Credited delay
  let d_credit_raw;
  if (conditionType === 'self_paced') {
    d_credit_raw = delayDuration;
  } else if (conditionType === 'yoked') {
    d_credit_raw = Math.min(delayDuration, yokedScheduledDelay);
  } else {
    d_credit_raw = 0;
  }

  // 2. Clamp delay
  const d = Math.min(Math.max(d_credit_raw, 0), REWARD.D_max);

  // 3. Delay score
  const effectiveDelay = Math.max(d - REWARD.d_min, 0);
  const effectiveDmax  = REWARD.D_max - REWARD.d_min;
  let D = 0;
  if (effectiveDelay > 0 && effectiveDmax > 0) {
    D = Math.log(1 + effectiveDelay / REWARD.tau) /
        Math.log(1 + effectiveDmax  / REWARD.tau);
  }

  // 4. Accuracy score
  let A = 0, accuracyEligible = 0;
  if (e < REWARD.theta) {
    accuracyEligible = 1;
    A = 1 - Math.pow(e / REWARD.theta, REWARD.alpha);
  }

  // 5. Base reward
  const R_base = 100 * accuracyEligible * A * D;

  // 6. Confidence bonus (uses half-width)
  const w = Math.min(Math.max(confidenceWedgeWidth / 2.0, 0), REWARD.w_max);
  let R_conf = 0;
  if (e <= w && e < REWARD.theta && d >= REWARD.d_min) {
    R_conf = REWARD.B * (1 - Math.pow(w / REWARD.w_max, REWARD.gamma));
  }

  return { d, d_credit_raw, D, A, R_base, R_conf, total: R_base + R_conf, w };
}

/** ─────────────────────────────────────────────
 *  BLOCK SETTINGS LOGIC
 *  (was "Syntax Error" in original JS — written fresh here)
 * ───────────────────────────────────────────── */
function applyBlockSettings(expBlock) {
  state.expBlock    = expBlock;
  state.blockPoints = 0;
  state.sourcePairN = Math.floor(expBlock / 2);

  if (expBlock % 2 === 0) {
    // ── SELF-PACED BLOCK ──
    state.conditionType = 'self_paced';

    const pairStart = state.sourcePairN * OBJECTS_PER_PAIR;
    state.rowsInBlock = state.allObjectRows.slice(pairStart, pairStart + TRIALS_PER_BLOCK);

    // Reset storage that the following yoked block will read
    state.lastSelfPaced_trialInBlock      = [];
    state.lastSelfPaced_objectRow         = [];
    state.lastSelfPaced_startOri1         = [];
    state.lastSelfPaced_delayDuration     = [];
    state.lastSelfPaced_bigPolygonFinalHue = [];
    state.lastSelfPaced_smallPolygonHue   = [];
    state.currentYokedSchedule            = [];
    state.yoked_sourceTrialInBlock        = [];
    state.yoked_sourceObjectRow           = [];
    state.yoked_sourceOrientation         = [];
    state.yoked_sourceDelayDuration       = [];
    state.yoked_sourceFinalHue            = [];
    state.yoked_sourceSmallPolygonHue     = [];
    state.yoked_objectRow                 = [];

  } else {
    // ── YOKED (COLOR-MATCHING) BLOCK ──
    state.conditionType = 'yoked';

    const pairStart   = state.sourcePairN * OBJECTS_PER_PAIR;
    const yokedStart  = pairStart + TRIALS_PER_BLOCK;
    const yokedEnd    = pairStart + OBJECTS_PER_PAIR;
    const yokedObjectRows = state.allObjectRows.slice(yokedStart, yokedEnd);

    // Build source order: shuffle first half (0-9) and second half (10-19) separately
    const firstHalf  = shuffle([0,1,2,3,4,5,6,7,8,9]);
    const secondHalf = shuffle([10,11,12,13,14,15,16,17,18,19]);
    const sourceOrder = firstHalf.concat(secondHalf);
    state.currentYokedSchedule = sourceOrder;

    // Reset yoked arrays
    state.yoked_sourceTrialInBlock  = [];
    state.yoked_sourceObjectRow     = [];
    state.yoked_sourceOrientation   = [];
    state.yoked_sourceDelayDuration = [];
    state.yoked_sourceFinalHue      = [];
    state.yoked_sourceSmallPolygonHue = [];
    state.yoked_objectRow           = [];

    // Build yoked schedule from preceding self-paced block data
    for (let i = 0; i < TRIALS_PER_BLOCK; i++) {
      const srcIdx = sourceOrder[i];
      state.yoked_objectRow.push(yokedObjectRows[i]);
      state.yoked_sourceTrialInBlock.push(state.lastSelfPaced_trialInBlock[srcIdx]);
      state.yoked_sourceObjectRow.push(state.lastSelfPaced_objectRow[srcIdx]);
      state.yoked_sourceOrientation.push(state.lastSelfPaced_startOri1[srcIdx]);
      state.yoked_sourceDelayDuration.push(state.lastSelfPaced_delayDuration[srcIdx]);
      state.yoked_sourceFinalHue.push(state.lastSelfPaced_bigPolygonFinalHue[srcIdx]);
      state.yoked_sourceSmallPolygonHue.push(state.lastSelfPaced_smallPolygonHue[srcIdx]);
    }

    state.rowsInBlock = yokedObjectRows;
  }
}

/** ─────────────────────────────────────────────
 *  IMAGE PATH HELPER
 * ───────────────────────────────────────────── */
function imagePath(row) {
  // Images are named 1.png … 432.png (1-indexed)
  return `GrayObjectStimuli/${row + 1}.png`;
}

/** ─────────────────────────────────────────────
 *  PHASE: INITIALISE EXPERIMENT (randomisation)
 * ───────────────────────────────────────────── */
function initExperiment() {
  state.allObjectRows = Array.from({length: N_TOTAL_OBJECTS}, (_, i) => i);
  shuffle(state.allObjectRows);
  state.smallPolygonHue = 0.0;
}

/** ─────────────────────────────────────────────
 *  PHASE: TRIAL SETUP
 * ───────────────────────────────────────────── */
function setupTrial(trialInBlock) {
  state.trialInBlock = trialInBlock;
  state.objectRow    = state.rowsInBlock[trialInBlock];

  if (state.conditionType === 'self_paced') {
    state.startOri1 = randInt(1, 359);
  } else {
    state.startOri1 = state.yoked_sourceOrientation[trialInBlock];
  }
}

/** ─────────────────────────────────────────────
 *  PHASE: DELAY SETUP
 * ───────────────────────────────────────────── */
function setupDelay() {
  state.delayDuration     = null;
  state.bigPolygonFinalHue = null;

  if (state.conditionType === 'self_paced') {
    state.targetHue         = state.smallPolygonHue;
    state.hueStart          = 0.0;
    state.hue               = 0.0;
    state.hueSpeed          = DEFAULT_HUE_SPEED;
    state.hueDistance       = null;
    state.yokedScheduledDelay = null;
  } else {
    let ysd = state.yoked_sourceDelayDuration[state.trialInBlock];
    if (ysd === null || ysd <= 0) ysd = 0.25;
    state.yokedScheduledDelay = ysd;
    state.targetHue    = state.yoked_sourceFinalHue[state.trialInBlock];
    state.smallPolygonHue = state.targetHue;
    state.hueStart     = (state.targetHue + 0.5) % 1.0;
    state.hue          = state.hueStart;
    state.hueDistance  = ((state.targetHue - state.hueStart) % 1.0 + 1.0) % 1.0;
    state.hueSpeed     = state.hueDistance / state.yokedScheduledDelay;
  }
}

/** Per-frame hue update (call with elapsed seconds since delay onset) */
function updateDelayHue(elapsed) {
  if (state.conditionType === 'self_paced') {
    state.hue = (state.hueStart + state.hueSpeed * elapsed) % 1.0;
  } else {
    if (elapsed <= state.yokedScheduledDelay) {
      const progress = elapsed / state.yokedScheduledDelay;
      state.hue = (state.hueStart + progress * state.hueDistance) % 1.0;
    } else {
      const timeAfterMatch = elapsed - state.yokedScheduledDelay;
      state.hue = (state.targetHue + state.hueSpeed * timeAfterMatch) % 1.0;
    }
  }
}

/** Called when SPACE is pressed during delay */
function endDelay(elapsed) {
  state.delayDuration      = elapsed;
  state.bigPolygonFinalHue = state.hue;

  if (state.conditionType === 'self_paced') {
    state.lastSelfPaced_trialInBlock.push(state.trialInBlock);
    state.lastSelfPaced_objectRow.push(state.objectRow);
    state.lastSelfPaced_startOri1.push(state.startOri1);
    state.lastSelfPaced_delayDuration.push(state.delayDuration);
    state.lastSelfPaced_bigPolygonFinalHue.push(state.bigPolygonFinalHue);
    state.lastSelfPaced_smallPolygonHue.push(state.smallPolygonHue);
    // Carry outer hue into next self-paced trial's inner circle
    state.smallPolygonHue = state.bigPolygonFinalHue;
  }
}

/** ─────────────────────────────────────────────
 *  PHASE: RESPONSE SETUP
 * ───────────────────────────────────────────── */
function setupResponse() {
  // Start position: random offset from 0 (never equal to startOri1)
  const offsets = [11.25, 33.75, 56.25, 78.75, 101.25, 123.75,
                   146.25, 168.75, 191.25, 213.75, 236.25, 258.75,
                   281.25, 303.75, 326.25, 348.75];
  shuffle(offsets);
  state.adjustmentStartOri = offsets[0];
  state.thisOriT1          = offsets[0];
  state.rotKeySpeed        = ROT_INITIAL_SPEED;
}

/** ─────────────────────────────────────────────
 *  PHASE: CONFIDENCE SETUP
 * ───────────────────────────────────────────── */
function setupConfidence() {
  state.confidenceOri1 = state.responseOri;
  state.confidenceOri2 = state.responseOri;
  state.confKeySpeed   = 1.0;
}

/** ─────────────────────────────────────────────
 *  CANVAS RENDERING HELPERS
 * ───────────────────────────────────────────── */

/** Draw the delay screen: big polygon (outer), small polygon (inner), both circles */
function renderDelay(canvas, bigHue, smallHue) {
  const ctx   = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  const cx = W / 2, cy = H / 2;
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = '#808080';
  ctx.fillRect(0, 0, W, H);

  // Big circle (outer)
  ctx.beginPath();
  ctx.arc(cx, cy, 120, 0, 2 * Math.PI);
  ctx.fillStyle = hsvToRgb(bigHue, 1.0, 1.0);
  ctx.fill();

  // Small circle (inner)
  ctx.beginPath();
  ctx.arc(cx, cy, 60, 0, 2 * Math.PI);
  ctx.fillStyle = hsvToRgb(smallHue, 1.0, 1.0);
  ctx.fill();
}

/** Draw background circle for response/confidence screens */
function renderBackground(ctx, W, H) {
  ctx.fillStyle = '#808080';
  ctx.fillRect(0, 0, W, H);
  ctx.beginPath();
  ctx.arc(W/2, H/2, Math.min(W, H) * 0.42, 0, 2*Math.PI);
  ctx.fillStyle = '#b0b0b0';
  ctx.fill();
}

/** Draw a rotated image centred on canvas */
function renderRotatedImage(canvas, img, angleDeg) {
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  ctx.clearRect(0, 0, W, H);
  renderBackground(ctx, W, H);
  const size = Math.min(W, H) * 0.55;
  ctx.save();
  ctx.translate(W/2, H/2);
  ctx.rotate(angleDeg * Math.PI / 180);
  ctx.drawImage(img, -size/2, -size/2, size, size);
  ctx.restore();
}

/** Draw confidence screen: image at responseOri + two semi-transparent copies at wedge edges */
function renderConfidence(canvas, img, responseOri, ori1, ori2) {
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  ctx.clearRect(0, 0, W, H);
  renderBackground(ctx, W, H);
  const size = Math.min(W, H) * 0.55;
  const r    = Math.min(W, H) * 0.42;

  // Draw wedge arc
  drawWedge(ctx, W/2, H/2, r, ori1, ori2, '#ffffff', 0.35);

  // Centre image at response orientation
  ctx.save();
  ctx.translate(W/2, H/2);
  ctx.rotate(responseOri * Math.PI / 180);
  ctx.drawImage(img, -size/2, -size/2, size, size);
  ctx.restore();

  // Wedge edge 1 (semi-transparent)
  ctx.save();
  ctx.globalAlpha = 0.45;
  ctx.translate(W/2, H/2);
  ctx.rotate(ori1 * Math.PI / 180);
  ctx.drawImage(img, -size/2, -size/2, size, size);
  ctx.restore();

  // Wedge edge 2 (semi-transparent)
  ctx.save();
  ctx.globalAlpha = 0.45;
  ctx.translate(W/2, H/2);
  ctx.rotate(ori2 * Math.PI / 180);
  ctx.drawImage(img, -size/2, -size/2, size, size);
  ctx.restore();
}

/** ─────────────────────────────────────────────
 *  jsPsych TRIAL DEFINITIONS
 *  (assembled in buildTimeline() below)
 * ───────────────────────────────────────────── */

/** Generic text screen with SPACE to advance */
function makeTextTrial(textFn) {
    return {
        type: jsPsychHtmlButtonResponse,
        stimulus: () => {
            const txt = typeof textFn === 'function' ? textFn() : textFn;
            return `<div class="instructions">${txt.replace(/\n/g, '<br>')}</div>`;
        },
        choices: ['Continue'],
    };
}

/** Fixation cross */
const fixationTrial = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: '<div class="fixation">+</div>',
  choices: 'NO_KEYS',
  trial_duration: FIXATION_DURATION_MS,
};

/** Image presentation */
function makeImageTrial(imageSrc) {
  return {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: () => {
      const src = typeof imageSrc === 'function' ? imageSrc() : imageSrc;
      return `<div class="trial-screen">
        <div class="stimulus-bg"></div>
        <img class="stimulus-img" src="${src}"
             style="transform: rotate(${state.startOri1}deg)">
      </div>`;
    },
    choices: 'NO_KEYS',
    trial_duration: IMAGE_DURATION_MS,
  };
}

/** Delay phase – canvas-based, real-time hue cycling */
function makeDelayTrial() {
  return {
    type: jsPsychCanvasKeyboardResponse,
    canvas_size: [600, 600],
    stimulus: (canvas) => {
      // This runs once; animation is in on_load
      renderDelay(canvas, state.hue, state.smallPolygonHue);
    },
    choices: [' '],
    response_ends_trial: true,
    on_load: () => {
      const canvas = document.querySelector('#jspsych-canvas-keyboard-response-stimulus canvas');
      if (!canvas) return;
      state.delayStartTime = performance.now();
      let animId;
      function frame() {
        const elapsed = (performance.now() - state.delayStartTime) / 1000;
        updateDelayHue(elapsed);
        renderDelay(canvas, state.hue, state.smallPolygonHue);
        animId = requestAnimationFrame(frame);
      }
      animId = requestAnimationFrame(frame);
      // Store cancel function for cleanup
      canvas._cancelAnim = () => cancelAnimationFrame(animId);
    },
    on_finish: (data) => {
      // Cancel animation
      const canvas = document.querySelector('#jspsych-canvas-keyboard-response-stimulus canvas');
      if (canvas && canvas._cancelAnim) canvas._cancelAnim();
      const elapsed = data.rt ? data.rt / 1000 : (performance.now() - state.delayStartTime) / 1000;
      endDelay(elapsed);
    },
  };
}

/** Response phase – hold left/right arrow buttons to rotate image */
function makeResponseTrial() {
  return {
    type: jsPsychCanvasKeyboardResponse,
    canvas_size: [600, 600],
    stimulus: (canvas) => {
      // Initial render happens in on_load
      const ctx = canvas.getContext('2d');
      const W = canvas.width, H = canvas.height;
      ctx.fillStyle = '#808080';
      ctx.fillRect(0, 0, W, H);
    },
    choices: [' '],
    response_ends_trial: true,
    on_load: () => {
      const canvas = document.querySelector('#jspsych-canvas-keyboard-response-stimulus canvas');
      if (!canvas) return;

      const img = new Image();
      img.src = imagePath(state.objectRow);

      let animId;
      let leftHeld = false, rightHeld = false;
      state.rotKeySpeed = ROT_INITIAL_SPEED;

      function frame() {
        if (leftHeld) {
          state.rotKeySpeed = Math.min(state.rotKeySpeed + ROT_INCREASE_PER_FRAME, ROT_MAX_SPEED);
          state.thisOriT1  -= state.rotKeySpeed;
        } else if (rightHeld) {
          state.rotKeySpeed = Math.min(state.rotKeySpeed + ROT_INCREASE_PER_FRAME, ROT_MAX_SPEED);
          state.thisOriT1  += state.rotKeySpeed;
        } else {
          state.rotKeySpeed = ROT_INITIAL_SPEED;
        }
        if (img.complete) renderRotatedImage(canvas, img, state.thisOriT1);
        animId = requestAnimationFrame(frame);
      }
      animId = requestAnimationFrame(frame);

      // Mouse / touch on arrow buttons (rendered below canvas by jsPsych)
      function onDown(e) {
        const btn = e.target.closest('[data-dir]');
        if (!btn) return;
        if (btn.dataset.dir === 'left')  { leftHeld = true;  rightHeld = false; }
        if (btn.dataset.dir === 'right') { rightHeld = true; leftHeld = false;  }
      }
      function onUp() { leftHeld = false; rightHeld = false; state.rotKeySpeed = ROT_INITIAL_SPEED; }

      document.addEventListener('mousedown', onDown);
      document.addEventListener('mouseup',   onUp);
      document.addEventListener('touchstart', onDown, {passive:true});
      document.addEventListener('touchend',   onUp);

      canvas._cancelResp = () => {
        cancelAnimationFrame(animId);
        document.removeEventListener('mousedown', onDown);
        document.removeEventListener('mouseup',   onUp);
        document.removeEventListener('touchstart', onDown);
        document.removeEventListener('touchend',   onUp);
      };

      // Insert arrow buttons below the canvas
      const container = canvas.closest('.jspsych-canvas-keyboard-response-stimulus') || canvas.parentElement;
      const btnDiv = document.createElement('div');
      btnDiv.className = 'arrow-buttons';
      btnDiv.innerHTML = `
        <button class="arrow-btn" data-dir="left">&#9664; Left</button>
        <span class="arrow-hint">Hold to rotate · SPACE to confirm</span>
        <button class="arrow-btn" data-dir="right">Right &#9654;</button>
      `;
      container.appendChild(btnDiv);
      canvas._btnDiv = btnDiv;
    },
    on_finish: (data) => {
      const canvas = document.querySelector('#jspsych-canvas-keyboard-response-stimulus canvas');
      if (canvas) {
        if (canvas._cancelResp) canvas._cancelResp();
        if (canvas._btnDiv) canvas._btnDiv.remove();
      }
      state.responseOri = state.thisOriT1;
    },
  };
}

/** Confidence phase – hold narrower/wider buttons to adjust wedge */
function makeConfidenceTrial() {
  return {
    type: jsPsychCanvasKeyboardResponse,
    canvas_size: [600, 600],
    stimulus: (canvas) => {
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#808080';
      ctx.fillRect(0, 0, W, H);
    },
    choices: [' '],
    response_ends_trial: true,
    on_load: () => {
      const canvas = document.querySelector('#jspsych-canvas-keyboard-response-stimulus canvas');
      if (!canvas) return;

      const img = new Image();
      img.src = imagePath(state.objectRow);

      let animId;
      let widerHeld = false, narrowerHeld = false;

      function frame() {
        if (widerHeld) {
          state.confKeySpeed = Math.min(state.confKeySpeed + ROT_INCREASE_PER_FRAME, ROT_MAX_SPEED);
          state.confidenceOri1 -= state.confKeySpeed;
          state.confidenceOri2 += state.confKeySpeed;
        } else if (narrowerHeld) {
          if (angularDistance(state.confidenceOri1, state.confidenceOri2) > MIN_WEDGE_GAP) {
            state.confKeySpeed = Math.min(state.confKeySpeed + ROT_INCREASE_PER_FRAME, ROT_MAX_SPEED);
            state.confidenceOri1 += state.confKeySpeed;
            state.confidenceOri2 -= state.confKeySpeed;
          }
        } else {
          state.confKeySpeed = 1.0;
        }
        if (img.complete) renderConfidence(canvas, img, state.responseOri, state.confidenceOri1, state.confidenceOri2);
        animId = requestAnimationFrame(frame);
      }
      animId = requestAnimationFrame(frame);

      function onDown(e) {
        const btn = e.target.closest('[data-conf]');
        if (!btn) return;
        if (btn.dataset.conf === 'wider')    { widerHeld = true;   narrowerHeld = false; }
        if (btn.dataset.conf === 'narrower') { narrowerHeld = true; widerHeld = false;   }
      }
      function onUp() { widerHeld = false; narrowerHeld = false; state.confKeySpeed = 1.0; }

      document.addEventListener('mousedown', onDown);
      document.addEventListener('mouseup',   onUp);
      document.addEventListener('touchstart', onDown, {passive:true});
      document.addEventListener('touchend',   onUp);

      canvas._cancelConf = () => {
        cancelAnimationFrame(animId);
        document.removeEventListener('mousedown', onDown);
        document.removeEventListener('mouseup',   onUp);
        document.removeEventListener('touchstart', onDown);
        document.removeEventListener('touchend',   onUp);
      };

      // Insert confidence buttons
      const container = canvas.closest('.jspsych-canvas-keyboard-response-stimulus') || canvas.parentElement;
      const btnDiv = document.createElement('div');
      btnDiv.className = 'arrow-buttons';
      btnDiv.innerHTML = `
        <button class="arrow-btn" data-conf="narrower">&#9660; Narrower</button>
        <span class="arrow-hint">Hold to adjust · SPACE to confirm</span>
        <button class="arrow-btn" data-conf="wider">Wider &#9650;</button>
      `;
      container.appendChild(btnDiv);
      canvas._btnDiv = btnDiv;
    },
    on_finish: () => {
      const canvas = document.querySelector('#jspsych-canvas-keyboard-response-stimulus canvas');
      if (canvas) {
        if (canvas._cancelConf) canvas._cancelConf();
        if (canvas._btnDiv) canvas._btnDiv.remove();
      }
      state.confidenceWedgeWidth = Math.abs(state.confidenceOri1 - state.confidenceOri2);
    },
  };
}

/** Feedback screen */
function makeFeedbackTrial() {
  return {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: () => {
      const e = angularDistance(state.responseOri, state.startOri1);
      const rew = computeReward(
        e,
        state.delayDuration,
        state.yokedScheduledDelay,
        state.conditionType,
        state.confidenceWedgeWidth
      );
      state.winningPoints = rew.total;
      state.blockPoints  += rew.total;

      let msg;
      if (rew.d < REWARD.d_min) {
        msg = `${Math.round(e)} degrees difference.<br>No points: response was too early.`;
      } else if (e < 5) {
        msg = `Great job!<br>${Math.round(e)} degrees difference.<br>You win ${Math.round(rew.total)} points`;
      } else {
        msg = `${Math.round(e)} degrees difference.<br>You win ${Math.round(rew.total)} points`;
      }

      // Record trial
      recordTrial({
        conditionType       : state.conditionType,
        expBlock            : state.expBlock,
        sourcePairN         : state.sourcePairN,
        trialInBlock        : state.trialInBlock,
        objectRow           : state.objectRow,
        startOri1           : state.startOri1,
        delayDuration       : state.delayDuration,
        yokedScheduledDelay : state.yokedScheduledDelay,
        bigPolygonFinalHue  : state.bigPolygonFinalHue,
        responseOri         : state.responseOri,
        angle_diff          : e,
        confidenceWedgeWidth: state.confidenceWedgeWidth,
        d_credit_raw        : rew.d_credit_raw,
        d_clamped           : rew.d,
        accuracy_score      : rew.A,
        delay_score         : rew.D,
        R_base              : rew.R_base,
        R_conf              : rew.R_conf,
        winningPoints       : rew.total,
        blockPoints_so_far  : state.blockPoints,
      });

      return `<div class="feedback-screen">
        <div class="feedback-images">
          <div>
            <p class="label">Original</p>
            <img class="feedback-img" src="${imagePath(state.objectRow)}"
                 style="transform:rotate(${state.startOri1}deg)">
          </div>
          <div>
            <p class="label">Your response</p>
            <img class="feedback-img" src="${imagePath(state.objectRow)}"
                 style="transform:rotate(${state.responseOri}deg)">
          </div>
        </div>
        <p class="feedback-msg">${msg}</p>
        <p class="feedback-hint">Press SPACE to continue</p>
      </div>`;
    },
    choices: [' '],
  };
}

/** Block end screen */
function makeBlockEndTrial() {
  return {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: () => {
      return `<div class="instructions">
        You earned <strong>${Math.round(state.blockPoints)}</strong> points in this block.<br><br>
        Take a brief pause.<br>
        Press SPACE to continue.
      </div>`;
    },
    choices: [' '],
  };
}

/** ─────────────────────────────────────────────
 *  TIMELINE BUILDER
 * ───────────────────────────────────────────── */
function buildTimeline(jsPsych) {

    const timeline = [];
    // Click to start - required for keyboard input in browsers
    timeline.push({
        type: jsPsychHtmlKeyboardResponse,
        stimulus: '<div class="instructions">Click anywhere on this page to begin, then press SPACE to continue.</div>',
        choices: 'ALL_KEYS',
        on_load: () => {
            document.addEventListener('click', () => {
                jsPsych.finishTrial();
            }, { once: true });
        },
    });



  // ── Instructions ──
  timeline.push(makeTextTrial(
    'Welcome to the Object Orientation Experiment!\n\n' +
    'In this experiment, you will remember the orientation of different objects.\n\n' +
    'On each trial, an object will briefly appear on the screen at a particular orientation. ' +
    'It will then disappear, and two colored circles will appear during a short delay.\n\n' +
    'Your main task is to keep the object\'s orientation in mind during this delay.\n\n' +
    'After the delay, the object will appear again at a different orientation. ' +
    'Use the mouse to hold the left and right arrow buttons until the object matches its original orientation. ' +
    'Press SPACE to confirm your answer.\n\n' +
    'You will then show how close you think you were by opening a wedge around your answer. ' +
    'Try to make the wedge wide enough to include the correct orientation, but not wider than necessary. ' +
    'Too-wide wedges will earn little or no extra points.\n\n' +
    'Press SPACE to continue.'
  ));

  timeline.push(makeTextTrial(
    'There are two types of blocks in this experiment.\n\n' +
    'SELF-PACED BLOCKS\n' +
    'You decide how long to keep the object in mind. ' +
    'Press SPACE when you want to report the object\'s orientation. ' +
    'You will earn more points by waiting longer, but only if you still remember the orientation well.\n\n' +
    'COLOR-MATCHING BLOCKS\n' +
    'The colored circles will also appear during the delay. ' +
    'In these blocks, your task is to use the circles to decide when to respond. ' +
    'Press SPACE when you think the changing outer circle matches the inner circle. ' +
    'Keep the object\'s orientation in mind while doing this.\n\n' +
    'In both block types, you will then report the object\'s original orientation ' +
    'and show how close you think you were.\n\n' +
    'Too-early responses will not earn points. ' +
    'You will see how many points you earned after each trial and at the end of each block.\n\n' +
    'Press SPACE to begin.'
  ));

  // ── 10 Blocks ──
  for (let blockN = 0; blockN < N_TOTAL_BLOCKS; blockN++) {

    // Block setup (runs inline before block cue)
    timeline.push({
      type: jsPsychCallFunction,
      func: () => applyBlockSettings(blockN),
    });

    // Block cue
    timeline.push({
      type: jsPsychHtmlKeyboardResponse,
      stimulus: () => {
        if (state.conditionType === 'self_paced') {
          return `<div class="instructions">
            <strong>SELF-PACED BLOCK</strong><br><br>
            Remember the orientation of each object.<br><br>
            Colored circles will appear during the delay, but you do not need to use their colors in this block.<br><br>
            Press SPACE when you want to report the remembered orientation.<br>
            By waiting longer you will earn more points, but only if you still remember the orientation well.<br><br>
            Press SPACE to start this block.
          </div>`;
        } else {
          return `<div class="instructions">
            <strong>COLOR-MATCHING BLOCK</strong><br><br>
            Remember the orientation of each object.<br><br>
            During the delay, your task is to use the colored circles to decide when to respond.<br>
            Press SPACE when you think the changing outer circle matches the inner circle.<br><br>
            Press SPACE to start this block.
          </div>`;
        }
      },
      choices: [' '],
    });

    // ── 20 Trials per block ──
    for (let t = 0; t < TRIALS_PER_BLOCK; t++) {
      const trialIndex = t;  // capture

      // Trial setup
      timeline.push({
        type: jsPsychCallFunction,
        func: () => {
          setupTrial(trialIndex);
          setupDelay();
          setupResponse();
          setupConfidence();
        },
      });

      // Fixation
      timeline.push(fixationTrial);

      // Image
      timeline.push({
        type: jsPsychHtmlKeyboardResponse,
        stimulus: () => {
          return `<div class="trial-screen">
            <div class="stimulus-bg"></div>
            <img class="stimulus-img" id="trial-img"
                 src="${imagePath(state.objectRow)}"
                 style="transform: rotate(${state.startOri1}deg)">
          </div>`;
        },
        choices: 'NO_KEYS',
        trial_duration: IMAGE_DURATION_MS,
      });

      // Delay
      timeline.push(makeDelayTrial());

      // Response
      timeline.push(makeResponseTrial());

      // Confidence
      timeline.push(makeConfidenceTrial());

      // Feedback
      timeline.push(makeFeedbackTrial());
    }

    // Block end
    timeline.push(makeBlockEndTrial());
  }

  // End screen
  timeline.push({
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '<div class="instructions">Thank you for participating!<br><br>Your data is being saved…</div>',
    choices: 'NO_KEYS',
    trial_duration: 2000,
    on_finish: () => saveData(jsPsych),
  });

  return timeline;
}

/** ─────────────────────────────────────────────
 *  DATA SAVING  (Experiment Factory: POST to /save → redirect /next)
 * ───────────────────────────────────────────── */
function saveData(jsPsych) {
  const payload = {
    data: JSON.stringify({
      jsPsychData : jsPsych.data.get().values(),
      trialData   : trialData,
      allObjectRows: state.allObjectRows,
    }),
  };

  fetch('/save', {
    method : 'POST',
    headers: { 'Content-Type': 'application/json' },
    body   : JSON.stringify(payload),
  })
  .then(r => {
    if (r.ok) {
      window.location.href = '/next';
    } else {
      // Fallback: offer CSV download if server not available (local testing)
      downloadFallback();
    }
  })
  .catch(() => downloadFallback());
}

function downloadFallback() {
  const json  = JSON.stringify(trialData, null, 2);
  const blob  = new Blob([json], {type: 'application/json'});
  const a     = document.createElement('a');
  a.href      = URL.createObjectURL(blob);
  a.download  = `selfpacedwm_${Date.now()}.json`;
  a.click();
  document.body.innerHTML =
    '<div class="instructions">Data saved locally.<br>You may close this window.</div>';
}

/** ─────────────────────────────────────────────
 *  ENTRY POINT  (called from index.html)
 * ───────────────────────────────────────────── */
window.runExperiment = function() {
  initExperiment();

    const jsPsych = initJsPsych({
        display_element: 'jspsych-target',
        on_trial_start: () => {
            document.getElementById('jspsych-target').focus();
        },
        on_finish: () => { },
    });

  jsPsych.run(buildTimeline(jsPsych));
};
