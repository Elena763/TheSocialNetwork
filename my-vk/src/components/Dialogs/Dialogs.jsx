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

  let newMessageElement = React.createRef();

  let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
  }

    return (
      <div className={DialogsStyle.wrapper}>
        <div className={DialogsStyle.item}>
          <h5>Dialogs</h5>
          <div className={DialogsStyle.user}>{dialogElements}</div>
        </div>
        <div className={DialogsStyle.messages}>
          {messageElements}
          <textarea className={DialogsStyle.text} ref={newMessageElement} placeholder="Написать сообщение" name="" id="" cols="30" rows="10"></textarea>
          <button className={DialogsStyle.button} onClick={addMessage}>Add</button>
        </div>
      </div>
    );
  }

  export default Dialogs;