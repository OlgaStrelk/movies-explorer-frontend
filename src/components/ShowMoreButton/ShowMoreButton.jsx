import "./ShowMoreButton.css";

function ShowMoreButton(props) {
	const BTN_TEXT_CONTENT = "Ещё"
  return (
    <button type="button" className='show-more-btn'>{BTN_TEXT_CONTENT}
    </button>
  );
}

export default ShowMoreButton;