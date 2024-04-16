import React from "react";
import DialogsStyle from './Dialogs.module.css';
//import {NavLink} from 'react-router-dom';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";
import { sendMessageAC, updateNewMessageBodyAC } from "../../redux/dialogsReducer.js";

function Dialogs(props) {
  let dialogElements =
    props.state.dialogs.map (d => <DialogItem name={d.name} id={d.id}/>);
  let messageElements =
    props.state.messages.map (m => <Message message={m.message}/>);

  let newMessageBody = React.createRef();

  let onSendMessageClick= () => {
    props.dispatch(sendMessageAC());
  }

  let onNewMessagesChange= () => {
    let message = newMessageBody.current.value;
    let action = updateNewMessageBodyAC(message);
    props.dispatch(action);
  }

    return (
      <div className={DialogsStyle.wrapper}>
        <div className={DialogsStyle.item}>
          <h5>Dialogs</h5>
          <div className={DialogsStyle.user}>{dialogElements}</div>
        </div>
        <div className={DialogsStyle.messages}>
          {messageElements}
          <textarea
          className={DialogsStyle.text}
          ref={newMessageBody}
          value={props.newMessageBod}
          onChange={onNewMessagesChange}
          placeholder="Написать сообщение"
          >
          </textarea>
          <button
          className={DialogsStyle.button}
          onClick={onSendMessageClick}>Add</button>
        </div>
      </div>
    );
  }

  export default Dialogs;