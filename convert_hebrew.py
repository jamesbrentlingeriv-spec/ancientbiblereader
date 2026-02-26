#!/usr/bin/env python3
"""
Convert Hebrew Bible JSON to chapter files
"""

import json
import os

def parse_hebrew_file():
    """Convert hebrew.json to individual chapter files."""
    
    with open('hebrew.json', 'r', encoding='utf-8') as f:
        hebrew_data = json.load(f)
    
    # Book name mapping to simple IDs
    BOOK_MAP = {
        'Genesis': {'id': 'gen', 'name': 'Genesis'},
        'Exodus': {'id': 'exo', 'name': 'Exodus'},
        'Leviticus': {'id': 'lev', 'name': 'Leviticus'},
        'Numbers': {'id': 'num', 'name': 'Numbers'},
        'Deuteronomy': {'id': 'deu', 'name': 'Deuteronomy'},
        'Joshua': {'id': 'jos', 'name': 'Joshua'},
        'Judges': {'id': 'jdg', 'name': 'Judges'},
        'Ruth': {'id': 'rut', 'name': 'Ruth'},
        '1 Samuel': {'id': '1sa', 'name': '1 Samuel'},
        '2 Samuel': {'id': '2sa', 'name': '2 Samuel'},
        '1 Kings': {'id': '1ki', 'name': '1 Kings'},
        '2 Kings': {'id': '2ki', 'name': '2 Kings'},
        '1 Chronicles': {'id': '1ch', 'name': '1 Chronicles'},
        '2 Chronicles': {'id': '2ch', 'name': '2 Chronicles'},
        'Ezra': {'id': 'ezr', 'name': 'Ezra'},
        'Nehemiah': {'id': 'neh', 'name': 'Nehemiah'},
        'Esther': {'id': 'est', 'name': 'Esther'},
        'Job': {'id': 'job', 'name': 'Job'},
        'Psalms': {'id': 'psa', 'name': 'Psalms'},
        'Proverbs': {'id': 'pro', 'name': 'Proverbs'},
        'Ecclesiastes': {'id': 'ecc', 'name': 'Ecclesiastes'},
        'Song of Solomon': {'id': 'sng', 'name': 'Song of Solomon'},
        'Isaiah': {'id': 'isa', 'name': 'Isaiah'},
        'Jeremiah': {'id': 'jer', 'name': 'Jeremiah'},
        'Lamentations': {'id': 'lam', 'name': 'Lamentations'},
        'Ezekiel': {'id': 'eze', 'name': 'Ezekiel'},
        'Daniel': {'id': 'dan', 'name': 'Daniel'},
        'Hosea': {'id': 'hos', 'name': 'Hosea'},
        'Joel': {'id': 'jol', 'name': 'Joel'},
        'Amos': {'id': 'amo', 'name': 'Amos'},
        'Obadiah': {'id': 'oba', 'name': 'Obadiah'},
        'Jonah': {'id': 'jon', 'name': 'Jonah'},
        'Micah': {'id': 'mic', 'name': 'Micah'},
        'Nahum': {'id': 'nah', 'name': 'Nahum'},
        'Habakkuk': {'id': 'hab', 'name': 'Habakkuk'},
        'Zephaniah': {'id': 'zep', 'name': 'Zephaniah'},
        'Haggai': {'id': 'hag', 'name': 'Haggai'},
        'Zechariah': {'id': 'zec', 'name': 'Zechariah'},
        'Malachi': {'id': 'mal', 'name': 'Malachi'},
        # Roman numeral variants
        'I Samuel': {'id': '1sa', 'name': '1 Samuel'},
        'II Samuel': {'id': '2sa', 'name': '2 Samuel'},
        'I Kings': {'id': '1ki', 'name': '1 Kings'},
        'II Kings': {'id': '2ki', 'name': '2 Kings'},
        'I Chronicles': {'id': '1ch', 'name': '1 Chronicles'},
        'II Chronicles': {'id': '2ch', 'name': '2 Chronicles'},
    }
    
    output_dir = 'data/hebrew'
    os.makedirs(output_dir, exist_ok=True)
    
    count = 0
    
    for book_name, chapters in hebrew_data.items():
        # Get book info
        if book_name not in BOOK_MAP:
            print(f"Skipping unknown book: {book_name}")
            continue
        
        book_info = BOOK_MAP[book_name]
        book_id = book_info['id']
        book_display_name = book_info['name']
        
        # Each chapter is an array of verses
        for chapter_num, verses in enumerate(chapters, 1):
            # Convert verses to simple format
            # Each verse is an array of words with [heb_text, strongs, morphology]
            output_verses = []
            
            for verse_idx, verse_words in enumerate(verses):
                # Join all Hebrew words to form verse text
                hebrew_text = ' '.join([w[0] for w in verse_words if w])
                
                if hebrew_text.strip():  # Only add non-empty verses
                    output_verses.append({
                        'verse': verse_idx + 1,
                        'text': hebrew_text
                    })
            
            # Create output
            book_output_dir = os.path.join(output_dir, book_id)
            os.makedirs(book_output_dir, exist_ok=True)
            
            output_data = {
                'book': book_display_name,
                'chapter': chapter_num,
                'language': 'hebrew',
                'version': 'Hebrew',
                'verses': output_verses
            }
            
            output_path = os.path.join(book_output_dir, f'{chapter_num}.json')
            with open(output_path, 'w', encoding='utf-8') as f:
                json.dump(output_data, f, indent=2, ensure_ascii=False)
            
            count += 1
            if count % 50 == 0:
                print(f"Created {count} Hebrew chapter files...")
    
    print(f"\nTotal: {count} Hebrew chapter files created")

if __name__ == '__main__':
    parse_hebrew_file()
