import React from "react";
import sideStyle from'./Sidebar.module.css';

function Sidebar() {
    return (
      <div className={sideStyle.nav}>
        Sidebar
        <div>My Profile</div>
        <div>Messages</div>
        <div>News</div>
        <div>Friends</div>
        <div>Groups</div>
        <div>Fotos</div>
        <div>Music</div>
        <div>Video</div>
        <div>Settings</div>
      </div>
    );
  }

  export default Sidebar;