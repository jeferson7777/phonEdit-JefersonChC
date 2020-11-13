import mongoose from 'mongoose';
import { databaseURI } from '../index.js';
import reviews from './review.js';
import Review, { getAllReviews } from '../models/review.js';

mongoose.connect(databaseURI, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

Promise.all(
  reviews.map(async (review) => {
    const reviewResource = await Review.create({ ...review });
    console.log(
      `The resource ${JSON.stringify(reviewResource)} has been created`,
    );
  }),
);
