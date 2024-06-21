const { test, expect, chromium } = require("@playwright/test")

test('demoqa', async ({ browser }) => {

    // const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://demoqa.com/");

    const [newPage] = await Promise.all(
        [
            context.waitForEvent('page'),
            page.locator("img[alt='Selenium Online Training']").click()
        ]);
    await newPage.waitForLoadState('networkidle');
   // await newPage.pause();
    const newtext = await newPage.locator("div.enroll__heading").textContent();
    console.log(newtext);


});