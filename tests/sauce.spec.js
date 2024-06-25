const { test, expect } = require("@playwright/test");
const { log } = require("console");

test('SauceDemo Login', async ({ page }) => {

    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.locator("#login-button").click();
    await page.screenshot({ path: "Home.png" })
    await page.pause()
});

test('SauceDemo Login-Visual comparison', async ({ page }) => {

    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.locator("#login-button").click();
    // await page.screenshot({path:"Home1.png"})  
    expect(await page.screenshot()).toMatchSnapshot('Home1.png')
    await page.pause()
});


test('SauceDemo ', async ({ page }) => {

    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.locator("#login-button").click();
    await page.on('console', (msg) => {
        console.log(msg.text());
    })
    const products = page.locator(".inventory_item_label a");
   // const prodName = products.filter({ hasText: "Sauce Labs Backpack" }).getByRole('button', { name: 'Add to cart' });
    const prodName = products.filter({ hasText: "Sauce Labs Backpack" });
    await prodName.click();
    await page.pause();
});


test.only('Tab Handling ', async ({ page }) => {

    await page.goto("https://www.globalsqa.com/demo-site/dialog-boxes/");
    await page.getByRole('tab',{name:"Confirmation Box"}).click()
   
    await page.pause();
});