import React, { useContext } from "react";

import "./Header.css";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import LoggedInNavigation from "../LoggedInNavigation/LoggedInNavigation";
import { PATHS } from "../../utils/consts";
import { useLocation } from "react-router-dom";
import LogoLink from "../LogoLink/LogoLink";
import Burger from "../Burger/Burger";

function Header({ handler, isLoggedIn }) {
  const STYLE = {
    section: "section",
    sectionType: { promo: "section_type_promo" },
    header: "header__panel",
    // logo: "header__logo"
  };

  let location = useLocation();

  const path = location.pathname;

  return (
    <>
      {path !== PATHS.signup && path !== PATHS.signin && (
        <header
          className={
            path !== PATHS.aboutProject
              ? `${STYLE.section} ${STYLE.header}`
              : `${STYLE.section} ${STYLE.sectionType.promo} ${STYLE.header}`
          }
        >
          <LogoLink class={STYLE.logo} />
          {isLoggedIn ? (
            <>
              <LoggedInNavigation /> <Burger handler={handler} />
            </>
          ) : (
            <>
              <AuthNavigation /> <Burger handler={handler} />
            </>
          )}
        </header>
      )}
    </>
  );
}

export default Header;
