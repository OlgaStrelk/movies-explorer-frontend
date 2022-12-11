// import { useState } from "react";
// import "./Input.css";

import { INPUT_IS_REQUIRED_TEXT } from "../../utils/errorTexts";

// function Input({ data, styles }) {
//   const [value, setValue] = useState(data.value);
//   return (
//     <>
//       <label className={styles.labelClassName}>
//         {data.label}
//         <input
//           className={styles.inputClassName}
//           onChange={(e) => {
//             setValue(e.target.value);
//           }}
//           id={data.id}
//           value={value || ""}
//           name={data.name}
//           required={data.required}
//         />
//       </label>
//     </>
//   );
// }

// export default Input;
// import React from "react";

function Input({ register, errors, data, ...rest }) {
  const { name } = data;
  console.log(INPUT_IS_REQUIRED_TEXT);
  return (
    <label>
      <input
        {...register(name, {
          required: INPUT_IS_REQUIRED_TEXT,
          // minLength: data.minLength,
          // maxLength: data.maxLength,
          // pattern: data.pattern,
        })}
        {...rest}
      />
      {name in errors && <span>{errors[name].message} </span>}
    </label>
  );
}

export default Input;
