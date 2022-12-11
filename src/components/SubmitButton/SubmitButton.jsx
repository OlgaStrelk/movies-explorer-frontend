import { Link } from "react-router-dom";

function SubmitButton({ data }) {
  const STYLES_CONFIG = {
    buttonClassName: "auth__btn",
    captionClassName: "auth__caption",
    textClassName: "auth__text",
    linkClassName: "auth__link",
  };

  return (
    <>
        <button className={STYLES_CONFIG.buttonClassName} type={data.btn.type}>
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
