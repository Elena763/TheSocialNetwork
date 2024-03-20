import React from "react";
import profileStyle from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";


function Profile() {
    return (
      <div className={profileStyle.profile}>
        <div>ava + description</div>
        <MyPosts/>
      </div>
    );
  }

  export default Profile;