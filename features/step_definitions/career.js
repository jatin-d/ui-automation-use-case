const { Given, When, Then } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const { expect } = require('chai');

Given('I am on the Capgemini career page', async function () {
    await this.driver.get('https://www.capgemini.com/au-en/careers/');
});

When('I insert {string} in job search bar', async function (searchText) {
    const searchInput = await this.driver.findElement(By.name("search_term"));
    await searchInput.sendKeys(searchText)
    const submitButton = await this.driver.findElement(By.css(".single-input__submit"));
    await submitButton.click()
});

Then('A list of jobs should be displayed', async function () {
    const searchOutput = await this.driver.findElement(By.className("container-full"));
    expect(searchOutput).to.exist;
});

When('click on the first link form results', async function () {
    await this.driver.findElement(By.xpath("/html/body/section/section/div/div/div[1]/div/div[1]/h3/a")).click();
});

Then('A job detail page should be displayed', async function () {
    await this.driver.wait(until.urlContains("/au-en/jobs"), 3000)
});

When('Apply Now button should be available', async function () {
    const applyNow = await this.driver.findElement(By.linkText("Apply now"));
    expect(applyNow).to.exist;
});

