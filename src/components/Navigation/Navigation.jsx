import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation({ handler, linksData, listClassName }) {
  const { data, styles } = linksData;
  const linksMarkup = data.map((link) => (
    <li key={link.id} className={styles.listItemClassName}>
      <NavLink
        onClick={handler}
        to={link.path}
        className={`${styles.linkClassName} ${link.className}`}
      >
        {link.title}
      </NavLink>
    </li>
  ));
  return <ul className={listClassName}>{linksMarkup}</ul>;
}

export default Navigation;
