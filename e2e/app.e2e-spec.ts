import { Angular4MaterialBoilerplatePage } from './app.po';

describe('angular4-material-boilerplate App', () => {
  let page: Angular4MaterialBoilerplatePage;

  beforeEach(() => {
    page = new Angular4MaterialBoilerplatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
