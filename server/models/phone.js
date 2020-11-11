import cheerio from 'cheerio';
import fetch from 'node-fetch';

const BASE_URL = 'https://www.gsmarena.com';

export const getPhoneById = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`);
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
};

export const getPhonesBySearchQuery = async (query) => {
  const response = await fetch(
    `${BASE_URL}//results.php3?sQuickSearch=yes&sName=${query}`,
  );
  const html = await response.text();
  const $ = cheerio.load(html);
  const json = [];

  // Get all list phone
  const phones = $('.makers').find('li');
  phones.each((i, el) => {
    const phone = {
      name: $(el).find('span').html().split('<br>').join(' '),
      img: $(el).find('img').attr('src'),
      url: $(el).find('a').attr('href'),
      description: $(el).find('img').attr('title'),
    };
    json.push(phone);
  });

  return json;
};
