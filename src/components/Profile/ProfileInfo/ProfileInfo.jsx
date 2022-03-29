import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import ProfileCSS from "./ProfileInfo.module.css";
// import ProfileStatus from "./ProfileStatus";
import ProfileInfoTemplate from "./ProfileInfoTemplate";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={ProfileCSS.descriptionBlock}>
      <ProfileInfoTemplate {...props} />
    </div>
  );
};

export default ProfileInfo;
