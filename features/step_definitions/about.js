const { Given, When, Then } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const { expect } = require('chai');

const paths = { 
     "Industries" : "industries",      
     "Services" : "our-services",        
     "Partners" : "global-technology-partners",   
     "Our Experts" : "experts",
     "Insights & News" : "insights-news",
     "About us" : "our-company",       
     "Career" : "careers"          
}

Given('I am on the Capgemini home page', async function () {
    await this.driver.get('https://www.capgemini.com/au-en/');
});

When('I click on Allow all cookies to accept cookies', async function () {
    const element = await this.driver.findElement(By.css("#macs_cookies_accept_all"));
    element.click()
});

Then('The cookies popoup should go away', async function () {
    const popup = await this.driver.findElement(By.css("#popup-cookieConsent"));
    const isPopupDisplayed = await popup.isDisplayed()
    expect(isPopupDisplayed).to.be.false
});

When('I click {string}', async function (lineItem) {
    const element = await this.driver.findElement(By.linkText(lineItem));
    await element.click();
});

Then('{string} is selected', async function (lineItem) {
    await this.driver.wait(until.urlContains(paths[lineItem]), 3000);
    await this.driver.getCurrentUrl().then( currentUrl => expect(currentUrl).to.include(paths[lineItem]))
});

When('I click on about us', async function () {
    await this.driver.findElement(By.css("#menu-item-3070 a")).click();
});

When('click on company profile and key figure', async function () {
    await this.driver.wait(until.urlContains("our-company"), 3000);
    await this.driver.findElement(By.linkText("Company Profile & Key Figures")).click();
});

When('click on corporate governance', async function () {
    await this.driver.wait(until.urlContains("company-profile-key-figures"), 3000);
    await this.driver.findElement(By.linkText("Corporate Governance")).click();
});

Then('I should see {string}', async function (string) {
    const element = await this.driver.findElement(By.css(".hero_default__title"));
    const elemText = await element.getText()
    expect(elemText).to.equal(string)
});