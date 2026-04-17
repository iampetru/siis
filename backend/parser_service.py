import re

def extract_total(text):
    patterns = [
        r"total\s*[:\-]?\s*\$?\s*(\d+[\.,]?\d*)",
        r"amount\s*due\s*[:\-]?\s*\$?\s*(\d+[\.,]?\d*)"
    ]
    for p in patterns:
        m = re.search(p, text, re.IGNORECASE)
        if m:
            return float(m.group(1).replace(',', '.'))
    return None

def extract_date(text):
    m = re.search(r"\d{2}[/-]\d{2}[/-]\d{4}", text)
    return m.group(0) if m else None

def extract_merchant(text):
    lines = text.split("\n")
    return lines[0] if lines else None

def parse_invoice(text):
    return {
        "merchant": extract_merchant(text),
        "date": extract_date(text),
        "total": extract_total(text)
    }
