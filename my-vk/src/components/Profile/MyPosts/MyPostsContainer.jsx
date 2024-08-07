//import React from "react";
import {addPostAC} from "../../../redux/profileReducer.js";
import MyPosts from "./MyPosts.jsx";
import { connect } from "react-redux";

  let mapStateToProps = (state) => {
    return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText,
    }
  }

  let mapDispatchToProps = (dispatch) => {
    return {
      addPost: (newPostText) => {
        dispatch(addPostAC(newPostText));
      }
    }
  }

  const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

  export default MyPostsContainer;