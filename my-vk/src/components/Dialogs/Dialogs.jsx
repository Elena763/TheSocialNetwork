import React from "react";
import DialogsStyle from './Dialogs.module.css';
//import {NavLink} from 'react-router-dom';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";

function Dialogs(props) {
  let dialogElements =
    props.state.dialogs.map (d => <DialogItem name={d.name} id={d.id}/>);
  let messageElements =
    props.state.messages.map (m => <Message message={m.message}/>);
    return (
      <div>
        <div className={DialogsStyle.item}>
          Dialogs
          {dialogElements}
        </div>
        <div className={DialogsStyle.messages}>
          {messageElements}
        </div>
      </div>
    );
  }

  export default Dialogs;