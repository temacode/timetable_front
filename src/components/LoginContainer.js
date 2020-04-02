import { connect } from "react-redux";
import Login from "./Login";
import { loginThunkCreator } from "../reducers/loginReducer";
import { setIsOnLoginActionCreator } from "../reducers/mainReducer";

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

    }
})

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;