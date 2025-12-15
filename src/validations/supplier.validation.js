import Joi from "joi";

export const supplierValidation = (payload) => {
  const schema = Joi.object({
    firstName: Joi.string().trim().required(),
    lastName: Joi.string().trim().allow(null).allow(""),
    phone: Joi.string().trim().required(),
    email: Joi.string().trim().allow(null).allow(""),
    address: Joi.string().trim().required(),
  });
  return schema.validate(payload);
};
