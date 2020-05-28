package stepDefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class StepDefinition {
WebDriver driver = null;
    @Given("^user is in login Page$")
    public void user_is_in_login_Page()  {
        System.setProperty("webdriver.chrome.driver", "/Users/palmauzzal/CucumberAutomation/driver/chromedriver");
        driver = new ChromeDriver();
        driver.get("https://www.facebook.com/");
        driver.manage().deleteAllCookies();
        driver.manage().window().fullscreen();
        driver.manage().timeouts().implicitlyWait(3000, TimeUnit.MILLISECONDS);
    }

    @When("^user enter username and password$")
    public void user_enter_username_and_password()  {
        driver.findElement(By.id("email")).sendKeys("palma_ub13@yahoo.com");
        driver.findElement(By.id("pass")).sendKeys("djfkdsjfksj");
        driver.findElement(By.xpath("//*[@value='Log In']")).click();
    }

    @Then("^verify user successfully login$")
    public void verify_user_successfully_login()  {
        String title = driver.getTitle();
        //Assert.assertEquals(title, "Facebook - Log In or Sign Up");
        System.out.println(title);
    }

    @Then("^exit the browser$")
    public void exit_the_browser()  {
        driver.quit();
    }
}
