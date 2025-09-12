import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import { getAllContacts } from './services/contacts.js';
import { getContactById } from './services/contacts.js';

const PORT = Number(process.env.PORT) || 3000;

export const setupServer = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.get('/contacts', async (req, res) => {
    const contacts = await getAllContacts();
    res.status(200).json({
      status: 200,
      message: 'Successfully found contacts!',
      data: contacts,
    });
  });

  app.get('/contacts/:id', async (req, res) => {
    const { id } = req.params;
    const contact = await getContactById(id);

    if (!contact) {
      res.status(404).json({
        message: 'Contact not found',
      });
      return;
    }

    res.status(200).json({
      status: 200,
      message: 'Successfully found contact with id {id}!',
      data: contact,
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });

  app.use((req, res) => {
    res.status(404).json({
      message: 'Not found',
    });
  });
};
