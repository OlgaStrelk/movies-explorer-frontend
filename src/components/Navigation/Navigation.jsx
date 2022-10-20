import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation(props) {
  const { btns, style } = props.data;
  const btnsMarkup = btns.map((btn) => (
    <NavLink key={btn.id} to={btn.path} className={`${style} ${btn.className}`}>
      {btn.title}
    </NavLink>
  ));
  return <>{btnsMarkup}</>;
}

export default Navigation;
