import express from 'express';
import { listAllBrands, listABrand } from '../controllers/brand.js';

const brandRouter = express.Router();

brandRouter.get('/brand', listAllBrands);
brandRouter.get('/brand/:id', listABrand);

export default brandRouter;
