import {applyMiddleware, combineReducers, createStore} from 'redux';
import userReducer from './reducers';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({mainReducer: userReducer});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
