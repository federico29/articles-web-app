import { useState, useRef } from "react";
import ComponentFormHeader from "./ComponentFormHeader";

function CodeBlockForm({ setComponents }) {
  const [isVisible, setIsVisible] = useState(false);
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
    <div>
      <ComponentFormHeader formTitle="Code Block" setIsVisible={setIsVisible} />
      <form
        onSubmit={handleSubmit}
        style={{
          display: isVisible ? "block" : "none",
          backgroundColor: "green",
        }}
      >
        <div>
          <input placeholder="Language" ref={languageRef} />
        </div>
        <div>
          <textarea placeholder="Code" ref={codeRef} rows="4" cols="50" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CodeBlockForm;
