const { setWorldConstructor, World } = require('@cucumber/cucumber')
const seleniumWebdriver = require('selenium-webdriver')

class CustomWorld extends World {
    driver = new seleniumWebdriver.Builder()
        .forBrowser('chrome')
        .build()
        
    constructor(options) {
        super(options)
    }
}

setWorldConstructor(CustomWorld)