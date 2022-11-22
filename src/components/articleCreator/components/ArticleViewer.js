import {
  BigHeader,
  Paragraph,
  ContentTable,
  Section,
  CodeBlock,
} from "../../article";

function ArticleViewer({ components }) {
  return (
    <div className="article-viewer">
      {components.map((component, i) => {
        if (component.className === "big-header") {
          return <BigHeader props={component.props} key={i} />;
        }
        if (component.className === "paragraph") {
          return <Paragraph props={component.props} key={i} />;
        }
        if (component.className === "content-table") {
          return <ContentTable props={component.props} key={i} />;
        }
        if (component.className === "section") {
          return <Section props={component.props} key={i} />;
        }
        if (component.className === "code-block") {
          return <CodeBlock props={component.props} key={i} />;
        }
        return null;
      })}
    </div>
  );
}

export default ArticleViewer;
