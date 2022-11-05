import { CopyBlock, dracula } from "react-code-blocks";

const BigHeader = ({ props }) => {
  return <h1 className="article big-header">{props.content}</h1>;
};

const MidHeader = ({ props }) => {
  return <h2 className="article mid-header">{props.content}</h2>;
};

const Paragraph = ({ props }) => {
  return <p className="article paragraph">{props.content}</p>;
};

const CodeBlock = ({ props }) => {
  return (
    <div className="article code-block">
      <CopyBlock
        language={props.language}
        text={props.sourceCode}
        showLineNumbers={true}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    </div>
  );
};

const ContentTable = ({ props }) => {
  return (
    <div className="article content-table">
      <h2>{props.header}</h2>
      <ul>
        {props.items.map((item, i) => {
          return (
            <li key={i}>
              <a href={`#${item.refId}`}>{item.sectionName}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Section = ({ props }) => {
  return (
    <div className="article section" id={props.refId}>
      {props.items.map((item, i) => {
        if (item.className === "big-header") {
          return <BigHeader props={item.props} key={i} />;
        }
        if (item.className === "mid-header") {
          return <MidHeader props={item.props} key={i} />;
        }
        if (item.className === "paragraph") {
          return <Paragraph props={item.props} key={i} />;
        }
        if (item.className === "content-table") {
          return <ContentTable props={item.props} key={i} />;
        }
        if (item.className === "code-block") {
          return <CodeBlock props={item.props} key={i} />;
        }
        return null;
      })}
    </div>
  );
};

export { BigHeader, Paragraph, ContentTable, Section, MidHeader, CodeBlock };
