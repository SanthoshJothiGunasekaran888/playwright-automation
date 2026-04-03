class HomePage {
    constructor(page) {
        this.page = page;
        this.welcomeMessage = '.welcome-message';
        this.logoutButton = '#logout';
    }

    async getWelcomeText() {
        return await this.page.textContent(this.welcomeMessage);
    }

    async isLoggedIn() {
        return await this.page.isVisible(this.welcomeMessage);
    }

    async logout() {
        await this.page.click(this.logoutButton);
    }
}

module.exports = { HomePage };