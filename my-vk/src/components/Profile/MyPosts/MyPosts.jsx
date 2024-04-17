import React from "react";
import MypostsStyle from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts(props) {

    let postElement =
      props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
      props.addPost();
    }

    let onPostChange = () => {
      let text = newPostElement.current.value;
      props.updateNewPostText(text);
    }

    return (
      <div>
          <h3>My posts</h3>
        <div>
          <div>
            <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}/>
          </div>
          <div>
            <button onClick={onAddPost}>Add post</button>
          </div>
        </div>
        <div className={MypostsStyle.posts}>
          {postElement}
        </div>
      </div>
    );
  }

  export default MyPosts;