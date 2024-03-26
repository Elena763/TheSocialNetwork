import React from "react";
import DialogsItemStyle from './DialogsItem.module.css';
import {NavLink} from "react-router-dom";

function DialogItem(props) {
   let path = "/dialogs/" + props.id;
   return (
    <div className={DialogsItemStyle.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
   );
}

export default DialogItem;