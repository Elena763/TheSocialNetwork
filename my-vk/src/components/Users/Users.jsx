import React from "react";
import { NavLink } from "react-router-dom";
import usersStyle from './Users.module.css';
import userPic from "../../assets/images/ProfileImg.png";
//import axios from "axios";
//import { userAPI } from "../../api/api";

function Users(props)  {

  let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize);
  let pages = [];
  for ( let i=1; i<=pagesCount; i++) {
    pages.push(i);
  };
  let curP = props.currentPage;
  let curPF = ((curP - 15) < 0) ?  0  : curP - 10 ;
  let curPL = curP + 15;
  let slicedPages = pages.slice( curPF, curPL);

  return (
      <div className={usersStyle.usersPage}>
        <div className={usersStyle.pages}>
          {slicedPages.map( p => {
            return <span className={props.currentPage === p && usersStyle.selectedPage}
                onClick={ (e) => {
                  props.onPageChanged(p);
                }}>{p + " "}</span>
          })}
        </div>

        {
          props.users.map (u => <div className={usersStyle.user_wrapper}  key={u.id}>
        <div className={usersStyle.user}>
            <div className={usersStyle.userpic}>
              <NavLink to={'/profile/' + u.id} >
                <img src={ u.photos.small != null ? u.photos.small : userPic } alt="pic" />
              </NavLink>

            </div>
            <div className={usersStyle.s}>
              { u.followed
              ? <button disabled={props.followingInProgress.some(id=> id === u.id)} className={usersStyle.button_unfollow} onClick={() => {
                props.unfollow(u.id);
                }} >Unfollow</button>

              : <button disabled={props.followingInProgress.some(id=> id === u.id)} className={usersStyle.button} onClick={() => {
                props.follow(u.id);
              }} >Follow</button>}
            </div>
        </div>
        <div className={usersStyle.userInfo}>
          <div className={usersStyle.s}>
            <div className={usersStyle.name}>{u.name}</div>
            <div className={usersStyle.status}>{u.status}</div>
          </div>
          <div className={usersStyle.s}>
            <div className={usersStyle.country}>{'u.location.country'}</div>
            <div className={usersStyle.city}>{'u.location.city'}</div>
          </div>
        </div>
        </div>)
        }
        </div>

    );
  }

export default Users;