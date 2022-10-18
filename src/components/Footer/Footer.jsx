import "./Footer.css";

function Footer() {
  const FOOTER_DATA = {
    caption: "Учебный проект Яндекс.Практикум х BeatFilm.",
    year: 2022,
    links: [
      { id: 1, text: "Яндекс.Практикум", href: "" },
      { id: 2, text: "Github", href: "" },
    ],
  };

  const linksMarkdown = FOOTER_DATA.links.map((item) => (
    <a key={item.id} href={item.href}>
      <p>{item.title}</p>
    </a>
  ));

  return (
    <>
      <p>{FOOTER_DATA.caption}</p>
      <p>{FOOTER_DATA.year}</p>
      {linksMarkdown}
    </>
  );
}

export default Footer;
