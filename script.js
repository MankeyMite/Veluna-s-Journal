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
        The name Veluna was carved into the leather.
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
Before I opened my eyes, I think something was already wrong. I remember the shell trembling at strange times, as though it feared what it carried. When I finally woke, the world had already been moving without me for some time. The shell around me had gone cold.
On one of the broken pieces, there was a number carved so neatly that it could not have belonged to chance:
<p class="emphasis-line">38114.</p>
<br/>
<br/>
<p>
I still keep that piece with me. Sometimes I wonder if that was all I was ever meant to be. Not held. Not named. Only counted. I am hoping the number means more than I can read from it alone. Maybe if I learn more about who I am, it will begin to make sense somehow.
</p>

      
    `
  },
  // ── ENTRY 2 ────────────────────────────────────────────────
  {
    type: "entry",
    date: "Day 2 — The City and the Sea",
    body: `
      <p>The others seem so natural. So certain. Their lives fit around them neatly, as though they were born already knowing what shape they were meant to take. I do not have that feeling. I feel as though I arrived from somewhere else. Somewhere colder, stranger. Sometimes, when I close my eyes, I almost remember waking to something black and white before I found myself here. I do not understand that memory, only that it frightens me.
<br/>
<br/>
<p>
There was a scarf lying beside the shell when I woke.

I have wrapped it around myself ever since. I do not know who it belonged to, but I have decided it must matter. I have chosen to believe it was not left behind by accident. Perhaps it belongs to the one who brought me here. Perhaps they will return for it one day, and when they do, I will tell them everything. I will show them how carefully I kept it folded, how I tried to stay clean, how I waited.
It is a comforting thought.</p>
    `
  },

  // ── ENTRY 3 ────────────────────────────────────────────────
  {
    type: "entry",
    date: "Day 3 — The Moon and a name",
    body: `
      <p>At night I like to hide beneath the bridge. Sometimes I sit in the bushes nearby and watch young trainers testing their strength against the girl who stands there. She speaks to her companions so gently. She looks at them as though they belong beside her. I try not to stare, but I always do.
I wonder what it feels like to be looked at that way.
I wonder what my own name would have been, if someone had stayed long enough to give me one.
<br/>
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

  // ── ENTRY 4 ────────────────────────────────────────────────
  {
    type: "entry",
    date: "Day 4 — A fulfilling silence",
    body: `
      <p>Something was crying near the rocks tonight.
At first I thought it was only the wind moving through the hollows, but when I followed the sound, I found a small creature curled tightly against the stone, trembling in a way that seemed deeper than cold. It was not just its body that hurt. Something inside it was restless, tangled, afraid.
I did not know what to do.
So I sat beside it and listened.
That is when the sound came from me.
Not from my mouth at first, but from somewhere deeper, as though a note had been waiting inside my ribs for the right silence to wake it. Clear, soft, and round, like the ringing of something delicate and silver. The creature lifted its head at once. Its breathing slowed. The trembling eased little by little, until at last it rested.
I do not know how I made that sound.
But afterward, the air around us felt cleaner somehow, as though something heavy had loosened and drifted away.
For a little while, neither of us was afraid.</p>
    `
  },

  // ── ENTRY 5 ────────────────────────────────────────────────
  {
    type: "entry",
    date: "Day 5 — A hidden protector",
    body: `
      <p>There is a part of last night I cannot remember.
I have tried to place it in order, but it breaks apart every time I get close, like wet paper in trembling hands. I remember the path. 
I remember footsteps. I remember the feeling of being watched too closely, with the kind of attention that does not feel like kindness. I remember backing away.
Then I remember nothing. Only what came after. 
<br/>
<br/>
<p>
The earth was torn where I stood. The air smelled sharp, as though something violent had split through it. The one who had come near me was lying several steps away, staring not with anger, but with the wide, hollow fear of someone who has seen something they do not understand.
No one has come close in quite the same way since.
I wish I knew what happened in that missing space. I wish I could say it was not me. But somewhere inside myself, when I think too long about it, I feel the shape of an answer I do not want.
</p>

     </p>
    `
  },

  // ── ENTRY 6 ────────────────────────────────────────────────
  {
    type: "entry",
    date: "",
    body: `
      <p>
I think there is something in me that wakes only when I am struck.
Not rage. Not hatred.
Something older than choice.
Something that does not protect me gently.
I am frightened of how completely my body can answer without asking me first.
And more frightened still that, when it was over, part of me felt relieved. </p>
    `
  },

  // ── ENTRY 7 ────────────────────────────────────────────────
  {
    type: "entry",
    date: "Day 6 — The Sound from within",
    body: `
      <p>The sea was restless for most of the evening, but by night it had quieted into something softer. I sat where the stones were still warm from the day and watched the moon scatter itself across the water in pale pieces.
I do not know how long I stayed there.
Long enough that my thoughts began to feel heavier than they should have. Long enough that the silence stopped feeling empty and started feeling like something I could lean against. There are nights when the loneliness sits beside me so gently that I almost mistake it for peace.
Tonight was one of them.
At some point, a sound left me.
Not a word. Not anything I meant to say. Only a low, drifting thing that seemed to carry itself once it had begun, as though it had already existed somewhere inside me and had only been waiting for the dark to loosen it. I barely recognized it as mine.
After that, everything seemed to change a little.</p>
    `
  },

  // ── ENTRY 8 ────────────────────────────────────────────────
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
    `
  },

  // ── ENTRY 9 ────────────────────────────────────────────────
  {
    type: "entry",
    date: "Day 7 — I can be like them",
    body: `
      <p>I watched them again today.
Not from very close. I do not think I am brave enough for that yet. But from the bushes near the path, I can see quite a lot.
There is a way the others move when they are certain they belong. I do not know how to describe it properly. Nothing about it seems forced. They laugh when something is funny. 
They tilt their heads at the right moments. They step forward when spoken to, and back when they should. 
Even their silence seems natural, as though they have always known what shape to make of themselves in the company of others.
I wanted to understand that.
So I began watching more carefully.
The way one of them lifted a hand before speaking. The little change in another’s voice when they were trying to sound brave. The pause before laughter. 
The way one creature stamped the ground when it wanted to appear bigger than it felt. I told myself I was only curious.
But when I was alone later, I found myself doing all of it.
The same tilt of the head. The same small sound. The same careful little pause before a movement that was not really mine.
It frightened me at first, how easily it happened.
</p>
    `
  },

  // ── ENTRY 10 ───────────────────────────────────────────────
  {
    type: "entry",
    date: "",
    body: `
      <p>Not because it hurt, but because it almost worked.
For a few moments, I could imagine that if someone had seen me then, only for a few moments, only from a distance, they might have mistaken me for something ordinary. Something social. 
Something that had grown up in the right place, among the right voices, learning the right way to exist. But the feeling never lasts.
The borrowed gestures always begin to slip. The copied sounds seem strange, and then I am only myself again, or whatever “myself” is meant to mean.
<br/>
<br/>
<p>
I do not know whether I copy others because I admire them, or because I am trying to build a shape from all the pieces I seem to be missing.
Maybe both.
I only know that sometimes, after watching others long enough, I can almost believe I could become easier to love if I learned the pattern well enough.
That is the part I am most ashamed to write.
Not that I imitate them.
But that, deep down, I still hope it might work.</p>
    `
  },

   // ── ENTRY 11 ───────────────────────────────────────────────
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
I do not know why that thought comforted me, but it did. There is relief in believing that some things were never stolen from us. Only never lit to begin with.
The other five seemed almost too clear by comparison. Too sharp. Too complete. It made the dim one feel less like a flaw, and more like a truth.
I think that is what frightens others sometimes. Not that something is broken in me, but that so much of me feels almost too exact, while one part remains strangely absent.
</p>

    `
  },

   // ── ENTRY 12 ───────────────────────────────────────────────
  {
    type: "entry",
    date: "",
    body: `
      <p>If I am honest, I do not think I was ever meant for hurting.
Maybe that is the quiet star.
Maybe that is why the others shine so hard around it. </p>

      <div class="page-illustration page-illustration--bottom">
        <img src="assets/Images/Veluna stars.png" alt="Veluna stars" draggable="false" />
      </div>
    `
  },

   // ── ENTRY 13 ───────────────────────────────────────────────
  {
    type: "entry",
    date: "Day 9 - New beginnings",
    body: `
      <p>I am running out of pages to write.
This journal helped more than I thought it would. It did not fix me, and it did not answer every question I have. But it gave me a place to put the thoughts that were too heavy to carry by myself.
That made a difference.
I still do not know exactly what I am, or why my life began the way it did. Some days that still hurts.
But I have learned that not understanding everything does not mean there is no way forward.
The sea keeps moving.
The nights pass.
The world keeps going, even when it is quiet.
So will I.
<br/>
And maybe, someday, I will see that strange flash of black and white again. Maybe it will not feel cold next time. Maybe it will lead me somewhere I was always meant to be.
If that day comes, I hope I will not be alone when it does.
I hope there will be someone kind waiting for me.
And perhaps, at last, a warm and gentle place to rest.
Maybe that is enough to hope for.
For now, it is enough for me to keep going...
<br/>
  <span class="signature-inline">Sincerely,&nbsp;<span class="name">Veluna</span></span>
    </p>
    `
  },

  // ── FINAL PAGE ─────────────────────────────────────────────
  {
    type: "final",
    body: `
      <p><br/></p>
      <p>The final page seems impossible to read..</p>
      <p>It seems like someone has attempted to restore their identity?</p>
      <p>Species name: ?</p> <p>Origin game: ?</p>
      <p>Ability: ?</p> <p>OT Name: ?</p> <p>Nature: ?</p>
      <p>Level: ?</p>
      <p>Language: ?</p>
      <p>TID: ?</p>
      <p>SID: ?</p>
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

  const audioRiver = new Audio(SND_RIVER);
  audioRiver.loop = true;
  audioRiver.volume = 0; // starts silent, fades in

  const audioMusic = new Audio(SND_MUSIC);
  audioMusic.loop = true;
  audioMusic.volume = 0; // starts silent, fades in

  // ── Play page-turn sound ──
  function playPageTurn() {
    // Reset to start so rapid flips overlap cleanly
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
      // Ease-in curve for natural feel
      const t = step / steps;
      audioEl.volume = targetVolume * (t * t);
      if (step >= steps) {
        audioEl.volume = targetVolume;
        clearInterval(interval);
      }
    }, stepTime);
  }

  // ── Start ambient audio on first user interaction ──
  // Browsers block autoplay until user interacts with the page.
  let audioStarted = false;
  function startAmbientAudio() {
    if (audioStarted) return;
    audioStarted = true;
    fadeIn(audioRiver, VOLUME.river, FADE_IN_RIVER);
    fadeIn(audioMusic, VOLUME.music, FADE_IN_MUSIC);
  }

  // Hook into any user gesture to unlock audio
  const startAudioEvents = ["click", "keydown", "touchstart"];
  startAudioEvents.forEach(evt => {
    document.addEventListener(evt, startAmbientAudio, { once: false });
  });
  // Clean up listeners once started
  function removeAudioListeners() {
    if (audioStarted) {
      startAudioEvents.forEach(evt => {
        document.removeEventListener(evt, startAmbientAudio);
      });
    }
  }
  // Check periodically to clean up
  const cleanupCheck = setInterval(() => {
    if (audioStarted) { removeAudioListeners(); clearInterval(cleanupCheck); }
  }, 2000);

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

})();
