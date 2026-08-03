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
const MAX_DELAY_MS          = 10000;  // maximum delay before auto-termination (ms)

/** ─────────────────────────────────────────────
 *  STIMULUS LIST  (432 actual image filenames)
 * ───────────────────────────────────────────── */
const STIMULI = [
  "witchhat.png","goose.png","golfclubs.png","goldcup.png","goblet.png",
  "globe.png","glasscup.png","glasscontainer.png","glassbottle.png","glass2.png",
  "glass.png","giftribbon.png","garlicpress.png","gardeningrak.png","garbagebin2.png",
  "garbagebag.png","fanStanding.png","fan.png","eyedrops2.png","exit.png",
  "excersiceequipment.png","exactoknife.png","drinkingpitcher.png","drinkingbottle.png","drinkglass.png",
  "dresser.png","dress.png","doublehook.png","doorhandle.png","door.png",
  "doll.png","dog.png","dishwashingsoap.png","portablepotty.png","quilt.png",
  "promdress.png","rake.png","punchingbag3.png","railwaysign.png","rasor.png",
  "purse.png","postalmailbox.png","punchingbag2.png","rake2.png","broom.png",
  "adjustable.png","africanmask.png","alarmclock.png","amphora.png","anchor.png",
  "angelstatue.png","arch2.png","artichoke.png","asparagus.png","avocado.png",
  "axe.png","babybottle.png","baloon.png","barbie.png","barrel2.png",
  "baseballbat.png","candle.png","carrots.png","deskchair.png","airfreshener.png",
  "bag.png","barchair.png","barchair2.png","basket.png","bathrobe.png",
  "bathroomsink.png","battery.png","beaver.png","beerbottle.png","beermug.png",
  "bell2.png","beverage.png","bib.png","bikepump.png","bin.png",
  "birdcage2.png","birdhouse.png","birdhouse2.png","bishop.png","blender.png",
  "bloodorange.png","bottle.png","bowloffruit.png","boxcutter.png","boxinggloves.png",
  "broccoli.png","brochette.png","brush.png","bucket.png","buddha.png",
  "building.png","bunnytoy.png","cactus.png","carseat.png","cheesegreater.png",
  "closedumbrella.png","bullet.png","cabinet.png","cake.png","calculator.png",
  "candle2.png","candles.png","candlestick.png","candyjar.png","cane.png",
  "canister.png","carkey.png","carrot.png","castletower.png","celery.png",
  "cello.png","chairs.png","champane.png","cherry.png","chessknight.png",
  "chicken.png","childbed.png","chocolatemilk.png","christmasslightbulb.png","christmasstree.png",
  "christmasstree2.png","clarinet.png","cleaningbrush.png","closet.png","clothespin.png",
  "clover.png","coathanger.png","coctailumbrella.png","codedoorlock.png","coffeemaker.png",
  "cookiecutter.png","danger.png","lamp.png","cobra.png","coffeemug2.png",
  "comb.png","combRegular.png","compass.png","computermouse.png","concreteblock.png",
  "cone.png","crotches.png","cucumber.png","cup.png","curtain2.png",
  "daquiri.png","dart.png","die.png","drum.png","drumsticks.png",
  "dryflowers.png","dumbell.png","duster.png","dustpan.png","dynamite.png",
  "earexam.png","earring.png","earsirynge.png","eggcup.png","icecream.png",
  "jacket.png","duck.png","eagle.png","egret.png","eiffeltower.png",
  "electricguitar.png","emergency.png","icecreamcone.png","ironning.png","jarofcapers.png",
  "jeans.png","jesusstatue.png","juice.png","kangaroo.png","ketchup.png",
  "kettle.png","key.png","keychain.png","kidstoyrings.png","kitchenaid.png",
  "knifeRegular.png","knitteddoll.png","ladle.png","lantern.png","leaf.png",
  "leek.png","legcast.png","legoman.png","lighthouse.png","makeupbrush.png",
  "mountaingoat.png","nasalspray.png","easel.png","easteregg.png","feather.png",
  "fighter.png","filescabinet.png","fireextinguisher.png","flower.png","foodblender.png",
  "foot.png","fridge2.png","guitar.png","harp.png","lightbulb2.png",
  "lighter.png","lipstick.png","livingroomlamp.png","lockerdoor.png","lollipop.png",
  "mailbox.png","maplesyrup.png","marbles.png","masher.png","maskara.png",
  "match.png","medal.png","menorah.png","mic.png","microphone.png",
  "microscope.png","milkjug2.png","milkshake.png","minitree.png","mixinghook.png",
  "mug.png","musicstand.png","opener2.png","suit.png","fence.png",
  "flashlight.png","footballball2.png","fork.png","fullbucket.png","funnel.png",
  "galloncontainer.png","granade.png","hoodie.png","moneyjar.png","nail.png",
  "nailpolish2.png","nunchaku.png","ornament.png","ostrich.png","ovenmit.png",
  "pacifier.png","padlock.png","pager.png","paintbrush2.png","paintbucket.png",
  "palmtree.png","pan.png","paperbag.png","paperclip.png","grater.png",
  "gravestone.png","grocerybag.png","gumballmachine.png","hairbrush.png","haircomb.png",
  "hammer.png","hamper.png","handpuppet.png","headphones.png","herbbag.png",
  "hook.png","hotpepper.png","paintroller.png","papertowel.png","parfait.png",
  "parkingmeter2.png","parsley.png","partyhat.png","payphone.png","pealer.png",
  "pealer2.png","pear.png","pen.png","pencils.png","pepper.png",
  "perfumebottle.png","phone.png","pickles.png","pin.png","pitcher.png",
  "plant.png","popsicle.png","trophy2.png","hotairbaloon.png","hotdog.png",
  "hotwaterbottle.png","hourglass.png","hydrant.png","peppermill.png","phonebooth.png",
  "pictureframe.png","pieserver.png","pineapple.png","pinecone.png","pinguin.png",
  "pintofbeer.png","pizzacutter.png","plant2.png","plier.png","redbull.png",
  "remotecontrol.png","ribbon.png","rice.png","rocket.png","rose2.png",
  "shavingmachine.png","rope.png","rose.png","roses.png","rubberboots.png",
  "rug.png","safetypin.png","saltshaker.png","sandcastle.png","sauce.png",
  "scissors.png","scooter.png","screw.png","screwdriver.png","screwdriver_round.png",
  "seashell.png","secateurs.png","sharpknife.png","shaving.png","shipmodel.png",
  "shirtskirt.png","shovel.png","shower.png","showerhead.png","sirynge.png",
  "skirt.png","slippers.png","smallvase.png","spagetyserver.png","speaker.png",
  "spraybottle.png","statue2.png","stringspool.png","skeleton.png","spatula.png",
  "spicerack.png","spoon.png","spring.png","stepladder.png","stool.png",
  "strawberry.png","streetlamp.png","streetpost.png","studentchair.png","suit2.png",
  "suitcase.png","surfing.png","sword2.png","tabasco.png","teddybear.png",
  "teepee.png","telephonebooth.png","tennisracket.png","testtube.png","thread.png",
  "toiletbrush.png","toothpaste.png","trafficlight.png","tulip.png","thermiccup.png",
  "thumbtack.png","tie.png","timepiece.png","toilet.png","toiletplung.png",
  "toothbrush.png","totem.png","toyperson.png","trashbin.png","travelmug.png",
  "tree.png","trickortreat.png","tripod.png","trumpet.png","tube.png",
  "tweezers.png","umbrella.png","vampire.png","vase2.png","vase3.png",
  "walker.png","watch2.png","waterbottle.png","watercooler.png","waterjub.png",
  "well.png","winebottle2.png","beachpail.png","beachumbrella.png","seahorse.png",
  "soapbottle.png","walkietalkie.png","wardrobe.png","washer.png","watercan.png",
  "waterkettle.png","weddingcake.png","wetsuit.png","wickchair.png","windchimes.png",
  "wineglass.png","winterglove.png","wintersock.png","woodenhammer.png","woodenspoons.png",
  "zucchini.png"
];

/** ─────────────────────────────────────────────
 *  EXPERIMENT PARAMETERS
 * ───────────────────────────────────────────── */
const N_TOTAL_OBJECTS     = STIMULI.length;  // 421 after removing symmetric images
const TRIALS_PER_BLOCK    = 20;
const N_SELF_PACED_BLOCKS = 6;               // 6 SP + 6 yoked = 12 total, 240 trials
const N_TOTAL_BLOCKS      = N_SELF_PACED_BLOCKS * 2;
const OBJECTS_PER_PAIR    = TRIALS_PER_BLOCK * 2;

const HUE_CYCLE_DURATION  = 6.0;
const DEFAULT_HUE_SPEED   = 1.0 / HUE_CYCLE_DURATION;

const REWARD = {
  theta: 15.0, alpha: 2.0, D_max: 10.0, d_min: 1.25,
  tau: 1.2, B: 10.0, w_max: 25.0, gamma: 1.0,
};

const ROT_INCREASE_PER_FRAME = 0.0001;  // matches PsychoPy increasePerFrame
const ROT_MAX_SPEED          = 5.0;     // matches PsychoPy keySpeed > 5 cap
const ROT_INITIAL_SPEED      = 1.0;     // matches PsychoPy keySpeed = 1
const MIN_WEDGE_GAP          = 0.7;

/** ─────────────────────────────────────────────
 *  UTILITY FUNCTIONS
 * ───────────────────────────────────────────── */
function hsvToRgb(h, s, v) {
  h = ((h % 1) + 1) % 1;
  const i = Math.floor(h * 6);
  const f = h * 6 - i;
  const p = v * (1 - s);
  const q = v * (1 - f * s);
  const t = v * (1 - (1 - f) * s);
  let r, g, b;
  switch (i % 6) {
    case 0: r=v; g=t; b=p; break; case 1: r=q; g=v; b=p; break;
    case 2: r=p; g=v; b=t; break; case 3: r=p; g=q; b=v; break;
    case 4: r=t; g=p; b=v; break; case 5: r=v; g=p; b=q; break;
  }
  return `rgb(${Math.round(r*255)},${Math.round(g*255)},${Math.round(b*255)})`;
}

function angularDistance(a1, a2) {
  const diff = Math.abs(a1 - a2) % 360;
  return Math.min(diff, 360 - diff);
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function randInt(lo, hi) {
  return lo + Math.floor(Math.random() * (hi - lo + 1));
}

function drawWedge(ctx, cx, cy, r, startDeg, endDeg, fillStyle, alpha) {
  const toRad = d => (d - 90) * Math.PI / 180;
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
 *  EXPERIMENT STATE
 * ───────────────────────────────────────────── */
const state = {
  allObjectRows: [], expBlock: -1, conditionType: '', sourcePairN: -1,
  rowsInBlock: [], blockPoints: 0,
  lastSelfPaced_trialInBlock: [], lastSelfPaced_objectRow: [],
  lastSelfPaced_startOri1: [], lastSelfPaced_delayDuration: [],
  lastSelfPaced_bigPolygonFinalHue: [], lastSelfPaced_smallPolygonHue: [],
  currentYokedSchedule: [], yoked_sourceTrialInBlock: [], yoked_sourceObjectRow: [],
  yoked_sourceOrientation: [], yoked_sourceDelayDuration: [], yoked_sourceFinalHue: [],
  yoked_sourceSmallPolygonHue: [], yoked_objectRow: [],
  trialInBlock: 0, objectRow: 0, startOri1: 0,
  smallPolygonHue: 0.0, hue: 0.0, hueStart: 0.0, hueSpeed: DEFAULT_HUE_SPEED,
  hueDistance: null, targetHue: 0.0, yokedScheduledDelay: null,
  delayDuration: null, bigPolygonFinalHue: null, delayStartTime: null, delayTimedOut: false,
  responseOri: 0, adjustmentStartOri: 0, thisOriT1: 0, rotKeySpeed: ROT_INITIAL_SPEED,
  confidenceOri1: 0, confidenceOri2: 0, confKeySpeed: 1.0, confidenceWedgeWidth: 0,
  winningPoints: 0, feedbackText: '',
  isPractice: false, isYokedPractice: false,
};

const trialData = [];

/** Active animation cleanup — guarantees old loops are stopped before new ones start */
const activeCleanup = { fn: null };
function registerCleanup(fn) {
  if (activeCleanup.fn) try { activeCleanup.fn(); } catch(e){}
  activeCleanup.fn = fn;
}
function runCleanup() {
  if (activeCleanup.fn) try { activeCleanup.fn(); } catch(e){}
  activeCleanup.fn = null;
}

function recordTrial(extra) { trialData.push(Object.assign({}, extra)); }

/** ─────────────────────────────────────────────
 *  IMAGE PATH
 * ───────────────────────────────────────────── */
function imagePath(row) {
  return `GrayObjectStimuli/${STIMULI[row]}`;
}

/** ─────────────────────────────────────────────
 *  REWARD CALCULATION
 * ───────────────────────────────────────────── */
function computeReward(e, delayDuration, yokedScheduledDelay, conditionType, confidenceWedgeWidth) {
  let d_credit_raw;
  if (conditionType === 'self_paced') d_credit_raw = delayDuration;
  else if (conditionType === 'yoked') d_credit_raw = Math.min(delayDuration, yokedScheduledDelay);
  else d_credit_raw = 0;

  const d = Math.min(Math.max(d_credit_raw, 0), REWARD.D_max);
  const effectiveDelay = Math.max(d - REWARD.d_min, 0);
  const effectiveDmax  = REWARD.D_max - REWARD.d_min;
  let D = 0;
  if (effectiveDelay > 0 && effectiveDmax > 0)
    D = Math.log(1 + effectiveDelay / REWARD.tau) / Math.log(1 + effectiveDmax / REWARD.tau);

  let A = 0, accuracyEligible = 0;
  if (e < REWARD.theta) { accuracyEligible = 1; A = 1 - Math.pow(e / REWARD.theta, REWARD.alpha); }

  const R_base = 100 * accuracyEligible * A * D;
  const w = Math.min(Math.max(confidenceWedgeWidth / 2.0, 0), REWARD.w_max);
  let R_conf = 0;
  if (e <= w && e < REWARD.theta && d >= REWARD.d_min)
    R_conf = REWARD.B * (1 - Math.pow(w / REWARD.w_max, REWARD.gamma));

  return { d, d_credit_raw, D, A, R_base, R_conf, total: R_base + R_conf, w };
}

/** ─────────────────────────────────────────────
 *  BLOCK SETTINGS
 * ───────────────────────────────────────────── */
function applyBlockSettings(expBlock) {
  state.expBlock    = expBlock;
  state.blockPoints = 0;
  state.sourcePairN = Math.floor(expBlock / 2);

  if (expBlock % 2 === 0) {
    state.conditionType = 'self_paced';
    const pairStart = state.sourcePairN * OBJECTS_PER_PAIR;
    state.rowsInBlock = state.allObjectRows.slice(pairStart, pairStart + TRIALS_PER_BLOCK);
    state.lastSelfPaced_trialInBlock = []; state.lastSelfPaced_objectRow = [];
    state.lastSelfPaced_startOri1 = []; state.lastSelfPaced_delayDuration = [];
    state.lastSelfPaced_bigPolygonFinalHue = []; state.lastSelfPaced_smallPolygonHue = [];
    state.currentYokedSchedule = []; state.yoked_sourceTrialInBlock = [];
    state.yoked_sourceObjectRow = []; state.yoked_sourceOrientation = [];
    state.yoked_sourceDelayDuration = []; state.yoked_sourceFinalHue = [];
    state.yoked_sourceSmallPolygonHue = []; state.yoked_objectRow = [];
  } else {
    state.conditionType = 'yoked';
    const pairStart  = state.sourcePairN * OBJECTS_PER_PAIR;
    const yokedStart = pairStart + TRIALS_PER_BLOCK;
    const yokedObjectRows = state.allObjectRows.slice(yokedStart, yokedStart + TRIALS_PER_BLOCK);
    const firstHalf  = shuffle([0,1,2,3,4,5,6,7,8,9]);
    const secondHalf = shuffle([10,11,12,13,14,15,16,17,18,19]);
    const sourceOrder = firstHalf.concat(secondHalf);
    state.currentYokedSchedule = sourceOrder;
    state.yoked_sourceTrialInBlock = []; state.yoked_sourceObjectRow = [];
    state.yoked_sourceOrientation = []; state.yoked_sourceDelayDuration = [];
    state.yoked_sourceFinalHue = []; state.yoked_sourceSmallPolygonHue = [];
    state.yoked_objectRow = [];
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
 *  TRIAL / DELAY / RESPONSE / CONFIDENCE SETUP
 * ───────────────────────────────────────────── */
function setupTrial(trialInBlock) {
  state.trialInBlock = trialInBlock;
  state.objectRow    = state.rowsInBlock[trialInBlock];
  state.startOri1    = (state.conditionType === 'self_paced')
    ? randInt(1, 359)
    : state.yoked_sourceOrientation[trialInBlock];
  // Preload image so it's ready when the trial screen appears
  state._preloadedImg = new Image();
  state._preloadedImg.src = imagePath(state.objectRow);
}

function setupDelay() {
  state.delayDuration = null; state.bigPolygonFinalHue = null;
  if (state.conditionType === 'self_paced') {
    // Independently randomise inner hue and outer starting hue.
    // This breaks the confound where the outer's position gives away timing.
    state.smallPolygonHue = Math.random();          // inner: uniform [0,1)
    state.hueStart        = Math.random();          // outer start: uniform [0,1)
    state.targetHue       = state.smallPolygonHue;  // logged for completeness
    state.hue             = state.hueStart;
    state.hueSpeed        = DEFAULT_HUE_SPEED;      // 1/6 cycle per second
    state.hueDistance     = null;
    state.yokedScheduledDelay = null;
  } else {
    let ysd = state.yoked_sourceDelayDuration[state.trialInBlock];
    if (!ysd || ysd <= 0) ysd = 0.25;
    state.yokedScheduledDelay = ysd;

    // Inner circle = final outer hue from the matched self-paced trial.
    // This is the colour the outer must arrive at.
    state.targetHue       = state.yoked_sourceFinalHue[state.trialInBlock];
    state.smallPolygonHue = state.targetHue;

    // Outer starting hue is computed backward from the target at constant rate,
    // so the match occurs exactly at yokedScheduledDelay seconds. Because the
    // matched SP trial's starting outer was itself random and its duration was
    // participant-driven, the resulting starting hue is uninformative about
    // the duration.
    state.hueSpeed  = DEFAULT_HUE_SPEED;
    state.hueStart  = (((state.targetHue - DEFAULT_HUE_SPEED * ysd) % 1.0) + 1.0) % 1.0;
    state.hue       = state.hueStart;
    state.hueDistance = null;
  }
}

function updateDelayHue(elapsed) {
  // Identical equation in both conditions — same rate, same direction, no
  // change before/after any match point.
  state.hue = (state.hueStart + state.hueSpeed * elapsed) % 1.0;
}

function endDelay(elapsed, timedOut) {
  state.delayDuration = elapsed;
  state.delayTimedOut = !!timedOut;
  state.bigPolygonFinalHue = state.hue;
  if (state.conditionType === 'self_paced') {
    state.lastSelfPaced_trialInBlock.push(state.trialInBlock);
    state.lastSelfPaced_objectRow.push(state.objectRow);
    state.lastSelfPaced_startOri1.push(state.startOri1);
    state.lastSelfPaced_delayDuration.push(state.delayDuration);
    state.lastSelfPaced_bigPolygonFinalHue.push(state.bigPolygonFinalHue);
    state.lastSelfPaced_smallPolygonHue.push(state.smallPolygonHue);
    // NB: no carry-over of hue between trials — each SP trial randomises inner
    // and outer independently in setupDelay(), which prevents the colour
    // configuration from becoming informative about elapsed time.
  }
}

function setupResponse() {
  const offsets = [11.25,33.75,56.25,78.75,101.25,123.75,146.25,168.75,
                   191.25,213.75,236.25,258.75,281.25,303.75,326.25,348.75];
  shuffle(offsets);
  state.adjustmentStartOri = offsets[0];
  state.thisOriT1 = offsets[0];
  state.rotKeySpeed = ROT_INITIAL_SPEED;
}

function setupConfidence() {
  state.confidenceOri1 = state.responseOri;
  state.confidenceOri2 = state.responseOri;
  state.confKeySpeed = ROT_INITIAL_SPEED;
}

/** ─────────────────────────────────────────────
 *  CANVAS RENDERING
 * ───────────────────────────────────────────── */
function renderDelay(canvas, bigHue, smallHue) {
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height, cx = W/2, cy = H/2;
  ctx.fillStyle = '#808080'; ctx.fillRect(0, 0, W, H);
  const outerR = Math.min(W, H) * 0.29;   // ~30% smaller than 0.42
  const innerR = outerR * 0.45;
  ctx.beginPath(); ctx.arc(cx, cy, outerR, 0, 2*Math.PI);
  ctx.fillStyle = hsvToRgb(bigHue, 1.0, 1.0); ctx.fill();
  ctx.beginPath(); ctx.arc(cx, cy, innerR, 0, 2*Math.PI);
  ctx.fillStyle = hsvToRgb(smallHue, 1.0, 1.0); ctx.fill();
}

function renderBackground(ctx, W, H) {
  ctx.fillStyle = '#808080'; ctx.fillRect(0, 0, W, H);
  // Draw white circle
  ctx.beginPath(); ctx.arc(W/2, H/2, Math.min(W,H)*0.29, 0, 2*Math.PI);
  ctx.fillStyle = '#ffffff'; ctx.fill();
}

/** Draw image clipped strictly inside the circle — clip applied before any transform */
function drawClippedImage(ctx, img, cx, cy, r, angleDeg) {
  const size = r * 2 * 0.92;
  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, 2 * Math.PI);
  ctx.clip();
  ctx.translate(cx, cy);
  ctx.rotate(angleDeg * Math.PI / 180);
  ctx.drawImage(img, -size/2, -size/2, size, size);
  ctx.restore();
}

function renderRotatedImage(canvas, img, angleDeg) {
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  const r = Math.min(W, H) * 0.29;
  renderBackground(ctx, W, H);
  drawClippedImage(ctx, img, W/2, H/2, r, angleDeg);
}

function renderConfidence(canvas, img, responseOri, ori1, ori2) {
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  const r = Math.min(W, H) * 0.29;
  const cx = W/2, cy = H/2;
  const size = r * 2 * 0.92;

  // Gray outer background
  ctx.fillStyle = '#808080';
  ctx.fillRect(0, 0, W, H);

  // White filled circle — same as response screen
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, 2 * Math.PI);
  ctx.fillStyle = '#ffffff';
  ctx.fill();

  // Two images clipped to circle, semi-transparent so both visible when spread
  function drawOne(angleDeg) {
    ctx.save();
    ctx.globalAlpha = 0.6;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, 2 * Math.PI);
    ctx.clip();
    ctx.translate(cx, cy);
    ctx.rotate(angleDeg * Math.PI / 180);
    ctx.drawImage(img, -size/2, -size/2, size, size);
    ctx.restore();
  }

  drawOne(ori1);
  drawOne(ori2);
}

/** ─────────────────────────────────────────────
 *  HELPER: get canvas from DOM
 * ───────────────────────────────────────────── */
function getCanvas() {
  return document.querySelector('#jspsych-canvas-keyboard-response-stimulus canvas')
      || document.querySelector('canvas');
}

/** ─────────────────────────────────────────────
 *  TRIAL DEFINITIONS
 * ───────────────────────────────────────────── */
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

const fixationTrial = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: '<div class="fixation">+</div>',
  choices: 'NO_KEYS',
  trial_duration: FIXATION_DURATION_MS,
};

function makeImageCanvasTrial() {
  return {
    type: jsPsychCanvasKeyboardResponse,
    canvas_size: [480, 480],
    stimulus: (canvas) => {
      const ctx = canvas.getContext('2d');
      const W = canvas.width, H = canvas.height;
      const r = Math.min(W, H) * 0.29;
      renderBackground(ctx, W, H);
      if (state._preloadedImg && state._preloadedImg.complete && state._preloadedImg.naturalWidth > 0) {
        drawClippedImage(ctx, state._preloadedImg, W/2, H/2, r, state.startOri1);
      } else {
        state._preloadedImg.onload = () => {
          renderBackground(ctx, W, H);
          drawClippedImage(ctx, state._preloadedImg, W/2, H/2, r, state.startOri1);
        };
      }
    },
    choices: 'NO_KEYS',
    trial_duration: IMAGE_DURATION_MS,
  };
}

function makeDelayTrial() {
  return {
    type: jsPsychCanvasKeyboardResponse,
    canvas_size: [480, 480],
    stimulus: (canvas) => { renderDelay(canvas, state.hue, state.smallPolygonHue); },
    choices: [' '],
    response_ends_trial: true,
    trial_duration: MAX_DELAY_MS,  // auto-terminate after 10 seconds
    on_load: () => {
      const canvas = getCanvas();
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
      canvas._cancelAnim = () => cancelAnimationFrame(animId);
      registerCleanup(canvas._cancelAnim);
    },
    on_finish: (data) => {
      runCleanup();
      // If rt is null, the trial timed out (participant did not press SPACE within MAX_DELAY_MS)
      const timedOut = (data.rt === null || data.rt === undefined);
      const elapsed = timedOut
        ? MAX_DELAY_MS / 1000
        : data.rt / 1000;
      endDelay(elapsed, timedOut);
    },
  };
}

function makeResponseTrial() {
  return {
    type: jsPsychCanvasKeyboardResponse,
    canvas_size: [480, 480],
    stimulus: (canvas) => {
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#808080'; ctx.fillRect(0, 0, canvas.width, canvas.height);
    },
    choices: [' '],
    response_ends_trial: true,
    on_load: () => {
      const canvas = getCanvas();
      if (!canvas) return;
      const img = state._preloadedImg || new Image();
      if (!img.src) img.src = imagePath(state.objectRow);
      let animId, leftHeld = false, rightHeld = false;
      state.rotKeySpeed = ROT_INITIAL_SPEED;

      function frame() {
        if (leftHeld) {
          state.rotKeySpeed += ROT_INCREASE_PER_FRAME;
          if (state.rotKeySpeed > ROT_MAX_SPEED) state.rotKeySpeed = ROT_INCREASE_PER_FRAME;
          state.thisOriT1 -= state.rotKeySpeed;
        } else if (rightHeld) {
          state.rotKeySpeed += ROT_INCREASE_PER_FRAME;
          if (state.rotKeySpeed > ROT_MAX_SPEED) state.rotKeySpeed = ROT_INCREASE_PER_FRAME;
          state.thisOriT1 += state.rotKeySpeed;
        } else {
          state.rotKeySpeed = ROT_INITIAL_SPEED;
        }
        if (img.complete && img.naturalWidth > 0) renderRotatedImage(canvas, img, state.thisOriT1);
        animId = requestAnimationFrame(frame);
      }
      animId = requestAnimationFrame(frame);

      function onDown(e) {
        const btn = e.target.closest('[data-dir]');
        if (!btn) return;
        e.preventDefault();
        if (btn.dataset.dir === 'left')  { leftHeld = true;  rightHeld = false; }
        if (btn.dataset.dir === 'right') { rightHeld = true; leftHeld = false; }
      }
      function onUp() { leftHeld = false; rightHeld = false; state.rotKeySpeed = ROT_INITIAL_SPEED; }

      document.addEventListener('mousedown', onDown);
      document.addEventListener('mouseup', onUp);
      document.addEventListener('touchstart', onDown, {passive: false});
      document.addEventListener('touchend', onUp);

      canvas._cancelResp = () => {
        cancelAnimationFrame(animId);
        document.removeEventListener('mousedown', onDown);
        document.removeEventListener('mouseup', onUp);
        document.removeEventListener('touchstart', onDown);
        document.removeEventListener('touchend', onUp);
      };
      registerCleanup(canvas._cancelResp);

      const container = canvas.parentElement;
      const btnDiv = document.createElement('div');
      btnDiv.className = 'arrow-buttons';
      btnDiv.innerHTML = `
        <button class="arrow-btn" data-dir="left">&#9664; Left</button>
        <span class="arrow-hint">Hold to rotate &middot; SPACE to confirm</span>
        <button class="arrow-btn" data-dir="right">Right &#9654;</button>`;
      container.appendChild(btnDiv);
      canvas._btnDiv = btnDiv;
    },
    on_finish: () => {
      runCleanup();
      const canvas = getCanvas();
      if (canvas && canvas._btnDiv) canvas._btnDiv.remove();
      state.responseOri = state.thisOriT1;
      setupConfidence();
    },
  };
}

function makeConfidenceTrial() {
  return {
    type: jsPsychCanvasKeyboardResponse,
    canvas_size: [480, 480],
    stimulus: (canvas) => {
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#808080'; ctx.fillRect(0, 0, canvas.width, canvas.height);
    },
    choices: [' '],
    response_ends_trial: true,
    on_load: () => {
      const canvas = getCanvas();
      if (!canvas) return;
      const W = canvas.width, H = canvas.height;
      const img = state._preloadedImg || new Image();
      if (!img.src) img.src = imagePath(state.objectRow);
      let animId, widerHeld = false, narrowerHeld = false;

      function frame() {
        if (widerHeld) {
          state.confKeySpeed += ROT_INCREASE_PER_FRAME;
          if (state.confKeySpeed > ROT_MAX_SPEED) state.confKeySpeed = ROT_INCREASE_PER_FRAME;
          state.confidenceOri1 -= state.confKeySpeed;
          state.confidenceOri2 += state.confKeySpeed;
        } else if (narrowerHeld) {
          if (angularDistance(state.confidenceOri1, state.confidenceOri2) > MIN_WEDGE_GAP) {
            state.confKeySpeed += ROT_INCREASE_PER_FRAME;
            if (state.confKeySpeed > ROT_MAX_SPEED) state.confKeySpeed = ROT_INCREASE_PER_FRAME;
            state.confidenceOri1 += state.confKeySpeed;
            state.confidenceOri2 -= state.confKeySpeed;
          }
        } else {
          state.confKeySpeed = ROT_INITIAL_SPEED;
        }
        if (img.complete && img.naturalWidth > 0)
          renderConfidence(canvas, img, state.responseOri, state.confidenceOri1, state.confidenceOri2);
        animId = requestAnimationFrame(frame);
      }
      animId = requestAnimationFrame(frame);

      function onDown(e) {
        const btn = e.target.closest('[data-conf]');
        if (!btn) return;
        e.preventDefault();
        if (btn.dataset.conf === 'wider')    { widerHeld = true;   narrowerHeld = false; }
        if (btn.dataset.conf === 'narrower') { narrowerHeld = true; widerHeld = false; }
      }
      function onUp() { widerHeld = false; narrowerHeld = false; state.confKeySpeed = ROT_INITIAL_SPEED; }

      document.addEventListener('mousedown', onDown);
      document.addEventListener('mouseup', onUp);
      document.addEventListener('touchstart', onDown, {passive: false});
      document.addEventListener('touchend', onUp);

      canvas._cancelConf = () => {
        cancelAnimationFrame(animId);
        document.removeEventListener('mousedown', onDown);
        document.removeEventListener('mouseup', onUp);
        document.removeEventListener('touchstart', onDown);
        document.removeEventListener('touchend', onUp);
      };
      registerCleanup(canvas._cancelConf);

      const container = canvas.parentElement;
      const btnDiv = document.createElement('div');
      btnDiv.className = 'arrow-buttons';
      btnDiv.innerHTML = `
        <button class="arrow-btn" data-conf="narrower">&#9660; Narrower</button>
        <span class="arrow-hint">Hold to adjust &middot; SPACE to confirm</span>
        <button class="arrow-btn" data-conf="wider">Wider &#9650;</button>`;
      container.appendChild(btnDiv);
      canvas._btnDiv = btnDiv;
    },
    on_finish: () => {
      runCleanup();
      const canvas = getCanvas();
      if (canvas && canvas._btnDiv) canvas._btnDiv.remove();
      state.confidenceWedgeWidth = Math.abs(state.confidenceOri1 - state.confidenceOri2);
    },
  };
}

function makeFeedbackTrial() {
  return {
    type: jsPsychHtmlButtonResponse,
    stimulus: () => {
      const e = angularDistance(state.responseOri, state.startOri1);
      const rew = computeReward(e, state.delayDuration, state.yokedScheduledDelay,
                                state.conditionType, state.confidenceWedgeWidth);
      state.winningPoints = rew.total;
      state.blockPoints  += rew.total;

      let msg;
      if (rew.d < REWARD.d_min)
        msg = `${Math.round(e)} degrees difference.<br>No points: response was too early.`;
      else if (e < 5)
        msg = `Great job!<br>${Math.round(e)} degrees difference.<br>You win ${Math.round(rew.total)} points`;
      else
        msg = `${Math.round(e)} degrees difference.<br>You win ${Math.round(rew.total)} points`;

      // Practice-only colour-match feedback (yoked practice trials only)
      if (state.isYokedPractice && state.yokedScheduledDelay !== null) {
        const timingError = state.delayDuration - state.yokedScheduledDelay;
        const absErr = Math.abs(timingError);
        let timingMsg;
        if (absErr < 0.15) {
          timingMsg = `<br><br><em>Colour-match: excellent timing! You pressed ${absErr.toFixed(2)} s ${timingError < 0 ? 'before' : 'after'} the perfect match.</em>`;
        } else if (timingError < 0) {
          timingMsg = `<br><br><em>Colour-match: you pressed ${absErr.toFixed(2)} s <strong>before</strong> the colours matched. Try waiting a bit longer next time.</em>`;
        } else {
          timingMsg = `<br><br><em>Colour-match: you pressed ${absErr.toFixed(2)} s <strong>after</strong> the colours matched. Try responding a bit sooner next time.</em>`;
        }
        msg += timingMsg;
      }

      recordTrial({
        conditionType: state.conditionType, expBlock: state.expBlock,
        sourcePairN: state.sourcePairN, trialInBlock: state.trialInBlock,
        objectRow: state.objectRow, stimulusName: STIMULI[state.objectRow],
        fixationDurationMs: FIXATION_DURATION_MS,      // fixed timing parameter
        imageDurationMs: IMAGE_DURATION_MS,            // fixed timing parameter
        maxDelayMs: MAX_DELAY_MS,                       // fixed timing parameter
        startOri1: state.startOri1, delayDuration: state.delayDuration,
        delayTimedOut: state.delayTimedOut,            // true if trial hit 10s cap
        yokedScheduledDelay: state.yokedScheduledDelay,
        smallPolygonHue: state.smallPolygonHue,        // inner-circle hue this trial
        targetHue: state.targetHue,                    // target outer hue (for yoked) / inner hue carried over (for SP)
        bigPolygonStartHue: state.hueStart,            // outer hue at delay onset
        bigPolygonFinalHue: state.bigPolygonFinalHue,  // outer hue at SPACE press
        responseOri: state.responseOri, angle_diff: e,
        confidenceWedgeWidth: state.confidenceWedgeWidth,
        d_credit_raw: rew.d_credit_raw, d_clamped: rew.d,
        accuracy_score: rew.A, delay_score: rew.D,
        R_base: rew.R_base, R_conf: rew.R_conf,
        winningPoints: rew.total, blockPoints_so_far: state.blockPoints,
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
      </div>`;
    },
    choices: ['Continue'],
  };
}

function makeBlockEndTrial() {
  return {
    type: jsPsychHtmlButtonResponse,
    stimulus: () => `<div class="instructions">
      You earned <strong>${Math.round(state.blockPoints)}</strong> points in this block.<br><br>
      Take a brief pause.<br>Press Continue when ready.
    </div>`,
    choices: ['Continue'],
  };
}

/** ─────────────────────────────────────────────
 *  TIMELINE BUILDER
 * ───────────────────────────────────────────── */
function buildTimeline(jsPsych) {
  const timeline = [];

  // Click-to-start
  timeline.push({
    type: jsPsychHtmlButtonResponse,
    stimulus: '<div class="instructions">Click <strong>Continue</strong> to begin.</div>',
    choices: ['Continue'],
  });

  // ── Screen 1: Welcome & overview ──
  timeline.push(makeTextTrial(
    '<strong>Welcome!</strong>\n\n' +
    'In this experiment, you will see everyday objects on the screen, and your task will be to remember their orientation — that is, how each object is rotated, like the hands of a clock.\n\n' +
    'The experiment is divided into 12 blocks of 20 trials each. It takes about 60–90 minutes to complete.\n\n' +
    'You will earn points based on how well you remember and how confident you are in your answer. Please give it your full attention.\n\n' +
    'Press <strong>Continue</strong> to see what a single trial looks like.'
  ));

  // ── Screen 2: Trial structure ──
  timeline.push(makeTextTrial(
    '<strong>What happens on each trial</strong>\n\n' +
    '<strong>Step 1.</strong> A cross (+) will appear in the centre of the screen. This means a trial is about to begin.\n\n' +
    '<strong>Step 2.</strong> An object will briefly flash on the screen at a particular angle of rotation. Try to remember exactly how it was rotated.\n\n' +
    '<strong>Step 3.</strong> Two coloured circles will appear — a small one inside a larger one. You will need to hold the object\'s rotation in mind while the circles are on screen. The outer circle\'s colour will keep changing throughout this period.\n\n' +
    '<strong>Step 4.</strong> The same object will appear again, but rotated to a different angle. Your task is to rotate it back to <strong>exactly the same angle as the original</strong>. Use the <strong>Left</strong> and <strong>Right</strong> buttons that appear below the object — hold them down with the mouse to rotate. Press <strong>SPACE</strong> when you are done.\n\n' +
    '<strong>Step 5.</strong> Finally, you will report how confident you are in your answer by opening a wedge of uncertainty around your chosen angle. Use the <strong>Narrower</strong> and <strong>Wider</strong> buttons to set the width. A narrow wedge means "I\'m very sure my answer is exactly right". A wide wedge means "I\'m not sure — the correct angle could be anywhere in this range".\n\n' +
    'Press <strong>Continue</strong>.'
  ));

  // ── Screen 3: Points and block types ──
  timeline.push(makeTextTrial(
    '<strong>How points work</strong>\n\n' +
    'You earn points on each trial based on three things:\n\n' +
    '<strong>• Accuracy.</strong> The closer your rotation is to the original, the more points. Errors larger than about 15 degrees earn nothing.\n\n' +
    '<strong>• Time held in memory.</strong> You earn more points the longer you successfully held the object\'s rotation in mind before answering. Very fast responses (under about 1.25 seconds) earn no points.\n\n' +
    '<strong>• Confidence.</strong> If your wedge is narrow and it includes the correct angle, you earn bonus points. A wedge that\'s too wide earns little or no bonus.\n\n\n' +
    '<strong>Two types of blocks</strong>\n\n' +
    '<strong>SELF-PACED blocks.</strong> You decide when to respond. Press SPACE during the coloured circles when you want to report the rotation. Waiting longer = more points, <em>if you still remember the rotation well.</em>\n\n' +
    '<strong>COLOUR-MATCHING blocks.</strong> Your task during the circles is to press SPACE when the outer (changing) circle\'s colour matches the inner (fixed) circle\'s colour. The longer the colour-match takes, the more points are at stake — but you also need to remember the rotation just as well, since you\'ll still be asked to report it afterwards.\n\n' +
    'Blocks alternate between these two types. You will be told at the start of each block which type it is.\n\n' +
    'Press <strong>Continue</strong> for a short practice.'
  ));

  // ── PRACTICE PHASE ──
  // 2 self-paced practice + 2 yoked practice
  timeline.push(makeTextTrial(
    '<strong>Practice — Self-paced</strong>\n\n' +
    'Let\'s try 2 practice trials. The first 2 practice trials are <strong>SELF-PACED</strong>: press SPACE during the coloured circles whenever you want to report the rotation.\n\n' +
    'You will see how many points you would have earned, but practice trials do not count toward your final score.\n\n' +
    'Press <strong>Continue</strong> to start.'
  ));

  // Set up practice — self-paced
  timeline.push({ type: jsPsychCallFunction, func: () => {
    state.isPractice = true;
    state.isYokedPractice = false;
    state.expBlock = -1;
    state.conditionType = 'self_paced';
    state.sourcePairN = -1;
    state.blockPoints = 0;
    state.rowsInBlock = state.practiceRows.slice(0, 2);
    state.lastSelfPaced_trialInBlock = [];
    state.lastSelfPaced_objectRow = [];
    state.lastSelfPaced_startOri1 = [];
    state.lastSelfPaced_delayDuration = [];
    state.lastSelfPaced_bigPolygonFinalHue = [];
    state.lastSelfPaced_smallPolygonHue = [];
  }});

  for (let t = 0; t < 2; t++) {
    const trialIndex = t;
    timeline.push({ type: jsPsychCallFunction, func: () => {
      setupTrial(trialIndex); setupDelay(); setupResponse();
    }});
    timeline.push(fixationTrial);
    timeline.push(makeImageCanvasTrial());
    timeline.push(makeDelayTrial());
    timeline.push(makeResponseTrial());
    timeline.push(makeConfidenceTrial());
    timeline.push(makeFeedbackTrial());
  }

  // Yoked practice intro
  timeline.push(makeTextTrial(
    '<strong>Practice — Colour-matching</strong>\n\n' +
    'Now 2 practice trials in the <strong>COLOUR-MATCHING</strong> condition.\n\n' +
    'During the coloured circles, the inner (small) circle\'s colour stays fixed, while the outer (large) circle\'s colour cycles continuously. Your task is to press <strong>SPACE</strong> the moment the outer circle\'s colour matches the inner circle\'s colour.\n\n' +
    'Remember to keep the object\'s rotation in mind — you\'ll still be asked to report it afterwards.\n\n' +
    'In these practice trials only, you will get feedback on how close you were to the perfect colour-match moment. <strong>This feedback will not appear in the main experiment</strong>, so use these trials to learn the timing.\n\n' +
    'Press <strong>Continue</strong> to start.'
  ));

  timeline.push({ type: jsPsychCallFunction, func: () => {
    state.isPractice = true;
    state.isYokedPractice = true;
    state.conditionType = 'yoked';
    state.rowsInBlock = state.practiceRows.slice(2, 4);
    // Build a yoked schedule from the 2 self-paced practice trials
    state.yoked_objectRow = state.rowsInBlock;
    state.yoked_sourceTrialInBlock = [];
    state.yoked_sourceObjectRow = [];
    state.yoked_sourceOrientation = [];
    state.yoked_sourceDelayDuration = [];
    state.yoked_sourceFinalHue = [];
    state.yoked_sourceSmallPolygonHue = [];
    const order = shuffle([0, 1]);
    for (let i = 0; i < 2; i++) {
      const srcIdx = order[i];
      state.yoked_sourceTrialInBlock.push(state.lastSelfPaced_trialInBlock[srcIdx]);
      state.yoked_sourceObjectRow.push(state.lastSelfPaced_objectRow[srcIdx]);
      state.yoked_sourceOrientation.push(state.lastSelfPaced_startOri1[srcIdx]);
      state.yoked_sourceDelayDuration.push(state.lastSelfPaced_delayDuration[srcIdx]);
      state.yoked_sourceFinalHue.push(state.lastSelfPaced_bigPolygonFinalHue[srcIdx]);
      state.yoked_sourceSmallPolygonHue.push(state.lastSelfPaced_smallPolygonHue[srcIdx]);
    }
  }});

  for (let t = 0; t < 2; t++) {
    const trialIndex = t;
    timeline.push({ type: jsPsychCallFunction, func: () => {
      setupTrial(trialIndex); setupDelay(); setupResponse();
    }});
    timeline.push(fixationTrial);
    timeline.push(makeImageCanvasTrial());
    timeline.push(makeDelayTrial());
    timeline.push(makeResponseTrial());
    timeline.push(makeConfidenceTrial());
    timeline.push(makeFeedbackTrial());
  }

  // Clear practice flags before main experiment
  timeline.push({ type: jsPsychCallFunction, func: () => {
    state.isPractice = false;
    state.isYokedPractice = false;
  }});

  // Recap before main experiment
  timeline.push(makeTextTrial(
    '<strong>End of practice</strong>\n\n' +
    'You are now ready to begin the main experiment. From this point on, all trials count toward your points.\n\n' +
    '<strong>Quick recap:</strong>\n' +
    '• Each trial starts with a + sign, then an object appears briefly.\n' +
    '• During the coloured circles, press <strong>SPACE</strong>:\n' +
    '   – In <strong>self-paced</strong> blocks, whenever you want to report the rotation (waiting longer earns more points).\n' +
    '   – In <strong>colour-matching</strong> blocks, the moment the two circles\' colours match.\n' +
    '• Rotate the object back to its <strong>exact original angle</strong> using the buttons, then press SPACE.\n' +
    '• Set your wedge to honestly reflect how confident you are.\n\n' +
    'Blocks alternate self-paced and colour-matching. You will be told which type each block is.\n\n' +
    'Press <strong>Continue</strong> to start block 1 of 12.'
  ));

  // ── 8 main blocks ──
  for (let blockN = 0; blockN < N_TOTAL_BLOCKS; blockN++) {
    timeline.push({ type: jsPsychCallFunction, func: () => applyBlockSettings(blockN) });

    // Block cue
    timeline.push({
      type: jsPsychHtmlButtonResponse,
      stimulus: () => state.conditionType === 'self_paced'
        ? `<div class="instructions"><strong>SELF-PACED BLOCK</strong><br><br>
            Remember the rotation of each object.<br><br>
            During the coloured circles, press <strong>SPACE</strong> whenever you want to report the remembered rotation. Waiting longer earns more points, but only if you still remember the rotation well.<br><br>
            Press <strong>Start block</strong> when ready.
          </div>`
        : `<div class="instructions"><strong>COLOUR-MATCHING BLOCK</strong><br><br>
            Remember the rotation of each object.<br><br>
            During the coloured circles, press <strong>SPACE</strong> the moment you think the outer (changing) circle's colour matches the inner (fixed) circle's colour. The outer circle's colour cycles continuously, so respond as soon as you see the match.<br><br>
            You will still be asked to report the object's rotation afterwards, so keep it in mind.<br><br>
            Press <strong>Start block</strong> when ready.
          </div>`,
      choices: ['Start block'],
    });

    // 20 trials
    for (let t = 0; t < TRIALS_PER_BLOCK; t++) {
      const trialIndex = t;
      timeline.push({ type: jsPsychCallFunction, func: () => {
        setupTrial(trialIndex); setupDelay(); setupResponse();
      }});
      timeline.push(fixationTrial);
      timeline.push(makeImageCanvasTrial());
      timeline.push(makeDelayTrial());
      timeline.push(makeResponseTrial());
      timeline.push(makeConfidenceTrial());
      timeline.push(makeFeedbackTrial());
    }

    timeline.push(makeBlockEndTrial());
  }

  // End
  timeline.push({
    type: jsPsychHtmlButtonResponse,
    stimulus: '<div class="instructions">Thank you for participating!<br><br>Your data is being saved…</div>',
    choices: [],
    trial_duration: 2000,
    // Saving happens automatically via initJsPsych on_finish (see runExperiment).
  });

  return timeline;
}

/** ─────────────────────────────────────────────
 *  DATA SAVING  (jQuery $.ajax pattern — matches d2 test example exactly)
 *  1. POSTs data to /save with URL-encoded body { data: <json string> }
 *  2. On success, POSTs to /next so Experiment Factory marks the session
 *     as finished (this is what triggers the results file to appear).
 *  3. Then redirects the participant to Prolific's completion URL so
 *     Prolific marks their submission as complete.
 *  If /save fails, falls back to a local download so no data is lost.
 * ───────────────────────────────────────────── */
const PROLIFIC_COMPLETION_URL = 'https://app.prolific.com/submissions/complete?cc=C1ON9UJ6';

function goToProlific() {
  // Tell Experiment Factory this session is done, then send the
  // participant back to Prolific to complete their submission.
  $.ajax({
    type: "POST",
    url: '/next',
    complete: function() {
      document.location = PROLIFIC_COMPLETION_URL;
    }
  });
}

function saveDataToServer(jsPsych) {
  // Serialize the data in a promise, matching d2 pattern
  var promise = new Promise(function(resolve, reject) {
    var data = JSON.stringify({
      jsPsychData: jsPsych.data.get().values(),
      trialData: trialData,
      allObjectRows: state.allObjectRows,
    });
    resolve(data);
  });

  promise.then(function(data) {
    $.ajax({
      type: "POST",
      url: '/save',
      data: { "data": data },
      success: function() { goToProlific(); },
      dataType: "application/json",
      // Endpoint not running, local save
      error: function(err) {
        if (err.status == 200) {
          goToProlific();
        } else {
          downloadFallback();
        }
      }
    });
  });
}

function downloadFallback() {
  const blob = new Blob([JSON.stringify(trialData, null, 2)], {type: 'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob); a.download = `selfpacedwm_${Date.now()}.json`; a.click();
  document.body.innerHTML =
    '<div class="instructions">Thank you! Data saved locally. ' +
    'If you started this experiment through Prolific, please enter the following completion code ' +
    'in Prolific to receive credit:<br><br><strong>C1ON9UJ6</strong><br><br>' +
    'You may now close this window.</div>';
}

/** ─────────────────────────────────────────────
 *  ENTRY POINT
 * ───────────────────────────────────────────── */
function initExperiment() {
  state.allObjectRows = Array.from({length: N_TOTAL_OBJECTS}, (_, i) => i);
  shuffle(state.allObjectRows);
  // Reserve last 4 indices for practice (2 SP + 2 yoked), main exp uses first 160
  state.practiceRows = state.allObjectRows.slice(-4);
  state.allObjectRows = state.allObjectRows.slice(0, N_SELF_PACED_BLOCKS * OBJECTS_PER_PAIR);
  state.smallPolygonHue = 0.0;
}

window.runExperiment = function() {
  initExperiment();
  const jsPsych = initJsPsych({
    display_element: 'jspsych-target',
    on_finish: function() {
      // Called by jsPsych when the whole timeline is done.
      // Sends data to Experiment Factory's /save endpoint.
      saveDataToServer(jsPsych);
    },
  });
  jsPsych.run(buildTimeline(jsPsych));
};
