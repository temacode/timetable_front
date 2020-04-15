import { connect } from "react-redux";
import Login from "./Login";
import { loginThunkCreator, registerThunkCreator } from "../reducers/loginReducer";
import { setIsOnLoginActionCreator } from "../reducers/mainReducer";
import { change } from "redux-form";

let mapStateToProps = state => ({
    isLoading: state.login.isLoading,
    isOnLogin: state.main.isOnLogin,
})

let mapDispatchToProps = dispatch => ({
    setIsOnLogin: value => {
        dispatch(setIsOnLoginActionCreator(value));
    },
    login: (values) => {
        dispatch(loginThunkCreator(values));
    },
    register: (values) => {
        dispatch(registerThunkCreator(values));
    },
    setValues: (values) => {
        values.fields.forEach((field) => {
            dispatch(change(values.formName, field.name, field.value));
        });
    }
})

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;