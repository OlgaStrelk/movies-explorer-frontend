import "./AuthForm.css";
import React, { createElement, Children } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  useJoiValidationResolver,
  validationSchema,
} from "../../hooks/useEmailValidation";

function AuthForm({ defaultValues, children, onSubmit }) {
  // const resolver = useJoiValidationResolver(validationSchema);
//{ resolver }
  const methods = useForm({defaultValues});

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
}

export default AuthForm;
