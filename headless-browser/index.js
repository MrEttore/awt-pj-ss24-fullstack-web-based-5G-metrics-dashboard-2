"use strict";

require("dotenv").config({ path: "../.env.local" });

const { Builder, By, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

// import login data
const authUrl = process.env.AUTH_LINK;
const email = process.env.EMAIL;
const password = process.env.PW;

async function openChrome() {
  // Create ChromeOptions object to customize Chrome's behavior
  const chromeOptions = new chrome.Options();

  // Add any options you need here, e.g., headless mode

  // chromeOptions.addArguments("--headless"); // Runs Chrome without opening a graphical user interface

  chromeOptions.addArguments("--start-maximized"); // Sets the initial window size of the browser window

  chromeOptions.addArguments("--incognito"); // Starts the browser in incognito mode, which doesn't save browsing history or cookies

  chromeOptions.addArguments("--disable-infobars"); // Disables infobars, such as the "Chrome is being controlled by automated test software" infobar

  chromeOptions.addArguments("--auto-open-devtools-for-tabs"); // Opens the dev tools when windows spaws

  chromeOptions.setLoggingPrefs({ performance: "ALL" });

  console.log(chromeOptions);

  // Create a new WebDriver instance
  const driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(chromeOptions)
    .build();

  try {
    // Open the authentication page
    await driver.get(authUrl);

    // Find the email and password input fields by their CSS selector or XPath
    const emailInput = await driver.findElement(By.id("username"));
    const passwordInput = await driver.findElement(By.id("password"));

    // Fill in the email and password fields
    await emailInput.sendKeys(email);
    await passwordInput.sendKeys(password);

    // Find and click the login button
    const loginButton = await driver.findElement(By.id("kc-login"));
    await loginButton.click();

    // Wait until the cookie button is visible before clicking it
    const cookieButton = await driver.wait(
      until.elementLocated(
        By.xpath("/html/body/app-root/oaibox-cookies-consent/div/button")
      ),
      10000 // Timeout in milliseconds
    );
    await cookieButton.click();

    // Enable Chrome DevTools Protocol
    await driver.sendDevToolsCommand("Page.enable");

    // Open DevTools using CDP
    await driver.sendDevToolsCommand("Inspector.enable");

    // TODO: Access DevTools ...
    // Access DevTools
    // await driver.sleep(10000);
    // await driver.sendDevToolsCommand("Page.enable");
    // await driver.sendDevToolsCommand("Network.enable");
    // await driver.sendDevToolsCommand("Performance.enable");

    // await driver.sleep(10000);

    // Close the browser
    // await driver.quit();
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

openChrome();
