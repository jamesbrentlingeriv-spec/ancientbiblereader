#!/usr/bin/env python3
"""
Convert kjv.json to individual chapter files
"""

import json
import os

def convert_kjv():
    # Read the kjv.json file
    with open('data/kjv.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    verses = data['verses']
    
    # Group verses by book and chapter
    chapters = {}
    for v in verses:
        key = (v['book_name'], v['chapter'])
        if key not in chapters:
            chapters[key] = []
        chapters[key].append({
            'verse': v['verse'],
            'text': v['text']
        })
    
    # Book name to ID mapping
    book_id_map = {
        'Genesis': 'gen', 'Exodus': 'exo', 'Leviticus': 'lev', 'Numbers': 'num',
        'Deuteronomy': 'deu', 'Joshua': 'jos', 'Judges': 'jdg', 'Ruth': 'rut',
        '1 Samuel': '1sa', '2 Samuel': '2sa', '1 Kings': '1ki', '2 Kings': '2ki',
        '1 Chronicles': '1ch', '2 Chronicles': '2ch', 'Ezra': 'ezr', 'Nehemiah': 'neh',
        'Esther': 'est', 'Job': 'job', 'Psalms': 'psa', 'Proverbs': 'pro',
        'Ecclesiastes': 'ecc', 'Song of Solomon': 'sos', 'Isaiah': 'isa', 'Jeremiah': 'jer',
        'Lamentations': 'lam', 'Ezekiel': 'eze', 'Daniel': 'dan', 'Hosea': 'hos',
        'Joel': 'joe', 'Amos': 'amo', 'Obadiah': 'oba', 'Jonah': 'jon',
        'Micah': 'mic', 'Nahum': 'nah', 'Habakkuk': 'hab', 'Zephaniah': 'zep',
        'Haggai': 'hag', 'Zechariah': 'zec', 'Malachi': 'mal',
        'Matthew': 'mat', 'Mark': 'mar', 'Luke': 'luk', 'John': 'joh',
        'Acts': 'act', 'Romans': 'rom', '1 Corinthians': '1co', '2 Corinthians': '2co',
        'Galatians': 'gal', 'Ephesians': 'eph', 'Philippians': 'phi', 'Colossians': 'col',
        '1 Thessalonians': '1th', '2 Thessalonians': '2th', '1 Timothy': '1ti',
        '2 Timothy': '2ti', 'Titus': 'tit', 'Philemon': 'phm', 'Hebrews': 'heb',
        'James': 'jam', '1 Peter': '1pe', '2 Peter': '2pe', '1 John': '1jo',
        '2 John': '2jo', '3 John': '3jo', 'Jude': 'jde', 'Revelation': 'rev'
    }
    
    # Create individual chapter files
    count = 0
    for (book_name, chapter), verses_list in chapters.items():
        book_id = book_id_map.get(book_name)
        if not book_id:
            print(f"Unknown book: {book_name}")
            continue
        
        # Create directory
        dir_path = f'data/kjv/{book_id}'
        os.makedirs(dir_path, exist_ok=True)
        
        # Create chapter file
        output_data = {
            'book': book_name,
            'chapter': chapter,
            'language': 'english',
            'version': 'KJV',
            'verses': verses_list
        }
        
        file_path = f'{dir_path}/{chapter}.json'
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(output_data, f, indent=2, ensure_ascii=False)
        
        count += 1
        print(f"Created: {file_path}")
    
    print(f"\nTotal: {count} chapter files created")

if __name__ == '__main__':
    convert_kjv()
