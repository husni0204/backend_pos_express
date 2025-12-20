import Joi from "joi";

export const userValidation = (payload) => {
    const schema = Joi.object({
        name: Joi.string().trim().required(),
        userName: Joi.string().min(4).trim().required(),
        password: Joi.string().min(4).max(15).trim().required(),
        confirmPassword: Joi.any().equal(Joi.ref("password")).required().label("Confirm password").messages({
            "any.only": "{{#label}} not same as password",
            "any.required": "{{#label}} is required",
        }),
        role: Joi.string().trim().required(),
    });
    return schema.validate(payload);
};

export const userUpdateValidation = (payload) => {
    const schema = Joi.object({
        username: Joi.string().min(4).trim().required(),
        password: Joi.string().allow(null).allow(""),
        confirmPassword: Joi.any().equal(Joi.ref("password")).required().label("Confirm password").messages({
            "any.only": "{{#label}} not same as password",
            "any.required": "{{#label}} is required",
        }),
        name: Joi.string().trim().required(),
        role: Joi.string().trim().required(),
    });
    return schema.validate(payload);
};
