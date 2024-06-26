import React from "react";
import headerStyle from './Header.module.css';
import logo from "../../assets/images/logo_icon.png"
import { NavLink } from "react-router-dom";

function Header(props) {
    return (
      <div className={headerStyle.header}>
        <img src={logo} alt="logo" />
        Header
        <div className={headerStyle.loginBlock}>
          { props.isAuth ? props.login
            : <NavLink to={'/login'}>Login</NavLink> }
        </div>
      </div>
    );
  }

  export default Header;