import { useState } from 'react';
import "./Input.css";

function Input({ data }) {
  const [value, setValue] = useState(data.value);

  return (
    <>
      <label className="profile-input__label">
        {data.label}
        <input
          className="profile-input__field"
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
