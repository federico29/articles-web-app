import { useRef } from "react";

function ArticleForm({ uploadArticle }) {
  const titleRef = useRef();
  const categoryRef = useRef();
  const abstractRef = useRef();
  const markdownRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    await uploadArticle({
      title: titleRef.current.value,
      abstract: abstractRef.current.value,
      category: categoryRef.current.value,
      markdown: markdownRef.current.value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" placeholder="Title" ref={titleRef} />
      </div>
      <div>
        <input type="text" placeholder="Category" ref={categoryRef} />
      </div>
      <div>
        <textarea placeholder="Abstract" rows="4" cols="50" ref={abstractRef} />
      </div>
      <div>
        <textarea placeholder="Markdown" rows="9" cols="50" ref={markdownRef} />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default ArticleForm;
