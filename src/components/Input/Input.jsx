import {
  INPUT_IS_REQUIRED_TEXT,
  MIN_LENGTH_TEXT,
  MAX_LENGTH_TEXT,
  INVALID_EMAIL_TEXT,
} from "../../utils/errorTexts";
import { MIN_LENGTH, MAX_LENGTH, IS_EMAIL_REGEX } from "../../utils/consts";
function Input({ register, name, errors, data, styles, ...rest }) {
  const { type, label } = data;
  return (
    <label className={styles.labelClassName}>
      {label}
      {name === "name" ? (
        <input
          type={type || "text"}
          className={styles.inputClassName}
          {...register(name, {
            required: INPUT_IS_REQUIRED_TEXT,
            minLength: {
              value: MIN_LENGTH,
              message: `${MIN_LENGTH_TEXT}: ${MIN_LENGTH}`,
            },
            maxLength: {
              value: MAX_LENGTH,
              message: `${MAX_LENGTH_TEXT}: ${MAX_LENGTH}`,
            },
          })}
          {...rest}
        />
      ) : name === "email" ? (
        <input
          type={type || "text"}
          className={styles.inputClassName}
          {...register(name, {
            required: INPUT_IS_REQUIRED_TEXT,
            pattern: { value: IS_EMAIL_REGEX, message: INVALID_EMAIL_TEXT },
          })}
          {...rest}
        />
      ) : (
        <input
          type={type || "text"}
          className={styles.inputClassName}
          {...register(name, {
            required: INPUT_IS_REQUIRED_TEXT,
          })}
          {...rest}
        />
      )}
      {name in errors && (
        <span className={styles.errorTextClassName}>
          {errors[name].message}
        </span>
      )}
    </label>
  );
}

export default Input;
