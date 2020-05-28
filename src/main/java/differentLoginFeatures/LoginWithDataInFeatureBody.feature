Feature: Facebook Login
  Scenario: Facebook Login test scenario
    Given user is already login page
    When user enters "palma_ub13@yahoo.com" user enters "abcedadjkfdj"
    Then user clicks on login button
    Then verify user successfully login on home page
    Then close the browser
