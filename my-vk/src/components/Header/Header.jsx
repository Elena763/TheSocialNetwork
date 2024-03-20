import React from "react";
import headerStyle from './Header.module.css';
import logo from "../../assets/images/logo_icon.png"

function Header() {
    return (
      <div className={headerStyle.header}>
        <img src={logo} alt="logo" />
        Header
      </div>
    );
  }

  export default Header;