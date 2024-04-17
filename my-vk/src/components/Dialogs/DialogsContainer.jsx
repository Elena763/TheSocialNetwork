import React from "react";
import { sendMessageAC, updateNewMessageBodyAC } from "../../redux/dialogsReducer.js";
import Dialogs from "./Dialogs.jsx";

function DialogsContainer(props) {

  let state = props.store.getState().dialogsPage;

  let onSendMessageClick= () => {
    props.store.dispatch(sendMessageAC());
  }

  let onNewMessagesChange= (message) => {
    props.store.dispatch(updateNewMessageBodyAC(message));
  }

    return (
      <Dialogs updateNewMessageBody={onNewMessagesChange}
      sendMessage={onSendMessageClick}
      dialogsPage={state}
      />
    );
  }

  export default DialogsContainer;