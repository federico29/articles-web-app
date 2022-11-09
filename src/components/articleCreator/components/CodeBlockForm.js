import { useRef } from "react";

function CodeBlockForm({ setComponents }) {
  const languageRef = useRef();
  const codeRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const content = {
      className: "code-block",
      props: {
        language: languageRef.current.value,
        sourceCode: codeRef.current.value,
      },
    };
    console.log(content);
    setComponents((prev) => [...prev, content]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Code block</h2>
      <div>
        <input placeholder="Language" ref={languageRef} />
      </div>
      <div>
        <textarea placeholder="Code" ref={codeRef} rows="4" cols="50" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default CodeBlockForm;
