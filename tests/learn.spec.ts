import {test, expect} from "@playwright/test";

test ("Verify", async ({page})=>{

    await page.goto("https://www.youtube.com/");

    let sd:string = await page.title();
    console.log("This is header", sd);

    await expect(page).toHaveTitle("YouTube");

})