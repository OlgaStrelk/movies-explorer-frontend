import { Link } from "react-router-dom";
import { PATHS } from "../../utils/consts";
import "./AccountLink.css";
import AccountIcon from "../../images/account__icon.svg";

function AccountLink({handler, style}) {
  const ACCOUNT_LINK_TITLE = "Аккаунт";
  return (
    <Link to={PATHS.profile} onClick={handler} className="account-link__item" style={style}>
      {ACCOUNT_LINK_TITLE}
      <div className="account__icon-substrate">
        <img className="account__icon" src={AccountIcon} alt={ACCOUNT_LINK_TITLE} />
      </div>
    </Link>
  );
}

export default AccountLink;
