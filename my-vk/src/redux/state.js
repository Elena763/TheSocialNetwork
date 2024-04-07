import { rerenderEntireTree } from "../render.js";

const state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hello world!", likesCount: '15'},
            {id: 2, message: "Hi, how are you", likesCount: '25'},
            {id: 3, message: "It's my first post", likesCount: '35'},
        ],
    },
    dialogsPage: {
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How are you?"},
            {id: 3, message: "It`s fine"},
            {id: 4, message: "Amazing"},
            {id: 5, message: "Goodbye"},
            {id: 6, message: "See you later"},
        ],
        dialogs: [
            {id: 1, name: "Katya"},
            {id: 2, name: "Ivan"},
            {id: 3, name: "Alexandr"},
            {id: 4, name: "Tatiana"},
            {id: 5, name: "Marina"},
            {id: 6, name: "Evgeniy"},
        ],
    }
    /*sidebar: {

    },*/
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0,
    };

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;