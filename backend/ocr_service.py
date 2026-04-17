import easyocr
import cv2
import numpy as np
from pdf2image import convert_from_path

reader = easyocr.Reader(['en'])

def extract_text_from_image(image_path):
    image = cv2.imread(image_path)
    results = reader.readtext(image, detail=0)
    return "\n".join(results)

def extract_text_from_pdf(pdf_path):
    pages = convert_from_path(pdf_path)
    text = ""
    for page in pages:
        image = np.array(page)
        results = reader.readtext(image, detail=0)
        text += "\n".join(results) + "\n"
    return text

def extract_text_from_file(file_path):
    if file_path.lower().endswith(".pdf"):
        return extract_text_from_pdf(file_path)
    return extract_text_from_image(file_path)
