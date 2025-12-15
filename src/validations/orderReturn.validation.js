import Joi from "joi";

export const orderReturnValidation = (payload) => {
  const schema = Joi.object({
    date: Joi.date().required(),
    note: Joi.string().trim().required(),
    userId: Joi.number().required(),
    orderId: Joi.number().required(),
    detail: Joi.array().required(),
  });
  return schema.validate(payload);
};
