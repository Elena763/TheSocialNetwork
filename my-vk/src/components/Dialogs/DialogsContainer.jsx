//import React from "react";
import { sendMessageAC, updateNewMessageBodyAC } from "../../redux/dialogsReducer.js";
import Dialogs from "./Dialogs.jsx";
import { connect } from "react-redux";

  let mapStateToProps = (state) => {
    return {
      dialogsPage: state.dialogsPage
    }
  }

  let mapDispatchToProps = (dispatch) => {
    return {
      updateNewMessageBody: () => {
        dispatch(sendMessageAC());
      },
      sendMessage: (message ) => {
        dispatch(updateNewMessageBodyAC(message));
      }
    }
  }

  const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

  export default DialogsContainer;