import { QuirkyAppPage } from './app.po';

describe('quirky-app App', () => {
  let page: QuirkyAppPage;

  beforeEach(() => {
    page = new QuirkyAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
