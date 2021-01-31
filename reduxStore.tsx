import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import mainReducer from '';

const reducers = combineReducers({
    main: mainReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;