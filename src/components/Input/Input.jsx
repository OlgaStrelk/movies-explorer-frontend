import { useFormContext } from "react-hook-form";

function Input({ data, styles, ...rest }) {
  const { type, label, name } = data;
  const { register, formState } = useFormContext();

  return (
    <label className={styles.labelClassName}>
      {label}
        <input
          type={type || "text"}
          className={styles.inputClassName}
          {...register(name)}
          {...rest}
        />
      {name in formState.errors && (
        <span className={styles.errorTextClassName}>
          {formState.errors[name].message}
        </span>
      )}
    </label>
  );
}

export default Input;
