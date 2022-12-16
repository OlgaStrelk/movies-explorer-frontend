import "./AuthForm.css";
import { FormProvider, useForm } from "react-hook-form";
import { useJoiValidationResolver, validationSchema } from "../../hooks/useEmailValidation";
function AuthForm({ children, onSubmit }) {
  const resolver = useJoiValidationResolver(validationSchema);
  //{ resolver }
  const methods = useForm({ resolver });

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}

export default AuthForm;
