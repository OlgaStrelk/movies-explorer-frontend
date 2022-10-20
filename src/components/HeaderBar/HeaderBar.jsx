import "./HeaderBar.css";

function HeaderBar(props) {
	const { btns, style } = props.data
  const btnsMarkup = btns.map((btn) => (
    <button
      key={btn.id}
      type="button"
      className={`${style} ${btn.className}`}
    >
      {btn.title}
    </button>
  ));
  return <div>{btnsMarkup}</div>;
}

export default HeaderBar;
