import React from "react";
import ProfileCSS from "./Profile.module.css";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  return (
    <main className={ProfileCSS.main}>
      <ProfileInfo {...props}/>
      <MyPostsContainer />
    </main>
  );
};

export default Profile;
