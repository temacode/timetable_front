import React from 'react';
import LoginForm from './LoginForm';
import { Switch, Route } from 'react-router-dom';
import RegForm from './RegForm';
import HeaderContainer from './Header/HeaderContainer';

class Login extends React.Component {
    componentDidMount() {
        this.props.setIsOnLogin(true);
    }

    componentWillUnmount() {
        this.props.setIsOnLogin(false);
    }
    render() {
        return (
            <div>
                <HeaderContainer></HeaderContainer>
                <Switch>
                    <Route path="/login/reg">
                        <RegForm setValues={ this.props.setValues }
                            isLoading={ this.props.isLoading }
                            onSubmit={ this.props.register }>
                        </RegForm>
                    </Route>
                    <Route path="/login">
                        <LoginForm isLoading={ this.props.isLoading }
                            onSubmit={ this.props.login }>
                        </LoginForm>
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default Login;