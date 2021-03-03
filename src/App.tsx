import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import LoginContainer from './components/Auth/LoginContainer';
import NotificationContainer from './components/Notification/NotificationContainer';
import MainContainer from './components/main.container';
import {IntroductionContainer} from "./libs/introduction/src";

const App = () => {
    return (
        <div>
            <Switch>
                <Route path="/login">
                    <LoginContainer />
                </Route>
                <Route path="/schedule">
                    {withRouter(props => <MainContainer { ...props } />)}
                </Route>
                <Route path="/">
                    {withRouter(props => <IntroductionContainer { ...props } />)}
                </Route>
            </Switch>
            <NotificationContainer />
        </div>
    );
};

export default App;
