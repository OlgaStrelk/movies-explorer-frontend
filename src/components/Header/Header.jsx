import React from "react";
import "./Header.css";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import LoggedInNavigation from "../LoggedInNavigation/LoggedInNavigation";
import { PATHS } from "../../utils/consts";
import { useLocation } from "react-router-dom";
import LogoLink from "../LogoLink/LogoLink";
import Burger from '../Burger/Burger';

function Header({ isLoggedIn, handler }) {
  const STYLE = {
    section: "section",
    sectionType: { promo: "section_type_promo" },
    header: "header__panel",
  };


  let location = useLocation();

  const path = location.pathname;

  return (
    <>
      {path !== PATHS.signup && path !== PATHS.signin && (
        <div
          className={
            path !== PATHS.aboutProject
              ? `${STYLE.section} ${STYLE.header}`
              : `${STYLE.section} ${STYLE.sectionType.promo} ${STYLE.header}`
          }
        >
          <LogoLink />
          {isLoggedIn ? <LoggedInNavigation /> : <AuthNavigation />}
          {isLoggedIn && <Burger handler={handler}/>}
        </div>
      )}
    </>
  );
}

export default Header;
