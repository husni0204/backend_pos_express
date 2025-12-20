import Joi from "joi";

export const categoryValidation = (payload) => {
    const schema = Joi.object({
        kategoryName: Joi.string().trim().required(),
    });
    return schema.validate(payload);
};
