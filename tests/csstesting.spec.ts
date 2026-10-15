import {test, expect, Locator} from '@playwright/test';

test (" CSS", async({page})=>{

    await page.goto('https://demowebshop.tricentis.com/');


    await page.getByText('Log in').click();


    /* Registration
    await page.getByRole('button', { name: 'Register' }).click();

    await page.getByRole('radio', { name: 'Male', exact: true }).check();
    await page.getByRole('textbox', { name: 'First name:' }).fill('Test');
    await page.getByRole('textbox', { name: 'Last name'}).fill('Test1');
    await page.getByRole('textbox', { name: 'Email'}).fill('test123@gmail.com');
    await page.getByRole('textbox', {name: 'Password:', exact: true}).fill('Test@123');
    await page.getByRole('textbox', {name: 'Confirm password:', exact: true}).fill('Test@123');
    await page.getByRole('button', {name: 'Register'}).click();
    */  

    // Login
    await page.getByRole('textbox', {name: 'Email:'}).fill('test3103@gmail.com');
    await page.getByRole('textbox', {name: 'Password:'}).fill('Test@123');
    await page.getByRole('button', {name: 'Log in'}).click();

    // await page.getByRole('link', { name: 'Electronics' }).first().hover();
    // await page.getByRole('link', { name: 'Cell phones' }).click();

     // Step 1: hover over the parent menu so the dropdown opens
    await page.locator('ul.top-menu > li > a[href="/electronics"]').hover();
    // Step 2: the link is now visible, so it can be clicked
    const option: Locator = page.locator('ul.top-menu a[href="/cell-phones"]');
    await option.click();

    const smartphoneoption: Locator = page.locator('h2.product-title a[href="/smartphone"]');
    await smartphoneoption.click();

    await page.getByRole('textbox', { name: 'Qty:', exact: true }).fill('2');

    const addToCartButton: Locator = page.locator('input#add-to-cart-button-43');
    await addToCartButton.click();
    await page.locator('li#topcartlink a[href="/cart"]').click();


    await page.locator('select#CountryId').click();
    
    const countryOption: Locator = page.locator('select#CountryId option[value="41"]');
    await countryOption.click();

    await page.getByRole('button', { name: 'estimateshipping'}).click();

    await page.locator('input#termsofservice').check();
    await page.waitForTimeout(10000);



    // await expect(page).toHaveURL(/cell-phones/);

    // const option: Locator = page.locator('ul.sublist.firstlevel a[href="/cell-phones"]');
    // await option.click();
})
