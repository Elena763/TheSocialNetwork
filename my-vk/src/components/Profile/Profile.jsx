import React from "react";
import profileStyle from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

function Profile(props) {
    return (
      <div className={profileStyle.profile}>
        <ProfileInfo/>
        <MyPosts
        posts={props.state.posts}
        addPost={props.addPost}/>
      </div>
    );
  }

export default Profile;