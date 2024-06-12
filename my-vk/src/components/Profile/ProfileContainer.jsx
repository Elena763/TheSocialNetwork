import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile.jsx";
import { getUserProfile } from "../../redux/profileReducer.js";
//import axios from "axios";
import { useParams, Navigate } from "react-router-dom";
//import { userAPI } from "../../api/api.js";

function ProfileContainer(props) {

    let {userId} = useParams();
    if (!userId) {
      userId=2;
    };
    useEffect((props) => {
      if (!props.isAuth) {
        return <Navigate to={'/login'}/>;
      }
      props.getUserProfile(userId);
    },[userId]);

    return (
      <Profile profile={props.profile}/>
    );
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
});

export default connect (mapStateToProps, {getUserProfile}) (ProfileContainer);