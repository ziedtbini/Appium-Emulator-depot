/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/

module.exports = class page {
   
    static async getElementRessourceID (ressourceID) {
      const selector = 'new UiSelector().resourceIdMatches("'+ressourceID+'")'
      const element =   $(`android=${selector}`)
      return element
    }

    static async switchToWebContext() {
      await browser.pause(2500);
      let contextNames = await browser.getContexts();
      await browser.switchContext(contextNames[1]);
     }

    static async switchToNativeContext() {
      await browser.pause(2500);
      let contextNames = await browser.getContexts();
      await browser.switchContext(contextNames[0]);
    }
    
    static async getElementCss(cssID) {
      const el = await $(''+cssID+'')
      return el
    }
}
