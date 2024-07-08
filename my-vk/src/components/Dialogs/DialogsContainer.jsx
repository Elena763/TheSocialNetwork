import React from "react";
import { sendMessageAC } from "../../redux/dialogsReducer.js";
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
      sendMessage: (newMessageBody) => {
        dispatch(sendMessageAC(newMessageBody));
      }
    }
  }

  export default compose (
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
  )(Dialogs);