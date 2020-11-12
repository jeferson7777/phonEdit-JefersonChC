import express from 'express';
import { listAllBrands, listOneBrand } from '../controllers/brand.js';

const brandRouter = express.Router();

brandRouter.get('/brand', listAllBrands);
brandRouter.get('/brand/:id', listOneBrand);

export default brandRouter;
