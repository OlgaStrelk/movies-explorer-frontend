import { useFormContext } from "react-hook-form";
// import { ErrorMessage } from "@hookform/error-message";

function Input({ data, styles, ...rest }) {
  const { type, label, name } = data;
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <label className={styles.labelClassName}>
      {label}
      <input
        type={type || "text"}
        className={styles.inputClassName}
        {...register(name)}
        {...rest}
      />
      {name in errors && (
        <span className={styles.errorTextClassName}>
          {errors[name].message}
        </span>
      )}
      {/* <ErrorMessage className={styles.errorTextClassName} errors={errors} name={name} /> */}
    </label>
  );
}

export default Input;
