import "./ListItem.css";

function ListItem({ link, styles }) {
  return (
    <li key={link.id} className={styles.itemClassName}>
      <a href={link.href} className={styles.linkClassName} target="blank">
        <h5 className={styles.titleClassName}>{link.title}</h5>
        <div className={styles.iconClassName}></div>
      </a>
    </li>
  );
}

export default ListItem;
