#!/usr/bin/env python3
"""
Convert Greek New Testament files to JSON chapter files
"""

import json
import os
import re

# Book name mapping
BOOK_MAP = {
    'MT': {'name': 'Matthew', 'id': 'mat'},
    'MR': {'name': 'Mark', 'id': 'mar'},
    'LU': {'name': 'Luke', 'id': 'luk'},
    'JOH': {'name': 'John', 'id': 'joh'},
    'AC': {'name': 'Acts', 'id': 'act'},
    'RO': {'name': 'Romans', 'id': 'rom'},
    '1CO': {'name': '1 Corinthians', 'id': '1co'},
    '2CO': {'name': '2 Corinthians', 'id': '2co'},
    'GA': {'name': 'Galatians', 'id': 'gal'},
    'EPH': {'name': 'Ephesians', 'id': 'eph'},
    'PHP': {'name': 'Philippians', 'id': 'phi'},
    'COL': {'name': 'Colossians', 'id': 'col'},
    '1TH': {'name': '1 Thessalonians', 'id': '1th'},
    '2TH': {'name': '2 Thessalonians', 'id': '2th'},
    '1TI': {'name': '1 Timothy', 'id': '1ti'},
    '2TI': {'name': '2 Timothy', 'id': '2ti'},
    'TIT': {'name': 'Titus', 'id': 'tit'},
    'PHM': {'name': 'Philemon', 'id': 'phm'},
    'HEB': {'name': 'Hebrews', 'id': 'heb'},
    'JAS': {'name': 'James', 'id': 'jam'},
    '1PE': {'name': '1 Peter', 'id': '1pe'},
    '2PE': {'name': '2 Peter', 'id': '2pe'},
    '1JO': {'name': '1 John', 'id': '1jo'},
    '2JO': {'name': '2 John', 'id': '2jo'},
    '3JO': {'name': '3 John', 'id': '3jo'},
    'JUDE': {'name': 'Jude', 'id': 'jde'},
    'RE': {'name': 'Revelation', 'id': 'rev'},
}

def parse_greek_file(filepath):
    """Parse a Greek file and return verses."""
    verses = []
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Skip the title line if it starts with [
    lines = content.split('\n')
    for line in lines:
        line = line.strip()
        if not line:
            continue
        
        # Skip title lines (those starting with [)
        if line.startswith('['):
            continue
        
        # Parse verse line: "1:1 text"
        match = re.match(r'^(\d+):(\d+)\s+(.+)$', line)
        if match:
            chapter = int(match.group(1))
            verse_num = int(match.group(2))
            text = match.group(3)
            verses.append({
                'verse': verse_num,
                'text': text
            })
    
    return verses

def convert_greek():
    """Convert all Greek files."""
    greek_dir = 'greektext-stephens-master/textonly/unicode'
    output_dir = 'data/greek'
    
    os.makedirs(output_dir, exist_ok=True)
    
    count = 0
    for filename in os.listdir(greek_dir):
        if not filename.endswith('.txt'):
            continue
        
        # Get book info
        book_name_base = filename.replace('.txt', '')
        if book_name_base not in BOOK_MAP:
            print(f"Skipping unknown file: {filename}")
            continue
        
        book_info = BOOK_MAP[book_name_base]
        book_id = book_info['id']
        book_display_name = book_info['name']
        
        # Parse the file
        filepath = os.path.join(greek_dir, filename)
        verses = parse_greek_file(filepath)
        
        if not verses:
            print(f"No verses found in {filename}")
            continue
        
        # Group verses by chapter
        chapters = {}
        for v in verses:
            ch = 1  # Since Greek files have verse numbers like 1:1, 1:2, etc., we need to track chapter
            # For now, let's group by the chapter number in the verse
            # But we need to track when chapter changes
            pass
        
        # Actually, let's parse more carefully - the format is chapter:verse text
        # So verses 1:1 is chapter 1, verse 1
        
        # Re-parse to group by chapters
        chapters_data = {}
        for v in verses:
            # We need to figure out which chapter each verse belongs to
            pass
        
        # Let me re-read the file and parse more carefully
        chapters_data = {}
        
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        lines = content.split('\n')
        current_chapter = 1
        
        for line in lines:
            line = line.strip()
            if not line:
                continue
            
            # Skip title lines
            if line.startswith('['):
                continue
            
            # Parse chapter:verse text
            match = re.match(r'^(\d+):(\d+)\s+(.+)$', line)
            if match:
                chapter = int(match.group(1))
                verse_num = int(match.group(2))
                text = match.group(3)
                
                if chapter not in chapters_data:
                    chapters_data[chapter] = []
                
                chapters_data[chapter].append({
                    'verse': verse_num,
                    'text': text
                })
        
        # Create output files for each chapter
        for chapter_num, chapter_verses in chapters_data.items():
            # Create directory
            book_output_dir = os.path.join(output_dir, book_id)
            os.makedirs(book_output_dir, exist_ok=True)
            
            output_data = {
                'book': book_display_name,
                'chapter': chapter_num,
                'language': 'greek',
                'version': 'Stephens',
                'verses': chapter_verses
            }
            
            output_path = os.path.join(book_output_dir, f'{chapter_num}.json')
            with open(output_path, 'w', encoding='utf-8') as f:
                json.dump(output_data, f, indent=2, ensure_ascii=False)
            
            count += 1
            print(f"Created: {output_path}")
    
    print(f"\nTotal: {count} Greek chapter files created")

if __name__ == '__main__':
    convert_greek()
