//import React from "react";
import { sendMessageAC, updateNewMessageBodyAC } from "../../redux/dialogsReducer.js";
import Dialogs from "./Dialogs.jsx";
import { connect } from "react-redux";

  let mapStateToProps = (state) => {
    return {
      dialogsPage: state.dialogsPage,
      isAuth: state.auth.isAuth,
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

  const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

  export default DialogsContainer;