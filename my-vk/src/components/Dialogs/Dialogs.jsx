import React from "react";
import DialogsStyle from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";
import { Navigate } from "react-router-dom";
import { Form, Field, FormSpy } from 'react-final-form';

function Dialogs(props) {

  let state = props.dialogsPage;
  let dialogElements = state.dialogs.map (d => <DialogItem name={d.name} id={d.id}/>);
  let messageElements = state.messages.map (m => <Message message={m.message} key={m.id}/>);
  let addNewMessage = (values) => {
    console.log(values);
    props.sendMessage(values.newMessageBody);
  }

  if (!props.isAuth) return <Navigate to={'/login'}/>;

  return (
      <div className={DialogsStyle.wrapper}>
        <div className={DialogsStyle.item}>
          <h5>Dialogs</h5>
          <div className={DialogsStyle.user}>
            {dialogElements}
          </div>
        </div>
        <div className={DialogsStyle.messages}>
          {messageElements}
          <AddMessageForm onSubmit={addNewMessage}/>
        </div>
      </div>
    );
}

const AddMessageForm = (props) => {
  return (
    <Form
      onSubmit={props.onSubmit}
      subscription={{
        submitted: true
      }}
    >
     {({ handleSubmit, submitting, values }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <Field
            component={"textarea"}
            name="newMessageBody"
            placeholder="Написать сообщение"
            subscription={{
              value: true,
              active: true,
              error: true,
              touched: true
            }}
            className={DialogsStyle.text}
            >
            </Field>
            <button type="submit"
            className={DialogsStyle.button}
            disabled={submitting}
            >Send</button>
            {/*<FormSpy subscription={{ values: true }}>
            {({ values }) => <pre>{JSON.stringify(values, undefined, 2)}</pre>}
          </FormSpy>*/}
          </div>
        </form>
      )}
    </Form>
  )
}

  export default Dialogs;