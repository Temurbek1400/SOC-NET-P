import React from "react";
import PostCSS from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={PostCSS.item}>
      <img className={PostCSS.img} src="data:image/jpeg;base64,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" alt=""/>
      <p>{props.postMessage}</p>
      <div className={PostCSS.like}>Like: {props.likesCount}</div>
    </div>
  );
};

export default Post;