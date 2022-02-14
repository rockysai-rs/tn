import joi from "joi";

export const ValidateShopCity = (shopObj) => {
  const Schema = joi.object({
    city: joi.string().required()
  });

  return Schema.validateAsync(shopObj);
};

export const ValidateShopSearchString = (shopObj) => {
  const Schema = joi.object({
    searchString: joi.string().required()
  });

  return Schema.validateAsync(shopObj);
};
