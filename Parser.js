const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(
    "https://afisha.relax.by/kino/minsk/"
  );

  let arr = await page.evaluate(() => {
    let text = Array.from(
      document.querySelectorAll(".b-afisha_blocks-strap_item_lnk_txt"),
      (el) => el.innerText
    );
    return text;
  });
  console.log(arr.sort());
  await browser.close();
})();
