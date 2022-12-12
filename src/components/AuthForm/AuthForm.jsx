import "./AuthForm.css";
import React, { createElement, Children } from "react";
import { useForm } from "react-hook-form";

function AuthForm({ defaultValues, children, onSubmit }) {
  const methods = useForm({ defaultValues });
  const { handleSubmit } = methods;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Children.map(children, (child) => {
        return child.props.name
          ? createElement(child.type, {
              ...{
                ...child.props,
                register: methods.register,
                errors: methods.formState.errors,
                key: child.props.name,
              },
            })
          : createElement(child.type, {
              ...{ ...child.props, isValid: methods.formState.isValid },
            });
      })}
    </form>
  );
}

export default AuthForm;
