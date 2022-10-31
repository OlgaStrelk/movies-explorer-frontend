import "./LogoLink.css";
import { Link } from 'react-router-dom';
import { ReactComponent as LogoImage } from "../../images/header__logo.svg";
import { PATHS } from '../../utils/consts';

function LogoLink(props) {
  return (
    <>
      <Link to={PATHS.aboutProject}>
        <LogoImage className="header__logo" />
      </Link>
    </>
  );
}

export default LogoLink;
