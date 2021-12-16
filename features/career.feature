Feature: Access Career section on Capgemini home page and search for jobs
    User wants to access About section on Capgemini website

    Scenario: The cookie overlay should close on acceptance
        Given I am on the Capgemini career page
        When I click on Allow all cookies to accept cookies
        Then The cookies popoup should go away

    Scenario: On career page look for a job
        Given I am on the Capgemini career page
            And I click on Allow all cookies to accept cookies
        When I insert "test engineer" in job search bar
        Then A list of jobs should be displayed

    Scenario: Job details page should have an option to apply
        Given I am on the Capgemini career page
            And I click on Allow all cookies to accept cookies
        When I insert "test engineer" in job search bar
            And click on the first link form results
        Then A job detail page should be displayed
            And Apply Now button should be available