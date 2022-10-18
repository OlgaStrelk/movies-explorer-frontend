import "./Article.css";

function Article(props) {
  const { isCentred, uniqueTitleClass, uniqueTextCLass, subtitleClassName } =
    props.classes;

  const { title, subtitle, text } = props.children;

  const articleClassName = isCentred ? "article article_centred" : "article";
  const titleClassName = `article__title ${uniqueTitleClass}`;
  const textClassName = uniqueTextCLass
    ? `article__text ${uniqueTextCLass}`
    : "article__text";
  return (
    <article className={articleClassName}>
      <h3 className={titleClassName}>{title}</h3>
      {subtitle && <p className={subtitleClassName}>{subtitle}</p>}
      <p className={textClassName}>{text}</p>
    </article>
  );
}

export default Article;
