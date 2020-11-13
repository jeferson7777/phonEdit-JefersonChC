import mongoose from 'mongoose';


const reviewSchema = new mongoose.Schema(
  {
    brand: String,
    phoneModel: String,
    reviewTitle: String,
    userName: String,
    description: String,
    pictures: [],
    usabilityScore: Number,
    designScore: Number,
    durabilityScore: Number,
    pros: String,
    cons: String,
    summary: String
  },
  {
    timestamps: true,
  },
);
const Review = mongoose.model('review ', reviewSchema);
export default Review;


export const getAllReviews = async () => {
  try {
    return await review.find();
  } catch (error) {
    throw new Error(error);
  }
};
export const getReviewResourceById = async (id) => {
  try {
    return await review.findById(id);
  } catch (error) {
    throw new Error(error);
  }
};
export const createReviewResource = async (data) => {
  try {
    return await review.create({ ...data }); //que traiga la data del id-
  } catch (error) {
    throw new Error(error);
  }
};
export const updateReviewResource = async (id, data) => {
  try {
    return await review.findByIdAndUpdate(id, { ...data });
  } catch (error) {
    throw new Error(error);
  }
};
export const deleteReviewResource = async (id) => {
  try {
    return await review.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error);
  }
};
