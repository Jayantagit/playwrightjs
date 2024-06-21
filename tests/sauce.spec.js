const { test, expect } = require("@playwright/test");
const { log } = require("console");

test('Invalid SauceDemo Login', async ({ page }) => {

    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce1");
    await page.locator("#login-button").click();
    const msg = await page.locator("h3[data-test='error']").allTextContents();
    log(msg);
    await expect(page.locator("h3[data-test='error']")).toContainText('Username and password do not match');
    await page.pause()



});