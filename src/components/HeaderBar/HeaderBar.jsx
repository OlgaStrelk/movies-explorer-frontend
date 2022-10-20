import { NavLink } from 'react-router-dom';
import "./HeaderBar.css";

function HeaderBar(props) {
	const { btns, style } = props.data
  const btnsMarkup = btns.map((btn) => (
    <NavLink
      key={btn.id}
      to={btn.path}
      className={`${style} ${btn.className}`}
    >
      {btn.title}
    </NavLink>
  ));
  return <div>{btnsMarkup}</div>;
}

export default HeaderBar;
