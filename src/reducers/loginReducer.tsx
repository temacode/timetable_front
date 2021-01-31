import axios from 'axios';
import { Dispatch } from 'react';
import { showNotificationThunkCreator } from './notificationReducer';
import { BasePayloadAction } from './mainReducer';
import { LoginForm } from '../forms/loginForm';

interface IInitialState {
    isLoading: boolean
}


let initialState: IInitialState = {
    isLoading: false,
};

enum Actions {
    LOGIN = 'LOGIN'
}

const loginReducer = (state = initialState, (action: BasePayloadAction)) => {
    switch (action.type) {
        case Actions.LOGIN: {
            let loginState = { ...state };
            loginState.isLoading = !loginState.isLoading;
            return loginState;
        }
        default:
            return state;
    }
};

const loginActionCreator = () => {
    return ({
        type: Actions.LOGIN,
    });
};

export const loginThunkCreator = () => (dispatch: Dispatch<any>) => {
    dispatch(loginActionCreator());
    setTimeout(() => {
        dispatch(loginActionCreator());
    }, 2000);
};

export const registerThunkCreator = (values: LoginForm) => (dispatch: Dispatch<any>) => {
    dispatch(loginActionCreator());
    axios.post('/api/auth', { reg: values }).then(res => {
        dispatch(showNotificationThunkCreator(res.data.message));
    }).catch(err => {
        console.log(err);
        dispatch(showNotificationThunkCreator('Ошибка сервера'));
    });
    dispatch(loginActionCreator());
};

export default loginReducer;
