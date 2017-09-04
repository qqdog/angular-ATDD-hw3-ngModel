import { Hw3NgModelPage } from './app.po';

describe('hw3-ng-model App', () => {
  let page: Hw3NgModelPage;

  beforeEach(() => {
    page = new Hw3NgModelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
