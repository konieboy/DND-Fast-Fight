import { DNDFastFightPage } from './app.po';

describe('dndfast-fight App', () => {
  let page: DNDFastFightPage;

  beforeEach(() => {
    page = new DNDFastFightPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
