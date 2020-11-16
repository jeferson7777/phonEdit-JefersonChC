//const { REACT_APP_SERVER_URL } = process.env;
const REACT_APP_SERVER_URL = 'http://localhost:5000';

// we get all brands and device number property
export const getAllBrands = async () => {
  const response = await fetch(`${REACT_APP_SERVER_URL}/brand`);
  const data = await response.json();
  const { name, devices } = data;
  return data;
};

//  we get an specific brand and all its models.
export const getOneBrandById = async (id) => {
  const response = await fetch(`${REACT_APP_SERVER_URL}/brand/${id}`);
  const data = await response.json();
  const { data: name } = data;
  return name;
};

// export const getAlbumsByIds = async (albumsIds) => {
//   if (albumsIds.length > 0) {
//     const notRepitedAlbum = [...new Set(albumsIds)];
//     const albums = await Promise.all(
//       notRepitedAlbum.map(async (id) => await getAlbumById(id)),
//     );
//     return albums;
//   } else {
//     return [];
//   }
// };

// this route returning us a specific phone model.
export const getPhonesBySearchQuery = async (id) => {
  const response = await fetch(`${REACT_APP_SERVER_URL}/search/phone/${id}`);
  return await response.json();
};

export const getPhoneDetails = async (id) => {
  const response = await fetch(`${REACT_APP_SERVER_URL}/details/${id}`);
  return await response.json();
};
