import { Link } from "react-router-dom";
import { PATHS } from "../../utils/consts";
import "./AccountLink.css";
import AccountIcon from "../../images/account__icon.svg";

function AccountLink() {
  const ACCOUNT_LINK_TITLE = "Аккаунт";
  return (
    <Link to={PATHS.profile} className="account-link__item">
      {ACCOUNT_LINK_TITLE}
      <div className="account__icon-substrate">
        <img className="account__icon" src={AccountIcon} alt={ACCOUNT_LINK_TITLE} />
      </div>
    </Link>
  );
}

export default AccountLink;
