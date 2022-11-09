import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index";
import NotFound from "./pages/NotFound/index";
import Article from "./pages/Article/index";
import "./assets/styles/index.css";
import CreateArticle from "./pages/CreateArticle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/article" element={<Article />} />
      <Route path="/new-article" element={<CreateArticle />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  </Router>
);
