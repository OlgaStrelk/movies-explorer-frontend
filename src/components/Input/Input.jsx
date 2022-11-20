import { useState } from 'react';
import "./Input.css";

function Input({ data, styles }) {
  const [value, setValue] = useState(data.value);
  console.log(data)

  return (
    <>
      <label className={styles.labelClassName}>
        {data.label}
        <input
          className={styles.inputClassName}
          onChange={(e)=>{setValue(e.target.value)}}
          id={data.id}
          value={value}
          name={data.name}
          required={data.required}
        />
      </label>
    </>
  );
}

export default Input;
