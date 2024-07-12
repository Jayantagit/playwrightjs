export class LoginPage {
    constructor(page) {
        this.page = page;
        this.username = page.locator("#user-name");
        this.password = page.getByPlaceholder("Password");
        this.loginButton = page.locator("#login-button");

    }

    async goToUrl(url) {
        await this.page.goto(url);

    }

    async doLogin(userName, pwd) {
        await this.username.fill(userName)
        await this.password.fill(pwd)
        await this.loginButton.click()
    }
}