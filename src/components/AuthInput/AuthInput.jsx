import "./AuthInput.css";

function AuthInput({input}) {
  return (
    <>
      <label className="auth-input__label">{input.label}</label>
      <input className="auth-input__field" placeholder={input.placeholder}></input>
    </>
  );
}

export default AuthInput;
