import express from 'express';
import bodyParser from 'body-parser';
import logger from './lib/logger.js';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

// midlewares
import httpLoggerMiddleware from './middleware/logger-middleware.js';
import jsonResponseMiddleware from './middleware/json-response.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

import brandsRouter from './routes/brands-routes.js';
import phoneRouter from './routes/phone-routes.js';

const HOST = '127.0.0.1';
const PORT = 5000;
export const databaseURI =
  process.env.databaseURI || 'mongodb://localhost/metallica-MERN';

// Creacion del servidor
const server = express();
mongoose.connect(databaseURI, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

server.use(cors());

// El servidor utilizará como deserializador de data bodyparser y deserializara en JSON
server.use(bodyParser.json());
// Utiliza un middleware que permite tener descripciones mas especificas en la consola
server.use(httpLoggerMiddleware);
// Utiliza un middleware que permite crear headers de respuesta que indiquen que el contenido es JSON
server.use(jsonResponseMiddleware);

// Enrutar servidores
server.use(brandsRouter);
server.use(phoneRouter);

// Sino no hay rutas definidas envia error al cliente
server.use(errorHandlerMiddleware);

// Inicializa el servidor
server.listen(process.env.PORT, () =>
  // utilizando el logger de la libreria winston imprimo en consola que el servidor se ha iniciado
  logger.info(`server listening ${JSON.stringify({ HOST, PORT })}`),
);
