
import mongoose from 'mongoose';
import { databaseURI } from '../index.js';
import brand from './brand.js';
import brandSchema, { getAllBrands } from '../models/albums.js';

mongoose.connect(databaseURI, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

Promise.all(
  brands.map(async (brand) => {
    const albumResource = await Albums.create({ ...album });
    console.log(
      `The resource ${JSON.stringify(albumResource)} has been created`,
    );
  }),
);
