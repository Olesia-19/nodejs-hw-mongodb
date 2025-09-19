import express from 'express';
import ctrlWrapper from '../utils/ctrlWrapper.js';
import {
  deleteContactController,
  getContactByIdController,
  getContactsController,
  patchContactController,
  postContactController,
} from '../controllers/contacts.js';

const router = express.Router();

router.get('/', ctrlWrapper(getContactsController));

router.get('/:id', ctrlWrapper(getContactByIdController));

router.post('/', ctrlWrapper(postContactController));

router.post('/', ctrlWrapper(patchContactController));

router.delete('/:id', ctrlWrapper(deleteContactController));

export default router;
