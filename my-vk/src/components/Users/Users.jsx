import React from "react";
import usersStyle from './Users.module.css';
import axios from "axios";
import userPic from "../../assets/images/ProfileImg.png";

class Users extends React.Component {

  componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
          this.props.setUsers(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount);
      });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
          this.props.setUsers(response.data.items);
      });
  }


  render () {

    let pagesCount = Math.ceil (this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
    for ( let i=1; i<=pagesCount; i++) {
      pages.push(i);

    };
    let curP = this.props.currentPage;
    let curPF = ((curP - 5) < 0) ?  0  : curP - 5 ;
    let curPL = curP + 5;
    let slicedPages = pages.slice( curPF, curPL);


    return (
      <div className={usersStyle.usersPage}>
        <div className={usersStyle.pages}>
          {slicedPages.map( p => {
            return <span className={this.props.currentPage === p && usersStyle.selectedPage}
            onClick={ (e) => {this.onPageChanged(p); }}>{p + " "}</span>
          })}
        </div>

        {
          this.props.users.map (u => <div className={usersStyle.user_wrapper} key={u.id}>
        <div className={usersStyle.user}>
            <div className={usersStyle.userpic}>
              <img src={ u.photos.small != null ? u.photos.small : userPic } alt="pic" />
            </div>
            <div className={usersStyle.s}>
              { u.followed
              ? <button className={usersStyle.button_unfollow} onClick={() => {this.props.unfollow(u.id)}} >Unfollow</button>
              : <button className={usersStyle.button} onClick={() => {this.props.follow(u.id)}} >Follow</button>}
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
}
  export default Users;