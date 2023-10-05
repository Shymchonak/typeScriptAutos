import {Constants} from "./Constants";
import {BasePage} from "../Pages/BasePage";
import { LoginLocators, CommunityLocators } from "./Locators";
import {until, WebElement} from "selenium-webdriver";
import { Builder, Capabilities, WebDriver ,By,WebElementCondition} from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';
import { Utils } from "./utils";
import {LoginPage} from "./LoginPage"
import { CommandExecutor } from "selenium-webdriver/safari";


export class MainPage extends LoginPage{

   async addCommunity() {
    await this.clickElement(CommunityLocators.COMMUNITY_BTN)
   //  await this.clickElement(CommunityLocators.COMMUNITY_BTN_ADD)
   //  await Utils.delay(Constants.delay)
   //  await this.sendMeaning(Constants.community_name, CommunityLocators.COMMUNITY_NAME_ENTER)
   //  await Utils.delay(Constants.delay)
   //  await this.clickElement(CommunityLocators.COMMUNITY_PRIVACY)
   //  await Utils.delay(Constants.delay)
   //  await this.clickElement(CommunityLocators.COMMUNITY_PRIVACY_SELECT)
   //  await Utils.delay(Constants.delay)
   //  await this.clickElement(CommunityLocators.COMMUNITY_STATUS)
   //  await Utils.delay(Constants.delay)
   //  await this.clickElement(CommunityLocators.COMMYNITY_STATUS_SELECT)
   //  await Utils.delay(Constants.delay)
   //  await this.clickElement(CommunityLocators.COMMUNITY_BTN_CREATE)
   //  await Utils.delay(Constants.delay)
      await this.clickElement(CommunityLocators.COMMUNITY_BTN_MANAGE)
      await Utils.delay(Constants.delay)
      await this.clickElement(CommunityLocators.COMMUNITY_BTN_SELECT)
      await Utils.delay(Constants.delay)
    await this.validationField(CommunityLocators.COMMUNITY_NAME_ENTER,Constants.community_name)
    await Utils.delay(Constants.delay)
    await this.validationField(CommunityLocators.COMMUNITY_PRIVACY,Constants.community_privacy_name)
    await Utils.delay(Constants.delay)
    await this.validationField(CommunityLocators.COMMUNITY_STATUS,Constants.community_status_name)
   }

}