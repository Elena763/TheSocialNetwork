const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReduser = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newMessage;
            return state;
        case SEND_MESSAGE:
            let newMessage = state.newMessageBody;

            state.messages.push({id: 7, message: newMessage});
            state.newMessageBody = '';
            return state;
        default:
            return state;
    }
}

export const sendMessageAC = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyAC = (message) => ({
    type: UPDATE_NEW_MESSAGE_BODY, newMessage: message})

export default dialogsReduser;