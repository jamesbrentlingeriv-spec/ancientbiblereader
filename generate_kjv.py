#!/usr/bin/env python3
"""
KJV Bible Data Generator
------------------------
This script downloads the King James Version Bible from a free API
and saves it as JSON files in the data/kjv/ directory.

Usage:
    python generate_kjv.py

Requirements:
    - Python 3.7+
    - requests library (pip install requests)
"""

import os
import json
import requests
import time
from concurrent.futures import ThreadPoolExecutor, as_completed

# Bible book IDs and their chapter counts
BIBLE_BOOKS = {
    # Old Testament (39 books)
    'gen': {'name': 'Genesis', 'chapters': 50},
    'exo': {'name': 'Exodus', 'chapters': 40},
    'lev': {'name': 'Leviticus', 'chapters': 27},
    'num': {'name': 'Numbers', 'chapters': 36},
    'deu': {'name': 'Deuteronomy', 'chapters': 34},
    'jos': {'name': 'Joshua', 'chapters': 24},
    'jdg': {'name': 'Judges', 'chapters': 21},
    'rut': {'name': 'Ruth', 'chapters': 4},
    '1sa': {'name': '1 Samuel', 'chapters': 31},
    '2sa': {'name': '2 Samuel', 'chapters': 24},
    '1ki': {'name': '1 Kings', 'chapters': 22},
    '2ki': {'name': '2 Kings', 'chapters': 25},
    '1ch': {'name': '1 Chronicles', 'chapters': 29},
    '2ch': {'name': '2 Chronicles', 'chapters': 36},
    'ezr': {'name': 'Ezra', 'chapters': 10},
    'neh': {'name': 'Nehemiah', 'chapters': 13},
    'est': {'name': 'Esther', 'chapters': 10},
    'job': {'name': 'Job', 'chapters': 42},
    'psa': {'name': 'Psalms', 'chapters': 150},
    'pro': {'name': 'Proverbs', 'chapters': 31},
    'ecc': {'name': 'Ecclesiastes', 'chapters': 12},
    'sos': {'name': 'Song of Solomon', 'chapters': 8},
    'isa': {'name': 'Isaiah', 'chapters': 66},
    'jer': {'name': 'Jeremiah', 'chapters': 52},
    'lam': {'name': 'Lamentations', 'chapters': 5},
    'eze': {'name': 'Ezekiel', 'chapters': 48},
    'dan': {'name': 'Daniel', 'chapters': 12},
    'hos': {'name': 'Hosea', 'chapters': 14},
    'joe': {'name': 'Joel', 'chapters': 3},
    'amo': {'name': 'Amos', 'chapters': 9},
    'oba': {'name': 'Obadiah', 'chapters': 1},
    'jon': {'name': 'Jonah', 'chapters': 4},
    'mic': {'name': 'Micah', 'chapters': 7},
    'nah': {'name': 'Nahum', 'chapters': 3},
    'hab': {'name': 'Habakkuk', 'chapters': 3},
    'zep': {'name': 'Zephaniah', 'chapters': 3},
    'hag': {'name': 'Haggai', 'chapters': 2},
    'zec': {'name': 'Zechariah', 'chapters': 14},
    'mal': {'name': 'Malachi', 'chapters': 4},
    # New Testament (27 books)
    'mat': {'name': 'Matthew', 'chapters': 28},
    'mar': {'name': 'Mark', 'chapters': 16},
    'luk': {'name': 'Luke', 'chapters': 24},
    'joh': {'name': 'John', 'chapters': 21},
    'act': {'name': 'Acts', 'chapters': 28},
    'rom': {'name': 'Romans', 'chapters': 16},
    '1co': {'name': '1 Corinthians', 'chapters': 16},
    '2co': {'name': '2 Corinthians', 'chapters': 13},
    'gal': {'name': 'Galatians', 'chapters': 6},
    'eph': {'name': 'Ephesians', 'chapters': 6},
    'phi': {'name': 'Philippians', 'chapters': 4},
    'col': {'name': 'Colossians', 'chapters': 4},
    '1th': {'name': '1 Thessalonians', 'chapters': 5},
    '2th': {'name': '2 Thessalonians', 'chapters': 3},
    '1ti': {'name': '1 Timothy', 'chapters': 6},
    '2ti': {'name': '2 Timothy', 'chapters': 4},
    'tit': {'name': 'Titus', 'chapters': 3},
    'phm': {'name': 'Philemon', 'chapters': 1},
    'heb': {'name': 'Hebrews', 'chapters': 13},
    'jam': {'name': 'James', 'chapters': 5},
    '1pe': {'name': '1 Peter', 'chapters': 5},
    '2pe': {'name': '2 Peter', 'chapters': 3},
    '1jo': {'name': '1 John', 'chapters': 5},
    '2jo': {'name': '2 John', 'chapters': 1},
    '3jo': {'name': '3 John', 'chapters': 1},
    'jde': {'name': 'Jude', 'chapters': 1},
    'rev': {'name': 'Revelation', 'chapters': 22}
}

API_BASE_URL = "https://bible-api.com/{}"

def fetch_chapter(book_id, book_name, chapter):
    """Fetch a single chapter from the API."""
    url = API_BASE_URL.format(f"{book_name}+{chapter}?translation=kjv")
    try:
        response = requests.get(url, timeout=30)
        response.raise_for_status()
        return response.json()
    except Exception as e:
        print(f"Error fetching {book_name} {chapter}: {e}")
        return None

def save_chapter(data, book_id, chapter, output_dir):
    """Save chapter data to a JSON file."""
    if data is None:
        return False
    
    # Create directory if it doesn't exist
    book_dir = os.path.join(output_dir, book_id)
    os.makedirs(book_dir, exist_ok=True)
    
    # Prepare the output data
    output_data = {
        "book": data.get("book", ""),
        "chapter": data.get("chapter", chapter),
        "language": "english",
        "version": "KJV",
        "verses": data.get("verses", [])
    }
    
    # Save to file
    file_path = os.path.join(book_dir, f"{chapter}.json")
    try:
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(output_data, f, indent=2, ensure_ascii=False)
        return True
    except Exception as e:
        print(f"Error saving {file_path}: {e}")
        return False

def download_book(book_id, book_info, output_dir):
    """Download all chapters of a book."""
    book_name = book_info['name']
    num_chapters = book_info['chapters']
    
    print(f"Downloading {book_name} ({num_chapters} chapters)...")
    success_count = 0
    
    for chapter in range(1, num_chapters + 1):
        data = fetch_chapter(book_id, book_name, chapter)
        if data:
            if save_chapter(data, book_id, chapter, output_dir):
                success_count += 1
                print(f"  ✓ {book_name} {chapter}")
            else:
                print(f"  ✗ {book_name} {chapter}")
        else:
            print(f"  ✗ {book_name} {chapter} (failed)")
        
        # Rate limiting - be nice to the API
        time.sleep(0.3)
    
    print(f"Completed {book_name}: {success_count}/{num_chapters} chapters")
    return success_count

def main():
    """Main function to download the entire KJV Bible."""
    # Get the directory where the script is located
    script_dir = os.path.dirname(os.path.abspath(__file__))
    output_dir = os.path.join(script_dir, "data", "kjv")
    
    print("=" * 60)
    print("KJV Bible Data Generator")
    print("=" * 60)
    print(f"Output directory: {output_dir}")
    print(f"Total books: {len(BIBLE_BOOKS)}")
    print("=" * 60)
    
    # Create output directory
    os.makedirs(output_dir, exist_ok=True)
    
    # Download each book
    total_chapters = sum(info['chapters'] for info in BIBLE_BOOKS.values())
    print(f"Total chapters to download: {total_chapters}")
    print()
    
    success_books = 0
    success_chapters = 0
    
    for book_id, book_info in BIBLE_BOOKS.items():
        chapters_downloaded = download_book(book_id, book_info, output_dir)
        if chapters_downloaded > 0:
            success_books += 1
            success_chapters += chapters_downloaded
        print()
    
    print("=" * 60)
    print("Download Complete!")
    print(f"Books downloaded: {success_books}/{len(BIBLE_BOOKS)}")
    print(f"Chapters downloaded: {success_chapters}/{total_chapters}")
    print("=" * 60)

if __name__ == "__main__":
    main()
