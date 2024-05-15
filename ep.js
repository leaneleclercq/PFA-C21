const puppeteer = require("puppeteer");
const nodemailer = require("nodemailer");

const url =
  "https://www.etreproprio.com/immobilier-19278043-vente-maison-75m-a-saint-martin-du-tertre-saint-martin-du-tertre";

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
  // div[class=card-cla-search]


await page.click("button[id=btn_contact_seller]");
await page.waitForSelector("button[id=btn_contact_seller]");
let data = await page.evaluate(() => {
    return document.querySelector("div[id=contact_seller_realtor_user_name]").innerText, document.querySelector("div[id=contact_seller_realtor_coords]").innerText;
});
  console.log("voici les coordonnés " + data);
/**  let newData = await data.substring(0, 4);

  if (parseInt(newData) < 2400) {
    sendNotification(newData);
  }
 */

  async function sendNotification(price) {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "julien.azbrg@gmail.com",
        pass: process.env.MAIL_PASS,
      },
    });

    let info = await transporter
      .sendMail({
        from: '"PC Cdiscount" <julien.azbrg@gmail.com>',
        to: "fromscratch.frontdev@gmail.com",
        subject: "Prix sous les " + price + "€",
        html: "Le prix de la tour est de " + price + "€",
      })
      .then(() => console.log("Message envoyé"));
  }

})();