import { userAPI, profileAPI } from "../api/api.js";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: "Hello world!", likesCount: '15'},
        {id: 2, message: "Hi, how are you", likesCount: '25'},
        {id: 3, message: "It's my first post", likesCount: '35'},
    ],
    newPostText: "bebebebe",
    profile: null,
    status: "",
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:{
            let newPost = {
                id: 5,
                message: state.newPostText ,
                likesCount: 0,
            };
            return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: "",
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
            ...state,
            newPostText: action.newText,
            }
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case SET_STATUS: {
            return { ...state, status: action.status }
        }
        default:
            return state;
    }
}

export const addPostAC = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const getUserProfile = (userID) => (dispatch) => {
    userAPI.getProfile(userID).then((response) => {
       dispatch(setUserProfile(response.data));
    });
}
export const getStatus = (userID) => (dispatch) => {
    profileAPI.getStatus(userID).then((response) => {
       dispatch(setStatus(response.data));
    });
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then((response) => {
        if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
    });
}
export const updateNewPostTextAC = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;