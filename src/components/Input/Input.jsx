import { INPUT_IS_REQUIRED_TEXT } from "../../utils/errorTexts";

function Input({ register, errors, data, styles, ...rest }) {
  const { name, type, label } = data;
  return (
    <label className={styles.labelClassName}>
      {label}
      <input
        type={type || "text"}
        className={styles.inputClassName}
        {...register(name, {
          required: INPUT_IS_REQUIRED_TEXT,
        })}
        {...rest}
      />
      {name in errors && (
        <span className={styles.errorTextClassName}>
          {errors[name].message}
        </span>
      )}
    </label>
  );
}

export default Input;
