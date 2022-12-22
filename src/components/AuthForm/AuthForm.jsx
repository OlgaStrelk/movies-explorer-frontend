import "./AuthForm.css";
import { joiResolver } from "@hookform/resolvers/joi";

import { FormProvider, useForm } from "react-hook-form";
function AuthForm({ children, onSubmit, validationScema }) {
  const methods = useForm({
    resolver: joiResolver(validationScema),
    // resolver: async (data, context, options) => {
    //   // you can debug your validation schema here
    //   console.log("formData", data);
    //   console.log(
    //     "validation result",
    //     await joiResolver(registerValidationSchema)(data, context, options)
    //   );
    //   return joiResolver(registerValidationSchema)(data, context, options);
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
