export class yourCart {
    constructor(page) {
        this.page = page;
        this.welcomeMessage = '.app_logo';
        this.logoutButton = '#logologout_sidebar_linkut';
        this.menuButton = '#react-burger-menu-btn';
        this.cartIcon = '.shopping_cart_link';
        this.checkout = '[data-test="checkout"]';
    }

    async clickCheckout() {
        await this.page.click(this.checkout);
    }
}