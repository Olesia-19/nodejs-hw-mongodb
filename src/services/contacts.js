import { ContactsCollection } from '../db/models/contacts.js';

export const getAllContacts = async () => {
  const contacts = await ContactsCollection.find();
  return contacts;
};

export const getContactById = async (id) => {
  const contact = await ContactsCollection.findById(id);
  return contact;
};

export const postContact = async (payload) => {
  const contact = await ContactsCollection.create(payload);
  return contact;
};

export const patchContact = async (id, payload) => {
  const contact = await ContactsCollection.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return contact;
};

export const deleteContact = async (id) => {
  const contact = await ContactsCollection.findByIdAndDelete(id);
  return contact;
};
