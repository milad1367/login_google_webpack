import { LoginGoogleWebpackPage } from './app.po';

describe('login-google-webpack App', function() {
  let page: LoginGoogleWebpackPage;

  beforeEach(() => {
    page = new LoginGoogleWebpackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
