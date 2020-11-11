import fetch from 'node-fetch';
import cheerio from 'cheerio';

const BASE_URL = 'https://www.gsmarena.com';

export const getAllBrands = async () => {
  try {
    const response = await fetch(`${BASE_URL}/makers.php3`);
    const html = await response.text();
    const $ = cheerio.load(html);
    let json = [];
    let brands = $('table').find('td');
    brands.each((i, el) => {
      let brand = {
        name: $(el)
          .find('a')
          .text()
          .replace(' devices', '')
          .replace(/[0-9]/g, ''),
        devices: $(el).find('span').text().replace(' devices', ''),
        url: $(el).find('a').attr('href'),
      };
      json.push(brand);
    });

    return json;
  } catch (error) {
    throw new Error(error);
  }
};
