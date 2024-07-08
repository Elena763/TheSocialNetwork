import React from "react";
import DialogsStyle from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";
import { Navigate } from "react-router-dom";
import { Form, Field } from 'react-final-form';

function Dialogs(props) {

  let state = props.dialogsPage;
  let dialogElements = state.dialogs.map (d => <DialogItem name={d.name} id={d.id}/>);
  let messageElements = state.messages.map (m => <Message message={m.message}/>);
  //let newMessageBody = state.newMessageBody;
  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  }

  if (!props.isAuth) return <Navigate to={'/login'}/>;

  return (
      <div className={DialogsStyle.wrapper}>
        <div className={DialogsStyle.item}>
          <h5>Dialogs</h5>
          <div className={DialogsStyle.user}>{dialogElements}</div>
        </div>
        <div className={DialogsStyle.messages}>
          {messageElements}
          <AddMessageForm onSubmit={addNewMessage}/>
        </div>
      </div>
    );
}


//const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

/*const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}*/

function AddMessageForm(props) {
  console.log(props);
  return (
    <Form onSubmit={onSubmit}
    initialValues={{ stooge: '', employed: false }}
    render={props => {
      return (
        <form onSubmit={props.handleSubmit}>
          <div>
            <Field component={"textarea"}
            name="newMessageBody"
            placeholder="Написать сообщение"
            className={DialogsStyle.text}
            >
            </Field>
            <button
            className={DialogsStyle.button}
            >Add</button>
          </div>
        </form>
      )
    }}
    />
  )
}

  export default Dialogs;