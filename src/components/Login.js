import React from 'react';
import LoginForm from './LoginForm';
import Header from './Header';
import LinkButton from '../design-kit/LinkButton';

class Login extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <LoginForm isLoading={this.props.isLoading} onSubmit={this.props.submit}></LoginForm>
                <LinkButton to="/reg" appearance="flat">Зарегистрироваться</LinkButton>
            </div>
        );
    }
}

export default Login;