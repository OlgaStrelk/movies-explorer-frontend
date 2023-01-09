import "./Avatar.css";

function Avatar({ data }) {
  const STYLES_CONFIG = {
    containerClassName: "photo__container",
    photoClassName: "photo__item",
  };
  return (
    <div className={STYLES_CONFIG.containerClassName}>
      <img
        className={STYLES_CONFIG.photoClassName}
        alt={data.alt}
        src={data.src}
      />
    </div>
  );
}

export default Avatar;
