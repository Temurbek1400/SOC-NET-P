// import React from "react";
import MyPosts from "./MyPosts";
import { addPost } from '../../../redux/profile-reducer';
import { connect } from "react-redux";
let mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData
  } 
}
let mapDispatchToProps = {
  addPost,
}
let MyPostsContainer =  connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
