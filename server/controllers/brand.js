import { getAllBrands, getOneBrand } from '../models/brand.js';

export const listAllBrands = async (request, response) => {
  try {
    const brands = await getAllBrands();
    return response.status(200).send(brands);
  } catch (error) {
    const { message } = error;
    return response.status(500).send({ message });
  }
};

export const listOneBrand = async (request, response) => {
  const {
    params: { id },
  } = request;

  try {
    const brand = await getOneBrand(id);
    return response.status(200).send(brand);
  } catch (error) {
    const { message } = error;
    return response.status(500).send({ message });
  }
};
