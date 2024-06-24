import React from "react";
import profInfoStyle from './ProfileInfo.module.css';
//import ProfileImg from '../../../assets/images/ProfileImg.png';
import Preloader from '../../common/Preloader.jsx';
import ProfileStatus from "./ProfileStatus.jsx";

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
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    );
}

export default ProfileInfo;