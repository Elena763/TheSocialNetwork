import React from "react";
import MessageStyle from './Message.module.css';

function Message(props) {
  return(
    <div className={MessageStyle.messageWrapp}>
        <div className={MessageStyle.message}>
          {props.message}
        </div>
    </div>

  )
}

export default Message;