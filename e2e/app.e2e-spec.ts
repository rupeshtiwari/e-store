import { EStorePage } from './app.po';

describe('e-store App', () => {
  let page: EStorePage;

  beforeEach(() => {
    page = new EStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
