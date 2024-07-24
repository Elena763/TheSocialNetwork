import React from "react";
import MypostsStyle from './MyPosts.module.css';
import Post from "./Post/Post";
import { Form, Field } from 'react-final-form';
import {required, maxLengthCreator, minLengthCreator} from "../../../utils/validators/validators.js";
//import { compose } from "@reduxjs/toolkit";

const maxLength10 = maxLengthCreator(10);
const minLength2 = minLengthCreator(2);

const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)

function MyPosts(props) {

    let postElement =
      props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let onAddPost = (values) => {
      props.addPost(values.newPostText);
    }

    return (
      <div>
        <h3 className={MypostsStyle.title}>My posts</h3>
        <AddNewPostForm onSubmit={onAddPost}/>
        <div className={MypostsStyle.posts}>
          {postElement}
        </div>
      </div>
    );
}

const AddNewPostForm = (props) => {

    return (
      <Form
      onSubmit={props.onSubmit}
      subscription={{
      submitted: true
        }}
      >
      {({ handleSubmit, submitting, values }) => (
        <form  onSubmit={handleSubmit}>
          <div className={MypostsStyle.newpost}>
            <Field
            component={"textarea"}
            name="newPostText"
            className={MypostsStyle.text}
            validate={composeValidators(required, maxLength10, minLength2)}
            >
            </Field>
          </div>
          <div>
            <button className={MypostsStyle.button}>Add post</button>
          </div>
        </form>
      )}
    </Form>
  )
}

  export default MyPosts;