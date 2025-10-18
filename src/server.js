import * as fs from 'node:fs';
import path from 'node:path';
import swaggerUI from 'swagger-ui-express';
import router from './routers/index.js';
import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import dotenv from 'dotenv';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import cookieParser from 'cookie-parser';
dotenv.config();

const PORT = Number(process.env.PORT) || 3000;

const SWAGGER_DOCUMENT = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), 'docs', 'swagger.json'), 'utf-8'),
);

export const setupServer = () => {
  const app = express();

  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(SWAGGER_DOCUMENT));

  app.use(cors());
  app.use(express.json());
  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );
  app.use(cookieParser());

  app.use(router),
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });

  app.use(notFoundHandler);

  app.use(errorHandler);
};
