import { useRef } from "react";
import axios from "axios";

const ArticleForm = () => {
  const titleRef = useRef();
  const abstractRef = useRef();
  const categoryRef = useRef();
  const fileRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(
        "https://s3aq4jk9m4.execute-api.us-east-1.amazonaws.com/v1/article",
        {
          title: titleRef.current.value,
          abstract: abstractRef.current.value,
          category: categoryRef.current.value,
          file: fileRef.current.value,
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="file" placeholder="File" ref={fileRef} />
      </div>
      <div>
        <input type="text" placeholder="Title" ref={titleRef} />
      </div>
      <div>
        <input type="text" placeholder="Category" ref={categoryRef} />
      </div>
      <div>
        <input type="text" placeholder="Abstract" ref={abstractRef} />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ArticleForm;
