import React from "react";
import PostStyle from './Post.module.css';


function Post(props) {

    return (
      <div className={PostStyle.item}>
        <img src="https://sneg.top/uploads/posts/2023-06/1687948428_sneg-top-p-avatarki-dlya-profilya-detskie-instagram-45.jpg" alt="uaerpic" />
        { props.message }
        <div>
          <span>
            { props.likesCount }
          </span>
        </div>
      </div>

    );
  }

  export default Post;