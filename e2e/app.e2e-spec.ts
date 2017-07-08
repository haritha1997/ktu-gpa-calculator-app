import { GpaAppPage } from './app.po';

describe('gpa-app App', () => {
  let page: GpaAppPage;

  beforeEach(() => {
    page = new GpaAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
