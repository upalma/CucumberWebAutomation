$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/palmauzzal/CucumberAutomation/src/main/java/differentLoginFeatures/LoginWithData.feature");
formatter.feature({
  "line": 1,
  "name": "Facebook Login",
  "description": "",
  "id": "facebook-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Facebook Login under test",
  "description": "",
  "id": "facebook-login;facebook-login-under-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is already login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters \"\u003cusername\u003e\" user enters \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "verify user successfully login on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "facebook-login;facebook-login-under-test;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11,
      "id": "facebook-login;facebook-login-under-test;;1"
    },
    {
      "cells": [
        "palma_ub13@gmail.com",
        "abcdefghigj"
      ],
      "line": 12,
      "id": "facebook-login;facebook-login-under-test;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Facebook Login under test",
  "description": "",
  "id": "facebook-login;facebook-login-under-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is already login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters \"palma_ub13@gmail.com\" user enters \"abcdefghigj\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "verify user successfully login on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginWithData.user_is_already_login_page()"
});
formatter.result({
  "duration": 4063926565,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "palma_ub13@gmail.com",
      "offset": 13
    },
    {
      "val": "abcdefghigj",
      "offset": 48
    }
  ],
  "location": "LoginWithData.user_enters_user_enters(String,String)"
});
formatter.result({
  "duration": 367977095,
  "status": "passed"
});
formatter.match({
  "location": "LoginWithData.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 136256383,
  "status": "passed"
});
formatter.match({
  "location": "LoginWithData.verify_user_successfully_login_on_home_page()"
});
formatter.result({
  "duration": 3063945109,
  "status": "passed"
});
formatter.match({
  "location": "LoginWithData.close_the_browser()"
});
formatter.result({
  "duration": 100455534,
  "status": "passed"
});
});