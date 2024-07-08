const { test, expect } = require("@playwright/test");
const userdetails = JSON.parse(JSON.stringify(require("./Workflows/data.json")))
//JSON-String-Java Object
for(const data of userdetails)
{
test(`Login with ${data.username}`, async ({ page }) => {

    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill(data.username);
    await page.getByPlaceholder("Password").fill(data.password);
    await page.locator("#login-button").click();

    const text1 = await page.locator(".inventory_item_label a").allTextContents();
    for (let val of text1) {
        console.log(val);
    }
  //  await page.pause()

});
}

