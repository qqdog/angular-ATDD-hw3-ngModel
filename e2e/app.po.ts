import { browser, element, by } from 'protractor';

export class Hw3NgModelPage {
  navigateTo(): Hw3NgModelPage {
    browser.get('/');
    return this;
  }

  getButton(): any {
    return element(by.id('atdd-button'));
  }

  getButtonText(): any {
    return element(by.id('atdd-button')).getText();
  }

  getCheckBox(): any {
    return element(by.id('atdd-checkbox'));
  }

  // getCheckBoxText(): any {
  //   return element(by.id('atdd-checkbox'));
  // }
}
