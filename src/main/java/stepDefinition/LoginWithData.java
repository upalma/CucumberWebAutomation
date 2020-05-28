package stepDefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class LoginWithData {
    public WebDriver driver;

    @Given("^user is already login page$")
    public void user_is_already_login_page()  {
        System.setProperty("webdriver.chrome.driver", "/Users/palmauzzal/CucumberAutomation/driver/chromedriver");
        driver = new ChromeDriver();
        driver.get("https://www.facebook.com/");
        driver.manage().deleteAllCookies();
        driver.manage().window().fullscreen();
        driver.manage().timeouts().implicitlyWait(3000, TimeUnit.MILLISECONDS);
    }

    @When("^user enters \"([^\"]*)\" user enters \"([^\"]*)\"$")
    public void user_enters_user_enters(String username, String password)  {
        driver.findElement(By.id("email")).sendKeys(username);
        driver.findElement(By.id("pass")).sendKeys(password);
    }

    @Then("^user clicks on login button$")
    public void user_clicks_on_login_button()  {
        driver.findElement(By.xpath("//*[@value='Log In']")).click();
    }

    @Then("^verify user successfully login on home page$")
    public void verify_user_successfully_login_on_home_page()  {
        String title = driver.getTitle();
        Assert.assertEquals(title, "Facebook - Log In or Sign Up");
        System.out.println(title);
    }

    @Then("^close the browser$")
    public void close_the_browser()  {
        driver.quit();
    }
}
