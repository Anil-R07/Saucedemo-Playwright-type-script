import { Page, expect } from '@playwright/test';

export class CartPage {
    constructor(private page: Page) {}
    
    async verifyItemCount(count: number) {
        const items = await this.page.locator('.cart_item').count();
        expect(items).toBe(count);
    }
    async removeProduct(product: string) {
        await this.page
        .locator('.cart_item')
        .filter({ hasText: product })
        .getByRole('button', { name: 'Remove' })
        .click();
    }
    async lowestPricedProductValidation(expectedName: string) {
    const productNames = await this.page.locator('.inventory_item_name').allTextContents();
    expect(productNames).toContain(expectedName);
    }
}