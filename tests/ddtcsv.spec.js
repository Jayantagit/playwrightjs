import { test, expect } from '@playwright/test'
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';


const result = parse(fs.readFileSync(path.join(__dirname,"Workflows", 'login.csv')), {
    columns: true,
    skip_empty_lines: true
});

for (const data of result) {
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