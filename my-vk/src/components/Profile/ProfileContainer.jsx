import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile.jsx";
import { getUserProfile } from "../../redux/profileReducer.js";
import { useParams, Navigate } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect.js";

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

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
});

export default connect (mapStateToProps, {getUserProfile}) (AuthRedirectComponent);