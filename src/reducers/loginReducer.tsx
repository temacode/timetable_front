import axios from 'axios';
import { Dispatch } from 'react';
import { showNotificationThunkCreator } from './notificationReducer';
import { LoginForm } from '../forms/loginForm';
import {LoginReducerActions} from "./enums";
import {BasePayloadAction} from "./interfaces";

interface IInitialState {
    isLoading: boolean
}

const initialState: IInitialState = {
    isLoading: false,
};

const loginReducer = (state = initialState, action: BasePayloadAction) => {
    switch (action.type) {
        case LoginReducerActions.LOGIN: {
            let loginState:IInitialState = { ...state };
            loginState.isLoading = !loginState.isLoading;

            return loginState;
        }
        default:
            return state;
    }
};

const loginActionCreator = () => {
    return ({
        type: LoginReducerActions.LOGIN,
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
