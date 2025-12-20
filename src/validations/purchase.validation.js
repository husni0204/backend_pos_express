import Joi from "joi";

export const purchaseValidation = (payload) => {
    const schema = Joi.object({
        date: Joi.date().required(),
        note: Joi.string().trim().required(),
        userId: Joi.number().required(),
        total: Joi.number().required(),
        ppn: Joi.number().required(),
        grandTotal: Joi.number().required(),
        detail: Joi.array().required(),
    });
    return schema.validate(payload);
};
