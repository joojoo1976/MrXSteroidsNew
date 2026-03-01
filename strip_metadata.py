import os

SRC_APP_DIR = r"c:\MrXSteroidNew\src\app"

def remove_metadata_from_client_components():
    for root, _, files in os.walk(SRC_APP_DIR):
        for file in files:
            if file != 'page.tsx':
                continue
            
            file_path = os.path.join(root, file)
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()

            if "'use client'" in content or '"use client"' in content:
                # Find metadata block
                start_str = "export const metadata ="
                start_idx = content.find(start_str)
                if start_idx != -1:
                    # Find the closing brace and semicolon
                    end_idx = content.find("};\n", start_idx)
                    if end_idx != -1:
                        end_idx += 3 # skip past };\n
                        # Also remove extra new lines if they exist
                        while end_idx < len(content) and content[end_idx] == '\n':
                            end_idx += 1
                        
                        new_content = content[:start_idx] + content[end_idx:]
                        with open(file_path, 'w', encoding='utf-8') as f:
                            f.write(new_content)
                        print(f"Removed metadata from {file_path}")

if __name__ == "__main__":
    remove_metadata_from_client_components()
