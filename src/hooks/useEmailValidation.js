// import Joi from "joi";

// import {
//   INPUT_IS_REQUIRED_TEXT,
//   INVALID_EMAIL_TEXT,
// } from "../utils/errorTexts";

// import { useCallback } from "react";
// import { MAX_LENGTH, MIN_LENGTH } from "../utils/consts";

// export const useJoiValidationResolver = (validationSchema) =>
//   useCallback(
//     async (data) => {
//       try {
//         const values = await validationSchema.validate(data, {
//           abortEarly: false,
//         });
//         console.log(`values ${values}`);

//         return {
//           values,
//           errors: {},
//         };
//       } catch (errors) {
//         console.log(`errors ${errors}`);
//         return {
//           values: {},
//           errors: errors.inner.reduce(
//             (allErrors, currentError) => ({
//               ...allErrors,
//               [currentError.path]: {
//                 type: currentError.type ?? "validation",
//                 message: currentError.message,
//               },
//             }),
//             {}
//           ),
//         };
//       }
//     },
//     [validationSchema]
//   );

// export const validationSchema = Joi.object({
//   name: Joi.string()
//     .required(INPUT_IS_REQUIRED_TEXT)
//     .min(MIN_LENGTH)
//     .max(MAX_LENGTH),
//   email: Joi.string()
//     .required(INPUT_IS_REQUIRED_TEXT)
//     .email(INVALID_EMAIL_TEXT),
//   password: Joi.string().required(INPUT_IS_REQUIRED_TEXT),
// });
