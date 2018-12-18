import { ShopAPPPage } from './app.po';

describe('shop-app App', function() {
  let page: ShopAPPPage;

  beforeEach(() => {
    page = new ShopAPPPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
