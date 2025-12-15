import Joi from "joi";

export const productValidation = (payload) => {
  const schema = Joi.object({
    barcode: Joi.string().trim().allow(null).allow(""),
    productName: Joi.string().trim().required(),
    image: Joi.string().trim().allow(null).allow(""),
    url: Joi.string().trim().allow(null).allow(""),
    qty: Joi.number().required(),
    price: Joi.number().required(),
    kategoryId: Joi.number().required(),
    supplierId: Joi.number().required(),
    file: Joi.any().allow(null).allow(""),
  });
  return schema.validate(payload);
};
