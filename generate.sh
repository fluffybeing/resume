#!/bin/sh

set -eu

SOURCE_MD="${1:-src/resume.md}"
OUTPUT_BASENAME="${2:-rahul_resume}"
OUTPUT_HTML="output/${OUTPUT_BASENAME}.html"
OUTPUT_PDF="${OUTPUT_BASENAME}.pdf"

mkdir -p output

# Generate HTML first
pandoc "$SOURCE_MD" -f markdown -t html -c ../src/resume-stylesheet.css -s -o "$OUTPUT_HTML"

# Use puppeteer to convert HTML to PDF
node src/generate-pdf.js "${OUTPUT_BASENAME}.html" "$OUTPUT_PDF"
