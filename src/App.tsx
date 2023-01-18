import { renderArticle } from "./article-renderer";

export default function App(props) {
  return (
    <div>
      <h1>Hello, World!</h1>
      <div>{renderArticle(JSON.parse(props.json.replace(/&quot;/g, '"')))}</div>
    </div>
  );
}
