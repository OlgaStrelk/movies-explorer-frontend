import Joi from "joi";
import { MAX_LENGTH, MIN_LENGTH } from "../utils/consts";

import {
  INPUT_IS_REQUIRED_TEXT,
  INVALID_EMAIL_TEXT,
  MIN_LENGTH_TEXT,
  MAX_LENGTH_TEXT,
  NOT_STRING_DATA_TEXT,
  NAME_FIELD_ERROR_TEXT,
} from "../utils/errorTexts";
import { IS_ALPHANUM_REGEX } from "../utils/consts";
export const registerValidationSchema = Joi.object({
  name: Joi.string()
    .pattern(new RegExp(IS_ALPHANUM_REGEX))
    .min(MIN_LENGTH)
    .max(MAX_LENGTH)
    .required()
    .messages({
      "string.base": NOT_STRING_DATA_TEXT,
      "string.empty": INPUT_IS_REQUIRED_TEXT,
      "string.min": `${MIN_LENGTH_TEXT} ${MIN_LENGTH}`,
      "string.max": `${MAX_LENGTH_TEXT} ${MAX_LENGTH}`,
      "any.required": INPUT_IS_REQUIRED_TEXT,
      "string.pattern.base": NAME_FIELD_ERROR_TEXT,
    }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "any.required": INPUT_IS_REQUIRED_TEXT,
      "string.empty": INPUT_IS_REQUIRED_TEXT,
      "string.email": INVALID_EMAIL_TEXT,
    }),
  password: Joi.string().required().messages({
    "any.required": INPUT_IS_REQUIRED_TEXT,
    "string.empty": INPUT_IS_REQUIRED_TEXT,
  }),
});

export const loginValidationSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "any.required": INPUT_IS_REQUIRED_TEXT,
      "string.empty": INPUT_IS_REQUIRED_TEXT,
      "string.email": INVALID_EMAIL_TEXT,
    }),
  password: Joi.string().required().messages({
    "any.required": INPUT_IS_REQUIRED_TEXT,
    "string.empty": INPUT_IS_REQUIRED_TEXT,
  }),
});

export const profileValidationSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "any.required": INPUT_IS_REQUIRED_TEXT,
      "string.empty": INPUT_IS_REQUIRED_TEXT,
      "string.email": INVALID_EMAIL_TEXT,
    }),
  name: Joi.string()
    .pattern(new RegExp(IS_ALPHANUM_REGEX))
    .min(MIN_LENGTH)
    .max(MAX_LENGTH)
    .required()
    .messages({
      "string.base": NOT_STRING_DATA_TEXT,
      "string.empty": INPUT_IS_REQUIRED_TEXT,
      "string.min": `${MIN_LENGTH_TEXT} ${MIN_LENGTH}`,
      "string.max": `${MAX_LENGTH_TEXT} ${MAX_LENGTH}`,
      "any.required": INPUT_IS_REQUIRED_TEXT,
      "string.pattern.base": NAME_FIELD_ERROR_TEXT,
    }),
});
