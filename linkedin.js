const puppeteer = require("puppeteer");
require("dotenv").config();

const url = "https://www.linkedin.com/?trk=seo-authwall-base_nav-header-logo";

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1200,
    height: 10000,
  });
  await page.goto(url, { waitUntil: "networkidle2" });


  // cookie
  //await page.click("artdeco-global-alert-action__wrapper > button");
  //data-tracking-control-name="auth_wall_desktop-login-toggle"
  //await page.click('[data-controle-name=ga-cookie.consent.accet.v4]');
  //await page.click("action-type=ACCEPT")

  // login
  await page.type('[name=session_key]', "cindy.alves0304@gmail.com", { delay: 100 });
  await page.type('[name=session_password]', "dydylele00", { delay: 100 });

  await page.click("button[type=submit]");

  // auto connect
  //await page.waitForSelector(".cmbtv > button", { visible: true });
  //await page.click(".cmbtv > button");

  // notif
  //await page.waitForSelector(".mt3GC > button", { visible: true });
  //await page.click(".mt3GC > button");

  //debugger;
  // await browser.close();
})();
