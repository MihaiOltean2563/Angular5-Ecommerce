import { Angular2EcommercePage } from './app.po';

describe('angular2-ecommerce App', () => {
  let page: Angular2EcommercePage;

  beforeEach(() => {
    page = new Angular2EcommercePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
