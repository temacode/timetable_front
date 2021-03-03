import {BasePayloadAction} from "./interfaces";
import {BasePayload} from "./interfaces/base-payload";
import {Dispatch} from "react";

const SHOW_MESSAGE = 'SHOW_MESSAGE';

interface INotificationState {
    isShowing: boolean,
    message: string,
    icon: string,
}

let initialState: INotificationState = {
    isShowing: false,
    message: '',
    icon: '📫',
};

const notificationReducer = (state = initialState, action: BasePayloadAction) => {
    switch (action.type) {
        case SHOW_MESSAGE: {
            let messageState = { ...state };
            messageState.message = action.payload;
            messageState.isShowing = !messageState.isShowing;

            return messageState;
        }
        default:
            return state;
    }
};

const showNotificationActionCreator = (message: string) => ({
    type: SHOW_MESSAGE,
    message: message,
});

export const showNotificationThunkCreator = (message: string) => (dispatch: Dispatch<any>) => {
    dispatch(showNotificationActionCreator(message));
    setTimeout(() => {
        dispatch(showNotificationActionCreator(message));
    }, 3000);
};

export default notificationReducer;
