import "./NavTab.css";
function NavTab() {
  return (
    <nav className="nav__panel">
		<ul className='nav__list'>
      <li className="nav__item"><a className="nav__link" href='#'>О проекте</a></li>
      <li className="nav__item"><a className="nav__link" href='#'>Технологии</a></li>
      <li className="nav__item"><a className="nav__link" href='#'>Студент</a></li>
	  </ul>
    </nav>
  );
}

export default NavTab;
