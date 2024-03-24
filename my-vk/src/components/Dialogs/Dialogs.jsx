import React from "react";
import DialogsStyle from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

function DialogItem(props) {
   let path = "/dialogs/" + props.id;
   return (
    <div className={DialogsStyle.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
   );
}

function Message(props) {
  return(
    <div className={DialogsStyle.message}>
      {props.message}
    </div>
  )
}

function Dialogs(props) {
  let dialogs = [
    {id: 1, name: "Katya"},
    {id: 2, name: "Ivan"},
    {id: 3, name: "Alexandr"},
    {id: 4, name: "Tatiana"},
    {id: 5, name: "Marina"},
    {id: 6, name: "Evgeniy"},
  ];
  let messages =[
    {id: 1, message: "Hi"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "It`s fine"},
    {id: 4, message: "Amazing"},
    {id: 5, message: "Goodbye"},
    {id: 6, message: "See you later"},
  ];
  let dialogElements =
    dialogs.map (d => <DialogItem name={d.name} id={d.id}/>);
  let messageElements =
    messages.map (m => <Message message={m.message}/>);
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