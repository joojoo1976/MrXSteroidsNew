import shutil
import os

source_dir = r"C:\Users\foryo\.gemini\antigravity\brain\74274f6d-3155-4496-9e71-f2c3365b00d4"
dest_dir = r"c:\MrXSteroidNew\public\screens"

# Source filenames
images = {
    "coach_avatar_placeholder_1772343646968.png": "coach-avatar-placeholder.png",
    "user_avatar_placeholder_1772343700218.png": "user-avatar-placeholder.png",
    "george_maurice_founder_1772343722328.png": "george-maurice-founder.png",
    "progress_photo_placeholder_1772343736713.png": "progress-photo-placeholder.png",
    "community_post_sample_1772343767255.png": "community-post-sample.png",
    "tactical_bundle_book_3d_1772343782467.png": "tactical-bundle-book-3d.png"
}

for src_name, dst_name in images.items():
    src_path = os.path.join(source_dir, src_name)
    dst_path = os.path.join(dest_dir, dst_name)
    if os.path.exists(src_path):
        shutil.copy2(src_path, dst_path)
        print(f"Copied {dst_name}")
    else:
        print(f"NOT FOUND: {src_path}")
