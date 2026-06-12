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
 *  STIMULUS LIST  (432 actual image filenames)
 * ───────────────────────────────────────────── */
const STIMULI = [
  "witchhat.png","goose.png","golfclubs.png","goldcup.png","goblet.png",
  "globe.png","glasscup.png","glasscontainer.png","glassbottle.png","glass2.png",
  "glass.png","giftribbon.png","garlicpress.png","gardeningrak.png","garbagebin2.png",
  "garbagebag.png","fanStanding.png","fan.png","eyedrops2.png","exit.png",
  "excersiceequipment.png","exactoknife.png","drinkingpitcher.png","drinkingbottle.png",
  "drinkglass.png","dresser.png","dress.png","doublehook.png","doorhandle.png",
  "door.png","domino.png","doll.png","dog.png","dishwashingsoap.png",
  "portablepotty.png","quilt.png","promdress.png","rake.png","punchingbag3.png",
  "railwaysign.png","rasor.png","purse.png","postalmailbox.png","punchingbag2.png",
  "rake2.png","broom.png","adjustable.png","africanmask.png","alarmclock.png",
  "amphora.png","anchor.png","angelstatue.png","arch2.png","artichoke.png",
  "asparagus.png","avocado.png","axe.png","babybottle.png","baloon.png",
  "bandaid.png","barbie.png","barrel2.png","baseballbat.png","bookshelf.png",
  "candle.png","carrots.png","deskchair.png","airfreshener.png","bag.png",
  "barchair.png","barchair2.png","basket.png","bathrobe.png","bathroomsink.png",
  "battery.png","beaver.png","beerbottle.png","beermug.png","bell2.png",
  "beverage.png","bib.png","bikepump.png","bin.png","birdcage2.png",
  "birdhouse.png","birdhouse2.png","bishop.png","blender.png","bloodorange.png",
  "bottle.png","bowloffruit.png","boxcutter.png","boxinggloves.png","broccoli.png",
  "brochette.png","brooch.png","brush.png","bucket.png","buddha.png",
  "building.png","bunnytoy.png","cactus.png","carseat.png","cheesegreater.png",
  "closedumbrella.png","bullet.png","cabinet.png","cake.png","calculator.png",
  "candle2.png","candles.png","candlestick.png","candyjar.png","cane.png",
  "canister.png","carkey.png","carrot.png","castletower.png","celery.png",
  "cello.png","chairs.png","champane.png","cherry.png","chessknight.png",
  "chicken.png","childbed.png","chocolate.png","chocolatemilk.png","chopsticks.png",
  "christmasslightbulb.png","christmasstree.png","christmasstree2.png","clarinet.png",
  "cleaningbrush.png","closet.png","clothespin.png","clover.png","coathanger.png",
  "coctailumbrella.png","codedoorlock.png","coffeemaker.png","cookiecutter.png",
  "danger.png","lamp.png","cobra.png","coffeemug2.png","comb.png",
  "combRegular.png","compass.png","computermouse.png","concreteblock.png","cone.png",
  "crotches.png","cucumber.png","cup.png","curtain2.png","daquiri.png",
  "dart.png","die.png","drum.png","drumsticks.png","dryflowers.png",
  "dumbell.png","duster.png","dustpan.png","dynamite.png","earexam.png",
  "earring.png","earsirynge.png","eggcup.png","icecream.png","jacket.png",
  "duck.png","eagle.png","egret.png","eiffeltower.png","electricguitar.png",
  "emergency.png","icecreamcone.png","ironning.png","jarofcapers.png","jeans.png",
  "jesusstatue.png","juice.png","kangaroo.png","ketchup.png","kettle.png",
  "key.png","keychain.png","kidstoyrings.png","kitchenaid.png","knifeRegular.png",
  "knitteddoll.png","lace.png","ladder.png","ladle.png","lantern.png",
  "leaf.png","leek.png","legcast.png","legoman.png","lighthouse.png",
  "makeupbrush.png","mountaingoat.png","nasalspray.png","easel.png","easteregg.png",
  "feather.png","fighter.png","filescabinet.png","fireextinguisher.png","flower.png",
  "foodblender.png","foot.png","fridge2.png","guitar.png","harp.png",
  "lightbulb2.png","lighter.png","lipstick.png","livingroomlamp.png","lockerdoor.png",
  "lollipop.png","mailbox.png","maplesyrup.png","marbles.png","masher.png",
  "maskara.png","match.png","medal.png","menorah.png","mic.png",
  "microphone.png","microscope.png","milkjug2.png","milkshake.png","minitree.png",
  "mixinghook.png","mug.png","musicstand.png","opener2.png","suit.png",
  "fence.png","flashlight.png","footballball2.png","fork.png","fullbucket.png",
  "funnel.png","galloncontainer.png","granade.png","hoodie.png","moneyjar.png",
  "nail.png","nailpolish2.png","nunchaku.png","ornament.png","ostrich.png",
  "ovenmit.png","pacifier.png","padlock.png","pager.png","paintbrush2.png",
  "paintbucket.png","palmtree.png","pan.png","paperbag.png","paperclip.png",
  "grater.png","gravestone.png","grocerybag.png","gumballmachine.png","hairbrush.png",
  "haircomb.png","hammer.png","hamper.png","handpuppet.png","headphones.png",
  "herbbag.png","hook.png","hotpepper.png","paintroller.png","papertowel.png",
  "parfait.png","parkingmeter2.png","parsley.png","partyhat.png","payphone.png",
  "pealer.png","pealer2.png","pear.png","pen.png","pencils.png",
  "pepper.png","perfumebottle.png","phone.png","pickles.png","pin.png",
  "pitcher.png","plant.png","popsicle.png","trophy2.png","hotairbaloon.png",
  "hotdog.png","hotwaterbottle.png","hourglass.png","hydrant.png","peppermill.png",
  "phonebooth.png","pictureframe.png","pieserver.png","pineapple.png","pinecone.png",
  "pinguin.png","pintofbeer.png","pizzacutter.png","plant2.png","plier.png",
  "redbull.png","remotecontrol.png","ribbon.png","rice.png","rocket.png",
  "rollingpin.png","rose2.png","ruler.png","shavingmachine.png","rope.png",
  "rose.png","roses.png","rubberboots.png","rug.png","safetypin.png",
  "saltshaker.png","sandcastle.png","sauce.png","scissors.png","scooter.png",
  "screw.png","screwdriver.png","screwdriver_round.png","seashell.png","secateurs.png",
  "sharpknife.png","shaving.png","shipmodel.png","shirtskirt.png","shovel.png",
  "shower.png","showerhead.png","sirynge.png","skirt.png","slippers.png",
  "smallvase.png","spagetyserver.png","speaker.png","spraybottle.png","statue2.png",
  "stringspool.png","skateboard.png","skeleton.png","spatula.png","spicerack.png",
  "spoon.png","spring.png","stepladder.png","stool.png","strawberry.png",
  "streetlamp.png","streetpost.png","studentchair.png","suit2.png","suitcase.png",
  "surfing.png","sword2.png","tabasco.png","teddybear.png","teepee.png",
  "telephonebooth.png","tennisracket.png","testtube.png","thread.png","toiletbrush.png",
  "toothpaste.png","trafficlight.png","tulip.png","thermiccup.png","thumbtack.png",
  "tie.png","timepiece.png","toilet.png","toiletplung.png","toothbrush.png",
  "totem.png","toyperson.png","trashbin.png","travelmug.png","tree.png",
  "trickortreat.png","tripod.png","trumpet.png","tube.png","tweezers.png",
  "umbrella.png","vampire.png","vase2.png","vase3.png","walker.png",
  "watch2.png","waterbottle.png","watercooler.png","waterjub.png","well.png",
  "winebottle2.png","beachpail.png","beachumbrella.png","seahorse.png","soapbottle.png",
  "walkietalkie.png","wardrobe.png","washer.png","watercan.png","waterkettle.png",
  "weddingcake.png","wetsuit.png","wickchair.png","windchimes.png","wineglass.png",
  "winterglove.png","wintersock.png","woodenhammer.png","woodenspoons.png","zucchini.png"
];

/** ─────────────────────────────────────────────
 *  EXPERIMENT PARAMETERS
 * ───────────────────────────────────────────── */
const N_TOTAL_OBJECTS     = STIMULI.length;  // 432
const TRIALS_PER_BLOCK    = 20;
const N_SELF_PACED_BLOCKS = 5;
const N_TOTAL_BLOCKS      = N_SELF_PACED_BLOCKS * 2;
const OBJECTS_PER_PAIR    = TRIALS_PER_BLOCK * 2;

const HUE_CYCLE_DURATION  = 6.0;
const DEFAULT_HUE_SPEED   = 1.0 / HUE_CYCLE_DURATION;

const REWARD = {
  theta: 15.0, alpha: 2.0, D_max: 10.0, d_min: 1.25,
  tau: 1.2, B: 10.0, w_max: 25.0, gamma: 1.0,
};

const ROT_INCREASE_PER_FRAME = 0.04;   // slower acceleration
const ROT_MAX_SPEED          = 2.0;   // lower top speed
const ROT_INITIAL_SPEED      = 0.15;  // slower start
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
  delayDuration: null, bigPolygonFinalHue: null, delayStartTime: null,
  responseOri: 0, adjustmentStartOri: 0, thisOriT1: 0, rotKeySpeed: ROT_INITIAL_SPEED,
  confidenceOri1: 0, confidenceOri2: 0, confKeySpeed: 1.0, confidenceWedgeWidth: 0,
  winningPoints: 0, feedbackText: '',
};

const trialData = [];

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
    state.targetHue = state.smallPolygonHue; state.hueStart = 0.0;
    state.hue = 0.0; state.hueSpeed = DEFAULT_HUE_SPEED;
    state.hueDistance = null; state.yokedScheduledDelay = null;
  } else {
    let ysd = state.yoked_sourceDelayDuration[state.trialInBlock];
    if (!ysd || ysd <= 0) ysd = 0.25;
    state.yokedScheduledDelay = ysd;
    state.targetHue = state.yoked_sourceFinalHue[state.trialInBlock];
    state.smallPolygonHue = state.targetHue;
    state.hueStart = (state.targetHue + 0.5) % 1.0;
    state.hue = state.hueStart;
    state.hueDistance = ((state.targetHue - state.hueStart) % 1.0 + 1.0) % 1.0;
    state.hueSpeed = state.hueDistance / state.yokedScheduledDelay;
  }
}

function updateDelayHue(elapsed) {
  if (state.conditionType === 'self_paced') {
    state.hue = (state.hueStart + state.hueSpeed * elapsed) % 1.0;
  } else {
    if (elapsed <= state.yokedScheduledDelay) {
      state.hue = (state.hueStart + (elapsed / state.yokedScheduledDelay) * state.hueDistance) % 1.0;
    } else {
      state.hue = (state.targetHue + state.hueSpeed * (elapsed - state.yokedScheduledDelay)) % 1.0;
    }
  }
}

function endDelay(elapsed) {
  state.delayDuration = elapsed;
  state.bigPolygonFinalHue = state.hue;
  if (state.conditionType === 'self_paced') {
    state.lastSelfPaced_trialInBlock.push(state.trialInBlock);
    state.lastSelfPaced_objectRow.push(state.objectRow);
    state.lastSelfPaced_startOri1.push(state.startOri1);
    state.lastSelfPaced_delayDuration.push(state.delayDuration);
    state.lastSelfPaced_bigPolygonFinalHue.push(state.bigPolygonFinalHue);
    state.lastSelfPaced_smallPolygonHue.push(state.smallPolygonHue);
    state.smallPolygonHue = state.bigPolygonFinalHue;
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
  state.confKeySpeed = 1.0;
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
  ctx.beginPath(); ctx.arc(W/2, H/2, Math.min(W,H)*0.29, 0, 2*Math.PI);
  ctx.fillStyle = '#ffffff'; ctx.fill();
}

function renderRotatedImage(canvas, img, angleDeg) {
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  const size = Math.min(W, H) * 0.38;   // matches new smaller circle
  ctx.clearRect(0, 0, W, H);
  renderBackground(ctx, W, H);
  ctx.save();
  ctx.translate(W/2, H/2);
  ctx.rotate(angleDeg * Math.PI / 180);
  ctx.drawImage(img, -size/2, -size/2, size, size);
  ctx.restore();
}

function renderConfidence(canvas, img, responseOri, ori1, ori2) {
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  const size = Math.min(W, H) * 0.38;
  const r = Math.min(W, H) * 0.29;
  ctx.clearRect(0, 0, W, H);
  renderBackground(ctx, W, H);

  // Draw wedge arc between the two orientations
  drawWedge(ctx, W/2, H/2, r, ori1, ori2, '#aaaaaa', 0.5);

  // Both images drawn at their respective wedge-edge orientations (semi-transparent)
  // so participant sees the wedge opening from responseOri outward
  ctx.save(); ctx.globalAlpha = 0.6; ctx.translate(W/2, H/2);
  ctx.rotate(ori1 * Math.PI / 180);
  ctx.drawImage(img, -size/2, -size/2, size, size); ctx.restore();

  ctx.save(); ctx.globalAlpha = 0.6; ctx.translate(W/2, H/2);
  ctx.rotate(ori2 * Math.PI / 180);
  ctx.drawImage(img, -size/2, -size/2, size, size); ctx.restore();

  // Solid image at responseOri on top
  ctx.save(); ctx.translate(W/2, H/2);
  ctx.rotate(responseOri * Math.PI / 180);
  ctx.drawImage(img, -size/2, -size/2, size, size); ctx.restore();
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

function makeDelayTrial() {
  return {
    type: jsPsychCanvasKeyboardResponse,
    canvas_size: [600, 600],
    stimulus: (canvas) => { renderDelay(canvas, state.hue, state.smallPolygonHue); },
    choices: [' '],
    response_ends_trial: true,
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
    },
    on_finish: (data) => {
      const canvas = getCanvas();
      if (canvas && canvas._cancelAnim) canvas._cancelAnim();
      const elapsed = data.rt ? data.rt / 1000 : (performance.now() - state.delayStartTime) / 1000;
      endDelay(elapsed);
    },
  };
}

function makeResponseTrial() {
  return {
    type: jsPsychCanvasKeyboardResponse,
    canvas_size: [600, 600],
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
          state.rotKeySpeed = Math.min(state.rotKeySpeed + ROT_INCREASE_PER_FRAME, ROT_MAX_SPEED);
          state.thisOriT1 -= state.rotKeySpeed;
        } else if (rightHeld) {
          state.rotKeySpeed = Math.min(state.rotKeySpeed + ROT_INCREASE_PER_FRAME, ROT_MAX_SPEED);
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
      const canvas = getCanvas();
      if (canvas) {
        if (canvas._cancelResp) canvas._cancelResp();
        if (canvas._btnDiv) canvas._btnDiv.remove();
      }
      state.responseOri = state.thisOriT1;
    },
  };
}

function makeConfidenceTrial() {
  return {
    type: jsPsychCanvasKeyboardResponse,
    canvas_size: [600, 600],
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
      function onUp() { widerHeld = false; narrowerHeld = false; state.confKeySpeed = 1.0; }

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
      const canvas = getCanvas();
      if (canvas) {
        if (canvas._cancelConf) canvas._cancelConf();
        if (canvas._btnDiv) canvas._btnDiv.remove();
      }
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

      recordTrial({
        conditionType: state.conditionType, expBlock: state.expBlock,
        sourcePairN: state.sourcePairN, trialInBlock: state.trialInBlock,
        objectRow: state.objectRow, stimulusName: STIMULI[state.objectRow],
        startOri1: state.startOri1, delayDuration: state.delayDuration,
        yokedScheduledDelay: state.yokedScheduledDelay,
        bigPolygonFinalHue: state.bigPolygonFinalHue,
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

  // Instructions
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
    'Too-wide wedges will earn little or no extra points.'
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
    'You will see how many points you earned after each trial and at the end of each block.'
  ));

  // 10 blocks
  for (let blockN = 0; blockN < N_TOTAL_BLOCKS; blockN++) {
    timeline.push({ type: jsPsychCallFunction, func: () => applyBlockSettings(blockN) });

    // Block cue
    timeline.push({
      type: jsPsychHtmlButtonResponse,
      stimulus: () => state.conditionType === 'self_paced'
        ? `<div class="instructions"><strong>SELF-PACED BLOCK</strong><br><br>
            Remember the orientation of each object.<br><br>
            Colored circles will appear during the delay, but you do not need to use their colors in this block.<br><br>
            Press SPACE when you want to report the remembered orientation.<br>
            By waiting longer you will earn more points, but only if you still remember the orientation well.
          </div>`
        : `<div class="instructions"><strong>COLOR-MATCHING BLOCK</strong><br><br>
            Remember the orientation of each object.<br><br>
            During the delay, press SPACE when you think the changing outer circle matches the inner circle.
          </div>`,
      choices: ['Start block'],
    });

    // 20 trials
    for (let t = 0; t < TRIALS_PER_BLOCK; t++) {
      const trialIndex = t;
      timeline.push({ type: jsPsychCallFunction, func: () => {
        setupTrial(trialIndex); setupDelay(); setupResponse(); setupConfidence();
      }});
      timeline.push(fixationTrial);
      timeline.push({
        type: jsPsychHtmlKeyboardResponse,
        stimulus: () => `<div class="trial-screen">
          <div class="stimulus-bg"></div>
          <img class="stimulus-img" src="${imagePath(state.objectRow)}"
               style="transform: rotate(${state.startOri1}deg)">
        </div>`,
        choices: 'NO_KEYS',
        trial_duration: IMAGE_DURATION_MS,
      });
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
    on_finish: () => saveData(jsPsych),
  });

  return timeline;
}

/** ─────────────────────────────────────────────
 *  DATA SAVING
 * ───────────────────────────────────────────── */
function saveData(jsPsych) {
  const payload = { data: JSON.stringify({ trialData, allObjectRows: state.allObjectRows }) };
  fetch('/save', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(payload) })
    .then(r => { if (r.ok) window.location.href = '/next'; else downloadFallback(); })
    .catch(() => downloadFallback());
}

function downloadFallback() {
  const blob = new Blob([JSON.stringify(trialData, null, 2)], {type: 'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob); a.download = `selfpacedwm_${Date.now()}.json`; a.click();
  document.body.innerHTML = '<div class="instructions">Data saved locally. You may close this window.</div>';
}

/** ─────────────────────────────────────────────
 *  ENTRY POINT
 * ───────────────────────────────────────────── */
function initExperiment() {
  state.allObjectRows = Array.from({length: N_TOTAL_OBJECTS}, (_, i) => i);
  shuffle(state.allObjectRows);
  state.smallPolygonHue = 0.0;
}

window.runExperiment = function() {
  initExperiment();
  const jsPsych = initJsPsych({
    display_element: 'jspsych-target',
    on_finish: () => {},
  });
  jsPsych.run(buildTimeline(jsPsych));
};
