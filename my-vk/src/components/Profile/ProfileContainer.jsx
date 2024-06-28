import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Profile from "./Profile.jsx";
import { getUserProfile, getStatus, updateStatus } from "../../redux/profileReducer.js";
import { useParams, Navigate } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect.js";
import { compose } from "@reduxjs/toolkit";

function ProfileContainer(props) {

    let [userID, setUserID] = useState();
    if (!userID) {
      userID=2;
    };
    alert(userID);
    useEffect(() => {
      getUserProfile(userID);
      getStatus(userID);
    },[userID]);

    if (!props.isAuth) {
      return <Navigate to={'/login'}/>;
    };
    return (
      <Profile {...props} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
    );
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});

export default compose (
  connect (mapStateToProps, {getUserProfile, getStatus, updateStatus}),
  withAuthRedirect
)(ProfileContainer);
