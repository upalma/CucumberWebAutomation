$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/palmauzzal/CucumberAutomation/src/main/java/features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "",
  "description": "",
  "id": "",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Login in test",
  "description": "",
  "id": ";login-in-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "user is in login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user enter username and password",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "verify user successfully login",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "exit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_is_in_login_Page()"
});
formatter.result({
  "duration": 4487150293,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enter_username_and_password()"
});
formatter.result({
  "duration": 479891174,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.verify_user_successfully_login()"
});
formatter.result({
  "duration": 12515018341,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.exit_the_browser()"
});
formatter.result({
  "duration": 109141586,
  "status": "passed"
});
});