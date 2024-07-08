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
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = action.newMessageBody;
            return {
                ...state,
                messages:[...state.messages, {id: 7, message: newMessage}]
            }
        default:
            return state;
    }
}

export const sendMessageAC = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;