import "./AuthForm.css";
import { joiResolver } from "@hookform/resolvers/joi";

import { FormProvider, useForm } from "react-hook-form";
import { validationSchema } from "../../utils/joiValidationSchema";
function AuthForm({ children, onSubmit }) {
  const methods = useForm({
    resolver: joiResolver(validationSchema),
    // resolver: async (data, context, options) => {
    //   // you can debug your validation schema here
    //   console.log("formData", data);
    //   console.log(
    //     "validation result",
    //     await joiResolver(validationSchema)(data, context, options)
    //   );
    //   return joiResolver(validationSchema)(data, context, options);
    // },
    mode: "onChange",
  });
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}

export default AuthForm;
