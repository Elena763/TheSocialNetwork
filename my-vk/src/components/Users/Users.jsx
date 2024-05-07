import React from "react";
import usersStyle from './Users.module.css';
import axios from "axios";
import userPic from "../../assets/images/ProfileImg.png";

class Users extends React.Component {

  constructor (props) {
    super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
          .then(response => {
            this.props.setUsers(response.data.items);
        });
  }

       /*
        [
          {id: 1, userpic: 'https://mrandmrs50plus.com/wp-content/uploads/2018/02/smiling-woman-2.jpg',
            followed: false, fullname: 'Elena', status: "Hello world!", location: {country: 'Russia', city: 'Samara'}},
          {id: 2, userpic: 'https://gallamed.ru/upload/iblock/ee6/ee6969e643c6bb47242b383b5ab32380.png',
            followed: true, fullname: 'Vlada', status: "Hello!", location: {country: 'Kazakhstan', city: 'Astana'}},
          {id: 3, userpic: 'https://diepenbrockfacialcosmeticsurgery.com/wp-content/uploads/2016/12/AdobeStock_non-surgical.jpg',
            followed: false, fullname: 'Renata', status: "world!", location: {country: 'Russia', city: 'Ufa'}},
          {id: 4, userpic: 'https://455811.selcdn.ru/lovemother/uploads/2018/01/215.jpg',
            followed: true, fullname: 'Stasy', status: "Horld!", location: {country: 'Vietnam', city: 'NhaTrang'}},
            'https://social-network.samuraijs.com/users'
          ]*/

  render () {
    return (
      <div className={usersStyle.s}>
        {
          this.props.users.map (u => <div key={u.id}>
        <div className={usersStyle.s}>
            <div className={usersStyle.userpic}>
              <img src={ u.photos.small != null ? u.photos.small : userPic } alt="pic" />
            </div>
            <div className={usersStyle.s}>
              { u.followed
              ? <button onClick={() => {this.props.unfollow(u.id)}} >Unfollow</button>
              : <button onClick={() => {this.props.follow(u.id)}} >Follow</button>}
            </div>
        </div>
        <div className={usersStyle.s}>
          <div className={usersStyle.s}>
            <div className={usersStyle.s}>{u.name}</div>
            <div className={usersStyle.s}>{u.status}</div>
          </div>
          <div className={usersStyle.s}>
            <div className={usersStyle.s}>{'u.location.country'}</div>
            <div className={usersStyle.s}>{'u.location.city'}</div>
          </div>
        </div>
        </div>)
        }
      </div>
    );
  }
}
  export default Users;