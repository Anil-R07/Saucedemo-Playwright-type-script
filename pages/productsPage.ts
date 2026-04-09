import { Page, expect } from '@playwright/test';

export class ProductsPage {
    constructor(private page: Page) {}

    async verifyLoginSucces() {
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
        await expect(this.page.locator('.title')).toHaveText('Products');
    }
    async addProducts(product: string) {
        await this.page
        .locator('.inventory_item')
        .filter({ hasText: product })
        .getByText('Add to cart')
        .click();
    }
    async verifyCartCount(count: string) {
        await expect(this.page.locator('.shopping_cart_badge')).toHaveText(count);
    }
    async openCart() {
        await this.page.locator('.shopping_cart_badge').click()
    }
}