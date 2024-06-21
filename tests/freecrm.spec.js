const { test, expect, chromium } = require("@playwright/test");

test('FreeCRM autowait', async () => {
    const browser=await chromium.launch({headless:false,channel:"chrome"});
    const browserContext=await browser.newContext();
    const page=await browserContext.newPage();
    page.setDefaultTimeout(15000);
    page.waitForTimeout(2000);
    await page.goto("https://classic.freecrm.com/register/");
    await page.locator("input[name='agreeTerms']").check();

    
});