
import os
import json
import re

def slugify(text):
    text = text.lower()
    text = re.sub(r'[^a-z0-9 ]', '', text)
    text = text.replace(' ', '-')
    return text

screens_json_path = r"C:\MrXSteroidNew\src\generated\screens.json"
screens_dir = r"C:\MrXSteroidNew\public\screens"

if not os.path.exists(screens_json_path):
    print(f"Error: {screens_json_path} not found.")
    exit(1)

with open(screens_json_path, 'r') as f:
    screens = json.load(f)

mapping = {}
for screen in screens:
    # screen["name"] is something like "projects/.../screens/[ID]"
    screen_id = screen["name"].split('/')[-1]
    title = screen["title"]
    mapping[screen_id] = slugify(title)

files = os.listdir(screens_dir)
renamed_count = 0

for filename in files:
    name, ext = os.path.splitext(filename)
    if name in mapping:
        new_base = mapping[name]
        new_name = f"{new_base}{ext}"
        
        # If the name already exists, append a suffix
        if os.path.exists(os.path.join(screens_dir, new_name)):
            counter = 1
            while os.path.exists(os.path.join(screens_dir, f"{new_base}-{counter}{ext}")):
                counter += 1
            new_name = f"{new_base}-{counter}{ext}"

        old_path = os.path.join(screens_dir, filename)
        new_path = os.path.join(screens_dir, new_name)
        
        try:
            os.rename(old_path, new_path)
            print(f"Renamed: {filename} -> {new_name}")
            renamed_count += 1
        except Exception as e:
            print(f"Failed to rename {filename}: {e}")

print(f"\nSuccessfully renamed {renamed_count} images based on screens.json titles.")
json_mapping_path = r"C:\MrXSteroidNew\public\screens\seo_mapping.json"
with open(json_mapping_path, 'w') as f:
    json.dump(mapping, f, indent=2)
print(f"Saved mapping to {json_mapping_path}")
