package testRunner;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features    = "/Users/palmauzzal/CucumberAutomation/src/main/java/features/Login.feature"
        , glue        = {"stepDefinition"}
        , dryRun      = false
        , monochrome  = true
        ,format = {"pretty", "html:TestResult", "json: TestReport"}
)
public class LoginTestRunner {
}
