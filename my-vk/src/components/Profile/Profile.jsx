import React from "react";
import profileStyle from './Profile.module.css';
//import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";
import MyPostsContainer from "./MyPosts/MyPostsContainer.jsx";

function Profile(props) {
    return (
      <div className={profileStyle.profile}>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        <MyPostsContainer
        store={props.store}
        />
      </div>
    );
  }

export default Profile;