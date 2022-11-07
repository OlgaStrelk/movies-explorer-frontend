import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation({handler, data}) {
  const { btns, style } = data;
  const btnsMarkup = btns.map((btn) => (
    <NavLink onClick={handler} key={btn.id} to={btn.path} className={`${style} ${btn.className}`}>
      {btn.title}
    </NavLink>
  ));
  return <>{btnsMarkup}</>;
}

export default Navigation;
