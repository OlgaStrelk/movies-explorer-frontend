import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.css";
import { MenuStateContext } from "../../contexts/MenuStateContext";

function Navigation({ handler, linksData, styles }) {
  const isMenuOpen = useContext(MenuStateContext);

  const linkClassName = !isMenuOpen
    ? `${styles.linkClassName} ${styles.headerClassName}`
    : `${styles.linkClassName}`;

  const linksArray = !isMenuOpen
    ? linksData.filter((link) => link.id !== 1)
    : linksData;
  const linksMarkup = linksArray.map((link) => (
    <li key={link.id} className={styles.listItemClassName}>
      <NavLink onClick={handler} to={link.path} className={linkClassName}>
        {link.title}
      </NavLink>
    </li>
  ));
  return <ul className={styles.listClassName}>{linksMarkup}</ul>;
}

export default Navigation;
