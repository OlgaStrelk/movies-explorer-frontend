import { useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

import { profileValidationSchema } from "../../utils/joiValidationSchema";
import { PATHS } from "../../utils/consts";

import Input from "../Input/Input";
import "./ProfileForm.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { updateProfile } from "../../utils/MainApi";

function ProfileForm({ logOutHandler, setCurrentUser }) {
  const currentUser = useContext(CurrentUserContext);

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
    defaultValues: {name: currentUser.name, email: currentUser.email},
  });

  console.log(currentUser)

  const navigate = useNavigate();

  const STYLES_CONFIG = {
    formClassName: "form_type_profile",
    containerClassName: "form__container_type_profile",
    input: {
      inputClassName: "form__input_type_profile",
      labelClassName: "form__label_type_profile",
      errorTextClassName: "form__error_type_profile"
    },
    btnClassName: "form__btn_type_profile",
    signOutBtnClassName: "form__btn_type_sign-out",
    editBtnClassName: "form__btn_type_edit-profile",
  };

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


  const inputMarkup = INPUTS_DATA.map((input) => (
    <Input key={input.id} data={input.data} styles={STYLES_CONFIG.input} />
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
        uniqueStyle: STYLES_CONFIG.editBtnClassName,
        type: "submit",
        disabled: true,
      },
    },
    {
      id: 8,
      data: {
        title: "Выйти из аккаунта",
        uniqueStyle: STYLES_CONFIG.signOutBtnClassName,
        type: "button",
        disabled: false,
        clickHandler: handleSignOutClick,
      },
    },
  ];

  const btnsMarkup = BTNS_DATA.map((btn) => {
    let btnClassName = `${STYLES_CONFIG.btnClassName} ${btn.data.uniqueStyle}`;
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

  const onSubmit = (inputsData) => {
    updateProfile(inputsData).then((userData) => {
      setCurrentUser(userData);
    });
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={STYLES_CONFIG.formClassName}
      >
        <div>{inputMarkup}</div>
        <div className={STYLES_CONFIG.containerClassName}>{btnsMarkup}</div>
      </form>
    </FormProvider>
  );
}

export default ProfileForm;
