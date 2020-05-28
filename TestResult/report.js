$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/palmauzzal/CucumberAutomation/src/main/java/differentLoginFeatures/LoginWithDataInFeatureBody.feature");
formatter.feature({
  "line": 1,
  "name": "Facebook Login",
  "description": "",
  "id": "facebook-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Facebook Login test scenario",
  "description": "",
  "id": "facebook-login;facebook-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "user is already login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user enters \"palma_ub13@yahoo.com\" user enters \"abcedadjkfdj\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "verify user successfully login on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginDataInBody.user_is_already_login_page()"
});
formatter.result({
  "duration": 4062962392,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "palma_ub13@yahoo.com",
      "offset": 13
    },
    {
      "val": "abcedadjkfdj",
      "offset": 48
    }
  ],
  "location": "LoginDataInBody.user_enters_user_enters(String,String)"
});
formatter.result({
  "duration": 329488223,
  "status": "passed"
});
formatter.match({
  "location": "LoginDataInBody.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 156788965,
  "status": "passed"
});
formatter.match({
  "location": "LoginDataInBody.verify_user_successfully_login_on_home_page()"
});
formatter.result({
  "duration": 9737994126,
  "status": "passed"
});
formatter.match({
  "location": "LoginDataInBody.close_the_browser()"
});
formatter.result({
  "duration": 102418653,
  "status": "passed"
});
});