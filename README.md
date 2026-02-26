<p align="center">
  <img src="https://img.shields.io/badge/Version-1.0.0-gold?style=for-the-badge&labelColor=2c241b" alt="Version">
  <img src="https://img.shields.io/badge/License-MIT-gold?style=for-the-badge&labelColor=2c241b" alt="License">
  <img src="https://img.shields.io/badge/Platform-Web%20%7C%20PWA-gold?style=for-the-badge&labelColor=2c241b" alt="Platform">
  <br>
  <img src="https://img.shields.io/badge/Hebrew-%D7%90%D7%A8%D7%90%D7%A9%D7%99%D7%AA-gold?style=for-the-badge" alt="Hebrew">
  <img src="https://img.shields.io/badge/Greek-%CE%93%CF%81%CE%B1%CE%B9%CE%BA%CE%AC-gold?style=for-the-badge" alt="Greek">
  <img src="https://img.shields.io/badge/KJV-English-gold?style=for-the-badge" alt="KJV">
</p>

---

# 📜 Parallel Bible - Hebrew, Greek & King James Version

<p align="center">
  <img src="https://raw.githubusercontent.com/primer/octicons/main/icons/book-24.svg" width="120" height="120" alt="Bible Icon">
</p>

> ✨ A beautiful Progressive Web App for reading ancient Hebrew and Greek Bible
> manuscripts alongside the King James Version in a stunning parallel format.

---

## 🌟 Features

| Feature                 | Description                                     |
| ----------------------- | ----------------------------------------------- |
| 📖 **Hebrew Texts**     | Read the Old Testament in its original Hebrew   |
| 🇬🇷 **Greek Texts**      | Read the New Testament in original Greek        |
| 👑 **KJV Parallel**     | View King James Version alongside ancient texts |
| 🌙 **Dark Mode**        | Beautiful light and dark themes                 |
| 📱 **PWA Ready**        | Install as a native app on any device           |
| 🔄 **Offline Support**  | Read cached chapters without internet           |
| 🎨 **Beautiful Design** | Ancient manuscript aesthetic with modern UX     |

---

## 🚀 Quick Start

### Prerequisites

- Node.js (optional, for local development)
- A modern web browser

### Running Locally

```
bash
# Clone or download this repository
cd "Bible Reader for HebGrk"

# Option 1: Using Node.js
npm install
npm run serve

# Option 2: Using Python
python -m http.server 3000

# Option 3: Using PHP
php -S localhost:3000
```

Then open **http://localhost:3000** in your browser!

---

## 📱 Installation (PWA)

### On Desktop (Chrome/Edge)

1. Open the app in Chrome or Edge
2. Look for the install icon in the address bar:

```
   ┌─────────────────────────────────────────┐
   │  🔒 http://localhost:3000          ⛭  │
   │                              [⬇️ Install] │
   └─────────────────────────────────────────┘

```

3. Click **"Install"** or the ⛭ icon
4. The app will install as a desktop application! 🎉

### On Mobile (iOS)

1. Open the app in Safari
2. Tap the **Share** button (iOS) or **Menu** (Android)
3. Scroll down and tap **"Add to Home Screen"**
4. Tap **"Add"**
5. The app icon will appear on your home screen! 📱

### On Android

1. Open the app in Chrome
2. Tap the three dots (⋮) menu
3. Select **"Install App"** or **"Add to Home Screen"**
4. Confirm the installation

---

## 🖥️ Deploying to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click **"New Repository"**
3. Name it `parallel-bible` (or any name you prefer)
4. Set it to **Public**
5. Click **"Create Repository"**

### Step 2: Upload Files

```
bash
# Clone your new repository
git clone https://github.com/YOUR_USERNAME/parallel-bible.git
cd parallel-bible

# Copy all project files into the folder
# (index.html, app.js, data/, etc.)

# Add all files
git add .

# Commit
git commit -m "Initial commit: Parallel Bible App"

# Push to GitHub
git push origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** ⚙️
3. Scroll to **"Pages"** in the left sidebar
4. Under **"Source"**, select **"Deploy from a branch"**
5. Under **"Branch"**, select:
   - **Branch**: `main` (or `master`)
   - **Folder**: `/ (root)`
6. Click **Save**
7. Wait 1-2 minutes for deployment

### Step 4: Access Your App! 🎉

Your app will be live at:

```
https://YOUR_USERNAME.github.io/parallel-bible/
```

---

## 📂 Project Structure

```
📦 Bible Reader for HebGrk
├── 📄 index.html           # Main HTML file
├── 📄 app.js              # Application logic
├── 📄 sw.js               # Service Worker (PWA)
├── 📄 manifest.json       # PWA manifest
├── 📄 styles.css          # Custom styling
├── 📄 serve.js            # Local development server
├── 📄 generate_kjv.js     # KJV data generator (Node.js)
├── 📄 generate_kjv.py    # KJV data generator (Python)
├── 📄 package.json       # Node.js configuration
├── 📄 README.md          # This file!
├── 📁 data/
│   ├── 📁 hebrew/        # Hebrew Bible texts
│   │   └── 📁 gen/1.json # Genesis Chapter 1
│   ├── 📁 greek/         # Greek Bible texts
│   │   └── 📁 mat/1.json # Matthew Chapter 1
│   └── 📁 kjv/           # King James Version
│       ├── 📁 gen/1.json # Genesis 1 (KJV)
│       ├── 📁 mat/1.json # Matthew 1 (KJV)
│       └── 📁 ...        # More chapters (generate more!)
└── 🖼️ images/            # App icons (optional)
```

---

## 📖 Data Format

### JSON Structure

```
json
{
  "book": "Genesis",
  "chapter": 1,
  "language": "english",
  "version": "KJV",
  "verses": [
    {
      "verse": 1,
      "text": "In the beginning God created the heaven and the earth."
    },
    {
      "verse": 2,
      "text": "And the earth was without form, and void..."
    }
  ]
}
```

### File Naming Convention

| Book    | File Path                 |
| ------- | ------------------------- |
| Genesis | `data/hebrew/gen/1.json`  |
| Exodus  | `data/hebrew/exo/1.json`  |
| Matthew | `data/greek/mat/1.json`   |
| Mark    | `data/greek/mar/1.json`   |
| Psalms  | `data/hebrew/psa/23.json` |

---

## 🛠️ Generating More KJV Data

The app comes with sample chapters. To add the complete KJV Bible:

### Using Node.js (Recommended)

```
bash
# Install dependencies
npm install

# Generate all 1,189 chapters
npm run generate
```

### Using Python

```
bash
# Install requests
pip install requests

# Generate all chapters
python generate_kjv.py
```

This will download all KJV chapters to `data/kjv/` directory!

---

## 🎨 Customization

### Adding Your Own Hebrew/Greek Texts

1. Create JSON files in the correct format
2. Place them in:
   - Hebrew: `data/hebrew/{book_id}/{chapter}.json`
   - Greek: `data/greek/{book_id}/{chapter}.json`

### Changing Colors

Edit the Tailwind configuration in `index.html`:

```
javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                ancient: {
                    dark: '#1a1612',
                    gold: '#d4af37',    // ← Change this!
                    ink: '#2c241b'
                }
            }
        }
    }
}
```

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a new branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

---

## 📜 License

This project is **MIT Licensed** - feel free to use it for any purpose!

---

## 🙏 Acknowledgments

- [Bible API](https://bible-api.com) for KJV text
- [Tailwind CSS](https://tailwindcss.com) for beautiful styling
- [Lucide Icons](https://lucide.dev) for iconography
- [Google Fonts](https://fonts.google.com) for beautiful typography

---

<p align="center">
  <strong>Made with ❤️ for Bible readers everywhere</strong>
  <br>
  <sub>Read, Study, and Discover the Word of God</sub>
</p>

---

<p align="center">
  <a href="https://github.com">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
  <a href="https://twitter.com">
    <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter">
  </a>
</p>
