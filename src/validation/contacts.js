import Joi from 'joi';

export const contactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  phoneNumber: Joi.number().integer().min(10).max(13).required(),
  email: Joi.string().email({ tlds: { allow: false } }),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().required(),
});
