import "./AuthForm.css";
import { FormProvider, useForm } from "react-hook-form";

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
