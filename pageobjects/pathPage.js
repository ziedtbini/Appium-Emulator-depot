

const page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class pathPage extends page {
   /**
     * define selectors
     */
  
    static BUTTONS = {
        'Advans' : "com.example.myapplication:id/advans_button",
        'Avisto' : "com.example.myapplication:id/advans_button",
        'Elsys-design' : "com.example.myapplication:id/elsysdesign_button",
        'mecagine':"com.example.myapplication:id/mecagine_button",
        'agree' : "com.example.myapplication:id/secondpage_button",

    }
    
    static LABELS = {
        'question' : "com.example.myapplication:id/welcome.text",
        'Advans description' : "com.example.myapplication:id/advans_text",
        'Avisto description' : "com.example.myapplication:id/avisto_text",
        'Elsys-design description' : "com.example.myapplication:id/elsysdesign_text",
        'Mecagine description' : "com.example.myapplication:id/mecagine_text",
        }

    static LISTS = {       
    }

    static PICTURES = {
        'Advans': "com.example.myapplication:id/advans_picture",
        'Advans web picture': "body > div.wrapper > div > header > div > div > div.header_bottom.clearfix > div > div > div.header_inner_left > div.logo_wrapper > div > a > img.mobile",

    }
    static INPUTS = {
    }

    static CHECKBOXS = {  
    }

    static SELECTS = {    
    }

    static WIDGETS = {     
    }


}

module.exports = pathPage;
