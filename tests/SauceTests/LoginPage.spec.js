import { test, expect, browser } from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'
import { ProductsPage } from '../Pages/ProductsPage'
const userData =JSON.parse(JSON.stringify(require('../Workflows/data.json')))

let page;
let lp;

test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
    lp = new LoginPage(page);
    await lp.goToUrl("https://www.saucedemo.com/")

})

for (const data of userData) {
    test(`Login with : ${data.username}`, async ({ }) => {

        await lp.doLogin(data.username, data.password)
    });

    test(`Select Product-for : ${data.username}`, async ({ }) => {

        const productPage = new ProductsPage(page);
        await productPage.selectProduct("Sauce Labs Backpack");
    
    
    });


}




