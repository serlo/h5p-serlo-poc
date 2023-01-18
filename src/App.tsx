import { renderArticle } from "./article-renderer";

export default function App(props) {
  return (
    <div>
      <h1>Hello, World!</h1>
      <div>{renderArticle(JSON.parse(atob(props.json)))}</div>
    </div>
  );
}
