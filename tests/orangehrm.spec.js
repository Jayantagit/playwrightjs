const { test, expect } = require("@playwright/test")
test('Orange HRM Login', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator("input[name='username']").fill("Admin")
    await page.getByPlaceholder("Password").fill("admin123")
    await page.getByRole('button', { type: 'submit' }).click()
    await page.getByRole('Link', { name: 'Leave' }).click()
    // await page.getByText("PIM").click()
    //  await page.locator("//label[text()='Sub Unit']/parent::div//following-sibling::div//div[contains(text(),'Select')]").click()
    // await page.getByText("Engineering").click()
    // await page.getByRole('Option', { name: 'Engineering' }).click()
    await page.locator("//label[text()='Show Leave with Status']/parent::div//following-sibling::div//div[contains(text(),'Select')]").click()
    await page.getByText("Taken", { exact: true }).click()
    const dateCheck = await page.locator("div[role='columnheader'] i.oxd-icon.bi-check.oxd-checkbox-input-icon")
    await dateCheck.check()
    const status = await dateCheck.isChecked()
    console.log("Status of checkbox: " + status);
    expect(await dateCheck.isChecked()).toBeTruthy()
    expect(dateCheck).toBeChecked()

    await page.pause()


});