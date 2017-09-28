import { ChangedetectionPage } from './app.po';

describe('changedetection App', () => {
  let page: ChangedetectionPage;

  beforeEach(() => {
    page = new ChangedetectionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
