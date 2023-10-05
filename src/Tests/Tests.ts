import {Constants} from "../Pages/Constants";
import { LoginLocators } from "../Pages/Locators";
import {MainPage} from "../Pages/MainPage";
import { BasePage } from "../Pages/BasePage";

const mainPage = new MainPage()

describe('Community Test', function () {
    afterEach(async function () {
        let testCaseName: string | undefined = this.currentTest?.title;
        let testCaseStatus: "failed" | "passed" | "pending" | undefined = this.currentTest?.state;
        if (testCaseStatus === "failed") {
            console.log(`Test: ${testCaseName}, Status: Failed!`);
        } else if (testCaseStatus === "passed") {
            console.log(`Test: ${testCaseName}, Status: Passed!`);
        } else {
            console.log(`Test: ${testCaseName}, Status: Unknown!`);
        }
        await mainPage.driver.quit()
    });

    before(async function () {
        await mainPage.driver.quit()
    });

    beforeEach(async function () {await mainPage.createDriver()})

    // it('Login check', async function() {
    //     this.timeout(0)
    //     await mainPage.openPage(Constants.url)
    //     await mainPage.login(Constants.valid_email, Constants.valid_password)
    //     await mainPage.checkLogout()
    // });

    // it('Alert check', async function() {
    //     this.timeout(0)
    //     await mainPage.openPage(Constants.url)
    //     await mainPage.login(Constants.invalid_email, Constants.invalid_password)
    //     await mainPage.checkInvalidInput()
    // });

    it('Add new community', async function() {
        this.timeout(0)
        await mainPage.openPage(Constants.url)
        await mainPage.login(Constants.valid_email, Constants.valid_password)
        await mainPage.addCommunity()
    });
});