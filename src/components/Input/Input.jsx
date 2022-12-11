import { INPUT_IS_REQUIRED_TEXT } from "../../utils/errorTexts";

function Input({ register, errors, data, styles, ...rest }) {
  const { name } = data;
  return (
    <label className={styles.labelClassName}>
      {data.label}
      <input
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
