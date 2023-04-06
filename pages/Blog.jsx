import React from "react";
import "../styles/blog.css";
import { blogCards } from "../data/main";
import Cards from "../components/Cards";

const Blog = () => {
  return (
    <div className="blog">
      <h1 className="title">Blog</h1>
      <div className="blog-content">
        <Cards cards={blogCards}/>
      </div>
    </div>
  );
};

export default Blog;
