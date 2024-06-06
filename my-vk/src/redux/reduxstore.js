import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';


let reducers = combineReducers({

    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,

});

let store = configureStore({
    reducer: reducers,
    applyMiddleware: applyMiddleware(thunk)
});

export default store;
