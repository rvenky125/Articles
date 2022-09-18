import {applyMiddleware, combineReducers, createStore} from 'redux';
import userReducer from './reducers';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({mainReducer: mainRe});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
