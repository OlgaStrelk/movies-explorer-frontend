import "./Popup.css";
function Popup({ text, isOpen, onClose }) {
  const popupClassName = isOpen ? "popup popup_is-opened" : "popup";

  const STYLES_CONFIG = {
    popup: popupClassName,
    container: "popup__container",
    closeBtn: "popup__close",
    icon: "popup__icon",
    text:"popup__text"
  }

  
  return (
    <div className={STYLES_CONFIG.popup}>
      <div className={STYLES_CONFIG.container}>
        <button
          type="button"
          className={STYLES_CONFIG.closeBtn}
          aria-label="Закрыть"
          onClick={onClose}
        ></button>
        {/* <div className={STYLES_CONFIG.icon}></div> */}
        <p className={STYLES_CONFIG.text}>{text}</p>
      </div>
    </div>
  );
}

export default Popup;
