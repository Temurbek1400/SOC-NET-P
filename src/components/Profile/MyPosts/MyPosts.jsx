import React from "react";
import { Field, reduxForm } from "redux-form";
import MyPostsCSS from "./MyPosts.module.css";
import Post from "./Post/Post";

const AddPostForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="newPostText"
        component="textarea"
        cols="50"
        rows="5"
        required
      />
      <div>
        <Field type="submit" name="addNewPostBtn" component="button">
          Add post
        </Field>
      </div>
    </form>
  );
};
const AddPostWithReduxForm = reduxForm({ form: "addPostForm" })(AddPostForm);

const MyPosts = React.memo(({postsData, addPost}) => {
  let postElements = [...postsData].reverse().map((data) => (
    <Post
      postMessage={data.postMessage}
      likesCount={data.likesCount}
      key={data.id}
    />
  ));

  const onAddPost = (values) => {
    addPost(values.newPostText);
  };
  console.log("render");
  return (
    <div>
      <div className={MyPostsCSS.postsBlock}>
        <h2>My Posts</h2>
        <div>New post</div>
        <AddPostWithReduxForm onSubmit={onAddPost} />
      </div>
      <div>{postElements}</div>
    </div>
  );
});

export default MyPosts;
