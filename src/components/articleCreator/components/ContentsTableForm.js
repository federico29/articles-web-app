import { useState, useRef } from "react";
import ComponentFormHeader from "./ComponentFormHeader";

function ContentsTableForm({ setComponents }) {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef();
  const itemRef = useRef();
  const items = [];

  const handleAddItem = (e) => {
    e.preventDefault();
    items.push({ sectionName: itemRef.current.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const content = {
      className: "content-table",
      props: {
        header: headerRef.current.value,
        items: items,
      },
    };
    console.log(content);
    setComponents((prev) => [...prev, content]);
  };

  return (
    <div>
      <ComponentFormHeader
        formTitle="Contents Table"
        setIsVisible={setIsVisible}
      />
      <form
        onSubmit={handleSubmit}
        style={{ display: isVisible ? "" : "none", backgroundColor: "green" }}
      >
        <input placeholder="Header" ref={headerRef}></input>
        <div>
          <input placeholder="Item" ref={itemRef}></input>
          <button onClick={handleAddItem}>Add Item</button>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContentsTableForm;
