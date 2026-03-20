/* ============================================================
   THE FRAGMENTS OF VELUNA — Main Script
   ============================================================
   
   HOW TO EDIT JOURNAL CONTENT:
   ────────────────────────────
   All page content lives in the PAGES array below. Each entry
   is an object with these fields:
   
     {
       type:  "cover" | "entry" | "final"
       date:  (optional) date string shown at top of page
       title: (optional) entry title / heading
       body:  HTML string — the main text content
       css:   (optional) extra CSS class for the page
     }
   
   PAGE CAPACITY GUIDE:
   ────────────────────
   At default font size (Caveat 1.3rem, ~21px):
     • ~14–16 lines of handwriting text fit per page
     • ~220–260 words per page (depending on word length)
     • A date + title takes about 2 lines of space
     • Using <p> tags adds small gaps between paragraphs
   
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
      <p class="cover-subtitle">Found among the stones at Drifthollow Point</p>
    `
  },

  // ── INTRO PAGE ─────────────────────────────────────────────
  {
    type: "entry",
    body: `
      <p class="margin-note">
        The following pages were discovered inside a water-stained
        leather journal, bound with twine and sealed with wax.
        The cover bore no name. Only a crescent moon, pressed
        into the leather with something sharp.
      </p>
      <br/>
      <p class="faded-ink">
        Several pages are missing. What remains is transcribed here,
        in the order they were found. Some ink has bled beyond
        reading. We have done our best.
      </p>
    `
  },

  // ── ENTRY 1 ────────────────────────────────────────────────
  {
    type: "entry",
    date: "Day 1 — The Arrival",
    body: `
      <p>The boat left me at the old dock just before sundown.
      I could see the keeper's cottage up the hill, its windows
      dark. The wind carried salt and something else — something
      that smelled like old flowers left too long in still water.</p>

      <p>I told myself this was just a research posting. Catalogue
      the local wildlife. Document the tides. File reports that
      no one would ever read.</p>

      <p>But the way the ferryman looked at me when I stepped
      off — like I was already a ghost — I cannot forget it.</p>

      <p class="faded-ink">I will not be afraid of a quiet place.</p>
    `
  },

  // ── ENTRY 2 ────────────────────────────────────────────────
  {
    type: "entry",
    date: "Day 4 — The Tidepools",
    body: `
      <p>Spent the morning mapping the tidepools along the
      northern shelf. The creatures here are remarkably gentle.
      Small round things, pink and pale, that seem to hum when
      the light catches them. I've never seen anything quite
      like them in any field guide.</p>

      <p>One followed me back along the rocks. It sat at the
      edge of the water and watched me climb the path. When I
      turned around, it was gone.</p>

      <p class="emphasis-line">I swear it was smiling.</p>

      <p>I need to sketch them properly tomorrow. My notes
      feel insufficient. Some things resist description.</p>
    `
  },

  // ── ENTRY 3 ────────────────────────────────────────────────
  {
    type: "entry",
    date: "Day 9 — The Singing",
    body: `
      <p>I heard it again last night — a low, melodic sound
      drifting up from the shore. Not wind. Not waves. Something
      with breath. Something with intention.</p>

      <p>I followed it to the edge of the cliff and looked down.
      The moonlight was painting everything silver. The sea was
      impossibly still, like glass laid over darkness.</p>

      <p>And there, on the rocks below, a shape. Pale. Round.
      Luminous. It was one of them, the tidepool creatures, but
      far larger than any I had seen. It sat perfectly still,
      facing the moon.</p>

      <p class="faded-ink">It was singing to the moon. I'm sure of it.</p>
    `
  },

  // ── ENTRY 4 ────────────────────────────────────────────────
  {
    type: "entry",
    date: "Day 15 — Names",
    body: `
      <p>I have started giving them names. I know a researcher
      shouldn't, but they come to the same spots each morning,
      and each one is different — different markings, different
      temperaments, different songs.</p>

      <p>The small pale one I call Muina. She always waits near
      the third pool, the deep one shaped like an eye. She lets
      me sit beside her. She tilts her head when I speak.</p>

      <p>The large one — the singer from the cliff — I have not
      named. I feel like she already has a name. I just haven't
      learned it yet.</p>

      <p class="margin-note">Drew a sketch here — see next page.
      [page missing]</p>
    `
  },

  // ── ENTRY 5 ────────────────────────────────────────────────
  {
    type: "entry",
    date: "Day 22 — The Eggs",
    body: `
      <p>Found something extraordinary today. In the deepest
      tidepool, tucked beneath an overhang of rock and kelp,
      there are eggs. Dozens of them. Soft, translucent, faintly
      glowing with a warmth I could feel through my fingertips
      without touching them.</p>

      <p>The creatures gathered around me as I knelt there.
      Not threatening. Watchful. Patient.</p>

      <p>They were showing me.</p>

      <p class="emphasis-line">They wanted me to see.</p>

      <p class="faded-ink">I think they trust me. I don't know
      what I've done to deserve it.</p>
    `
  },

  // ── ENTRY 6 ────────────────────────────────────────────────
  {
    type: "entry",
    date: "Day 30 — The Storm",
    body: `
      <p>A terrible storm came in from the west. Three days of
      black sky and howling wind. The cottage shook. Tiles flew
      from the roof. I huddled by the fire and thought of home,
      wherever that is now.</p>

      <p>When it passed, I ran to the shore.</p>

      <p>The tidepools were shattered. The rocks rearranged by
      the force of the waves. Kelp and debris everywhere.</p>

      <p>I searched for hours. I found Muina first, sheltered in
      a crevice, trembling. She pressed against my hand.</p>

      <p class="faded-ink">The eggs were gone. Every single one.
      Swept out to sea, or buried, or broken. I cannot tell.
      The large one sat at the water's edge, silent.</p>
    `
  },

  // ── ENTRY 7 ────────────────────────────────────────────────
  {
    type: "entry",
    date: "Day 31 — Silence",
    body: `
      <p>No singing last night. No humming in the pools at dawn.
      No pale shapes on the rocks at dusk.</p>

      <p>Just the waves. Just the wind.</p>

      <p>I walked the entire shoreline twice. I called for them.
      I know how that sounds. A researcher, on a cliff, calling
      out to creatures that have no language I can name.</p>

      <p>But I called anyway.</p>

      <p class="emphasis-line">No one answered.</p>

      <p class="faded-ink">The silence here is not peaceful.
      It is the silence of something missing.</p>
    `
  },

  // ── ENTRY 8 ────────────────────────────────────────────────
  {
    type: "entry",
    date: "Day 38 — A Small Return",
    body: `
      <p>Muina came back. Just her, alone, sitting at the third
      pool at sunrise. She looked thinner. Her glow was faint.</p>

      <p>I sat with her all morning. I didn't write. I didn't
      catalogue. I just sat, and let the waves speak for us both.</p>

      <p>When the tide came in, she slipped into the water and
      drifted out, slowly, like a lantern set upon a dark river.</p>

      <p>She looked back once.</p>

      <p class="margin-note">I think she was saying goodbye.
      I think they all were, in their own way, and I was too
      busy taking notes to hear it.</p>
    `
  },

  // ── ENTRY 9 ────────────────────────────────────────────────
  {
    type: "entry",
    date: "Day 45 — The Moon Garden",
    body: `
      <p>I found it by accident. A path I hadn't taken before,
      overgrown with sea grass, leading down to a sheltered cove
      on the far side of the island.</p>

      <p>And there, in the shallow water, glowing beneath the
      surface — life. New life. Tiny luminous shapes, pulsing
      gently. The eggs had not been destroyed. The current had
      carried them here, to this hidden place, this sheltered
      garden the storm could not reach.</p>

      <p class="emphasis-line">They survived. They survived.</p>

      <p>I sat on the rocks and cried. I am not ashamed to write
      that. Some things are too beautiful for composure.</p>
    `
  },

  // ── ENTRY 10 ───────────────────────────────────────────────
  {
    type: "entry",
    date: "Day 52 — The Last Morning",
    body: `
      <p>The ferry returns tomorrow. My posting is over. My
      reports are filed — careful, clinical, incomplete. I left
      out everything that mattered.</p>

      <p>Tonight I will go to the cove one last time. I will sit
      among the lights beneath the water and listen for the
      singing. If it comes, I will try to remember every note.</p>

      <p>If it doesn't, I will listen to the silence, and know
      that it means the same thing.</p>

      <p class="faded-ink">Some questions don't need answers.
      Some mysteries are gentler left whole.</p>
    `
  },

  // ── FINAL PAGE ─────────────────────────────────────────────
  {
    type: "final",
    body: `
      <p><br/></p>
      <p>The remaining pages of this journal are blank.</p>

      <p>The keeper's cottage was found empty. The dock was in
      good repair. A single sketch — of a crescent moon reflected
      in a tidepool — was pinned to the wall above the writing
      desk, unsigned.</p>

      <p>No further records of the author have been found.</p>

      <p>The creatures described in these pages do not match any
      catalogued species.</p>

      <p><br/></p>
      <p class="emphasis-line" style="text-align:center;">
        But the cove still glows on moonlit nights.
      </p>
      <p style="text-align:center;" class="faded-ink">
        — End of Fragments —
      </p>
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
  const totalPages = PAGES.length;

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
    pageEl.classList.remove("page--cover");
    if (pageData && pageData.type === "cover") {
      pageEl.classList.add("page--cover");
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
    const data = PAGES[index];
    const content = pageEl.querySelector(".page__content");
    if (content && data) {
      content.innerHTML = renderPageHTML(data);
    } else if (content) {
      content.innerHTML = "";
    }
    applyPageType(pageEl, data);
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

  // ── Initialize ──
  showPage(0);

})();
