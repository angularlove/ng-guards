import { GuardsPage } from './app.po';

describe('guards App', () => {
  let page: GuardsPage;

  beforeEach(() => {
    page = new GuardsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
