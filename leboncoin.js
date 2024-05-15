const puppeteer = require("puppeteer");
const nodemailer = require("nodemailer");

const url =
  "https://www.leboncoin.fr/recherche?category=9&locations=Saint-Martin-du-Tertre_95270__49.1084_2.34793_3567&real_estate_type=1";

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle2" });

  await page.setViewport({
    width: 1200,
    height: 10000,
  });

  // pdf
  // await page.pdf({
  //   path: "page.pdf",
  //   format: "A4",
  // });
  // image
  // await page.screenshot({
  //   path: "image.png",
  // });

  // get <body>
  // let bodyHTML = await page.evaluate(() => document.body.innerHTML);
  // console.log(bodyHTML);

  let data = await page.evaluate(() => {
    return document.querySelector("span[itemprop=price]").innerText;
  });
  console.log("Le prix est de " + data);
  let newData = await data.substring(0, 4);

})();