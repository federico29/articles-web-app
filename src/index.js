import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/styles/index.css";
import Home from "./pages/Home/index";
import NotFound from "./pages/NotFound/index";
import NewArticle from "./features/createArticle";
import ViewArticle from "./features/viewArticle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new-article" element={<NewArticle />} />
      <Route path="/article/:articleId">
        <Route index element={<ViewArticle />} />
      </Route>
      <Route path="/*" element={<NotFound />} />
    </Routes>
  </Router>
);
