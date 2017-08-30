import { DADAPage } from './app.po';

describe('dada App', () => {
  let page: DADAPage;

  beforeEach(() => {
    page = new DADAPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
