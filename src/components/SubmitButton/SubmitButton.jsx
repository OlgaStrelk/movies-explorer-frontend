import { Link } from "react-router-dom";

function SubmitButton(props) {
  const STYLES_CONFIG = {
    buttonClassName: "auth__btn",
    disabledButtonClassName: "auth__btn_disabled",
    captionClassName: "auth__caption",
    textClassName: "auth__text",
    linkClassName: "auth__link",
  };

  const btnClassName = props.isValid
    ? STYLES_CONFIG.buttonClassName
    : `${STYLES_CONFIG.buttonClassName} ${STYLES_CONFIG.disabledButtonClassName}`;
  return (
    <>
      <button className={btnClassName} type={props.data.btn.type}>
        {props.data.btn.title}
      </button>
      <div className={STYLES_CONFIG.captionClassName}>
        <p className={STYLES_CONFIG.textClassName}>{props.data.caption}</p>
        <Link to={props.data.link.path} className={STYLES_CONFIG.linkClassName}>
          {props.data.link.title}
        </Link>
      </div>
    </>
  );
}

export default SubmitButton;
