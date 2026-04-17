# SIIS - Smart Invoice Intelligence System

> A full-stack AI-powered invoice and receipt processing system that extracts structured financial data from documents using OCR and delivers it through a modern dashboard.

# Overview

SIIS (Smart Invoice Intelligence System) is a financial document intelligence tool designed for small businesses, accounting workflows, and MIS use cases.

It allows users to upload invoices or receipts (images/PDFs), automatically extracts text using OCR, and converts it into structured financial data such as:

Merchant name
Date
Total amount
Currency (basic detection)
Raw OCR text

The system also includes a modern React dashboard for uploading and viewing processed results in real time.

# Key Features
 - Document Processing:
Upload invoices/receipts (JPG, PNG, PDF)
OCR text extraction using EasyOCR
Supports multi-page PDFs
- Financial Data Extraction:
Merchant detection
Date extraction
Total amount detection
Regex-based parsing engine
- Dashboard UI:
Modern React + Tailwind interface
File upload system
Real-time structured results display
Raw OCR text viewer
- API-First Design:
FastAPI backend
Clean /upload endpoint
JSON-based responses

# Architecture
```
Frontend (React + Vite + Tailwind)
        ↓
REST API (FastAPI)
        ↓
OCR Engine (EasyOCR + OpenCV)
        ↓
Parsing Layer (Regex-based extraction)
        ↓
Structured JSON Output
```

🛠️ Tech Stack
- Frontend

React 18

Vite

TailwindCSS

- Backend

Python 3.10+

FastAPI

EasyOCR

OpenCV

Pandas

# Project Structure

```
siis/
│
├── backend/
│   ├── main.py
│   ├── ocr_service.py
│   ├── parser_service.py
│
├── frontend/
│   ├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── vite.config.js
│
├── requirements.txt
├── README.md
```
# Installation & Setup
1️⃣ Clone the repository

```
git clone https://github.com/iampetru/siis.git
cd siis
```

2️⃣ Backend Setup

```
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

Backend runs on:

```http://127.0.0.1:8000```

3️⃣ Frontend Setup

```
cd frontend
npm install
npm run dev
```
Frontend runs on:

```http://localhost:5173```
# API Endpoint

```
POST /upload
```
Uploads an invoice and returns structured data.

Request:

Form-data:

file: image or PDF

Response:

```
{
  "raw_text": "Walmart ... Total: 12.50",
  "structured": {
    "merchant": "Walmart",
    "date": "12/03/2026",
    "total": 12.5
  }
}
```

# UI Preview
- Modern dark dashboard
- Glassmorphism-style cards
- Sidebar navigation
- Real-time results display
# How It Works
- User uploads invoice
- Backend saves file
- OCR extracts raw text
- Parser extracts structured fields
- JSON is returned to frontend
- UI displays results instantly
# Future Improvements
- AI-based invoice parsing (LLM integration)
- Invoice history database (MongoDB/PostgreSQL)
- VAT and EU invoice format support
- Expense analytics dashboard (charts)
- User authentication system
# Use Cases
- Small business accounting automation
- Expense tracking systems
- MIS data entry automation
- Financial document digitization
- Learning project for OCR + AI pipelines

# Disclaimer

This project is intended for educational and portfolio purposes. OCR accuracy depends on image quality and invoice format.

Built as a full-stack MIS + AI automation project combining:

- Financial systems thinking
- OCR + data extraction
- Modern web development
⭐ If you like this project

Give it a star and feel free to contribute or fork it.
