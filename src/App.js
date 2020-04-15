import React from 'react';
import MainContainer from './components/MainContainer';
import { Switch, Route, withRouter } from 'react-router-dom';
import LoginContainer from './components/LoginContainer';

const App = () => (
    <div>
        <Switch>
            <Route path="/login">
                <LoginContainer></LoginContainer>
            </Route>
            <Route path="/">
                {withRouter(props => <MainContainer { ...props }></MainContainer>)}
            </Route>
        </Switch>
    </div>
);

export default App;