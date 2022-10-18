import "./ListItem.css";

function ListItem({ link }) {
  return (
    <li key={link.id} className="list-item">
      <a href={link.href} className="list-item__link">
        <h5 className="list-item__title">{link.title}</h5>
        <div className="list-item__icon"></div>
      </a>
    </li>
  );
}

export default ListItem;
