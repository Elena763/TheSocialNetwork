import React from "react";
import profInfoStyle from './ProfileInfo.module.css';
import ProfileImg from '../../../assets/images/ProfileImg.png';


function ProfileInfo() {
    return (
        <div className={profInfoStyle.content}>
            <div className={profInfoStyle.avatar}>
                <img src={ProfileImg} alt="profileImg" />
            </div>
            <div>
                description
            </div>
        </div>
    );
  }

  export default ProfileInfo;