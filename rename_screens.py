import os
import glob
import re

SCREENS_DIR = r"c:\MrXSteroidNew\public\screens"
SRC_APP_DIR = r"c:\MrXSteroidNew\src\app"

def get_route_prefix(filename):
    name = filename.lower()
    if 'coach' in name and 'dashboard' in name: return 'dashboard-coach-'
    if 'coach' in name and 'profile' in name: return 'coach-profile-'
    if 'coach' in name: return 'coaches-'
    if 'trainee' in name and 'dashboard' in name: return 'dashboard-trainee-'
    if 'progress' in name or 'morph' in name or 'anatomical' in name: return 'progress-'
    if 'notification' in name or 'alert' in name: return 'notifications-'
    if 'community' in name or 'social' in name: return 'community-'
    if 'billing' in name or 'subscription' in name or 'pricing' in name: return 'pricing-'
    if 'library' in name or 'cycle' in name: return 'library-'
    if 'science' in name or 'calculator' in name or 'simulator' in name: return 'tools-'
    if 'challenge' in name or 'rewards' in name or 'leaderboard' in name: return 'challenges-'
    if 'checkout' in name or 'pay' in name or 'spaceremit' in name: return 'checkout-'
    if 'message' in name or 'chat' in name: return 'messages-'
    if 'profile' in name or 'identity' in name: return 'profile-'
    # Fallback to home if generic 'home' or others
    return 'home-'

def rename_and_update():
    png_files = glob.glob(os.path.join(SCREENS_DIR, "*.png"))
    rename_mapping = {}

    for file_path in png_files:
        basename = os.path.basename(file_path)
        if basename.startswith(tuple([f"{r}-" for r in ['home', 'dashboard', 'coach', 'coaches', 'progress', 'notifications', 'community', 'pricing', 'library', 'tools', 'challenges', 'checkout', 'messages', 'profile']])):
            continue # already prefixed
        
        prefix = get_route_prefix(basename)
        new_basename = prefix + basename
        new_path = os.path.join(SCREENS_DIR, new_basename)
        
        # Rename the file
        print(f"Renaming {basename} -> {new_basename}")
        os.rename(file_path, new_path)
        rename_mapping[f"/screens/{basename}"] = f"/screens/{new_basename}"

    if not rename_mapping:
        print("No files needed renaming.")
        return

    # Update code references
    for root, _, files in os.walk(SRC_APP_DIR):
        for file in files:
            if not file.endswith(('.tsx', '.ts')):
                continue
            
            file_path = os.path.join(root, file)
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()

            new_content = content
            for old_str, new_str in rename_mapping.items():
                if old_str in new_content:
                    print(f"Updating reference in {file}: {old_str} -> {new_str}")
                    new_content = new_content.replace(old_str, new_str)

            if content != new_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)

if __name__ == "__main__":
    rename_and_update()
    print("Done renaming and updating references.")
