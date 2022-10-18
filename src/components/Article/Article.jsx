import "./Article.css";

function Article({
  uniqueTitleClass,
  uniqueTextCLass,
  title,
  text,
  isCentred,
}) {
  const articleClassName = isCentred ? "article article_centred" : "article";
  const titleClassName = `article__title ${uniqueTitleClass}`;
  const textClassName = uniqueTextCLass
    ? `article__text ${uniqueTextCLass}`
    : "article__text";
  return (
    <article className={articleClassName}>
      <h3 className={titleClassName}>{title}</h3>
      <p className={textClassName}>{text}</p>
    </article>
  );
}

export default Article;
