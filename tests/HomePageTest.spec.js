const {test, expect} = require('@playwright/test') // Import Playwright test module

test('Home Page' ,async ({page})=> {

    await page.goto('https://www.demoblaze.com/index.html'); // Navigate to the home page
    

    const pageTitle = await page.title();
    console.log('page title is:' , pageTitle); // Log the page title     await expect(page).toHaveTitle('STORE'); // Assert that the page title is 'STORE'

    const pageURL = page.url();
    console.log('page url is:', pageURL); // Log the page URL

    await expect(page).toHaveURL('https://www.demoblaze.com/index.html'); // Assert that the page URL is correct 
     
    await page.close(); // Close the page after the test 
}) 