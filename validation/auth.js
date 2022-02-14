import joi from "joi";

export const ValidationSignup = (userData) => {
  const Schema = joi.object({
    fullname: joi.string().required().min(10),
    email: joi.string().required().email(),
    password: joi.string().required().min(5),
    address: joi.string().array().items(joi.object({detail:joi.string(),for: joi.string()})),
    phonenumber: joi.number();
  });

  return Schema.validateAsync(userData);
}

export const ValidationSignin = (userData) => {
  const Schema = joi.object({
    email: joi.string().required().email(),
    password: joi.string().required().min(5),
  });

  return Schema.validateAsync(userData);
}
