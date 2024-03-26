import React from "react";
import MypostsStyle from './MyPosts.module.css';
import Post from "./Post/Post";


function MyPosts(props) {

  let postElement =
    props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    return (
      <div>
          <h3>My posts</h3>
        <div>
          <div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div>
            <button>Add post</button>
          </div>
        </div>
        <div className={MypostsStyle.posts}>
          {postElement}
        </div>
      </div>
    );
  }

  export default MyPosts;