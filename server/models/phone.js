import fetch from 'node-fetch';
import mongoose from 'mongoose';
import cheerio from 'cheerio';

const BASE_URL = 'https://www.gsmarena.com';

const phoneSchema = new mongoose.Schema(
  {
  name: String,
  img: String,
  spec_detail: String,
  quick_spec: String,
  }
);

export default mongoose.model('phone', phoneSchema);

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

// export const getPhonesDetails = async (query) => {
//   const response = await fetch(
//     `${BASE_URL}//results.php3?sQuickSearch=yes&sName=${query}`,
//   );
//   const html = await response.text();
//   const $ = cheerio.load(html);
//   const json = [];

//   // Get phone detail
//   let display_size = $('span[data-spec=displaysize-hl]').text();
//   let display_res = $('div[data-spec=displayres-hl]').text();
//   let camera_pixels = $('.accent-camera').text();
//   let video_pixels = $('div[data-spec=videopixels-hl]').text();
//   let ram_size = $('.accent-expansion').text();
//   let chipset = $('div[data-spec=chipset-hl]').text();
//   let battery_size = $('.accent-battery').text();
//   let battery_type = $('div[data-spec=battype-hl]').text();

//   let quick_spec = {
//     display_size: display_size,
//     display_res: display_res,
//     camera_pixels: camera_pixels,
//     video_pixels: video_pixels,
//     ram_size: ram_size,
//     chipset: chipset,
//     battery_size: battery_size,
//     battery_type: battery_type,
//   };

//   let title = $('.specs-phone-name-title').text();
//   let img = $('.specs-photo-main a img').attr('src');
//   let img_url = $('.specs-photo-main a').attr('href');

//   let specNode = $('table');
//   let spec_detail = [];
//   specNode.each((i, el) => {
//     let specList = [];
//     let category = $(el).find('th').text();
//     let specN = $(el).find('tr');
//     specN.each((index, ele) => {
//       let a = {
//         name: $('td.ttl', ele).text(),
//         value: $('td.nfo', ele).text(),
//       };
//       specList.push(a);
//     });

//     spec_detail.push({
//       category: category,
//       specs: specList,
//     });
//   });

//   // get next and prev page link

//   data = {
//     title: title,
//     img: img,
//     img_url: img_url,
//     spec_detail: spec_detail,
//     quick_spec: quick_spec,
//   };

//   return json;
// };

export const getPhonesDetails = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  const html = await response.text();

  const $ = cheerio.load(html);
  const json = [];

  // Get phone detail
  let display_size = $('span[data-spec=displaysize-hl]').text();
  let display_res = $('div[data-spec=displayres-hl]').text();
  let camera_pixels = $('.accent-camera').text();
  let video_pixels = $('div[data-spec=videopixels-hl]').text();
  let ram_size = $('.accent-expansion').text();
  let chipset = $('div[data-spec=chipset-hl]').text();
  let battery_size = $('.accent-battery').text();
  let battery_type = $('div[data-spec=battype-hl]').text();

  let quick_spec = {
    display_size: display_size,
    display_res: display_res,
    camera_pixels: camera_pixels,
    video_pixels: video_pixels,
    ram_size: ram_size,
    chipset: chipset,
    battery_size: battery_size,
    battery_type: battery_type,
  };

  let title = $('.specs-phone-name-title').text();
  let img = $('.specs-photo-main a img').attr('src');
  let img_url = $('.specs-photo-main a').attr('href');

  let specNode = $('table');
  let spec_detail = [];
  specNode.each((i, el) => {
    let specList = [];
    let category = $(el).find('th').text();
    let specN = $(el).find('tr');
    specN.each((index, ele) => {
      let a = {
        name: $('td.ttl', ele).text(),
        value: $('td.nfo', ele).text(),
      };
      specList.push(a);
    });

    spec_detail.push({
      category: category,
      specs: specList,
    });
  });

  // get next and prev page link

  data = {
    title: title,
    img: img,
    img_url: img_url,
    spec_detail: spec_detail,
    quick_spec: quick_spec,
  };

   return {
     data: json
    
   };
};

