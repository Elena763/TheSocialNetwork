const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hello world!", likesCount: '15'},
                {id: 2, message: "Hi, how are you", likesCount: '25'},
                {id: 3, message: "It's my first post", likesCount: '35'},
            ],
            newPostText: "bebebebe",
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

    },
    _callSubscriber() {
        console.log(this._state);
    },

    getState() {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer; //observer - pattern
    },

    dispatch(action){
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText="";
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    },
}

export const addPostAC = () => ({type: ADD_POST})

export const updateNewPostTextAC = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text})

export default store;