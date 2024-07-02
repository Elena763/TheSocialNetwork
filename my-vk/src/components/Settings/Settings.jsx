import React from "react";
import SettingsStyle from './Settings.module.css';


function Settings(props) {

    return (
      <div className={SettingsStyle.item}>
        Settings
        <li className={SettingsStyle.li}>Account</li>
        <li className={SettingsStyle.li}>Data and time</li>
        <li className={SettingsStyle.li}>Private</li>
        <li className={SettingsStyle.li}>Another</li>
      </div>

    );
  }

  export default Settings;