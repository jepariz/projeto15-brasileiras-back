import joi from "joi";

export const userSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().alphanum().min(4).required(),
    image: joi.string().uri()
})