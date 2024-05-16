const puppeteer = require("puppeteer");
require("dotenv").config();

const url = "https://linkedin.com";

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle2" });

  // s'identifier
  await page.click("authwall-join-form_form-toggle--bottom form-toggle");

  // login
  await page.type("[name=session_key]", "thomas.souly@gmail.com", { delay: 100 });
  await page.type("[name=session_password]", process.env.INSTA_PASS, { delay: 100 });

  await page.click("button[type=submit]");

  // auto connect
  //await page.waitForSelector(".cmbtv > button", { visible: true });
  //await page.click(".cmbtv > button");

  // notif
  //await page.waitForSelector(".mt3GC > button", { visible: true });
  //await page.click(".mt3GC > button");

  debugger;
  // await browser.close();
})();
