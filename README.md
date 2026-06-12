# Self-Paced Working Memory Experiment

A jsPsych 7 experiment for online deployment via the
[Experiment Factory](https://expfactory.github.io/) container platform.

---

## Repository structure

```
selfpacedwm-exp/
├── index.html                  ← entry point (DO NOT rename)
├── config.json                 ← Experiment Factory metadata
├── css/
│   └── style.css
├── js/
│   └── experiment.js           ← all experiment logic
├── jspsych/                    ← jsPsych 7 library files (see Step 1)
│   ├── jspsych.js
│   ├── jspsych.css
│   ├── plugin-html-keyboard-response.js
│   ├── plugin-canvas-keyboard-response.js
│   └── plugin-call-function.js
└── GrayObjectStimuli/          ← your 432 stimulus images (1.png … 432.png)
    ├── 1.png
    ├── 2.png
    └── …
```

> **Note:** `left_arrow.png`, `right_arrow.png`, `narrower.png`, `wider.png`
> are NOT needed — the buttons are rendered in HTML/CSS instead, which is more
> reliable cross-browser than image-based clickable areas.

---

## Step 1 — Add jsPsych 7

Download jsPsych 7 from https://github.com/jspsych/jsPsych/releases/latest
and place these files in a `jspsych/` folder at the repo root:

- `jspsych.js`
- `jspsych.css`
- `plugin-html-keyboard-response.js`
- `plugin-canvas-keyboard-response.js`
- `plugin-call-function.js`

(All are in the `dist/` folder of the downloaded zip.)

---

## Step 2 — Add your stimulus images

Copy your `GrayObjectStimuli/` folder into the repo root.
The images must be named `1.png` through `432.png` (1-indexed).

If your files have a different naming convention, edit `imagePath()` in
`js/experiment.js`:

```js
function imagePath(row) {
  return `GrayObjectStimuli/${row + 1}.png`;   // adjust here
}
```

---

## Step 3 — Adjust timing (optional)

Open `js/experiment.js` and edit the two constants at the very top:

```js
const FIXATION_DURATION_MS = 1500;   // fixation cross (ms)
const IMAGE_DURATION_MS    = 800;    // object presentation (ms)
```

---

## Step 4 — Test locally

Open a terminal in the repo folder and run a local web server:

```bash
# Python 3 (recommended)
python3 -m http.server 8080

# Node.js alternative
npx serve .
```

Then open http://localhost:8080 in Chrome or Firefox.

### What to check

| What to verify | How |
|---|---|
| Fixation cross appears for ~1.5 s | Time it visually |
| Image appears for ~0.8 s at a random orientation | Watch carefully |
| Outer circle cycles through colors; inner circle is static | Self-paced block |
| SPACE ends the delay immediately | Press and check |
| Arrow buttons rotate image (accelerates while held) | Hold each button |
| SPACE on response screen moves to confidence | |
| Wedge widens/narrows correctly | Hold each button |
| SPACE on confidence moves to feedback | |
| Feedback shows original and response images side-by-side | |
| Points are displayed | |
| Block end shows total block points | |
| Second block is COLOR-MATCHING; inner circle is non-zero color | Yoked block |
| Outer circle converges toward inner circle color | |
| Console (F12 → Console tab) shows NO red errors | |

### Check the data in the browser console

Open the browser console (F12) and type:

```js
trialData        // array of trial objects
state            // current experiment state
```

After finishing, the browser will offer a `.json` file download (because
`/save` doesn't exist locally — this is normal).

---

## Step 5 — Create the GitHub repository

1. Go to https://github.com → New repository
2. Name it exactly `selfpacedwm-exp` (must match `exp_id` in `config.json`)
3. Keep it **Public** (Experiment Factory requires this)
4. Do NOT initialise with a README (you already have one)

Then push your local files:

```bash
cd selfpacedwm-exp
git init
git add .
git commit -m "initial experiment"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/selfpacedwm-exp.git
git push -u origin main
```

---

## Step 6 — Enable GitHub Pages (for previewing)

In the repository on GitHub:
Settings → Pages → Source → Deploy from branch → `main` / `root` → Save.

After a minute, your experiment will be live at:
`https://YOUR-USERNAME.github.io/selfpacedwm-exp/`

Share this URL with your IT team so they can confirm the experiment loads
correctly before deploying it inside the Experiment Factory container.

---

## Step 7 — Hand off to IT

Give your IT team:
1. The GitHub repository URL
2. A link to https://expfactory.github.io/generate for container build instructions
3. The `config.json` file (they may need it separately)

They will build a Docker container from the repo and deploy it on their server.
They will then give you a base URL and participant tokens.

---

## Experiment logic summary

| Variable | Where set | Notes |
|---|---|---|
| `FIXATION_DURATION_MS` | top of `experiment.js` | Change here only |
| `IMAGE_DURATION_MS` | top of `experiment.js` | Change here only |
| `N_TOTAL_OBJECTS` | `experiment.js` | 432 |
| `TRIALS_PER_BLOCK` | `experiment.js` | 20 |
| `N_SELF_PACED_BLOCKS` | `experiment.js` | 5 (→ 10 blocks total) |
| Reward parameters | `REWARD` object in `experiment.js` | See `wWM_reward_scheme_final.docx` |

### Block alternation

Blocks alternate self-paced (SP) / yoked (YK):
`SP0 YK0 SP1 YK1 SP2 YK2 SP3 YK3 SP4 YK4`

Each pair shares 40 unique object images (20 per block).
All 432 images are shuffled once at experiment start; no image repeats.

### Yoked block construction

At the start of each yoked block the preceding self-paced block's 20 trials
are split into two halves (trials 0–9 and trials 10–19), each half independently
shuffled. This scrambled order (`sourceOrder`) is used to match each yoked trial
to a self-paced source trial, copying:
- The **starting orientation** (so participants remember the same item with the same target)
- The **delay duration** (the scheduled color-match time)
- The **final outer-circle hue** (target color for the inner circle)

The yoked outer circle starts opposite the target on the color wheel and converges
to the target at exactly `yokedScheduledDelay` seconds.

### Data saved per trial

Every trial records (among others): `conditionType`, `expBlock`, `objectRow`,
`startOri1`, `delayDuration`, `yokedScheduledDelay`, `responseOri`, `angle_diff`,
`confidenceWedgeWidth`, `winningPoints`, `R_base`, `R_conf`.

---

## Troubleshooting

**Images don't load** — check that `GrayObjectStimuli/1.png` exists relative to
`index.html`. File names must be lowercase and 1-indexed.

**Canvas is blank** — open browser console (F12); look for 404 errors on image
files or JS errors.

**Experiment doesn't start** — check that `jspsych/jspsych.js` exists.
Open the Network tab (F12) to see which files are failing to load.

**Delay hue doesn't animate** — this requires a canvas-capable browser.
Test in Chrome or Firefox (not Internet Explorer).
