import { Link } from "react-router-dom";
import { PATHS } from "../../utils/consts";
import "./AccountLink.css";
import AccountIcon from "../../images/account__icon.svg";

function AccountLink({handler, style}) {
  const ACCOUNT_LINK_TITLE = "Аккаунт";
  const STYLES_CONFIG = {
   iconSubstrateClassName: "account__icon-substrate",
   iconClassName: "account__icon"
  }
  return (
    <Link to={PATHS.profile} onClick={handler} className="account-link__item" style={style}>
      {ACCOUNT_LINK_TITLE}
      <div className={STYLES_CONFIG.iconSubstrateClassName}>
        <img className={STYLES_CONFIG.iconClassName} src={AccountIcon} alt={ACCOUNT_LINK_TITLE} />
      </div>
    </Link>
  );
}

export default AccountLink;
