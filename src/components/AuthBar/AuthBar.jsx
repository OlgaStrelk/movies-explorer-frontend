import "./AuthBar.css";

function AuthBar() {
  const BTNS_DATA = [
    {
      title: "Регистрация",
      id: 1,
      className: "auth-bar__btn_type_signup",
    },
    {
      title: "Войти",
      id: 2,
      className: "auth-bar__btn_type_signin",
    },
  ];

  const btnsMarkup = BTNS_DATA.map((btn) => (
    <button
      key={btn.id}
      type="button"
      className={`auth-bar__btn ${btn.className}`}
    >
      {btn.title}
    </button>
  ));
  return (
    <div>
      {btnsMarkup}
    </div>
  );
}

export default AuthBar;
