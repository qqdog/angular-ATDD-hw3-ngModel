import { Hw3NgModelPage } from './app.po';

describe('hw3-ng-model App', () => {
  let page: Hw3NgModelPage;

  beforeEach(() => {
    page = new Hw3NgModelPage();
  });

  it(`should have one button`, () => {
    page.navigateTo();
    expect(page.getButton().isPresent()).toBe(true);
  });

  it(`should show text 'Submit' on the button`, () => {
    page.navigateTo();
    expect(page.getButtonText()).toBe('Submit');
  });

  it(`should have one checkbox`, () => {
    page.navigateTo();
    expect(page.getCheckBox().isPresent()).toBe(true);
  });

  // it(`should show text 'I agree' right from the checkbox`, () => {
  //   page.navigateTo();
  //   expect(page.getCheckBoxText()).toBe('I agree');
  // });
});
