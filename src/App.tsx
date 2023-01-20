import { renderArticle } from "./article-renderer";

export default function App(props) {
  let obj = [];

  try {
    obj = JSON.parse(atob(props.json));
  } catch (e) {}

  return (
    <div>
      <h1>Hello, World!</h1>
      <div>{renderArticle(obj)}</div>
    </div>
  );
}
