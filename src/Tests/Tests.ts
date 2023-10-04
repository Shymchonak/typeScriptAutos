import {Constants} from "../Pages/Constants";
import {MainPage} from "../Pages/MainPage";

const mainPage = new MainPage()

    afterEach(function () {
        let testCaseName: string | undefined = this.currentTest?.title;
        let testCaseStatus: "failed" | "passed" | "pending" | undefined = this.currentTest?.state;
        if (testCaseStatus === "failed") {
            console.log(`Test: ${testCaseName}, Status: Failed!`);
        } else if (testCaseStatus === "passed") {
            console.log(`Test: ${testCaseName}, Status: Passed!`);
        } else {
            console.log(`Test: ${testCaseName}, Status: Unknown!`);
        }
    });

    after(async function () {
        await mainPage.driver.quit()

    });


    it('Login check', async function() {
        this.timeout(0)
        await mainPage.openPage(Constants.url)
        await mainPage.login(Constants.valid_email, Constants.valid_password)

    })