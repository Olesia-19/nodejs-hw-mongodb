import Joi from 'joi';

export const contactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  phoneNumber: Joi.string().required(),
  email: Joi.string().email({ tlds: { allow: false } }),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().required(),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20),
  phoneNumber: Joi.string().required(),
  email: Joi.string().email({ tlds: { allow: false } }),
  isFavourite: Joi.boolean(),
  contactType: Joi.string(),
});
