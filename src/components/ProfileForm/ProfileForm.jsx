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
    mode: "all",
    defaultValues: { name: currentUser.name, email: currentUser.email },
  });

  const {
    formState: { isValid, isDirty },
  } = methods;

  const navigate = useNavigate();

  const STYLES_CONFIG = {
    formClassName: "form_type_profile",
    containerClassName: "form__container_type_profile",
    input: {
      inputClassName: "form__input_type_profile",
      labelClassName: "form__label_type_profile",
      errorTextClassName: "form__error_type_profile",
    },
    btnClassName: "form__btn_type_profile",
    disabledBtnClassName: "form__btn_type_profile_disabled",
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
        disabled: (isValid && isDirty) ? false : true
      },
    },
    {
      id: 8,
      data: {
        title: "Выйти из аккаунта",
        uniqueStyle: STYLES_CONFIG.signOutBtnClassName,
        type: "button",
        clickHandler: handleSignOutClick,
        disabled: false
      },
    },
  ];

  const btnsMarkup = BTNS_DATA.map((btn) => {
    let btnClassName = `${STYLES_CONFIG.btnClassName} ${btn.data.uniqueStyle}`;
    let disabledBtnClassName = `${btnClassName} ${STYLES_CONFIG.disabledBtnClassName}`;
    return (
      <button
        key={btn.id}
        type={btn.data.type}
        className={(isValid && isDirty) ? btnClassName : disabledBtnClassName}
        onClick={btn.data.clickHandler}
        disabled={btn.data.disabled}
      >
        {btn.data.title}
      </button>
    );
  });

  const onSubmit = (data) => {
    updateProfile({
      email: data.email,
      name: data.name,
    }).then((userData) => {
      setCurrentUser(userData.data);
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
