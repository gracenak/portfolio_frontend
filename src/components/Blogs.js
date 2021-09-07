import React from "react";
import { blog1, blog2 } from "../utils/blogs";

const Blogs = () => {
  return (
    <div>
      <h1>Blogs</h1>
      <a href={blog1 && blog1.link}>{blog1 && blog1.title}</a>
      <a href={blog2 && blog2.link}>{blog2 && blog2.title}</a>
    </div>
  );
};

export default Blogs;
