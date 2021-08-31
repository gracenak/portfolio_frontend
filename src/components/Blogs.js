import React from "react";
import { blog1 } from "../utils/blogs";

const Blogs = () => {
  return (
    <div>
      <h1>Blogs</h1>
      <h2>{blog1.title}</h2>
    </div>
  );
};

export default Blogs;
