const { test, expect } = require("@playwright/test");
const { log } = require("console");

test(' SauceDemo Login', async ({ page }) => {

    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.locator("#login-button").click();
    // await page.locator(".btn_inventory").first().click()
    // await page.locator(".inventory_item_label a").nth(0).click()
    const text1 = await page.locator(".inventory_item_label a").allTextContents();
    for (let val of text1) {
        console.log(val);
    }
    await page.pause()



});

test.only(' SauceDemo Login-Element', async ({ page }) => {

    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.locator("#login-button").click();    
    await page.waitForLoadState("networkidle");
    const productList = await page.locator(".inventory_item_label a");
    const prodCount=await productList.count();
    for (let i = 0; i < prodCount; i++) {
        let prodName = await productList.nth(i).textContent();
        console.log(prodName);
        if (prodName === "Sauce Labs Fleece Jacket") {
            productList.nth(i).click();
            break;

        }
    }
    await page.locator("#add-to-cart").click();
    await page.pause()



});