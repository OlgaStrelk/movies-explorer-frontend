import "./AuthInput.css";

function AuthInput({input}) {
  return (
    <div className="input">
      <label className="input__label">{input.label}</label>
      <input className="input__field" placeholder={input.placeholder}></input>
    </div>
  );
}

export default AuthInput;
