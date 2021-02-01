import { connect } from 'react-redux';
import Login from './Login';
import { loginThunkCreator, registerThunkCreator } from '../../reducers/loginReducer';
import { setIsOnLoginActionCreator } from '../../reducers/mainReducer';
import { Dispatch } from 'react';
import {LoginForm} from "../../forms/loginForm";

let mapStateToProps = (state: any) => ({
    isLoading: state.login.isLoading,
    isOnLogin: state.main.isOnLogin,
    isOnline: state.main.isOnline,
});

let mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    setIsOnLogin: (value: boolean) => {
        dispatch(setIsOnLoginActionCreator(value));
    },
    login: () => {
        dispatch(loginThunkCreator());
    },
    register: (values: LoginForm) => {
        dispatch(registerThunkCreator(values));
    },
});

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
