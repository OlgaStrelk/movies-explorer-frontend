import React from "react";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";
import "./AuthRedirect.css";

function AuthRedirect() {
  const currentUser = useContext(CurrentUserContext);

  return (
    <>
      <p>Вы уже авторизованы как {currentUser.name}</p>
      <Link>Хотите поменять пользователя?</Link>
      <Link>Вернуться назад</Link>
    </>
  );
}

export default AuthRedirect;
