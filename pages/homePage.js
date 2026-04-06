export class HomePage {
    constructor(page) {
        this.page = page;
        this.welcomeMessage = '.app_logo';
        this.logoutButton = '#logout';
        this.menuButton = '#react-burger-menu-btn';
        this.cartIcon = '.shopping_cart_link';
    }

    async getWelcomeText() {
        return await this.page.textContent(this.welcomeMessage);
    }

    async isLoggedIn() {
        return await this.page.isVisible(this.welcomeMessage);
    }

    async verifyLogoText() {
        const logoText = await this.page.textContent(this.welcomeMessage);
        return logoText === 'Swag Labs';
    }

    async waitForLogo() {
        await this.page.waitForSelector(this.welcomeMessage, { state: 'visible' });
    }

    async getLogoColor() {
        return await this.page.$eval(this.welcomeMessage, el => {
            return window.getComputedStyle(el).color;
        });
    }

    async getLogoFontSize() {
        return await this.page.$eval(this.welcomeMessage, el => {
            return window.getComputedStyle(el).fontSize;
        });
    }

    async isLogoClickable() {
        const logo = this.page.locator(this.welcomeMessage);
        return await logo.isEnabled();
    }

    async logout() {
        await this.page.click(this.menuButton);
        await this.page.waitForSelector(this.logoutButton, { state: 'visible' });
        await this.page.click(this.logoutButton);
    }

    async addToCart(itemName) {
        const addToCartButton = this.page
            .locator('.inventory_item', { hasText: itemName })
            .locator('button', { hasText: 'Add to cart' });
        await addToCartButton.click();
    }

    async removeFromCart(itemName) {
        const removeFromCartButton = this.page
            .locator('.inventory_item', { hasText: itemName })
            .locator('button', { hasText: 'Remove' });
        await removeFromCartButton.click();
    }
}