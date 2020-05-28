package testRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features    = "/Users/palmauzzal/CucumberAutomation/src/main/java/differentLoginFeatures/LoginMultipleUsers.feature"
        , glue        = {"multipleUsers"}
       , dryRun      = false
        , monochrome  = true
        ,format = {"pretty", "html:TestResult", "json: TestReport"}
)
public class LoginTestRunner {
}
