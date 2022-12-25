import { useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

import { profileValidationSchema } from "../../utils/joiValidationSchema";
import { PATHS } from "../../utils/consts";

import Input from "../Input/Input";
import "./ProfileForm.css";
import { useContext } from "react";

function ProfileForm({ logOutHandler, currentUser }) {

  const methods = useForm({
    resolver: joiResolver(profileValidationSchema),
    // resolver: async (data, context, options) => {
    //   // you can debug your validation schema here
    //   console.log("formData", data);
    //   console.log(
    //     "validation result",
    //     await joiResolver(validationSchema)(data, context, options)
    //   );
    //   return joiResolver(validationSchema)(data, context, options);
    // },
    mode: "onChange",
    defaultValues: currentUser,
  });
  const navigate = useNavigate();

  const INPUTS_DATA = [
    {
      id: 1,
      data: {
        label: "Имя",
        type: "text",
        name: "name",
      },
    },
    {
      id: 2,
      data: {
        label: "E-mail",
        type: "email",
        name: "email",
      },
    },
  ];

  const STYLES_CONFIG = {
    inputClassName: "profile-input__field",
    labelClassName: "profile-input__label",
  };
  const inputMarkup = INPUTS_DATA.map((input) => (
    <Input key={input.id} data={input.data} styles={STYLES_CONFIG} />
  ));

  const handleSignOutClick = () => {
    logOutHandler();
    navigate(PATHS.aboutProject);
  };
  const BTNS_DATA = [
    {
      id: 7,
      data: {
        title: "Редактировать",
        uniqueStyle: "profile-form__btn_type_edit",
        type: "submit",
        disabled: true,
      },
    },
    {
      id: 8,
      data: {
        title: "Выйти из аккаунта",
        uniqueStyle: "profile-form__btn_type_sign-out",
        type: "button",
        disabled: false,
        clickHandler: handleSignOutClick,
      },
    },
  ];

  const btnsMarkup = BTNS_DATA.map((btn) => {
    let btnClassName = `profile-form__btn ${btn.data.uniqueStyle}`;
    return (
      <button
        key={btn.id}
        type={btn.data.type}
        className={btnClassName}
        disabled={btn.data.disabled}
        onClick={btn.data.clickHandler}
      >
        {btn.data.title}
      </button>
    );
  });

  const onSubmit = () => {
    console.log("поменяли");
  };

  return (
    //onSubmit={handleSubmit(onSubmit)}
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="profile-form">
        <div>{inputMarkup}</div>
        <div className="profile-form__container">{btnsMarkup}</div>
      </form>
    </FormProvider>
  );
}

export default ProfileForm;
