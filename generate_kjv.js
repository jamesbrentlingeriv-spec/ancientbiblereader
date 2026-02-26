/**
 * KJV Bible Data Generator (Node.js Version)
 * ==========================================
 * This script downloads the King James Version Bible from a free API
 * and saves it as JSON files in the data/kjv/ directory.
 *
 * Usage:
 *     node generate_kjv.js
 *
 * Requirements:
 *     npm install axios
 */

const fs = require("fs");
const path = require("path");
const axios = require("axios");

// Bible book IDs and their chapter counts
const BIBLE_BOOKS = {
  // Old Testament (39 books)
  gen: { name: "Genesis", chapters: 50 },
  exo: { name: "Exodus", chapters: 40 },
  lev: { name: "Leviticus", chapters: 27 },
  num: { name: "Numbers", chapters: 36 },
  deu: { name: "Deuteronomy", chapters: 34 },
  jos: { name: "Joshua", chapters: 24 },
  jdg: { name: "Judges", chapters: 21 },
  rut: { name: "Ruth", chapters: 4 },
  "1sa": { name: "1 Samuel", chapters: 31 },
  "2sa": { name: "2 Samuel", chapters: 24 },
  "1ki": { name: "1 Kings", chapters: 22 },
  "2ki": { name: "2 Kings", chapters: 25 },
  "1ch": { name: "1 Chronicles", chapters: 29 },
  "2ch": { name: "2 Chronicles", chapters: 36 },
  ezr: { name: "Ezra", chapters: 10 },
  neh: { name: "Nehemiah", chapters: 13 },
  est: { name: "Esther", chapters: 10 },
  job: { name: "Job", chapters: 42 },
  psa: { name: "Psalms", chapters: 150 },
  pro: { name: "Proverbs", chapters: 31 },
  ecc: { name: "Ecclesiastes", chapters: 12 },
  sos: { name: "Song of Solomon", chapters: 8 },
  isa: { name: "Isaiah", chapters: 66 },
  jer: { name: "Jeremiah", chapters: 52 },
  lam: { name: "Lamentations", chapters: 5 },
  eze: { name: "Ezekiel", chapters: 48 },
  dan: { name: "Daniel", chapters: 12 },
  hos: { name: "Hosea", chapters: 14 },
  joe: { name: "Joel", chapters: 3 },
  amo: { name: "Amos", chapters: 9 },
  oba: { name: "Obadiah", chapters: 1 },
  jon: { name: "Jonah", chapters: 4 },
  mic: { name: "Micah", chapters: 7 },
  nah: { name: "Nahum", chapters: 3 },
  hab: { name: "Habakkuk", chapters: 3 },
  zep: { name: "Zephaniah", chapters: 3 },
  hag: { name: "Haggai", chapters: 2 },
  zec: { name: "Zechariah", chapters: 14 },
  mal: { name: "Malachi", chapters: 4 },
  // New Testament (27 books)
  mat: { name: "Matthew", chapters: 28 },
  mar: { name: "Mark", chapters: 16 },
  luk: { name: "Luke", chapters: 24 },
  joh: { name: "John", chapters: 21 },
  act: { name: "Acts", chapters: 28 },
  rom: { name: "Romans", chapters: 16 },
  "1co": { name: "1 Corinthians", chapters: 16 },
  "2co": { name: "2 Corinthians", chapters: 13 },
  gal: { name: "Galatians", chapters: 6 },
  eph: { name: "Ephesians", chapters: 6 },
  phi: { name: "Philippians", chapters: 4 },
  col: { name: "Colossians", chapters: 4 },
  "1th": { name: "1 Thessalonians", chapters: 5 },
  "2th": { name: "2 Thessalonians", chapters: 3 },
  "1ti": { name: "1 Timothy", chapters: 6 },
  "2ti": { name: "2 Timothy", chapters: 4 },
  tit: { name: "Titus", chapters: 3 },
  phm: { name: "Philemon", chapters: 1 },
  heb: { name: "Hebrews", chapters: 13 },
  jam: { name: "James", chapters: 5 },
  "1pe": { name: "1 Peter", chapters: 5 },
  "2pe": { name: "2 Peter", chapters: 3 },
  "1jo": { name: "1 John", chapters: 5 },
  "2jo": { name: "2 John", chapters: 1 },
  "3jo": { name: "3 John", chapters: 1 },
  jde: { name: "Jude", chapters: 1 },
  rev: { name: "Revelation", chapters: 22 },
};

const API_BASE_URL = "https://bible-api.com/";
const DELAY_MS = 300; // Rate limiting delay

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchChapter(bookName, chapter) {
  try {
    const url = `${API_BASE_URL}${encodeURIComponent(bookName)}+${chapter}?translation=kjv`;
    const response = await axios.get(url, { timeout: 30000 });
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${bookName} ${chapter}:`, error.message);
    return null;
  }
}

function saveChapter(data, bookId, chapter, outputDir) {
  if (!data) return false;

  const bookDir = path.join(outputDir, bookId);

  if (!fs.existsSync(bookDir)) {
    fs.mkdirSync(bookDir, { recursive: true });
  }

  const outputData = {
    book: data.book || "",
    chapter: data.chapter || chapter,
    language: "english",
    version: "KJV",
    verses: data.verses || [],
  };

  const filePath = path.join(bookDir, `${chapter}.json`);

  try {
    fs.writeFileSync(filePath, JSON.stringify(outputData, null, 2), "utf8");
    return true;
  } catch (error) {
    console.error(`Error saving ${filePath}:`, error.message);
    return false;
  }
}

async function downloadBook(bookId, bookInfo, outputDir) {
  const { name: bookName, chapters: numChapters } = bookInfo;

  console.log(`Downloading ${bookName} (${numChapters} chapters)...`);

  let successCount = 0;

  for (let chapter = 1; chapter <= numChapters; chapter++) {
    const data = await fetchChapter(bookName, chapter);

    if (data && saveChapter(data, bookId, chapter, outputDir)) {
      successCount++;
      console.log(`  ✓ ${bookName} ${chapter}`);
    } else {
      console.log(`  ✗ ${bookName} ${chapter}`);
    }

    // Rate limiting
    await sleep(DELAY_MS);
  }

  console.log(`Completed ${bookName}: ${successCount}/${numChapters} chapters`);
  return successCount;
}

async function main() {
  const scriptDir = __dirname;
  const outputDir = path.join(scriptDir, "data", "kjv");

  console.log("=".repeat(60));
  console.log("KJV Bible Data Generator (Node.js)");
  console.log("=".repeat(60));
  console.log(`Output directory: ${outputDir}`);
  console.log(`Total books: ${Object.keys(BIBLE_BOOKS).length}`);
  console.log("=".repeat(60));

  // Create output directory
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const totalChapters = Object.values(BIBLE_BOOKS).reduce(
    (sum, info) => sum + info.chapters,
    0,
  );
  console.log(`Total chapters to download: ${totalChapters}`);
  console.log();

  let successBooks = 0;
  let successChapters = 0;

  for (const [bookId, bookInfo] of Object.entries(BIBLE_BOOKS)) {
    const chaptersDownloaded = await downloadBook(bookId, bookInfo, outputDir);
    if (chaptersDownloaded > 0) {
      successBooks++;
      successChapters += chaptersDownloaded;
    }
    console.log();
  }

  console.log("=".repeat(60));
  console.log("Download Complete!");
  console.log(
    `Books downloaded: ${successBooks}/${Object.keys(BIBLE_BOOKS).length}`,
  );
  console.log(`Chapters downloaded: ${successChapters}/${totalChapters}`);
  console.log("=".repeat(60));
}

main().catch(console.error);
