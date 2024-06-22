import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile.jsx";
import { getUserProfile } from "../../redux/profileReducer.js";
import { useParams, Navigate } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect.js";
import { compose } from "@reduxjs/toolkit";

export function ProfileContainer(props) {

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
      <Profile {...props} profile={props.profile}/>
    );
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,

});

export default compose (
  connect (mapStateToProps, {getUserProfile}),
  withAuthRedirect
)(ProfileContainer);
