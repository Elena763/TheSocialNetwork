import React from "react";
import { sendMessageAC, updateNewMessageBodyAC } from "../../redux/dialogsReducer.js";
import Dialogs from "./Dialogs.jsx";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect.js";
import { compose } from "@reduxjs/toolkit";

  let mapStateToProps = (state) => {
    return {
      dialogsPage: state.dialogsPage,
    }
  }

  let mapDispatchToProps = (dispatch) => {
    return {
      sendMessage: () => {
        dispatch(sendMessageAC());
      },
      updateNewMessageBody: (message ) => {
        dispatch(updateNewMessageBodyAC(message));
      }
    }
  }

  export default compose (
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
  )(Dialogs);