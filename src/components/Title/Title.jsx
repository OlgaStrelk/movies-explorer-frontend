import "./Title.css";

function Title(props) {
  return (
    <>
		<h1 className='section__title'>{props.children}</h1>
    </>
  );
}

export default Title;