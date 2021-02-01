import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import LoginContainer from './components/Auth/LoginContainer';
import NotificationContainer from './components/Notification/NotificationContainer';
import HelloPageContainer from './components/HelloPageContainer';
import MainContainer from './components/MainContainer';

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
                    {withRouter(props => <HelloPageContainer { ...props } />)}
                </Route>
            </Switch>
            <NotificationContainer />
        </div>
    );
};

export default App;
