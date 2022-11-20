import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.css";
import { MenuStateContext } from "../../contexts/MenuStateContext";

function Navigation({ handler, linksData, styles }) {
  const isMenuOpen = useContext(MenuStateContext);

  const linksArray = !isMenuOpen
    ? linksData.filter((link) => link.id !== 1)
    : linksData;

  const linksMarkup = linksArray.map((link) => {
    const listItemClassName = !isMenuOpen
      ? `${styles.listItemClassName} ${link.headerListItemClassName}`
      : `${styles.listItemClassName}`;

    const linkClassName = !isMenuOpen
    ? `${styles.linkClassName} ${link.headerLinkClassName}`
    : `${styles.linkClassName}`;

    return (
      <li key={link.id} className={listItemClassName}>
        <NavLink onClick={handler} to={link.path} className={linkClassName}>
          {link.title}
        </NavLink>
      </li>
    );
  });
  return <ul className={styles.listClassName}>{linksMarkup}</ul>;
}

export default Navigation;
