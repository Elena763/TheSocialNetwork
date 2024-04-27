const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.newMessage
            }
        case SEND_MESSAGE:
            let newMessage = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages:[...state.messages, {id: 7, message: newMessage}]
            }
        default:
            return state;
    }
}

export const sendMessageAC = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyAC = (message) => ({
    type: UPDATE_NEW_MESSAGE_BODY, newMessage: message})

export default dialogsReducer;