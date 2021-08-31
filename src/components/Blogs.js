import React from "react";
import { blog1 } from "../utils/blogs";

const Blogs = () => {
  return (
    <div>
      <h1>Blogs</h1>
      <a href={blog1 && blog1.link}>{blog1 && blog1.title}</a>
    </div>
  );
};

export default Blogs;
