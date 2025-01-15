const puppeteer = require("puppeteer");

async function generatePDF() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`file://${process.cwd()}/output/resume.html`, {
    waitUntil: "networkidle0",
  });
  await page.pdf({
    path: "output/resume.pdf",
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
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