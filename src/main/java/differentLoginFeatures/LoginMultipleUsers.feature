Feature: Facebook Login

  Scenario Outline: Facebook Login under test
    Given user is already login page
    When user enters "<username>" user enters "<password>"
    Then verify user successfully login on home page
    Then close the browser

    Examples:
      |username                 |password     |
      |hira.gomes13@yahoo.com   |udoiuidfjd2  |
      |palma_ub13@gmail.com     |abcdefghigj  |
      |palma_ub13@yahoo.com     |0171dfk0122  |
      |hira.gomes13@gmail.com   |udifjidfjd2  |



#Feature: Free CRM create new contacts
#  Scenario Outline: Free CRM a new contact scenario
#    Given user is already login page
#    When title of login page is Free CRM
#    Then user enters "<username>" user enters "<password>"
#    Then user clicks on login button
#    Then user in on home page
#    Then user moves to new contact page
#    Then user enters new contact "<firstName>" and "<lastName>" and "<position>"
#    Then close the browser
#
#
#Examples:
#|username   |password   |firstName  |lastName   |position   |
#|naveenk    |test@123   |Uzzal      |Palma      |Manager    |
#|naveenk    |test@123   |Nevan      |Palma      |Director   |



