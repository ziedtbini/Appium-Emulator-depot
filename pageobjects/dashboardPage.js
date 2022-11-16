

const page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class dashboardPage extends page {
    /**
     * define selectors using getter methods
     */
  
     static BUTTONS = {
        'agree' : "com.example.myapplication:id/secondpage_button",
    }

    static INPUTS = {
        '' : "",
    }

    static CHECKBOXS = {  
    }

    static SELECTS = {    
    }

    static LABELS = {
        'welcome' : "com.example.myapplication:id/welcome.text",
        'welcome description' : "com.example.myapplication:id/welcomeDescription.text",
        "coockies" : "com.example.myapplication:id/cookiestext",
        'question' : "com.example.myapplication:id/welcome.text",
        }

    static LISTS = {       
    }

    static PICTURES = {

    }

    static WIDGETS = {     
    }



}


module.exports = dashboardPage;
