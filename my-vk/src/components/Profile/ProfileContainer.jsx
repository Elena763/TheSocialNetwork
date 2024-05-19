import React, {useEffect} from "react";
import { connect } from "react-redux";
import Profile from "./Profile.jsx";
import { setUserProfile } from "../../redux/profileReducer.js";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProfileContainer(props) {
    let {userId} = useParams();
    if (!userId) {
      userId=2;
    }
    useEffect(() => {
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then((response) => {
        props.setUserProfile(response.data);
    });
    }, [userId]);

    return (
      <Profile profile={props.profile}/>
    );
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

export default connect (mapStateToProps, {setUserProfile}) (ProfileContainer);