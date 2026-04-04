import {test, expect} from '@playwright/test';

test('sort by price', async({page}) => {
    //Open Url
    await page.goto('https://www.saucedemo.com/');
    //Login
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    //Assertion
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.locator('.title')).toHaveText('Products')
    //sort product 
    await page.waitForSelector('.product_sort_container')
    await page.locator('.product_sort_container').selectOption('lohi');
    //validate sort 
    const pricetext = await page.locator('.inventory_item_price').allTextContents();
    const prices = pricetext.map(p => parseFloat(p.replace('$', '')))
    const sortedPrices = [...prices].sort((a,b) => a - b);
    expect(prices).toEqual(sortedPrices);

    const first_item = await page.locator('.inventory_item').first();
    const item_name = await first_item.locator('.inventory_item_name ').innerText();
    await (first_item).getByText('Add to cart').click()
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    await page.locator('.shopping_cart_link').click();

    await expect(page.getByText(item_name)).toBeVisible()

})
