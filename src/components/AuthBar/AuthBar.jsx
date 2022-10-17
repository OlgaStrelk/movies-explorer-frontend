import "./AuthBar.css";

function AuthBar() {
  const BTNS_CLASS_NAME = "header__btn";
  const space = " ";

  const BTNS = [
    { title: "Регистрация", id: 1, uniqueBtnsClassName: "header__signup-btn" },
    { title: "Войти", id: 2, uniqueBtnsClassName: "header__signin-btn" },
  ];

  const btnsMarkup = BTNS.map((btn) => (
    <button
      key={btn.id}
      type="button"
      className={BTNS_CLASS_NAME + space + btn.uniqueBtnsClassName}
    >
      {btn.title}
    </button>
  ));
  return (
    <>
      <div className="header__btns">{btnsMarkup}</div>
    </>
  );
}

export default AuthBar;
