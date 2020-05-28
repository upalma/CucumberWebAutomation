$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/palmauzzal/CucumberAutomation/src/main/java/differentLoginFeatures/LoginMultipleUsers.feature");
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
  "name": "verify user successfully login on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "facebook-login;facebook-login-under-test;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10,
      "id": "facebook-login;facebook-login-under-test;;1"
    },
    {
      "cells": [
        "hira.gomes13@yahoo.com",
        "udoiuidfjd2"
      ],
      "line": 11,
      "id": "facebook-login;facebook-login-under-test;;2"
    },
    {
      "cells": [
        "palma_ub13@gmail.com",
        "abcdefghigj"
      ],
      "line": 12,
      "id": "facebook-login;facebook-login-under-test;;3"
    },
    {
      "cells": [
        "palma_ub13@yahoo.com",
        "0171dfk0122"
      ],
      "line": 13,
      "id": "facebook-login;facebook-login-under-test;;4"
    },
    {
      "cells": [
        "hira.gomes13@gmail.com",
        "udifjidfjd2"
      ],
      "line": 14,
      "id": "facebook-login;facebook-login-under-test;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
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
  "name": "user enters \"hira.gomes13@yahoo.com\" user enters \"udoiuidfjd2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
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
  "location": "MultipleUsersLoginTest.user_is_already_login_page()"
});
formatter.result({
  "duration": 4446840881,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hira.gomes13@yahoo.com",
      "offset": 13
    },
    {
      "val": "udoiuidfjd2",
      "offset": 50
    }
  ],
  "location": "MultipleUsersLoginTest.user_enters_user_enters(String,String)"
});
formatter.result({
  "duration": 462923614,
  "status": "passed"
});
formatter.match({
  "location": "MultipleUsersLoginTest.verify_user_successfully_login_on_home_page()"
});
formatter.result({
  "duration": 9562403795,
  "status": "passed"
});
formatter.match({
  "location": "MultipleUsersLoginTest.close_the_browser()"
});
formatter.result({
  "duration": 102974843,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Facebook Login under test",
  "description": "",
  "id": "facebook-login;facebook-login-under-test;;3",
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
  "name": "verify user successfully login on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MultipleUsersLoginTest.user_is_already_login_page()"
});
formatter.result({
  "duration": 2789366170,
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
  "location": "MultipleUsersLoginTest.user_enters_user_enters(String,String)"
});
formatter.result({
  "duration": 483432733,
  "status": "passed"
});
formatter.match({
  "location": "MultipleUsersLoginTest.verify_user_successfully_login_on_home_page()"
});
formatter.result({
  "duration": 2274323096,
  "status": "passed"
});
formatter.match({
  "location": "MultipleUsersLoginTest.close_the_browser()"
});
formatter.result({
  "duration": 143659992,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Facebook Login under test",
  "description": "",
  "id": "facebook-login;facebook-login-under-test;;4",
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
  "name": "user enters \"palma_ub13@yahoo.com\" user enters \"0171dfk0122\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
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
  "location": "MultipleUsersLoginTest.user_is_already_login_page()"
});
formatter.result({
  "duration": 2775744540,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "palma_ub13@yahoo.com",
      "offset": 13
    },
    {
      "val": "0171dfk0122",
      "offset": 48
    }
  ],
  "location": "MultipleUsersLoginTest.user_enters_user_enters(String,String)"
});
formatter.result({
  "duration": 488443962,
  "status": "passed"
});
formatter.match({
  "location": "MultipleUsersLoginTest.verify_user_successfully_login_on_home_page()"
});
formatter.result({
  "duration": 8034541570,
  "status": "passed"
});
formatter.match({
  "location": "MultipleUsersLoginTest.close_the_browser()"
});
formatter.result({
  "duration": 106002872,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Facebook Login under test",
  "description": "",
  "id": "facebook-login;facebook-login-under-test;;5",
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
  "name": "user enters \"hira.gomes13@gmail.com\" user enters \"udifjidfjd2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
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
  "location": "MultipleUsersLoginTest.user_is_already_login_page()"
});
formatter.result({
  "duration": 2831865482,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hira.gomes13@gmail.com",
      "offset": 13
    },
    {
      "val": "udifjidfjd2",
      "offset": 50
    }
  ],
  "location": "MultipleUsersLoginTest.user_enters_user_enters(String,String)"
});
formatter.result({
  "duration": 473771048,
  "status": "passed"
});
formatter.match({
  "location": "MultipleUsersLoginTest.verify_user_successfully_login_on_home_page()"
});
formatter.result({
  "duration": 5062920503,
  "status": "passed"
});
formatter.match({
  "location": "MultipleUsersLoginTest.close_the_browser()"
});
formatter.result({
  "duration": 104169219,
  "status": "passed"
});
});