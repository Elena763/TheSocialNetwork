import React from "react";
import profileStyle from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

function Profile(props) {
    return (
      <div className={profileStyle.profile}>
        <ProfileInfo/>
        <MyPosts
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        updateNewPostText={props.updateNewPostText}
        addPost={props.addPost}/>
      </div>
    );
  }

export default Profile;