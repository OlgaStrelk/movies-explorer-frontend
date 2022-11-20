import "./CheckButton.css";

function CheckButton(props) {
  const className = (props.isVisible)
    ? `${props.data.style} check-button  check-button_visible`
    : `${props.data.style} check-button`;

  return (
    <button
      type="button"
      onClick={props.data.handler}
      className={className}
    >
      {props.children}
    </button>
  );
}

export default CheckButton;
