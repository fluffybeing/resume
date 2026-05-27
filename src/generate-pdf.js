const path = require("path");
const puppeteer = require("puppeteer");

async function generatePDF() {
  const htmlFile = process.argv[2] || "resume.html";
  const pdfFile = process.argv[3] || "resume.pdf";
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`file://${path.join(process.cwd(), "output", htmlFile)}`, {
    waitUntil: "networkidle0",
  });
  await page.pdf({
    path: path.join("output", pdfFile),
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    tagged: true,
    outline: true,
    displayHeaderFooter: false,
    margin: {
      top: "1cm",
      right: "1cm",
      bottom: "1cm",
      left: "1cm",
    },
  });
  await browser.close();
}

generatePDF();
