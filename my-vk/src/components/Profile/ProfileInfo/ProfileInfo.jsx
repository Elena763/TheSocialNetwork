import React from "react";
import profInfoStyle from './ProfileInfo.module.css';
//import ProfileImg from '../../../assets/images/ProfileImg.png';
import Preloader from '../../common/Preloader.jsx';

function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={profInfoStyle.content}>
            <div className={profInfoStyle.avatar}>
                {/*<img src={ProfileImg} alt="profileImg"/>*/}
            </div>
            <div className={profInfoStyle.userpic}>
                <img src={props.profile.photos.large} alt="" />
            </div>
        </div>
    );
  }

  export default ProfileInfo;