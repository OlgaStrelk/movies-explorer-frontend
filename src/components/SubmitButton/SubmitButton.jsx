import { Link } from "react-router-dom";
import { useFormContext } from "react-hook-form";

function SubmitButton({data}) {
  const { formState } = useFormContext();
  const STYLES_CONFIG = {
    buttonClassName: "auth__btn",
    disabledButtonClassName: "auth__btn_disabled",
    captionClassName: "auth__caption",
    textClassName: "auth__text",
    linkClassName: "auth__link",
  };

  const btnClassName = 
    formState.isValid ? STYLES_CONFIG.buttonClassName
    : `${STYLES_CONFIG.buttonClassName} ${STYLES_CONFIG.disabledButtonClassName}`;
  return (
    <>
      <button className={btnClassName} type={data.btn.type}>
        {data.btn.title}
      </button>
      <div className={STYLES_CONFIG.captionClassName}>
        <p className={STYLES_CONFIG.textClassName}>{data.caption}</p>
        <Link to={data.link.path} className={STYLES_CONFIG.linkClassName}>
          {data.link.title}
        </Link>
      </div>
    </>
  );
}

export default SubmitButton;
