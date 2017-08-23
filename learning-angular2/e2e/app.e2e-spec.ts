import { AkakuraAng2Page } from './app.po';

describe('akakura-ang2 App', () => {
  let page: AkakuraAng2Page;

  beforeEach(() => {
    page = new AkakuraAng2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
