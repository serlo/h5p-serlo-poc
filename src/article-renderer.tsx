import { Fragment, ReactNode } from "react";

export type NodePath = (number | string)[];

export const articleColors = {
  orange: "#ff6600",
  blue: "#1794c1",
  green: "#006400",
};

export function renderArticle(value, ...pathPrefix: string[]) {
  return _renderArticle(value, true, pathPrefix);
}

function _renderArticle(value, addCSS: boolean, pathPrefix: NodePath) {
  if (!value || !Array.isArray(value)) return null;
  const root = { children: value };
  const content = value.map((_, index) =>
    render(root, pathPrefix.concat(index))
  );
  if (!addCSS) return content;
  return <div className="serlo-content-with-spacing-fixes">{content}</div>;
}

function getNode(value, path: number[]) {
  if (path.length === 0 || value.children === undefined) {
    return value;
  } else {
    return getNode(value.children[path[0]], path.slice(1));
  }
}

function render(value, path: NodePath = []): ReactNode {
  const currentPath: number[] = [];
  for (let i = path.length - 1; i >= 0; i--) {
    const index = path[i];
    if (typeof index === "number") {
      currentPath.unshift(index);
    } else {
      break;
    }
  }

  const currentNode = getNode(value, currentPath);
  const key = currentPath[currentPath.length - 1];

  if (currentNode.type !== "text") {
    const children: ReactNode[] = [];
    if (currentNode.children) {
      currentNode.children.forEach((_child, index) => {
        children.push(render(value, path.concat(index)));
      });
    }

    return (
      <Fragment key={key}>
        {renderElement({
          element: currentNode,
          children: children.length === 0 ? null : children,
          value,
          path,
        })}
      </Fragment>
    );
  }
  //if (!currentNode) return null
  if (currentNode.text === "") {
    return null; // avoid rendering empty spans
  }
  return renderLeaf({
    leaf: currentNode,
    key,
    children: currentNode?.text,
  });
}

export function renderLeaf({ leaf, key, children }) {
  const styles = {} as any;

  if (leaf.code) {
    return (
      <code
        key={key}
        className="bg-brand-100 text-brand p-1 rounded-sm text-base"
      >
        {children}
      </code>
    );
  }

  if (leaf.color) styles.color = articleColors[leaf.color];
  if (leaf.em) styles.fontStyle = "italic";
  if (leaf.strong) styles.fontWeight = "bold";

  if (Object.keys(styles).length === 0) return children;

  const LeafTag = leaf.code
    ? "code"
    : leaf.strong
    ? "b"
    : leaf.em
    ? "i"
    : "span";
  const outputStyles = !(
    Object.keys(styles).length === 1 && LeafTag !== "span"
  );

  return (
    <LeafTag key={key} style={outputStyles ? styles : {}}>
      {children}
    </LeafTag>
  );
}

function renderElement(arg0: {
  element: any;
  children: ReactNode[];
  value: any;
  path: NodePath;
}): ReactNode {
  console.log(arg0.element);
  throw new Error("Function not implemented.");
}
