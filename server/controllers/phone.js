import { getPhoneById, getPhonesBySearchQuery } from '../models/phone.js';

export const listPhoneById = async (request, response) => {
  const {
    params: { id },
  } = request;

  try {
    const phone = await getPhoneById(id);
    return response.status(200).send(phone);
  } catch (error) {
    const { message } = error;
    return response.status(500).send({ message });
  }
};

export const listSearchPhones = async (request, response) => {
  const {
    params: { id },
  } = request;

  try {
    const phones = await getPhonesBySearchQuery(id);
    return response.status(200).send(phones);
  } catch (error) {
    const { message } = error;
    return response.status(500).send({ message });
  }
};
