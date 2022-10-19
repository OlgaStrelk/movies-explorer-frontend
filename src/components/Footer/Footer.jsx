import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  const FOOTER_DATA = {
    caption: "Учебный проект Яндекс.Практикум х BeatFilm.",
    year: currentYear,
    links: [
      { id: 1, title: "Яндекс.Практикум", href: "" },
      { id: 2, title: "Github", href: "" },
    ],
  };

  const linksMarkdown = FOOTER_DATA.links.map((item) => (
    <li className="footer__item" key={item.id}>
      <a className="footer__link" href={item.href}>
        {item.title}
      </a>
    </li>
  ));

  return (
    <footer className='footer'>
      <p className="footer__caption">{FOOTER_DATA.caption}</p>
      <div className='footer__container'>
      <p className="footer__year">&#169;{FOOTER_DATA.year}</p>
      <ul className="footer__list">{linksMarkdown}</ul>
      </div>
    </footer>
  );
}

export default Footer;
