import React from "react";
import DialogsStyle from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";

function Dialogs(props) {

  let state = props.dialogsPage;

  let dialogElements =
    state.dialogs.map (d => <DialogItem name={d.name} id={d.id}/>);
  let messageElements =
    state.messages.map (m => <Message message={m.message}/>);
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick= () => {
    props.sendMessage();
  }

  let onNewMessagesChange= (e) => {
    let message = e.target.value;
    props.updateNewMessageBody(message);
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
          //ref={newMessageBody}
          value={newMessageBody}
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