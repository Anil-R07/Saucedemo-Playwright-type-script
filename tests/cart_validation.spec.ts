import {test, expect} from '@playwright/test';

test('login test', async ({ page }) => {
  //Open Url
  await page.goto('https://www.saucedemo.com/');
  //Login
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  //Assertion
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await expect(page.locator('.title')).toHaveText('Products');
  //add product to cart 
  await page
    .locator('.inventory_item')
    .filter({hasText:'Sauce Labs Backpack'})
    .getByText('Add to cart')
    .click();
  await page
    .locator('.inventory_item')
    .filter({hasText:'Sauce Labs Bike Light'})
    .getByText('Add to cart')
    .click();
  //Cart validation
  const shopping_cart_badge= page.locator('.shopping_cart_badge');
  await expect(shopping_cart_badge).toHaveText('2');
  await shopping_cart_badge.click();
  const quantity = page.locator('.cart_item');
  await expect(quantity).toHaveCount(2);
  //Remove an item from cart 
  await page
    .locator('.cart_item')
    .filter({hasText:'Sauce Labs Backpack'})
    .getByRole('button', {name:'Remove'})
    .click();
  await expect(quantity).toHaveCount(1);
});