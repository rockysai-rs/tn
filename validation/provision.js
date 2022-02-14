import joi from "joi";

export const ValidateShopId = (shopId) => {
  const Schema = joi.object({
    _id: joi.string().required()
  });

  return Schema.validateAsync(shopId);
};

export const ValidateCategory = (category) => {
  const Schema = joi.object({
    category: joi.string().required()
  });

  return Schema.validateAsync(category);
};
