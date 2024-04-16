import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

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
            dialogs: [
                {id: 1, name: "Katya"},
                {id: 2, name: "Ivan"},
                {id: 3, name: "Alexandr"},
                {id: 4, name: "Tatiana"},
                {id: 5, name: "Marina"},
                {id: 6, name: "Evgeniy"},
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "It`s fine"},
                {id: 4, message: "Amazing"},
                {id: 5, message: "Goodbye"},
                {id: 6, message: "See you later"},
            ],
            newMessageBody: "",
        },
        sidebar: {
            messages: [
                {id: 1, li: "My Profile"},
                {id: 2, li: "Messages"},
                {id: 3, li: "News"},
                {id: 4, li: "Friends"},
                {id: 5, li: "Groups"},
                {id: 6, li: "Fotos"},
                {id: 6, li: "Music"},
                {id: 6, li: "Video"},
                {id: 6, li: "Settings"},
            ],
        },
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer( this._state.sidebar, action);
        this._callSubscriber(this._state);

    },
}

export default store;