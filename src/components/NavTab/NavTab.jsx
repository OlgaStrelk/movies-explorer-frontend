import "./NavTab.css";
function NavTab() {
  const NAV_ITEM_CLASS_NAME = "nav__item";
  const NAV_LINK_CLASS_NAME = "nav__link";
  const NAV_ITEMS_DATA = [
    {
      title: "О проекте",
      link: "#about-project",
      id: "1",
    },
    {
      title: "Технологии",
      link: "#technologies",
      id: "2",
    },
    {
      title: "Студентка",
      link: "#student",
      id: "3",
    },
  ];

  const navItemsMarkup = NAV_ITEMS_DATA.map((item) => (
    <li className={NAV_ITEM_CLASS_NAME} key={item.id}>
      <a className={NAV_LINK_CLASS_NAME} href={item.link}>
        {item.title}
      </a>
    </li>
  ));

  return (
    <nav className="nav">
      <ul className="nav__list">{navItemsMarkup}</ul>
    </nav>
  );
}

export default NavTab;
