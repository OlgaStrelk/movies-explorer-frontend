import "./AuthBar.css";

function AuthBar() {
  const BTNS_CLASS_NAME = "authBar__btn";
  const space = " ";
  const CONTAINER_CLASS_NAME = "authBar__container";
  const BTN_TYPE = "button";

  const BTNS = [
    {
      title: "Регистрация",
      id: 1,
      uniqueBtnsClassName: "authBar__btn_type_signup",
    },
    { 
      title: "Войти", 
      id: 2, 
      uniqueBtnsClassName: "authBar__btn_type_signin" 
    },
  ];

  const btnsMarkup = BTNS.map((btn) => (
    <button
      key={btn.id}
      type={BTN_TYPE}
      className={BTNS_CLASS_NAME + space + btn.uniqueBtnsClassName}
    >
      {btn.title}
    </button>
  ));
  return (
    <>
      <div className={CONTAINER_CLASS_NAME}>{btnsMarkup}</div>
    </>
  );
}

export default AuthBar;
