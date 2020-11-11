import express from 'express';
import { listPhoneById, listSearchPhones } from '../controllers/phone.js';

const phoneRouter = express.Router();

phoneRouter.get('/phone/:id', listPhoneById);
phoneRouter.get('/search/phone/:id', listSearchPhones);

export default phoneRouter;
