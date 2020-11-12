import express from 'express';
import {
  createReview,
  deleteReviewById,
  getReviewById,
  listgetAllReview,
  // listAlbums,
  updateReviewById,
} from '../controllers/review.js';
// CRUD to Albums
const ReviewRouter = express.Router();
// NOTE: Always routes called controllers
// List all music album resources.
ReviewRouter.get('/review', listgetAllReview);
// List a Review resource
ReviewRouter.get('/review/:id', getReviewById);
// Create
ReviewRouter.post('/review', createReview); //con errror-crea un array vacio-
// Update
ReviewRouter.put('/review/:id', updateReviewById);
// Delete
ReviewRouter.delete('/review/:id', deleteReviewById);
export default ReviewRouter;
