import Joi from "joi";

import {
  INPUT_IS_REQUIRED_TEXT,
  INVALID_EMAIL_TEXT,
} from "../utils/errorTexts";

import { useCallback } from "react";
import { MAX_LENGTH, MIN_LENGTH } from "../utils/consts";

// export const useJoiValidationResolver = (validationSchema) =>
//   useCallback(
//     async (data) => {
//       try {
//         console.log(data);
//         const values = await Joi.validate(data, validationSchema, {abortEarly: false});
//         console.log(`values ${values}`);

//         return {
//           values,
//           errors: {},
//         };
//       } catch (errors) {
//         console.log(`errors ${errors}`);
//         return {
//           values: {},
//             errors: errors?.inner?.reduce(
//               (allErrors, currentError) => ({
//                 ...allErrors,
//                 [currentError.path]: {
//                   type: currentError.type ?? "validation",
//                   message: currentError.message,
//                 },
//               }),
//               {}
//             ),
//         };
//       }
//     },
//     [validationSchema]
//   );
//().keys

export const useJoiValidationResolver = (validationSchema) =>
  useCallback(
    async (data) => {
      try {
        const values = await validationSchema.validateAsync(data);
        console.log(values);
        return {
          values,
          errors: {},
        };
      } catch (errors) {
        console.log(errors);
        return {
          values: {},
          errors: errors?.inner?.reduce(
            (allErrors, currentError) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? "validation",
                message: currentError.message,
              },
            }),
            {}
          ),
        };
      }
    },
    [validationSchema]
  );

export const validationSchema = Joi.object({
  name: Joi.string().alphanum().min(MIN_LENGTH).max(MAX_LENGTH).required(),
  // .error((errors) => {
  //   errors.forEach((err) => {
  //     switch (err.code) {
  //       case "any.empty":
  //         err.message = "Value should not be empty!";
  //         break;
  //       case "string.min":
  //         err.message = `Value should have at least ${err.local.limit} characters!`;
  //         break;
  //       case "string.max":
  //         err.message = `Value should have at most ${err.local.limit} characters!`;
  //         break;
  //       default:
  //         break;
  //     }
  //   });
  //   return errors;
  // }),
  //   .messages({
  //     'string.base': ``,
  //     'string.empty': ``,
  //     'string.min': `${MIN_LENGTH}{#limit}`,
  //     'string.min': `${MAX_LENGTH}{#limit}`,
  //     'any.required': `${INPUT_IS_REQUIRED_TEXT}`

  //   }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().required(),
});
