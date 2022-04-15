import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "../views/AboutPage";
import BlogPage from "../views/BlogPage";
import ContactPage from "../views/ContactPage";
import HomePage from "../views/HomePage";
import NotFoundPage from "../views/NotFoundPage";

const IndexRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default IndexRouter;
