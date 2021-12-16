Feature: Access About section on Capgemini home page
  User wants to access About section on Capgemini website

  Scenario: The cookie overlay should close on acceptance
    Given I am on the Capgemini home page
    When I click on Allow all cookies to accept cookies
    Then The cookies popoup should go away

  Scenario Outline: Window should navigate to selected navigation option
    Given I am on the Capgemini home page
      And  I click on Allow all cookies to accept cookies
    When I click "<navigationOption>"
    Then "<navigationOption>" is selected
    Examples:
      | navigationOption |
      | Industries       |
      | Services         |
      | Partners         |
      | Our Experts      |
      | Insights & News  |
      | About us         |
      | Career           |

  Scenario: User navigates to values and ethics through about us dropdown and select code of bussiness ethics
    Given I am on the Capgemini home page
      And  I click on Allow all cookies to accept cookies
    When I click on about us
      And click on company profile and key figure
      And click on corporate governance
    Then I should see "Corporate Governance"
