import fitz # PyMuPDF
import os

pdf_path = "C:\\Users\\IBN\\Documents\\Voeyrnth_website\\Vœrynth_OS_broucher.pdf"
out_dir = "C:\\Users\\IBN\\Documents\\Voeyrnth_website\\public\\assets\\os_broucher"
os.makedirs(out_dir, exist_ok=True)

doc = fitz.open(pdf_path)
text_out = []

for page_index in range(len(doc)):
    page = doc.load_page(page_index)
    text = page.get_text()
    text_out.append(f"--- PAGE {page_index + 1} ---\n{text}")
    
    # Extract images
    image_list = page.get_images(full=True)
    for image_index, img in enumerate(image_list, start=1):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        image_name = f"page{page_index+1}_img{image_index}.{image_ext}"
        image_path = os.path.join(out_dir, image_name)
        with open(image_path, "wb") as f:
            f.write(image_bytes)
        print(f"Extracted {image_name}")

with open("C:\\Users\\IBN\\Documents\\Voeyrnth_website\\os_text.txt", "w", encoding="utf-8") as f:
    f.write("\n".join(text_out))
print("Extraction complete. Text saved to os_text.txt")
