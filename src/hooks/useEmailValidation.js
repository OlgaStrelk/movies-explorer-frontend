// import Joi from "joi";

// import {
//   INPUT_IS_REQUIRED_TEXT,
//   INVALID_EMAIL_TEXT,
// } from "../utils/errorTexts";

// import { useCallback } from "react";
// import { MAX_LENGTH, MIN_LENGTH } from "../utils/consts";

// export const useJoiValidationResolver = (validationSchema, context) =>
// //   useCallback(
//     async (data, context) => {
//       const { error, value: values } = validationSchema.validate(data, {
//         abortEarly: false,
//       });

//       if (!error) return { values: values, errors: {} };

//       return {
//         values: {},
//         errors: error.details.reduce(
//           (previous, currentError) => ({
//             ...previous,
//             [currentError.path[0]]: currentError,
//           }),
//           {}
//         ),
//       };
//     },
// //     [validationSchema]
// //   );


//   // .error((errors) => {
//   //   errors.forEach((err) => {
//   //     switch (err.code) {
//   //       case "any.empty":
//   //         err.message = "Value should not be empty!";
//   //         break;
//   //       case "string.min":
//   //         err.message = `Value should have at least ${err.local.limit} characters!`;
//   //         break;
//   //       case "string.max":
//   //         err.message = `Value should have at most ${err.local.limit} characters!`;
//   //         break;
//   //       default:
//   //         break;
//   //     }
//   //   });
//   //   return errors;
//   // }),
    // .messages({
    //   'string.base': ``,
    //   'string.empty': ``,
    //   'string.min': `${MIN_LENGTH}{#limit}`,
    //   'string.min': `${MAX_LENGTH}{#limit}`,
    //   'any.required': `${INPUT_IS_REQUIRED_TEXT}`

    // }),
// });
