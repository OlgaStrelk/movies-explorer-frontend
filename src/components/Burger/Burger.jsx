import "./Burger.css";

function Burger(props) {
  return (
    <button
      className="burger"
      onClick={props.handler}
    />
  );
}

export default Burger;
