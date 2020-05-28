Feature:
  Scenario: Login in test
    Given user is in login Page
    When user enter username and password
    Then verify user successfully login
    Then exit the browser
