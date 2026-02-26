# Parallel Bible - Hebrew, Greek & KJV

A beautiful web application for reading ancient Hebrew and Greek Bible texts
alongside the King James Version (KJV) in a parallel format.

## Features

- 📖 Read Old Testament in Hebrew
- 📖 Read New Testament in Greek
- 📖 King James Version (KJV) parallel text
- 🌙 Dark/Light theme support
- 📱 Progressive Web App (PWA) - installable and works offline
- 🔄 Offline caching of KJV text

## Getting Started

### Quick Start (With Sample Data)

The app comes with sample chapters pre-loaded:

- Genesis 1 (Hebrew + KJV)
- Matthew 1 (Greek + KJV)
- John 3 (KJV)
- Psalm 23 (KJV)

Simply open `index.html` in a web browser to test the app.

### Adding Complete KJV Data

To enable fully offline reading with all 66 books of the KJV Bible, you can
generate the complete dataset using one of the following methods:

#### Method 1: Node.js (Recommended)

```
bash
# Install dependencies
npm install

# Generate all KJV chapters
npm run generate
```

This will download all 1,189 chapters and save them to `data/kjv/` directory.

#### Method 2: Python

```
bash
# Install requests (if not already installed)
pip install requests

# Generate all KJV chapters
python generate_kjv.py
```

## Project Structure

```
├── index.html          # Main HTML file
├── app.js              # Main application logic
├── styles.css          # Additional styles
├── style.css           # Tailwind CSS config
├── manifest.json       # PWA manifest
├── sw.js               # Service worker for offline support
├── generate_kjv.py     # Python script to generate KJV data
├── generate_kjv.js    # Node.js script to generate KJV data
├── package.json       # Node.js dependencies
└── data/
    ├── hebrew/        # Hebrew Bible texts (Old Testament)
    │   └── gen/1.json
    ├── greek/         # Greek Bible texts (New Testament)
    │   └── mat/1.json
    └── kjv/           # King James Version texts
        ├── gen/1.json
        ├── mat/1.json
        └── ... (generated)
```

## Data Format

KJV JSON files follow this structure:

```
json
{
  "book": "Genesis",
  "chapter": 1,
  "language": "english",
  "version": "KJV",
  "verses": [
    {"verse": 1, "text": "In the beginning God created the heaven and the earth."},
    {"verse": 2, "text": "And the earth was without form, and void..."}
  ]
}
```

## Adding Your Own Hebrew/Greek Texts

Place your JSON files in the appropriate directory:

- Hebrew (Old Testament): `data/hebrew/{book_id}/{chapter}.json`
- Greek (New Testament): `data/greek/{book_id}/{chapter}.json`

Book ID mapping:

- Genesis → `gen`
- Exodus → `exo`
- Matthew → `mat`
- Mark → `mar`
- etc.

## Technologies Used

- HTML5, CSS3, JavaScript (ES6+)
- Tailwind CSS for styling
- Lucide Icons
- Google Fonts (Cinzel, Noto Sans Hebrew, SBL Greek, Cardo)
- PWA with Service Worker

## License

MIT License - Feel free to use and modify for your own projects.
