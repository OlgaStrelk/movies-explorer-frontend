import "./Title.css";

function Title(props) {
  return (
    <header>
		<h1 className='section__title'>{props.children}</h1>
    </header>
  );
}

export default Title;