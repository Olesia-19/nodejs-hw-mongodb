import express from 'express';
import ctrlWrapper from '../utils/ctrlWrapper.js';
import {
  deleteContactController,
  getContactByIdController,
  getContactsController,
  patchContactController,
  postContactController,
} from '../controllers/contacts.js';
import { validateBody } from '../middlewares/validateBody.js';
import { contactSchema } from '../validation/contacts.js';
import { isValidId } from '../middlewares/isValidId.js';

const router = express.Router();

router.get('/', ctrlWrapper(getContactsController));

router.get('/:id', isValidId, ctrlWrapper(getContactByIdController));

router.post(
  '/',
  validateBody(contactSchema),
  ctrlWrapper(postContactController),
);

router.patch(
  '/:id',
  isValidId,
  validateBody(contactSchema),
  ctrlWrapper(patchContactController),
);

router.delete('/:id', isValidId, ctrlWrapper(deleteContactController));

export default router;
