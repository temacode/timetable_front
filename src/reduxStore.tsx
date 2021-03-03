import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import mainReducer, {IMainState} from './reducers/mainReducer';
import lessonListReducer from './reducers/lessonListReducer';
import loginReducer from './reducers/loginReducer';
import notificationReducer from './reducers/notificationReducer';

const reducers = combineReducers({
    main: mainReducer,
    lesson: lessonListReducer,
    login: loginReducer,
    notification: notificationReducer,
});

export type RootState = ReturnType<typeof reducers>

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
