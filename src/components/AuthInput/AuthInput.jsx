import "./AuthInput.css";

function AuthInput({ label, placeholder }) {
  return (
    <div className="input">
      <label className="input__label">{label}</label>
      <input className="input__field" placeholder={placeholder}></input>
    </div>
  );
}

export default AuthInput;
