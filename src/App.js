import React from 'react';
import MainContainer from './components/MainContainer';
import { Switch, Route, withRouter } from 'react-router-dom';
import LoginContainer from './components/LoginContainer';
import NotificationContainer from './components/Notification/NotificationContainer';

const App = () => {
    return (
        <div>
            <Switch>
                <Route path="/login">
                    <LoginContainer></LoginContainer>
                </Route>
                <Route path="/">
                    {withRouter(props => <MainContainer {...props}></MainContainer>)}
                </Route>
            </Switch>
            <NotificationContainer></NotificationContainer>
        </div>
    );
};

export default App;