import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile.jsx";
import { getUserProfile } from "../../redux/profileReducer.js";
//import axios from "axios";
import { useParams, Navigate } from "react-router-dom";
//import { userAPI } from "../../api/api.js";

function ProfileContainer(props) {

    let {userID} = useParams();
    if (!userID) {
      userID=2;
    };

    useEffect(() => {
      props.getUserProfile(userID);
    },[userID]);
    if (!props.isAuth) {
      return <Navigate to={'/login'}/>;
    };
    return (
      <Profile profile={props.profile}/>
    );
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
});

export default connect (mapStateToProps, {getUserProfile}) (ProfileContainer);