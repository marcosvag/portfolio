export function ListLink({ text, url, classes }) {
  return (
    <li>
      <a href={url} className={classes}>
        {text}
      </a>
    </li>
  );
}