
import mongoose from 'mongoose';
import { databaseURI } from '../index.js';
import brand from '../controllers/brand.js';
import Brands, { getAllBrands } from '../models/brand.js';

mongoose.connect(databaseURI, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

Promise.all(
  brands.map(async (brand) => {
    const brandResource = await Brands.create({ ...brand });
    console.log(
      `The resource ${JSON.stringify(brandResource)} has been created`,
    );
  }),
);
