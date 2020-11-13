import fetch from 'node-fetch';
import cheerio from 'cheerio';
import mongoose from 'mongoose';


const BASE_URL = 'https://www.gsmarena.com';

const brandSchema = new mongoose.Schema(
  {
    name: String,
    devices: String,
  },


);

const Brands = mongoose.model('brand', brandSchema);
export default Brands;

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
        // url: $(el).find('a').attr('href'),
      };
      json.push(brand);
    });

    return json;
  } catch (error) {
    throw new Error(error);
  }
};

export const getOneBrand = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}/${query}`);
    const html = await response.text();
    const $ = cheerio.load(html);
    const json = [];

    // Get all list phone
    const phones = $('.makers').find('li');
    phones.each((i, el) => {
      const phone = {
        name: $(el).find('span').text(),
        img: $(el).find('img').attr('src'),
        url: $(el).find('a').attr('href'),
        description: $(el).find('img').attr('title'),
      };
      json.push(phone);
    });

    // get next and prev page link
    const nextPage = $('a.pages-next').attr('href');
    const prevPage = $('a.pages-prev').attr('href');

    return {
      data: json,
      next: nextPage,
      prev: prevPage,
    };
  } catch (error) {
    throw new Error(error);
  }
};
