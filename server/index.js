import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import logger from './lib/logger.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

export const databaseURI = 'mongodb://localhost/phone-edit';
mongoose.connect(databaseURI);

// middlewares
import jsonParserMiddleware from './middleware/json-parse-middleware.js';
import loggerMiddleware from './middleware/logger-middleware.js';

// Router
import brandRouter from './routes/brand.js';
import phoneRouter from './routes/phone.js';

const PORT = 5000;
const server = express();

server.use(bodyParser.json());
server.use(cors());
server.use(jsonParserMiddleware);
server.use(loggerMiddleware);

// Routes
server.use(brandRouter);
server.use(phoneRouter);

server.listen(PORT, () => logger.info(`Server running on port ${PORT} 📡`));
