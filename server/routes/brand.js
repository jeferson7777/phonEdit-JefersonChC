import express from 'express';
import { listAllBrands } from '../controllers/brand.js';

const brandRouter = express.Router();

brandRouter.get('/brand', listAllBrands);

export default brandRouter;
