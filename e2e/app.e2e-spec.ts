import { InsightWeatherPage } from './app.po';

describe('insight-weather App', function() {
  let page: InsightWeatherPage;

  beforeEach(() => {
    page = new InsightWeatherPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
