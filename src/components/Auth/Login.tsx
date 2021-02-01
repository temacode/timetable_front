import React from 'react';
import LoginForm from './LoginForm';
import { Switch, Route } from 'react-router-dom';

import HeaderContainer from '../Header/HeaderContainer';
import RegisterFormComponent from "../../libs/auth/src/lib/compoents/register/register-form";

type LoginProps = {
    props: any;
}

class Login extends React.Component<any, any> {
    componentDidMount() {
        this.props.setIsOnLogin(true);
    }

    componentWillUnmount() {
        this.props.setIsOnLogin(false);
    }
    render() {
        return (
            <div>
                <HeaderContainer isOnline={this.props.isOnline} isOnLogin={this.props.isOnLogin} />
                <Switch>
                    <Route path="/login/reg">
                        <RegisterFormComponent
                            isLoading={ this.props.isLoading }
                            onSubmit={ this.props.register } />
                    </Route>
                    <Route path="/login">
                        <LoginForm isLoading={ this.props.isLoading } onSubmit={ this.props.login } />
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default Login;
