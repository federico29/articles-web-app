import { useRef } from "react";

function ContentsTableForm({ setComponents }) {
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
    <form onSubmit={handleSubmit}>
      <h2>Contents Table</h2>
      <input placeholder="Header" ref={headerRef}></input>
      <div>
        <input placeholder="Item" ref={itemRef}></input>
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContentsTableForm;
