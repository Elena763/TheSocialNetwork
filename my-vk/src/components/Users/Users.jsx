import React from "react";
import { NavLink } from "react-router-dom";
import usersStyle from './Users.module.css';
import userPic from "../../assets/images/ProfileImg.png";
import axios from "axios";

function Users(props)  {

  let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize);
  let pages = [];
  for ( let i=1; i<=pagesCount; i++) {
    pages.push(i);
  };
  let curP = props.currentPage;
  let curPF = ((curP - 5) < 0) ?  0  : curP - 5 ;
  let curPL = curP + 5;
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
              ? <button className={usersStyle.button_unfollow} onClick={() => {

                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                  withCredentials: true,
                  headers: {
                    "API-KEY": "5e0dd846-f47c-4722-af37-a3cdaf183bd4"
                  },
                })
                  .then(response => {
                    if (response.data.resultCode == 0){
                      props.unfollow(u.id);
                    }
                  });
                }} >Unfollow</button>

              : <button className={usersStyle.button} onClick={() => {

                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                  withCredentials: true,
                  headers: {
                    "API-KEY": "5e0dd846-f47c-4722-af37-a3cdaf183bd4"
                  },
                })
                  .then(response => {
                    if (response.data.resultCode == 0){
                      props.follow(u.id);
                    }
                  });
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