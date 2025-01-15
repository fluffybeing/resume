#!/bin/sh

# Generate HTML first
pandoc src/resume.md -f markdown -t html -c ../src/resume-stylesheet.css -s -o output/resume.html
# Use puppeteer to convert HTML to PDF
node src/generate-pdf.js