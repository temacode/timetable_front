const SHOW_MESSAGE = 'SHOW_MESSAGE';

let initialState = {
    isShowing: false,
    message: '',
    icon: '📫',
};

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MESSAGE: {
            let messageState = { ...state };
            messageState.message = action.message;
            messageState.isShowing = !messageState.isShowing;

            return messageState;
        }
        default:
            return state;
    }
};

const showNotificationActionCreator = message => ({
    type: SHOW_MESSAGE,
    message: message,
});

export const showNotificationThunkCreator = message => dispatch => {
    dispatch(showNotificationActionCreator(message));
    setTimeout(() => {
        dispatch(showNotificationActionCreator(message));
    }, 3000);
};

export default notificationReducer;