import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
  let browser;
  let page;
  beforeAll(async () => {
    jest.setTimeout(30000);
    browser = await puppeteer
      .launch
      //   ({
      //   headless: false,
      //   slowMo: 250,
      //   ignoreDefaultArgs: ['-disable-extensions'],
      // });
      ();
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.event .event-details');
    expect(eventDetails).toBeNull();
  });

  test('User can expand an event to see its details', async () => {
    await page.click('.event .btn-details');
    const eventDetails = await page.$('.event .event-details');
    expect(eventDetails).toBeDefined();
  });

  test('User can collapse an event to hide its details', async () => {
    await page.click('.event .event-details');
    const eventDetails = await page.$('.event event-details');
    expect(eventDetails).toBeNull();
  });
});

describe('filter events by city', () => {
  let browser;
  let page;
  jest.setTimeout(30000);
  beforeAll(async () => {
    browser = await puppeteer
      .launch
      // ({
      //   headless: false,
      //   slowMo: 250,
      //   ignoreDefaultArgs: ['-disable-extensions'],
      // });
      ();
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
  });

  afterAll(() => {
    browser.close();
  });

  test("When user hasn't searched for a city, show upcoming events from all cities", async () => {
    await page.waitForSelector('.EventList');
    const eventCount = (await page.$$('.event')).length;
    expect(eventCount).toBe(6);
  });

  test('User should see a list of suggestions when they searched for a city', async () => {
    await page.waitForSelector('.CitySearch');
    await page.type('#city-search', 'Berlin');
    const suggestionCount = (await page.$$('.suggestions li')).length;
    expect(suggestionCount).toBe(2);
  });

  test('User can select a city from the suggested list', async () => {
    await page.reload();
    await page.waitForSelector('.CitySearch');
    await page.type('#city-search', 'Berlin');
    await page.click('.suggestions li');
    const eventCount = (await page.$$('.event')).length;
    expect(eventCount).toBe(3);
  });
});
