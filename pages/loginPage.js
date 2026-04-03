export class LoginPage {
    constructor(page) {
        this.page = page;
        // SauceDemo actual selectors
        this.usernameInput = '#user-name';      // ✅ Correct selector
        this.passwordInput = '#password';       // ✅ Correct selector
        this.loginButton = '#login-button';     // ✅ Correct selector
        this.errorMessage = '[data-test="error"]'; // ✅ Error message locator
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }
    
    async login(username, password) {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
    }
    
    async getErrorMessage() {
        return await this.page.textContent(this.errorMessage);
    }
}