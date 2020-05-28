Feature: Facebook Login

  Scenario Outline: Facebook Login under test
    Given user is already login page
    When user enters "<username>" user enters "<password>"
    Then user clicks on login button
    Then verify user successfully login on home page
    Then close the browser

    Examples:
      |username                 |password     |
      |palma_ub13@gmail.com     |abcdefghigj  |