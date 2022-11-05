import { useState } from "react";
import axios from "axios";

const ArticleForm = () => {
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState("");

  const upload = () => {
    let article = {
      title: title,
      abstract: abstract,
      category: category,
      file: file,
    };

    axios
      .post(
        "https://s3aq4jk9m4.execute-api.us-east-1.amazonaws.com/v1/article",
        article
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const toBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileInputChange = async (e) => {
    const base64 = await toBase64(e.target.files[0]);
    setFile(base64.split(",").at(-1));
  };

  return (
    <div>
      <div>
        <input
          type="file"
          placeholder="File"
          onChange={handleFileInputChange}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Category"
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Abstract"
          onChange={(e) => setAbstract(e.target.value)}
        />
      </div>
      <div>
        <button type="button" onClick={upload}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default ArticleForm;
