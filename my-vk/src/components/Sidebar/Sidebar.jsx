import React from "react";
import sideStyle from'./Sidebar.module.css';
import { NavLink } from "react-router-dom";


function Sidebar() {
    return (
        <nav className={sideStyle.nav}>
          <div className={sideStyle.item}>
            <NavLink to='/profile'> My Profile </NavLink>
          </div>
          <div className={sideStyle.item}>
            <NavLink to='/dialogs'> Messages </NavLink>
          </div>
          <div className={sideStyle.item}>
            <NavLink to='/news'> News </NavLink>
          </div>
          <div className={sideStyle.item}>
            <NavLink to='/friends'> Friends </NavLink>
          </div>
          <div className={sideStyle.item}>
            <NavLink to='/groups'> Groups </NavLink>
          </div>
          <div className={sideStyle.item}>
            <NavLink to='/fotos'> Fotos </NavLink>
          </div>
          <div className={sideStyle.item}>
            <NavLink to='/music'> Music </NavLink>
          </div>
          <div className={sideStyle.item}>
            <NavLink to='/video'> Video </NavLink>
            </div>
          <div className={sideStyle.item}>
            <NavLink to='/settings'> Settings </NavLink>
          </div>
        </nav>
    );
  }

  export default Sidebar;