const { Given, When, Then } = require('@wdio/cucumber-framework');
const dashboardPage= require('../pageobjects/dashboardPage');
const pathPage = require('../pageobjects/pathPage');

const pages = {
    "dashboard" : dashboardPage,
    "path" : pathPage
}

Given('I am on {string} page',async(expectedPage) => { 
   await browser.reset();
    currentPage = pages[expectedPage];
    if(expectedPage=="path")
    {    
   let agreeButton = await currentPage.getElementRessourceID(currentPage.BUTTONS["agree"]);
   await agreeButton.waitForDisplayed({ timeout: 60000 });
   await agreeButton.click();
    }
});

When('I click on the {string} button',async(button) => {
    let newButton = await currentPage.getElementRessourceID(currentPage.BUTTONS[button]);
    await newButton.waitForDisplayed({ timeout: timeOut });
    await newButton.click();
    });

Then('I can see the {string} text displayed',async(label) => {
    await expect((await currentPage.getElementRessourceID(currentPage.LABELS[label]))).toBeDisplayed();
    });  

Then('I can see the {string} label is equal to {string}',async(label,expectedLabel) => {
    let labelText = await currentPage.getElementRessourceID(currentPage.LABELS[label]);
    await labelText.waitForDisplayed({ timeout: timeOut });
    let text = await labelText.getText();
    await expect(text).toEqual(expectedLabel);
    });

Then('I can see {string} photo dispayed',async(photo) => {
    await expect((await currentPage.getElementRessourceID(currentPage.PICTURES[photo]))).toBeDisplayed();
    });

When('I can see the {string} web picture displayed',async(photo) => {
    await browser.pause(10000);
    await currentPage.switchToWebContext();
    let newPhoto = await currentPage.getElementCss(currentPage.PICTURES[photo]); 
    await newPhoto.waitForDisplayed({ timeout: timeOut });
    await expect(newPhoto).toBeDisplayed();
    await currentPage.switchToNativeContext();
    });
     
      