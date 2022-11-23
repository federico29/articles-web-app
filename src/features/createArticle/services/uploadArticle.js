import axios from "axios";

async function uploadArticle({ title, abstract, category, markdown }) {
  axios
    .post("https://s3aq4jk9m4.execute-api.us-east-1.amazonaws.com/v1/article", {
      title: title,
      abstract: abstract,
      category: category,
      markdown: markdown,
    })
    .then((res) => {})
    .catch((err) => {
      console.log(err);
    });
}

export default uploadArticle;
