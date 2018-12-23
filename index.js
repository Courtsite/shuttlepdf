const { URL } = require("url");
const puppeteer = require("puppeteer");
let page;

async function getBrowserPage() {
    const browser = await puppeteer.launch({
        args: [
            "--allow-running-insecure-content",
            "--disable-new-tab-first-run",
            "--disable-notifications",
            "--ignore-certificate-errors",
            "--no-default-browser-check",
            "--no-sandbox",
            "--no-startup-window",
            "--no-zygote",
        ],
    });
    return browser.newPage();
}

exports.pdfByURL = async (req, res) => {
    let parsedUrl = null;

    try {
        parsedUrl = new URL(req.query.url);
    } catch (err) {
        return res.status(400).send(`invalid URL: ${req.query.url}`);
    }

    if (!page) {
        page = await getBrowserPage();
    }

    await page.goto(parsedUrl.toString());

    const pdfBuffer = await page.pdf();

    res.set("Content-Type", "application/pdf");
    res.status(200).send(pdfBuffer);
};
