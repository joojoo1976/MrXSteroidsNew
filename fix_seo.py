import os
import re

SRC_APP_DIR = r"c:\MrXSteroidNew\src\app"

def fix_seo_and_links():
    for root, _, files in os.walk(SRC_APP_DIR):
        for file in files:
            if file != 'page.tsx':
                continue
            
            file_path = os.path.join(root, file)
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()

            new_content = content
            
            # 1. Replace <a> tags with <Link>
            # Needs to handle <a href=... and </a>
            if '<a ' in new_content and '</a>' in new_content:
                new_content = re.sub(r'<a\s+(.*?)>', r'<Link \1>', new_content)
                new_content = new_content.replace('</a>', '</Link>')
                
                # Make sure import Link is there
                if 'import Link from "next/link"' not in new_content and "import Link from 'next/link'" not in new_content:
                    # Insert at the top
                    new_content = "import Link from 'next/link';\n" + new_content

            # 2. Page Specific Metadata
            # Calculate a nice title
            rel_path = os.path.relpath(root, SRC_APP_DIR)
            if rel_path == '.':
                pass # root page.tsx already covered by layout
            elif 'export const metadata' not in new_content:
                # generate title
                parts = [p.capitalize() for p in rel_path.replace('\\', '/').split('/') if p]
                if parts:
                    title = " | ".join(parts) + " | Iron & Grit"
                    meta_block = f'\nexport const metadata = {{\n  title: "{title}",\n  description: "Iron & Grit - {title}"\n}};\n\n'
                    
                    # insert after imports
                    last_import_index = new_content.rfind('import ')
                    if last_import_index != -1:
                        end_of_line = new_content.find('\n', last_import_index)
                        new_content = new_content[:end_of_line+1] + meta_block + new_content[end_of_line+1:]
                    else:
                        new_content = meta_block + new_content

            if content != new_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated {file_path}")

if __name__ == "__main__":
    fix_seo_and_links()
    print("SEO and Links updated.")
