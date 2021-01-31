import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import mainReducer from './reducers/mainReducer';
import lessonListReducer from './reducers/lessonListReducer';
import { reducer as formReducer } from 'redux-form';
import loginReducer from './reducers/loginReducer';
import notificationReducer from './reducers/notificationReducer';

const reducers = combineReducers({
    main: mainReducer,
    lesson: lessonListReducer,
    login: loginReducer,
    form: formReducer,
    notification: notificationReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;