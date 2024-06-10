import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile.jsx";
import { getUserProfile } from "../../redux/profileReducer.js";
//import axios from "axios";
import { useParams } from "react-router-dom";
//import { userAPI } from "../../api/api.js";

function ProfileContainer(props) {
    let {userId} = useParams();
    if (!userId) {
      userId=2;
    }
    props.getUserProfile(userId);

    return (
      <Profile profile={props.profile}/>
    );
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

export default connect (mapStateToProps, {getUserProfile}) (ProfileContainer);