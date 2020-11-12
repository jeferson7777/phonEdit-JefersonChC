import express from 'express';
import {
  listPhoneById,
  listSearchPhones,
  listPhoneDetails,
} from '../controllers/phone.js';

const phoneRouter = express.Router();

phoneRouter.get('/phone/:id', listPhoneById);
phoneRouter.get('/search/phone/:id', listSearchPhones);
phoneRouter.get('/details/:id', listPhoneDetails);

export default phoneRouter;
