import Input from "../Input/Input";
import "./ProfileForm.css";

function ProfileForm(props) {
  const INPUTS_DATA = [
    {
      id: 1,
      data: {
        label: "Имя",
        type: "text",
        id: "name",
        placeholder: "Введите имя",
        name: "name",
        required: true,
        value: "Ольга",
        onChange: () => {
          console.log("Меняюсь");
        },
      },
    },
    {
      id: 2,
      data: {
        label: "E-mail",
        type: "email",
        id: "email",
        placeholder: "Введите e-mail",
        name: "email",
        required: true,
        value: "strelod@gmail.com",
        onChange: () => {
          console.log("Меняюсь");
        },
      },
    },
  ];
  const inputMarkup = INPUTS_DATA.map((input) => (
    <Input key={input.id} data={input.data} />
  ));
  const BTNS_DATA = [
    {
      id: 1,
      data: {
        title: "Редактировать",
        uniqueStyle: "profile-form__btn_type_edit",
        type: "submit",
        disabled: true,
      },
    },
    {
      id: 2,
      data: {
        title: "Выйти из аккаунта",
        uniqueStyle: "profile-form__btn_type_sign-out",
        type: "button",
        disabled: false,
        onClick: () => {
          console.log("Вышел");
        },
      },
    },
  ];

  const btnsMarkup = BTNS_DATA.map((btn) => {
    let btnClassName = `profile-form__btn ${btn.data.uniqueStyle}`;
    return (
      <button key={btn.id} type={btn.data.type} className={btnClassName} disabled={btn.data.disabled}>
        {btn.data.title}
      </button>
    );
  });

  return (
    <form className="profile-form">
      <div>{inputMarkup}</div>
      <div className="profile-form__container">{btnsMarkup}</div>
    </form>
  );
}

export default ProfileForm;
