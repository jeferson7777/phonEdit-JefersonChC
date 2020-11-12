import {
  createReviewResource,
  deleteReviewResource,
  getAllReviews,
  getReviewResourceById,
  updateReviewResource,
} from '../models/review.js';
// From the URL GET /albgetAllAlbums
export const listgetAllReview = async (request, response, next) => {
  try {
    const getAllReviewList = await getAllReviews();
    return response.status(200).send(getAllReviewList);
  } catch (error) {
    return response.status(500).send({
      message: `Error: connection to database failed, ${error}.`,
    });
  }
};
// From the URL GET /Albums/:id
export const getReviewById = async (request, response, next) => {
  // From the request object we can know the URL parameters defined in the router
  const {
    params: { id },
  } = request;
  // Called a function that is declared in the resource model
  const ReviewResource = await getReviewResourceById(id);
  // If we have a Albums resource
  if (ReviewResource) {
    // we return resource and 200 OK status
    return response.status(200).send(ReviewResource);
  } else {
    // if not we sent 404 Resource not found, and a nice message
    return response.status(404).send({
      // Is important that messages that reflect errors finished with a full stop
      message: 'Error: Review resource not found.',
    });
  }
};
// POST /Albums with JSON payload in the body
export const createReview = async (request, response) => {
  // we get access to the data sent it by the client
  // TODO: In this step is IMPORTANT that we assume that the payload is malign
  // so we need to confirm otherwise validating payload (Please read about Joi https://hapi.dev/tutorials/validation/?lang=en_US)
  const { body } = request;
  try {
    // Called a function that is declared in the resource model
    const newReviewResource = await createReviewResource(body);
    return response.status(201).send(newReviewResource);
  } catch (error) {
    // Because Daytabases can be in other location we can't assume that every DB request is succesful
    return response.status(500).send({
      message: `Error: not connection to database, ${error}.`,
    });
  }
};
// From the URL PUT /Albums/:id
export const updateReviewById = async (request, response) => {
  // we get access to the data sent it by the client
  const {
    params: { id },
    body,
  } = request;
  try {
    // Called a function that is declared in the resource model
    const ReviewResource = await updateReviewResource(id, body);
    return response.status(200).send(ReviewResource);
  } catch (error) {
    const { message } = error;
    return response.status(404).send({
      message,
    });
  }
};
// From the URL DELETE /Albums/:id
export const deleteReviewById = async (request, response) => {
  // we get access to the data sent it by the client
  const {
    params: { id },
  } = request;
  try {
    // Called a function that is declared in the resource model
    const deleteMessage = await deleteReviewResource(id);
    return response.status(200).send({
      message: deleteMessage,
    });
  } catch (error) {
    // if resource is not found send error message
    const { message } = error;
    return response.status(404).send({
      message,
    });
  }
};
