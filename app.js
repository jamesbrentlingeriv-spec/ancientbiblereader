// Bible Data Structure
const BIBLE_DATA = {
  ot: [
    { id: "gen", name: "Genesis", chapters: 50, hebrew: "בראשית" },
    { id: "exo", name: "Exodus", chapters: 40, hebrew: "שמות" },
    { id: "lev", name: "Leviticus", chapters: 27, hebrew: "ויקרא" },
    { id: "num", name: "Numbers", chapters: 36, hebrew: "במדבר" },
    { id: "deu", name: "Deuteronomy", chapters: 34, hebrew: "דברים" },
    { id: "jos", name: "Joshua", chapters: 24, hebrew: "יהושע" },
    { id: "jdg", name: "Judges", chapters: 21, hebrew: "שופטים" },
    { id: "rut", name: "Ruth", chapters: 4, hebrew: "רות" },
    { id: "1sa", name: "1 Samuel", chapters: 31, hebrew: "שמואל א" },
    { id: "2sa", name: "2 Samuel", chapters: 24, hebrew: "שמואל ב" },
    { id: "1ki", name: "1 Kings", chapters: 22, hebrew: "מלכים א" },
    { id: "2ki", name: "2 Kings", chapters: 25, hebrew: "מלכים ב" },
    { id: "1ch", name: "1 Chronicles", chapters: 29, hebrew: "דברי הימים א" },
    { id: "2ch", name: "2 Chronicles", chapters: 36, hebrew: "דברי הימים ב" },
    { id: "ezr", name: "Ezra", chapters: 10, hebrew: "עזרא" },
    { id: "neh", name: "Nehemiah", chapters: 13, hebrew: "נחמיה" },
    { id: "est", name: "Esther", chapters: 10, hebrew: "אסתר" },
    { id: "job", name: "Job", chapters: 42, hebrew: "איוב" },
    { id: "psa", name: "Psalms", chapters: 150, hebrew: "תהילים" },
    { id: "pro", name: "Proverbs", chapters: 31, hebrew: "משלי" },
    { id: "ecc", name: "Ecclesiastes", chapters: 12, hebrew: "קהלת" },
    { id: "sos", name: "Song of Solomon", chapters: 8, hebrew: "שיר השירים" },
    { id: "isa", name: "Isaiah", chapters: 66, hebrew: "ישעיהו" },
    { id: "jer", name: "Jeremiah", chapters: 52, hebrew: "ירמיהו" },
    { id: "lam", name: "Lamentations", chapters: 5, hebrew: "איכה" },
    { id: "eze", name: "Ezekiel", chapters: 48, hebrew: "יחזקאל" },
    { id: "dan", name: "Daniel", chapters: 12, hebrew: "דניאל" },
    { id: "hos", name: "Hosea", chapters: 14, hebrew: "הושע" },
    { id: "joe", name: "Joel", chapters: 3, hebrew: "יואל" },
    { id: "amo", name: "Amos", chapters: 9, hebrew: "עמוס" },
    { id: "oba", name: "Obadiah", chapters: 1, hebrew: "עובדיה" },
    { id: "jon", name: "Jonah", chapters: 4, hebrew: "יונה" },
    { id: "mic", name: "Micah", chapters: 7, hebrew: "מיכה" },
    { id: "nah", name: "Nahum", chapters: 3, hebrew: "נחום" },
    { id: "hab", name: "Habakkuk", chapters: 3, hebrew: "חבקוק" },
    { id: "zep", name: "Zephaniah", chapters: 3, hebrew: "צפניה" },
    { id: "hag", name: "Haggai", chapters: 2, hebrew: "חגי" },
    { id: "zec", name: "Zechariah", chapters: 14, hebrew: "זכריה" },
    { id: "mal", name: "Malachi", chapters: 4, hebrew: "מלאכי" },
  ],
  nt: [
    { id: "mat", name: "Matthew", chapters: 28, greek: "ΚΑΤΑ ΜΑΤΘΑΙΟΝ" },
    { id: "mar", name: "Mark", chapters: 16, greek: "ΚΑΤΑ ΜΑΡΚΟΝ" },
    { id: "luk", name: "Luke", chapters: 24, greek: "ΚΑΤΑ ΛΟΥΚΑΝ" },
    { id: "joh", name: "John", chapters: 21, greek: "ΚΑΤΑ ΙΩΑΝΝΗΝ" },
    { id: "act", name: "Acts", chapters: 28, greek: "ΠΡΑΞΕΙΣ" },
    { id: "rom", name: "Romans", chapters: 16, greek: "ΠΡΟΣ ΡΩΜΑΙΟΥΣ" },
    {
      id: "1co",
      name: "1 Corinthians",
      chapters: 16,
      greek: "ΠΡΟΣ ΚΟΡΙΝΘΙΟΥΣ Α",
    },
    {
      id: "2co",
      name: "2 Corinthians",
      chapters: 13,
      greek: "ΠΡΟΣ ΚΟΡΙΝΘΙΟΥΣ Β",
    },
    { id: "gal", name: "Galatians", chapters: 6, greek: "ΠΡΟΣ ΓΑΛΑΤΑΣ" },
    { id: "eph", name: "Ephesians", chapters: 6, greek: "ΠΡΟΣ ΕΦΕΣΙΟΥΣ" },
    { id: "phi", name: "Philippians", chapters: 4, greek: "ΠΡΟΣ ΦΙΛΙΠΠΗΣΙΟΥΣ" },
    { id: "col", name: "Colossians", chapters: 4, greek: "ΠΡΟΣ ΚΟΛΟΣΣΑΕΙΣ" },
    {
      id: "1th",
      name: "1 Thessalonians",
      chapters: 5,
      greek: "ΠΡΟΣ ΘΕΣΣΑΛΟΝΙΚΕΙΣ Α",
    },
    {
      id: "2th",
      name: "2 Thessalonians",
      chapters: 3,
      greek: "ΠΡΟΣ ΘΕΣΣΑΛΟΝΙΚΕΙΣ Β",
    },
    { id: "1ti", name: "1 Timothy", chapters: 6, greek: "ΠΡΟΣ ΤΙΜΟΘΕΟΝ Α" },
    { id: "2ti", name: "2 Timothy", chapters: 4, greek: "ΠΡΟΣ ΤΙΜΟΘΕΟΝ Β" },
    { id: "tit", name: "Titus", chapters: 3, greek: "ΠΡΟΣ ΤΙΤΟΝ" },
    { id: "phm", name: "Philemon", chapters: 1, greek: "ΠΡΟΣ ΦΙΛΗΜΟΝΑ" },
    { id: "heb", name: "Hebrews", chapters: 13, greek: "ΠΡΟΣ ΕΒΡΑΙΟΥΣ" },
    { id: "jam", name: "James", chapters: 5, greek: "ΙΑΚΩΒΟΥ" },
    { id: "1pe", name: "1 Peter", chapters: 5, greek: "ΠΕΤΡΟΥ Α" },
    { id: "2pe", name: "2 Peter", chapters: 3, greek: "ΠΕΤΡΟΥ Β" },
    { id: "1jo", name: "1 John", chapters: 5, greek: "ΙΩΑΝΝΟΥ Α" },
    { id: "2jo", name: "2 John", chapters: 1, greek: "ΙΩΑΝΝΟΥ Β" },
    { id: "3jo", name: "3 John", chapters: 1, greek: "ΙΩΑΝΝΟΥ Γ" },
    { id: "jde", name: "Jude", chapters: 1, greek: "ΙΟΥΔΑ" },
    { id: "rev", name: "Revelation", chapters: 22, greek: "ΑΠΟΚΑΛΥΨΙΣ" },
  ],
};

// App State
const state = {
  currentView: "home",
  currentTestament: "ot",
  currentBook: null,
  currentChapter: 1,
  installPrompt: null,
  offline: !navigator.onLine,
  theme: localStorage.getItem("theme") || "light",
};

// Main App Object
const app = {
  init() {
    this.applyTheme();
    this.setupEventListeners();
    this.renderBooks("ot");
    this.checkOfflineStatus();

    // Check for URL hash navigation
    this.handleHashChange();
    window.addEventListener("hashchange", () => this.handleHashChange());
  },

  setupEventListeners() {
    // Install prompt
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      state.installPrompt = e;
      setTimeout(() => {
        document
          .getElementById("install-prompt")
          .classList.remove("translate-y-full");
      }, 2000);
    });

    // Online/Offline detection
    window.addEventListener("online", () => this.setOfflineStatus(false));
    window.addEventListener("offline", () => this.setOfflineStatus(true));
  },

  checkOfflineStatus() {
    this.setOfflineStatus(!navigator.onLine);
  },

  setOfflineStatus(isOffline) {
    state.offline = isOffline;
    const indicator = document.getElementById("offline-indicator");
    if (isOffline) {
      indicator.classList.remove("translate-y-20");
    } else {
      indicator.classList.add("translate-y-20");
    }
  },

  handleHashChange() {
    const hash = window.location.hash.slice(1);
    if (hash) {
      const parts = hash.split("/");
      if (parts.length === 2) {
        const [bookId, chapter] = parts;
        const book = [...BIBLE_DATA.ot, ...BIBLE_DATA.nt].find(
          (b) => b.id === bookId,
        );
        if (book) {
          this.loadBook(book, parseInt(chapter));
        }
      }
    }
  },

  showTestament(testament) {
    state.currentTestament = testament;

    // Update tabs
    document.getElementById("tab-ot").className =
      testament === "ot"
        ? "px-6 py-2 rounded-full text-sm font-display font-semibold transition-all bg-ancient-gold text-ancient-dark shadow-md"
        : "px-6 py-2 rounded-full text-sm font-display font-semibold transition-all text-ancient-ink/60 dark:text-parchment-400 hover:text-ancient-ink";

    document.getElementById("tab-nt").className =
      testament === "nt"
        ? "px-6 py-2 rounded-full text-sm font-display font-semibold transition-all bg-ancient-gold text-ancient-dark shadow-md"
        : "px-6 py-2 rounded-full text-sm font-display font-semibold transition-all text-ancient-ink/60 dark:text-parchment-400 hover:text-ancient-ink";

    this.renderBooks(testament);
  },

  renderBooks(testament) {
    const container = document.getElementById("books-container");
    const books = BIBLE_DATA[testament];

    container.innerHTML = books
      .map(
        (book) => `
            <button onclick="app.selectBook('${book.id}')" 
                    class="book-card p-4 rounded-xl text-left group relative overflow-hidden">
                <div class="relative z-10">
                    <div class="font-display font-bold text-lg mb-1 text-ancient-ink dark:text-parchment-100 group-hover:text-ancient-gold transition-colors">
                        ${book.name}
                    </div>
                    <div class="text-xs text-ancient-ink/50 dark:text-parchment-400 font-english italic">
                        ${testament === "ot" ? book.hebrew : book.greek}
                    </div>
                    <div class="mt-2 text-xs text-ancient-gold font-semibold">
                        ${book.chapters} chapters
                    </div>
                </div>
                <div class="absolute inset-0 bg-gradient-to-br from-ancient-gold/0 to-ancient-gold/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
        `,
      )
      .join("");
  },

  selectBook(bookId) {
    const book = [...BIBLE_DATA.ot, ...BIBLE_DATA.nt].find(
      (b) => b.id === bookId,
    );
    if (!book) return;

    state.currentBook = book;

    // Switch to chapters view
    document.getElementById("home-view").classList.add("hidden");
    document.getElementById("chapters-view").classList.remove("hidden");
    document.getElementById("reader-view").classList.add("hidden");

    document.getElementById("chapters-book-title").textContent = book.name;

    // Render chapter buttons
    const grid = document.getElementById("chapters-grid");
    grid.innerHTML = Array.from({ length: book.chapters }, (_, i) => i + 1)
      .map(
        (num) => `
            <button onclick="app.loadChapter(${num})" 
                    class="chapter-btn w-full aspect-square rounded-lg font-display font-bold text-ancient-ink dark:text-parchment-100 hover:text-ancient-dark dark:hover:text-ancient-dark flex items-center justify-center">
                ${num}
            </button>
        `,
      )
      .join("");

    state.currentView = "chapters";
  },

  loadChapter(chapter) {
    if (!state.currentBook) return;
    this.loadBook(state.currentBook, chapter);
  },

  async loadBook(book, chapter) {
    state.currentBook = book;
    state.currentChapter = chapter;

    // Update URL
    window.location.hash = `${book.id}/${chapter}`;

    // Switch to reader view
    document.getElementById("home-view").classList.add("hidden");
    document.getElementById("chapters-view").classList.add("hidden");
    document.getElementById("reader-view").classList.remove("hidden");

    // Update displays
    const isOT = BIBLE_DATA.ot.includes(book);
    document.getElementById("ancient-language-indicator").textContent = isOT
      ? "HEBREW TEXT"
      : "GREEK TEXT";
    document.getElementById("current-book-display").textContent =
      `${book.name} ${chapter}`;
    document.getElementById("reader-chapter-indicator").textContent =
      `${book.name} ${chapter}`;
    document.getElementById("ancient-title").textContent = isOT
      ? book.hebrew
      : book.greek;
    document.getElementById("ancient-lang-name").textContent = isOT
      ? "Hebrew"
      : "Greek";

    // Clear previous content
    document.getElementById("ancient-content").innerHTML = "";
    document.getElementById("kjv-content").innerHTML = "";

    // Show loading states
    document.getElementById("ancient-loading").classList.remove("hidden");
    document.getElementById("kjv-loading").classList.remove("hidden");
    document.getElementById("ancient-error").classList.add("hidden");

    // Load ancient text (from local files)
    this.loadAncientText(book.id, chapter, isOT);

    // Load KJV (from API)
    this.loadKJV(book.name, chapter);

    state.currentView = "reader";

    // Re-initialize icons
    lucide.createIcons();
  },

  async loadAncientText(bookId, chapter, isOT) {
    try {
      const lang = isOT ? "hebrew" : "greek";
      const response = await fetch(`data/${lang}/${bookId}/${chapter}.json`);

      if (!response.ok) throw new Error("File not found");

      const data = await response.json();

      document.getElementById("ancient-loading").classList.add("hidden");

      const content = document.getElementById("ancient-content");
      content.innerHTML = data.verses
        .map(
          (v) => `
                <div class="mb-4 ${isOT ? "hebrew-text" : "greek-text"} hover:bg-ancient-gold/5 p-2 rounded transition-colors cursor-pointer" onclick="app.highlightVerse(${v.verse})">
                    <span class="verse-num">${v.verse}</span>
                    ${v.text}
                </div>
            `,
        )
        .join("");
    } catch (error) {
      console.log("Ancient text not found, trying alternate format...");
      // Try alternate format: data/hebrew/genesis_1.json
      try {
        const lang = isOT ? "hebrew" : "greek";
        const bookName = state.currentBook.name
          .toLowerCase()
          .replace(/\s+/g, "_");
        const response = await fetch(
          `data/${lang}/${bookName}_${chapter}.json`,
        );

        if (!response.ok) throw new Error("File not found");

        const data = await response.json();
        document.getElementById("ancient-loading").classList.add("hidden");

        const content = document.getElementById("ancient-content");
        content.innerHTML = data.verses
          .map(
            (v) => `
                    <div class="mb-4 ${isOT ? "hebrew-text" : "greek-text"} hover:bg-ancient-gold/5 p-2 rounded transition-colors cursor-pointer" onclick="app.highlightVerse(${v.verse})">
                        <span class="verse-num">${v.verse}</span>
                        ${v.text}
                    </div>
                `,
          )
          .join("");
      } catch (err) {
        document.getElementById("ancient-loading").classList.add("hidden");
        document.getElementById("ancient-error").classList.remove("hidden");
        document.getElementById("ancient-content").innerHTML = `
                    <div class="p-8 text-center border-2 border-dashed border-ancient-gold/30 rounded-xl">
                        <i data-lucide="file-x" class="w-12 h-12 mx-auto text-ancient-gold/50 mb-4"></i>
                        <p class="text-ancient-ink/50 italic">
                            Place your ${isOT ? "Hebrew" : "Greek"} JSON files in:<br>
                            <code class="text-ancient-gold bg-ancient-dark/10 px-2 py-1 rounded text-sm">data/${lang}/${bookId}/${chapter}.json</code>
                        </p>
                        <p class="text-xs mt-4 text-ancient-ink/40">
                            Expected format: {"verses": [{"verse": 1, "text": "..."}]}
                        </p>
                    </div>
                `;
        lucide.createIcons();
      }
    }
  },

  async loadKJV(bookName, chapter) {
    // Map book names to IDs for local file lookup
    const bookIdMap = {
      Genesis: "gen",
      Exodus: "exo",
      Leviticus: "lev",
      Numbers: "num",
      Deuteronomy: "deu",
      Joshua: "jos",
      Judges: "jdg",
      Ruth: "rut",
      "1 Samuel": "1sa",
      "2 Samuel": "2sa",
      "1 Kings": "1ki",
      "2 Kings": "2ki",
      "1 Chronicles": "1ch",
      "2 Chronicles": "2ch",
      Ezra: "ezr",
      Nehemiah: "neh",
      Esther: "est",
      Job: "job",
      Psalms: "psa",
      Proverbs: "pro",
      Ecclesiastes: "ecc",
      "Song of Solomon": "sos",
      Isaiah: "isa",
      Jeremiah: "jer",
      Lamentations: "lam",
      Ezekiel: "eze",
      Daniel: "dan",
      Hosea: "hos",
      Joel: "joe",
      Amos: "amo",
      Obadiah: "oba",
      Jonah: "jon",
      Micah: "mic",
      Nahum: "nah",
      Habakkuk: "hab",
      Zephaniah: "zep",
      Haggai: "hag",
      Zechariah: "zec",
      Malachi: "mal",
      Matthew: "mat",
      Mark: "mar",
      Luke: "luk",
      John: "joh",
      Acts: "act",
      Romans: "rom",
      "1 Corinthians": "1co",
      "2 Corinthians": "2co",
      Galatians: "gal",
      Ephesians: "eph",
      Philippians: "phi",
      Colossians: "col",
      "1 Thessalonians": "1th",
      "2 Thessalonians": "2th",
      "1 Timothy": "1ti",
      "2 Timothy": "2ti",
      Titus: "tit",
      Philemon: "phm",
      Hebrews: "heb",
      James: "jam",
      "1 Peter": "1pe",
      "2 Peter": "2pe",
      "1 John": "1jo",
      "2 John": "2jo",
      "3 John": "3jo",
      Jude: "jde",
      Revelation: "rev",
    };

    const bookId = bookIdMap[bookName];

    // Try to load from local file first
    try {
      if (bookId) {
        const localResponse = await fetch(`data/kjv/${bookId}/${chapter}.json`);
        if (localResponse.ok) {
          const data = await localResponse.json();
          document.getElementById("kjv-loading").classList.add("hidden");
          const content = document.getElementById("kjv-content");
          content.innerHTML = data.verses
            .map(
              (v) => `
                        <div class="mb-4 english-text hover:bg-ancient-gold/5 p-2 rounded transition-colors cursor-pointer" id="kjv-verse-${v.verse}" onclick="app.highlightVerse(${v.verse})">
                            <span class="verse-num">${v.verse}</span>
                            ${v.text}
                        </div>
                    `,
            )
            .join("");
          return;
        }
      }
    } catch (e) {
      // Local file not found, continue to API
      console.log("Local KJV not found, trying API...");
    }

    // Fall back to API
    try {
      const encodedBook = encodeURIComponent(bookName);
      const response = await fetch(
        `https://bible-api.com/${encodedBook}+${chapter}?translation=kjv`,
      );

      if (!response.ok) throw new Error("API Error");

      const data = await response.json();

      document.getElementById("kjv-loading").classList.add("hidden");

      const content = document.getElementById("kjv-content");
      content.innerHTML = data.verses
        .map(
          (v) => `
                <div class="mb-4 english-text hover:bg-ancient-gold/5 p-2 rounded transition-colors cursor-pointer" id="kjv-verse-${v.verse}" onclick="app.highlightVerse(${v.verse})">
                    <span class="verse-num">${v.verse}</span>
                    ${v.text}
                </div>
            `,
        )
        .join("");

      // Cache for offline use
      if ("caches" in window) {
        const cache = await caches.open("bible-cache");
        cache.put(
          `https://bible-api.com/${encodedBook}+${chapter}?translation=kjv`,
          response.clone(),
        );
      }
    } catch (error) {
      document.getElementById("kjv-loading").classList.add("hidden");
      document.getElementById("kjv-content").innerHTML = `
                <div class="p-8 text-center text-red-600 dark:text-red-400">
                    <i data-lucide="wifi-off" class="w-12 h-12 mx-auto mb-4 opacity-50"></i>
                    <p>Unable to load KJV text. Check connection or try again.</p>
                </div>
            `;
      lucide.createIcons();
    }
  },

  highlightVerse(verseNum) {
    // Remove previous highlights
    document.querySelectorAll(".bg-ancient-gold/20").forEach((el) => {
      el.classList.remove(
        "bg-ancient-gold/20",
        "border-l-4",
        "border-ancient-gold",
      );
    });

    // Add highlight to both columns
    const ancientVerses = document.getElementById("ancient-content").children;
    const kjvVerses = document.getElementById("kjv-content").children;

    if (ancientVerses[verseNum - 1]) {
      ancientVerses[verseNum - 1].classList.add(
        "bg-ancient-gold/20",
        "border-l-4",
        "border-ancient-gold",
      );
    }
    if (kjvVerses[verseNum - 1]) {
      kjvVerses[verseNum - 1].classList.add(
        "bg-ancient-gold/20",
        "border-l-4",
        "border-ancient-gold",
      );
    }
  },

  nextChapter() {
    if (!state.currentBook) return;
    if (state.currentChapter < state.currentBook.chapters) {
      this.loadBook(state.currentBook, state.currentChapter + 1);
    } else {
      // Go to next book
      this.nextBook();
    }
  },

  prevChapter() {
    if (!state.currentBook) return;
    if (state.currentChapter > 1) {
      this.loadBook(state.currentBook, state.currentChapter - 1);
    } else {
      // Go to previous book
      this.prevBook();
    }
  },

  nextBook() {
    const allBooks = [...BIBLE_DATA.ot, ...BIBLE_DATA.nt];
    const currentIndex = allBooks.findIndex(
      (b) => b.id === state.currentBook.id,
    );
    if (currentIndex < allBooks.length - 1) {
      this.loadBook(allBooks[currentIndex + 1], 1);
    }
  },

  prevBook() {
    const allBooks = [...BIBLE_DATA.ot, ...BIBLE_DATA.nt];
    const currentIndex = allBooks.findIndex(
      (b) => b.id === state.currentBook.id,
    );
    if (currentIndex > 0) {
      this.loadBook(allBooks[currentIndex - 1], 1);
    }
  },

  goHome() {
    window.location.hash = "";
    document.getElementById("home-view").classList.remove("hidden");
    document.getElementById("chapters-view").classList.add("hidden");
    document.getElementById("reader-view").classList.add("hidden");
    document.getElementById("current-book-display").textContent =
      "Select a Book";
    state.currentView = "home";
    state.currentBook = null;
  },

  toggleTheme() {
    state.theme = state.theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", state.theme);
    this.applyTheme();
  },

  applyTheme() {
    if (state.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  },

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  },

  dismissInstall() {
    document.getElementById("install-prompt").classList.add("translate-y-full");
  },

  async installApp() {
    if (state.installPrompt) {
      state.installPrompt.prompt();
      const { outcome } = await state.installPrompt.userChoice;
      if (outcome === "accepted") {
        this.dismissInstall();
      }
    }
  },
};

// Initialize app when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  app.init();
});
