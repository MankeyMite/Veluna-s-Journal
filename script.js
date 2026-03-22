/* ============================================================
   THE FRAGMENTS OF VELUNA — Main Script
   ============================================================
   
   HOW TO EDIT JOURNAL CONTENT:
   ────────────────────────────
   All page content lives in the PAGES array below. Each entry
   is an object with these fields:
    `,

  },

  // ── ENTRY 2 ────────────────────────────────────────────────
     }
   
   PAGE CAPACITY GUIDE:
   ────────────────────
   At default font size (Caveat 1.3rem, ~21px):
     • ~14–16 lines of handwriting text fit per page
     • ~220–260 words per page (depending on word length)
     • A date + title takes about 2 lines of space
     • Using <p> tags adds small gaps between paragraphs
   
   AUTO-OVERFLOW: If an entry is too long for one page, it
   will automatically split across multiple pages at <p>
   boundaries. The date/title only shows on the first page.
   Just write as much as you want — no need to manually
   split entries!
   
   On mobile the text is slightly smaller so more fits, but
   always test on both screen sizes.
   
   To add a new page: just add another object to the array.
   To remove a page:  delete its object from the array.
   The page counter updates automatically.
   ============================================================ */

// ─── PAGE DATA ───────────────────────────────────────────────
// Edit the content here. The layout code below reads from this
// array and builds each page automatically.

const PAGES = [

  // ── COVER ──────────────────────────────────────────────────
  {
    type: "cover",
    body: `
      <div class="cover-ornament">☽</div>
      <h1 class="cover-title">Veluna's Journal</h1>
      <div class="cover-ornament">— ✦ —</div>
      <p class="cover-subtitle">Searching for answers..</p>
    `
  },

  // ── INTRO PAGE ─────────────────────────────────────────────
  {
    type: "entry",
    body: `
      <p class="margin-note">
        The following pages were discovered inside a water-stained
        leather journal, bound inside a scarf.
        Luckily the pages are still readable.
      </p>
      <br/>
      <p class="faded-ink">
        I found this empty journal by the sea.
Maybe if I begin writing my thoughts down, they will stop circling inside me.
Maybe it will help me understand who I am.
      </p>

      <div class="page-illustration page-illustration--bottom">
        <img src="assets/Images/Hatched egg.png" alt="Hatched egg sketch" draggable="false" />
      </div>
    `
  },

  // ── ENTRY 1 ────────────────────────────────────────────────
  {
    type: "entry",
    date: "Day 1 — The Arrival",
    body: `
      <p>
I do not think eggs are supposed to sound the way mine did.
Before I opened my eyes, I think something was already wrong. When I finally woke, the world had already been moving without me for some time. The shell around me had gone cold.
On one of the broken pieces, there was a number carved so neatly that it could not have belonged to chance:
<p class="emphasis-line">38114</p>
<p>
I still keep that piece with me. I am hoping the number means more than I can read from it alone. 
It looks like it was written in such hurry that it almost resembles letters. There's more, but I can't quite see it in this <span class="reveal-trigger" data-swap-to="assets/Images/egg secret.png" data-notice-text="Something became visible in the glow.." tabindex="0" role="button" aria-haspopup="true" aria-controls="reveal-notice" aria-label="Reveal in glow">glow</span>..
Maybe if I learn more about who I am, it will begin to make sense somehow.
</p>
    `
  },

  // ── ENTRY 2 ────────────────────────────────────────────────
  {
    type: "entry",
    date: "",
    body: `
      <p>The sea beside the city is so blue that when the sun begins to sink, it feels as though the whole world has been dipped in one quiet color. 
      I like to sit there and watch the reflections. Sometimes, when I look too long, I notice something strange about my own.
I do not look like the others.
At first I thought it was only the light, or the water playing tricks on me. 
But no matter where I go, or how carefully I wash, that strange green color remains. The others laugh and say I must have spent too much time hidden among the bushes. 
I laugh with them sometimes, though I do not think that is the reason.
There is something about me that does not feel as though I belong here.</p>
      <p class="braille-clue" role="note" aria-hidden="false">
        <span class="braille-text">⠛⠇⠕⠺</span>
        <span class="sr-only">Braille: glow</span>
      </p>
    `
  },
  
  // ── ENTRY 3 ────────────────────────────────────────────────
  {
    type: "entry",
    date: "Day 2 — The City and the Sea",
    body: `
      <p>The others seem so natural. So certain. Their lives fit around them neatly, as though they were born already knowing what shape they were meant to take. 
      I do not have that feeling. I feel as though I arrived from somewhere else. 
      Somewhere.. stranger. Sometimes, when I close my eyes, I almost remember waking to something black and white before I found myself here. 
      I do not understand that memory, only that it frightens me.
<br/>

    `
  },
  
 // ── ENTRY 4 ────────────────────────────────────────────────
  {
    type: "entry",
    date: "",
    body: `
      <p>
There was a scarf lying beside the shell when I woke.

I have wrapped it around myself ever since. I have chosen to believe it was not left behind by accident. 
Perhaps it belongs to the one who brought me here. Perhaps they will return for it one day, and when they do, I will tell them everything. 
I will show them how carefully I kept it folded, how I tried to stay clean, how I waited. Rather a name than "Not Applicable".
It is a comforting thought.</p>
    `
  },

  // ── ENTRY 5 ────────────────────────────────────────────────
  {
    type: "entry",
    date: "Day 3 — The Moon and a name",
    body: `
      <p>At night I like to hide beneath the bridge. Sometimes I sit in the bushes nearby and watch young trainers testing their <span class="reveal-trigger" data-overlay-src="assets/Images/City.png" tabindex="0" role="button" aria-haspopup="true" aria-controls="city-overlay" aria-label="Reveal city view">strength</span> against that girl they keep talking about. 
      She speaks to her companions so gently. I try not to stare, but I always do.
I wonder what it feels like to be looked at that way.
I wonder what my own name would have been, if someone had stayed long enough to give me one.
<br/>
      
      <p class="braille-clue" role="note" aria-hidden="false">
        <span class="braille-text">⠎⠞⠗⠑⠝⠛⠞⠓</span>
        <span class="sr-only">Braille: strength</span>
      </p>
    `
  },

  // ── ENTRY 6 ────────────────────────────────────────────────
  {
    type: "entry",
    date: "",
    body: `
<p>
The moon was beautiful tonight. I watched it spread silver across the sea, and for the first time, I felt that perhaps a name does not always have to be given. Perhaps sometimes it can be chosen.
So I have chosen one for myself.
<br/>
<p>
From now on, my name is <p class="emphasis-line">Veluna.</p>

    `,
    illustration: "assets/Images/Half moon.png",
    illustrationAlt: "Half moon sketch",
    illustrationCaption: "",
    illustrationPos: "overlay",
    css: "overlay"
  },

  // ── ENTRY 7 ────────────────────────────────────────────────
  {
    type: "entry",
    date: "Day 4 — A fulfilling silence",
    body: `
      <p>Something was crying near the rocks tonight.
At first I thought it was only the wind moving through the hollows, but when I followed the sound, I found a small creature curled tightly against the stone. 
Something inside it was restless, tangled, afraid.
I did not know what to do.
So I sat beside it and listened.
That is when the sound came from me.
Not from my mouth at first, but from somewhere deeper, as though a note had been waiting inside my ribs for the right silence to wake it. Clear, soft, and round, like the ringing of something delicate and silver. The creature lifted its head at once. Its breathing slowed. The trembling eased little by little, until at last it rested.
I do not know how I made that sound.
But afterward, the air around us felt cleaner somehow, as though something heavy had loosened and drifted away.
For a little while, neither of us was afraid.</p>
    `
  },

  // ── ENTRY 8 ────────────────────────────────────────────────
  {
    type: "entry",
    date: "Day 5 — A hidden protector",
    body: `
      <p>There is a part of last night I cannot remember.
I have tried to place it in order, but it breaks apart every time I get close, like wet paper in trembling hands.
I remember footsteps. I remember the feeling of being watched too closely, with the kind of attention that does not feel like kindness. I remember backing away.
Then I remember nothing. Only what came after. 
<br/>
<p>
The earth was torn where I stood. The air smelled sharp, as though something violent had split through it. The one who had come near me was lying several steps away, staring not with anger, but with the wide, hollow fear of someone who has seen something they do not understand.
No one has come close in quite the same way since. At least thirty seconds are gone from my memory.

</p>

     </p>
    `
  },

  // ── ENTRY 9 ────────────────────────────────────────────────
  {
    type: "entry",
    date: "",
    body: `
      <p>
I wish I knew what happened in that missing space. I wish I could say it was not me. 
But somewhere inside myself, when I think too long about it, I feel the shape of an answer I do not want.I think there is something in me that wakes only when I am struck.
Not rage. Not hatred.
Something older than choice.
Something that does not protect me gently.
I am frightened of how completely my body can answer without asking me first.
And more frightened still that, when it was over, part of me felt relieved. </p>

<div class="page-illustration page-illustration--bottom">
        <img src="assets/Images/Torn Earth.png" alt="Torn Earth" draggable="false" />
      </div>
    `
  },

  // ── ENTRY 10 ────────────────────────────────────────────────
  {
    type: "entry",
    date: "Day 6 — The Sound from within",
    body: `
      <p>The sea was restless for most of the evening, but by night it had quieted into something softer. 
      I sat where the stones were still warm from the day and watched the moon scatter itself across the water in pale pieces.
I do not know how long I stayed there.
At some point, a sound left me.
Not a word. Not anything I meant to say. 
Only a low, drifting thing that seemed to carry itself once it had begun, as though it had already existed somewhere inside me and had only been waiting for the dark to loosen it. 
I barely recognized it as mine.
After that, everything seemed to change a little.</p>
    `
  },

  // ── ENTRY 11 ────────────────────────────────────────────────
  {
    type: "entry",
    date: "",
    body: `
      <p>The wind thinned. The small noises in the grass faded. Even the creatures I had heard shuffling nearby grew strangely still. It was not the stillness of fear. It felt softer than that. Like the whole shore had grown tired at once.
I should have been frightened, I think.
Instead, I felt something I have no name for. Not happiness. Not sorrow. Only a kind of hush, as though for a moment the world had agreed to stop asking anything of me.
When I finally stood, the feeling broke apart. The little sounds returned. The tide remembered itself. Whatever had settled over the night went with it.
I have wondered since whether it came from me at all.
But I think it did.
There are parts of me that only seem to wake when no one is watching.</p>
      <p class="morse-clue" role="note" aria-hidden="false">
        <span class="morse-text">-... ..- - - --- -. ...</span>
        <span class="sr-only">Morse: buttons</span>
      </p>
    `
  },

  // ── ENTRY 12 ────────────────────────────────────────────────
  {
    type: "entry",
    date: "Day 7 — I can be like them",
    body: `
      <p>I watched them again today.
Not from very close. I do not think I am brave enough for that yet. From the bushes, through the leaves, I can see quite a lot.
There is a way they move when they are certain they belong. I do not know how to describe it properly. Nothing about it seems forced. They laugh when something is funny. 
They tilt their heads at the right moments. They step forward when spoken to, and back when they should. 

</p>
    `
  },

    // ── ENTRY 12 ────────────────────────────────────────────────
  {
    type: "entry",
    date: "",
    body: `
      <p>I wanted to understand that. So I began watching more carefully. I told myself I was only curious.
But when I was alone later, I found myself doing all of it.
The same tilt of the head. The same small sound. The same careful little pause before a movement that was not really mine.
It frightened me at first, how easily it happened. Not because it hurt, 
but I could imagine that if someone had seen me then, only for a few moments, only from a distance, they might have mistaken me for something ordinary.
</p>
    `
  },

  // ── ENTRY 13 ───────────────────────────────────────────────
  {
    type: "entry",
    date: "",
    body: `
    
      <p>
Something that had grown up in the right place, among the right voices, learning the right way to exist. But the movement never lasts.
The borrowed gestures always begin to slip. The copied sounds seem strange, and then I am only myself again.
<br/>
<p>
I do not know whether I imitate others because I admire them, or because I am trying to build a shape from all the pieces I seem to be missing.
Maybe both.
I only know that sometimes, after watching others long enough, I can almost believe I could become easier to love if I learned the pattern well enough.
That is the part I am most ashamed to write.</p>
<p class="morse-clue" role="note" aria-hidden="false">
        <span class="morse-text">-.-- --- .-. -.. ...</span>
        <span class="sr-only">Morse: words</span>
      </p>
    `
  },

   // ── ENTRY 14 ───────────────────────────────────────────────
  {
    type: "entry",
    date: "Day 8 - Stargazing",
    body: `
      <p>I counted stars tonight.
Not because I thought they would answer me, but because numbers are easier to hold than feelings. Feelings spread too far. Numbers stay where they are placed.
There were six points of light bright enough to keep my eyes on. 
I told myself that if I watched them long enough, perhaps I would understand something about what was placed inside me, and what was left unfinished.
Five of them burned steadily.
One did not.
It was not gone. Only quieter than the others. Dim in a way that felt familiar, as though whatever should have lived there had never fully woken. 
</p>

    `
  },

   // ── ENTRY 15 ───────────────────────────────────────────────
  {
    type: "entry",
    date: "",
    body: `
      <p>I do not know why that thought comforted me, but it did. There is relief in believing that some things were never stolen from us. Only never lit to begin with. The other five seemed almost too clear by comparison. Too sharp. Too complete. It made the dim one feel less like a flaw, and more like a truth.
I think that is what frightens others sometimes. Not that something is broken in me, but that so much of me feels almost too exact, while one part remains strangely absent.
If I am honest, I do not think I was ever meant for hurting.
Maybe that is the quiet star.
Maybe that is why the others shine so bright around it. </p>

      <div class="page-illustration page-illustration--bottom">
        <img src="assets/Images/Veluna stars.png" alt="Veluna stars" draggable="false" />
      </div>
    `
  },

   // ── ENTRY 16 ───────────────────────────────────────────────
  {
    type: "entry",
    date: "Day 9 - New beginnings",
    body: `
      <p>I am running out of pages to write.
This journal helped more than I thought it would. It gave me a place to put the thoughts that were too heavy to carry by myself.
That made a difference.
I still do not know who I am, or why my life began the way it did.
However, I have learned that not understanding everything does not mean there is no way forward.
The world keeps going, even when it is quiet.
So will I.
<br/>
And maybe, someday, I will see that strange flash of black and white again. Maybe it will lead me to where I was always meant to be.
If that day comes, I hope there will be someone kind waiting for me.
And perhaps, at last, a warm and gentle place to rest.
Maybe that is enough to hope for.
For now, it is enough for me to keep going...
<br/>
  <span class="signature-inline">Sincerely, <span class="emphasis">Veluna.</span></span>
    </p>
    `
  },

  // ── FINAL PAGE ─────────────────────────────────────────────
  {
    type: "entry",
    body: `
      <p><br/></p>
      <p>The final page seems impossible to read..</p>
      <p>Has someone attempted to restore their identity?</p>
      <div class="older-text">
        <p>Species name: ?</p>
        <p>Nature: ? Ability: ?</p>
        <p>Level: ? OT Name: ?</p>
        <p>TID: ?  SID: ?  PID: ?</p>
        <p>Move 1: ? Move 2: ? Move 3: ? Move 4: ?</p>
        <p>Origin game: ?  Met Location: ? IVs: ?</p>
      </div>
      <div class="page-illustration page-illustration--bottom">
        <img src="assets/Images/Veluna%20code%20fragments.png" alt="Veluna code fragments" draggable="false" />
      </div>
    `,
    css: "final-page"
  }
];


// ─── ENGINE ──────────────────────────────────────────────────
// You shouldn't need to edit below here unless you're changing
// behaviour or layout logic.

(function () {
  "use strict";

  // ── Element refs ──
  const journal      = document.getElementById("journal");
  const pageCurrent   = document.getElementById("page-current");
  const pageFlip      = document.getElementById("page-flip");
  const btnPrev       = document.getElementById("btn-prev");
  const btnNext       = document.getElementById("btn-next");
  const pageCounter   = document.getElementById("page-counter");
  const hint          = document.getElementById("hint");
  const zoneLeft      = journal.querySelector(".click-zone--left");
  const zoneRight     = journal.querySelector(".click-zone--right");

  // ─────────────────────────────────────────────────────────────
  //  AUDIO VOLUME CONTROLS
  //  Adjust these values (0.0 = silent, 1.0 = full volume)
  //  to fine-tune the balance between all three sounds.
  // ─────────────────────────────────────────────────────────────
  const VOLUME = {
    pageTurn:  0.45,   // page-flip paper rustle sound effect
    river:     0.25,   // ambient river / water loop
    music:     0.18,   // "Silent Echoes of the Depths" background music
    fragment:  0.65,   // click-to-play fragment sound
  };

  // Fade-in durations (milliseconds)
  const FADE_IN_RIVER = 5000;   // river fades in over 5 seconds
  const FADE_IN_MUSIC = 6000;   // music fades in over 6 seconds
  // ─────────────────────────────────────────────────────────────

  // ── Audio file paths ──
  const SND_PAGE_TURN = "sounds/ESM_Explainer_Video_One_Shot_Paper_Foley_Page_Turn_Flip_Next_3.wav";
  const SND_RIVER     = "sounds/RiverRunFlow_S08WR.83.wav";
  const SND_MUSIC     = "sounds/Silent Echoes of the Depths.wav";

  // ── Audio elements ──
  const audioPageTurn = new Audio(SND_PAGE_TURN);
  audioPageTurn.volume = VOLUME.pageTurn;

  // Use WebAudio for a gapless river loop
  let webAudioCtx = null;
  let riverBuffer = null;
  let riverRawBuffer = null; // raw ArrayBuffer fetched at load time
  let riverSource = null;
  let riverGain = null;

  // Pre-fetch the river file as a raw ArrayBuffer (no AudioContext needed)
  async function prefetchRiverBuffer() {
    try {
      const resp = await fetch(SND_RIVER);
      riverRawBuffer = await resp.arrayBuffer();
    } catch (e) {
      console.warn('Failed to prefetch river audio:', e);
    }
  }
  prefetchRiverBuffer();

  // Decode the raw buffer into an AudioBuffer (requires an AudioContext)
  async function decodeRiverBuffer() {
    if (riverBuffer) return; // already decoded
    if (!riverRawBuffer) return;
    if (!webAudioCtx) return;
    try {
      // decodeAudioData consumes the buffer, so copy it first
      const copy = riverRawBuffer.slice(0);
      riverBuffer = await webAudioCtx.decodeAudioData(copy);
    } catch (e) {
      console.warn('Failed to decode river audio:', e);
    }
  }

  const audioMusic = new Audio(SND_MUSIC);
  audioMusic.loop = true;
  audioMusic.volume = 0; // starts silent, fades in

  // ── Play page-turn sound ──
  function playPageTurn() {
    audioPageTurn.currentTime = 0;
    audioPageTurn.play().catch(() => {});
  }

  // ── Smooth volume fade-in ──
  function fadeIn(audioEl, targetVolume, durationMs) {
    const steps = 60;
    const stepTime = durationMs / steps;
    let step = 0;
    audioEl.volume = 0;
    audioEl.play().catch(() => {});

    const interval = setInterval(() => {
      step++;
      const t = step / steps;
      audioEl.volume = targetVolume * (t * t);
      if (step >= steps) {
        audioEl.volume = targetVolume;
        clearInterval(interval);
      }
    }, stepTime);
  }

  // ── Start ambient audio on user interaction ──
  // Mobile browsers block autoplay until a user gesture (click/touchend).
  // We retry on every gesture until both sources are confirmed playing,
  // because the buffer may not be ready on the first tap.
  let riverPlaying = false;
  let musicPlaying = false;

  function startAmbientAudio() {
    // ── Ensure AudioContext exists and is running ──
    if (!webAudioCtx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      webAudioCtx = new AC();
    }
    // Resume suspended context (required on iOS/mobile)
    if (webAudioCtx.state === 'suspended') {
      webAudioCtx.resume().catch(() => {});
    }

    // ── River (WebAudio BufferSource loop) ──
    if (!riverPlaying) {
      const tryRiver = () => {
        if (riverPlaying) return;
        if (!riverBuffer) return; // not decoded yet
        try {
          if (riverSource) { try { riverSource.stop(); } catch (e) {} }
          riverSource = webAudioCtx.createBufferSource();
          riverSource.buffer = riverBuffer;
          riverSource.loop = true;
          riverGain = webAudioCtx.createGain();
          riverGain.gain.value = 0.0001;
          riverSource.connect(riverGain);
          riverGain.connect(webAudioCtx.destination);
          riverSource.start(0);
          riverPlaying = true;

          // Fade gain up
          const now = webAudioCtx.currentTime;
          riverGain.gain.cancelScheduledValues(now);
          riverGain.gain.setValueAtTime(0.0001, now);
          riverGain.gain.exponentialRampToValueAtTime(
            Math.max(VOLUME.river, 0.0001), now + FADE_IN_RIVER / 1000
          );
        } catch (err) {
          console.warn('River playback error', err);
        }
      };

      if (riverBuffer) {
        tryRiver();
      } else {
        // Decode (inside user gesture context) then play
        decodeRiverBuffer().then(tryRiver);
      }
    }

    // ── Music (HTML Audio element) ──
    if (!musicPlaying) {
      // On mobile the first .play() inside a gesture "unlocks" the element
      audioMusic.volume = 0;
      const playPromise = audioMusic.play();
      if (playPromise && playPromise.then) {
        playPromise.then(() => {
          if (!musicPlaying) {
            musicPlaying = true;
            // Now fade in properly
            let step = 0;
            const steps = 60;
            const stepTime = FADE_IN_MUSIC / steps;
            const interval = setInterval(() => {
              step++;
              const t = step / steps;
              audioMusic.volume = VOLUME.music * (t * t);
              if (step >= steps) {
                audioMusic.volume = VOLUME.music;
                clearInterval(interval);
              }
            }, stepTime);
          }
        }).catch(() => {}); // silently fail, will retry on next gesture
      }
    }

    // Once both are playing, remove gesture listeners
    if (riverPlaying && musicPlaying) {
      removeAudioListeners();
    }
  }

  // Hook into user gestures to unlock audio
  // Use "click" and "touchend" (iOS requires touchend, not touchstart)
  const startAudioEvents = ["click", "keydown", "touchend"];
  startAudioEvents.forEach(evt => {
    document.addEventListener(evt, startAmbientAudio, { once: false });
  });

  function removeAudioListeners() {
    startAudioEvents.forEach(evt => {
      document.removeEventListener(evt, startAmbientAudio);
    });
  }

  let currentIndex = 0;
  let isAnimating  = false;

  // ── Compiled pages array ──
  // PAGES entries that overflow a single page are automatically
  // split into multiple pages at <p> boundaries. This array is
  // built at init time by paginateEntries() below.
  let compiledPages = [];
  let totalPages = 0;

  // Overlay fragment sound (played when overlay moon is clicked)
  const SND_FRAGMENT = "sounds/Fragments of Veluna.mp3";
  const audioFragment = new Audio(SND_FRAGMENT);
  audioFragment.preload = 'auto';
  audioFragment.volume = VOLUME.fragment;

  // City view overlay (clickable word reveal — shows a temporary image over the page)
  const CITY_OVERLAY_ID = 'city-overlay';
  let cityOverlayTimeout = null;

  function ensureCityOverlay() {
    let el = document.getElementById(CITY_OVERLAY_ID);
    if (el) return el;
    el = document.createElement('div');
    el.id = CITY_OVERLAY_ID;
    el.className = 'city-overlay';
    el.setAttribute('aria-hidden', 'true');
    const img = document.createElement('img');
    img.id = 'city-overlay-img';
    img.alt = 'City view';
    img.draggable = false;
    el.appendChild(img);
    journal.appendChild(el);
    // allow clicking overlay to dismiss early
    el.addEventListener('click', () => hideCityOverlay());
    return el;
  }

  function showCityOverlay(src, duration = 3000, playSound = true) {
    startAmbientAudio();
    const el = ensureCityOverlay();
    const img = el.querySelector('img');
    if (src) img.src = src;
    // Blur the page content behind the overlay (page-wrapper only)
    try {
      const wrapper = journal.querySelector('.page-wrapper');
      if (wrapper) wrapper.classList.add('overlay-blur');
    } catch (e) { /* ignore */ }

    el.setAttribute('aria-hidden', 'false');
    // Force a layout then show so the fade/scale transition runs reliably
    void el.offsetHeight;
    el.classList.add('visible');
    // optionally play the fragment clip
    try { if (playSound) { audioFragment.currentTime = 0; audioFragment.play().catch(()=>{}); } } catch (e) {}
    if (cityOverlayTimeout) clearTimeout(cityOverlayTimeout);
    cityOverlayTimeout = setTimeout(() => hideCityOverlay(), duration);
  }

  function hideCityOverlay() {
    const el = document.getElementById(CITY_OVERLAY_ID);
    if (!el) return;
    // Start fade-out
    el.classList.remove('visible');
    el.setAttribute('aria-hidden', 'true');
    const img = el.querySelector('img');
    // Remove the blur after the overlay fade completes
    const fadeMs = 920; // matches CSS transition (~0.9s)
    setTimeout(() => {
      try {
        const wrapper = journal.querySelector('.page-wrapper');
        if (wrapper) wrapper.classList.remove('overlay-blur');
      } catch (e) { /* ignore */ }
      if (img) img.src = '';
    }, fadeMs);
    if (cityOverlayTimeout) { clearTimeout(cityOverlayTimeout); cityOverlayTimeout = null; }
  }

  // Reveal notice and egg-swap helpers
  const REVEAL_NOTICE_ID = 'reveal-notice';
  let revealNoticeTimeout = null;

  function ensureRevealNotice() {
    let el = document.getElementById(REVEAL_NOTICE_ID);
    if (el) return el;
    el = document.createElement('div');
    el.id = REVEAL_NOTICE_ID;
    el.className = 'reveal-notice';
    el.setAttribute('aria-hidden', 'true');
    journal.appendChild(el);
    el.addEventListener('click', () => hideRevealNotice());
    return el;
  }

  function showRevealNotice(text, duration = 3000) {
    const el = ensureRevealNotice();
    el.textContent = text;
    // Force layout then animate
    void el.offsetHeight;
    el.setAttribute('aria-hidden', 'false');
    el.classList.add('visible');
    if (revealNoticeTimeout) clearTimeout(revealNoticeTimeout);
    revealNoticeTimeout = setTimeout(() => hideRevealNotice(), duration);
  }

  function hideRevealNotice() {
    const el = document.getElementById(REVEAL_NOTICE_ID);
    if (!el) return;
    el.classList.remove('visible');
    el.setAttribute('aria-hidden', 'true');
    const fadeMs = 920;
    setTimeout(() => { try { if (el) el.textContent = ''; } catch (e) {} }, fadeMs);
    if (revealNoticeTimeout) { clearTimeout(revealNoticeTimeout); revealNoticeTimeout = null; }
  }

  function swapEggImage(newSrc) {
    try {
      // Update any live <img> elements currently in the DOM
      const imgs = document.querySelectorAll('img');
      imgs.forEach(img => {
        const srcAttr = img.getAttribute('src') || img.src || '';
        if (!srcAttr) return;
        let srcNorm = srcAttr;
        try { srcNorm = decodeURIComponent(srcNorm); } catch (e) {}
        if (srcNorm.match(/Hatched(?:%20|\s)egg\.png/i) || srcNorm.toLowerCase().includes('hatched egg')) {
          img.src = newSrc;
        }
      });

      // Update the source in the PAGES data so the change persists when navigating
      try {
        const needle = /assets\/Images\/Hatched(?:%20|\s)egg\.png/gi;
        for (let i = 0; i < PAGES.length; i++) {
          const page = PAGES[i];
          if (page && page.body && typeof page.body === 'string' && needle.test(page.body)) {
            page.body = page.body.replace(needle, newSrc);
          }
          // Also update explicit illustration fields if present
          if (page && page.illustration && typeof page.illustration === 'string') {
            if (page.illustration.match(/Hatched(?:%20|\s)egg\.png/i) || page.illustration.toLowerCase().includes('hatched egg')) {
              page.illustration = newSrc;
            }
          }
        }
      } catch (e) { /* ignore PAGES update errors */ }

      // Rebuild compiledPages and re-render current page so user sees the change when navigating
      try {
        paginateEntries();
        showPage(currentIndex);
      } catch (e) { /* ignore pagination errors */ }

    } catch (e) { /* ignore */ }
  }

  // Image zoom overlay (click illustration to enlarge)
  const IMAGE_ZOOM_ID = 'image-zoom-overlay';
  let imageZoomKeyHandler = null;

  function ensureImageZoomOverlay() {
    let el = document.getElementById(IMAGE_ZOOM_ID);
    if (el) return el;
    el = document.createElement('div');
    el.id = IMAGE_ZOOM_ID;
    el.className = 'image-zoom-overlay';
    el.setAttribute('aria-hidden', 'true');
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'true');
    el.tabIndex = -1;
    const img = document.createElement('img');
    img.id = 'image-zoom-img';
    img.className = 'zoom-img';
    img.alt = '';
    img.draggable = false;
    el.appendChild(img);
    journal.appendChild(el);
    // clicking anywhere hides the zoom view
    el.addEventListener('click', () => hideImageZoom());
    return el;
  }

  function showImageZoom(src, alt = '') {
    const el = ensureImageZoomOverlay();
    const img = el.querySelector('img');
    if (src) img.src = src;
    img.alt = alt || '';
    try {
      const wrapper = journal.querySelector('.page-wrapper');
      if (wrapper) wrapper.classList.add('overlay-blur');
    } catch (e) { /* ignore */ }

    el.setAttribute('aria-hidden', 'false');
    // Force layout then show
    void el.offsetHeight;
    el.classList.add('visible');
    el.focus();

    // ESC to close
    imageZoomKeyHandler = function (ev) {
      if (ev.key === 'Escape' || ev.key === 'Esc') {
        hideImageZoom();
      }
    };
    document.addEventListener('keydown', imageZoomKeyHandler);
  }

  function hideImageZoom() {
    const el = document.getElementById(IMAGE_ZOOM_ID);
    if (!el) return;
    el.classList.remove('visible');
    el.setAttribute('aria-hidden', 'true');
    const img = el.querySelector('img');
    const fadeMs = 300;
    setTimeout(() => {
      try {
        const wrapper = journal.querySelector('.page-wrapper');
        if (wrapper) wrapper.classList.remove('overlay-blur');
      } catch (e) { /* ignore */ }
      if (img) img.src = '';
    }, fadeMs);
    if (imageZoomKeyHandler) { document.removeEventListener('keydown', imageZoomKeyHandler); imageZoomKeyHandler = null; }
  }

  // ── Build page HTML from data ──
  function renderPageHTML(pageData) {
    if (!pageData) return "";

    let html = "";

    if (pageData.type === "cover") {
      return pageData.body;
    }

    if (pageData.date) {
      html += `<div class="entry-date">${pageData.date}</div>`;
    }
    if (pageData.title) {
      html += `<div class="entry-title">${pageData.title}</div>`;
    }
    if (pageData.body) {
      html += `<div class="entry-body">${pageData.body}</div>`;
    }

    // Illustration: small inline sketch/painting
    // Set "illustration" in page data to an image path (relative to project root)
    // Set "illustrationAlt" for accessibility text
    // Set "illustrationPos" to "bottom" (default), "top", or "center"
    if (pageData.illustration) {
      const pos = pageData.illustrationPos || "bottom";
      html += `<div class="page-illustration page-illustration--${pos}">`;
      html += `<img src="${pageData.illustration}" alt="${pageData.illustrationAlt || 'Journal sketch'}" draggable="false" />`;
      if (pageData.illustrationCaption) {
        html += `<span class="illustration-caption">${pageData.illustrationCaption}</span>`;
      }
      html += `</div>`;
    }

    return html;
  }

  // ── Apply cover class if appropriate ──
  function applyPageType(pageEl, pageData) {
    // Clear page-level type classes and add when appropriate
    pageEl.classList.remove("page--cover", "page--final");
    if (pageData && pageData.type === "cover") {
      pageEl.classList.add("page--cover");
    }
    if (pageData && pageData.type === "final") {
      pageEl.classList.add("page--final");
    }
    // Extra CSS class
    if (pageData && pageData.css) {
      pageEl.querySelector(".page__inner").className = "page__inner";
      pageEl.querySelector(".page__content").className = "page__content " + pageData.css;
    } else {
      if (pageEl.querySelector(".page__content")) {
        pageEl.querySelector(".page__content").className = "page__content";
      }
    }
  }

  // ── Set a page element's content ──
  function setPageContent(pageEl, index) {
    const data = compiledPages[index];
    const content = pageEl.querySelector(".page__content");
    if (content && data) {
      content.innerHTML = renderPageHTML(data);
    } else if (content) {
      content.innerHTML = "";
    }
    applyPageType(pageEl, data);

    // Attach overlay illustration click hook (plays the provided fragment MP3)
    try {
      const overlayImgs = pageEl.querySelectorAll('.page-illustration--overlay img');
      overlayImgs.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', (e) => {
          // start ambient audio if necessary (satisfy autoplay policies)
          startAmbientAudio();
          // play the provided fragment MP3
          try {
            audioFragment.currentTime = 0;
            audioFragment.play().catch(() => {});
          } catch (err) { /* ignore playback errors */ }
        });
      });
    } catch (e) { /* ignore */ }
    
    // Attach zoom-to-fullscreen handlers for any page illustrations (click or keyboard)
    try {
      const illus = pageEl.querySelectorAll('.page-illustration img');
      illus.forEach(img => {
        img.style.cursor = 'zoom-in';
        if (!img.hasAttribute('tabindex')) img.setAttribute('tabindex', '0');
        const openZoom = (ev) => { if (ev) ev.stopPropagation(); showImageZoom(img.src, img.alt || ''); };
        img.addEventListener('click', openZoom);
        img.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
            e.preventDefault(); openZoom(e);
          }
        });
      });
    } catch (e) { /* ignore */ }
    
    // Attach reveal-trigger handlers (clickable inline words that reveal a temporary overlay
    // or perform a swap action). If a trigger includes `data-swap-to` it will swap images;
    // otherwise it behaves like the city overlay (silent by default).
    try {
      const triggers = pageEl.querySelectorAll('.reveal-trigger');
      triggers.forEach(tr => {
        tr.addEventListener('click', (e) => {
          e.preventDefault(); e.stopPropagation();
          const swapTo = tr.dataset.swapTo || tr.getAttribute('data-swap-to');
          if (swapTo) {
            // perform a DOM image swap (e.g. replace the hatched egg with the secret egg)
            swapEggImage(swapTo);
            const notice = tr.dataset.noticeText || tr.getAttribute('data-notice-text') || 'Something became visible in the glow..';
            showRevealNotice(notice, 3500);
          } else {
            // Default: show the city overlay (silent by default for inline reveals)
            startAmbientAudio();
            const src = tr.dataset.overlaySrc || tr.getAttribute('data-overlay-src') || 'assets/Images/City.png';
            showCityOverlay(src, 3500, false);
          }
        });
        tr.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
            e.preventDefault(); tr.click();
          }
        });
      });
    } catch (e) { /* ignore */ }
  }

  // ── Update navigation state ──
  function updateNav() {
    btnPrev.disabled = currentIndex === 0;
    btnNext.disabled = currentIndex === totalPages - 1;
    pageCounter.textContent = `${currentIndex + 1} / ${totalPages}`;
  }

  // ── Show page immediately (no animation) ──
  function showPage(index) {
    currentIndex = index;
    setPageContent(pageCurrent, index);
    updateNav();
  }

  // ── Animate to next page ──
  // Strategy: Set the DESTINATION content on pageCurrent first (it sits
  // underneath), then lay the flip page on top showing the OLD content.
  // The flip page animates away to reveal the already-correct pageCurrent
  // beneath. No visibility toggle = no blink.
  function goNext() {
    if (isAnimating || currentIndex >= totalPages - 1) return;
    isAnimating = true;

    const nextIndex = currentIndex + 1;

    // Flip page shows the OLD (current) content — sits on top
    setPageContent(pageFlip, currentIndex);

    // Current page gets the NEW (destination) content underneath
    setPageContent(pageCurrent, nextIndex);

    // Show the flip overlay
    pageFlip.style.display = "block";

    // Force a layout so the flip page renders before animating
    void pageFlip.offsetHeight;

    // Play page-turn sound
    playPageTurn();

    // Start animation — flip page peels away to reveal new content
    pageFlip.classList.add("flipping-forward");

    const onEnd = () => {
      pageFlip.classList.remove("flipping-forward");
      pageFlip.style.display = "none";

      currentIndex = nextIndex;
      updateNav();

      isAnimating = false;
    };

    pageFlip.addEventListener("animationend", onEnd, { once: true });
  }

  // ── Animate to previous page ──
  // Same idea in reverse: put the destination (previous) content on
  // pageCurrent, animate the flip page from folded-away to covering it,
  // then swap pageCurrent to the previous content and hide the flip.
  function goPrev() {
    if (isAnimating || currentIndex <= 0) return;
    isAnimating = true;

    const prevIndex = currentIndex - 1;

    // Flip page will animate FROM folded (-180deg) TO flat (0deg)
    // showing the previous page content as it unfolds over current.
    setPageContent(pageFlip, prevIndex);

    // Show the flip overlay (starts at -180deg, invisible due to backface)
    pageFlip.style.display = "block";
    void pageFlip.offsetHeight;

    // Play page-turn sound
    playPageTurn();

    // Start reverse animation
    pageFlip.classList.add("flipping-backward");

    const onEnd = () => {
      pageFlip.classList.remove("flipping-backward");
      pageFlip.style.display = "none";

      // Now that flip covers the view, set current to match
      currentIndex = prevIndex;
      setPageContent(pageCurrent, currentIndex);
      updateNav();

      isAnimating = false;
    };

    pageFlip.addEventListener("animationend", onEnd, { once: true });
  }

  // ── Event: Buttons ──
  btnNext.addEventListener("click", goNext);
  btnPrev.addEventListener("click", goPrev);

  // ── Event: Click zones ──
  zoneRight.addEventListener("click", goNext);
  zoneLeft.addEventListener("click", goPrev);

  // Keyboard support for click zones
  zoneRight.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); goNext(); }
  });
  zoneLeft.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); goPrev(); }
  });

  // ── Event: Keyboard arrows ──
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      goNext();
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      goPrev();
    }
  });

  // ── Event: Touch swipe ──
  let touchStartX = 0;
  let touchStartY = 0;

  journal.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].clientX;
    touchStartY = e.changedTouches[0].clientY;
  }, { passive: true });

  journal.addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;

    // Only trigger if horizontal swipe is dominant and long enough
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      if (dx < 0) {
        goNext();   // swipe left → next page
      } else {
        goPrev();   // swipe right → previous page
      }
    }
  }, { passive: true });

  // ── Hide hint after first interaction ──
  let hintDismissed = false;
  function dismissHint() {
    if (!hintDismissed) {
      hintDismissed = true;
      hint.classList.add("hidden");
    }
  }
  journal.addEventListener("click", dismissHint);
  document.addEventListener("keydown", dismissHint);

  // Auto-hide hint after 6 seconds
  setTimeout(dismissHint, 6000);

  // ── Hide flip page initially ──
  pageFlip.style.display = "none";

  // ── Auto-pagination: split long entries across pages ──
  // Creates a hidden measuring container that matches the real
  // page dimensions, renders each entry into it, and splits
  // at <p> / block-element boundaries if the content overflows.
  function paginateEntries() {
    // Create an off-screen measuring page
    const measureEl = document.createElement("div");
    measureEl.className = "page page--current";
    measureEl.style.cssText =
      "position:absolute; visibility:hidden; pointer-events:none; z-index:-1;";
    measureEl.innerHTML =
      '<div class="page__inner"><div class="page__content"><div class="entry-date" id="_measure_date"></div><div class="entry-body" id="_measure_body"></div></div></div>';
    journal.appendChild(measureEl);

    const contentEl  = measureEl.querySelector(".page__content");
    const dateEl     = measureEl.querySelector("#_measure_date");
    const bodyEl     = measureEl.querySelector("#_measure_body");

    const result = [];

    for (let i = 0; i < PAGES.length; i++) {
      const page = PAGES[i];

      // Cover and final pages are never split
      if (page.type === "cover" || page.type === "final") {
        result.push(page);
        continue;
      }

      // Render the full entry to measure it
      dateEl.textContent = "";
      bodyEl.innerHTML = "";

      if (page.date)  dateEl.textContent = page.date;
      else            dateEl.style.display = "none";

      if (page.body)  bodyEl.innerHTML = page.body;

      // Check if it fits
      const containerH = contentEl.clientHeight;
      const contentH   = contentEl.scrollHeight;

      dateEl.style.display = ""; // reset

      if (contentH <= containerH + 2) {
        // Fits on one page — keep as-is
        result.push(page);
        continue;
      }

      // ── Content overflows: split at block-element boundaries ──
      // Collect all child elements of the body
      const bodyChildren = Array.from(bodyEl.children);
      if (bodyChildren.length <= 1) {
        // Single block element — can't split further, keep as-is
        result.push(page);
        continue;
      }

      // Build chunks of children that fit within a page
      let chunks = [];
      let currentChunkHTML = "";
      let isFirstChunk = true;

      for (let c = 0; c < bodyChildren.length; c++) {
        const childHTML = bodyChildren[c].outerHTML;
        const testHTML  = currentChunkHTML + childHTML;

        // Measure with this child added
        bodyEl.innerHTML = testHTML;
        if (isFirstChunk && page.date) {
          dateEl.textContent = page.date;
          dateEl.style.display = "";
        } else {
          dateEl.style.display = "none";
        }

        const testH = contentEl.scrollHeight;

        if (testH > containerH + 2 && currentChunkHTML !== "") {
          // This child pushes it over — save current chunk, start new
          chunks.push({ html: currentChunkHTML, isFirst: isFirstChunk });
          currentChunkHTML = childHTML;
          isFirstChunk = false;
        } else {
          currentChunkHTML = testHTML;
        }
      }
      // Push the last chunk
      if (currentChunkHTML) {
        chunks.push({ html: currentChunkHTML, isFirst: isFirstChunk });
      }

      // Convert chunks into page objects
      for (let k = 0; k < chunks.length; k++) {
        const chunk = chunks[k];
        const newPage = {
          type: page.type,
          body: chunk.html,
          css:  page.css || "",
        };
        // Only the first chunk gets the date/title
        if (chunk.isFirst) {
          if (page.date)  newPage.date  = page.date;
          if (page.title) newPage.title = page.title;
        }
        // Only the last chunk gets the illustration
        if (k === chunks.length - 1 && page.illustration) {
          newPage.illustration        = page.illustration;
          newPage.illustrationAlt     = page.illustrationAlt;
          newPage.illustrationCaption = page.illustrationCaption;
          newPage.illustrationPos     = page.illustrationPos;
        }
        result.push(newPage);
      }

      // Reset measure elements
      dateEl.style.display = "";
    }

    // Clean up
    journal.removeChild(measureEl);

    compiledPages = result;
    totalPages = compiledPages.length;
  }

  // ── Run pagination then initialize ──
  paginateEntries();
  showPage(0);

  // Debug helper: expose compiled pages summary and quick navigation
  try {
    window.velunaDebug = {
      list: function () {
        return compiledPages.map((p, i) => ({ index: i, type: p.type, date: p.date || null, title: p.title || null }));
      },
      open: function (i) {
        if (typeof i === 'number' && i >= 0 && i < compiledPages.length) {
          showPage(i);
        }
      }
    };
  } catch (e) { /* ignore */ }

})();
