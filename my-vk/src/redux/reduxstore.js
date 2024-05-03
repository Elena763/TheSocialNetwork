import { configureStore, combineReducers } from '@reduxjs/toolkit';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';

let reducers = combineReducers({

    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,

});

let store = configureStore({
    reducer: reducers
});

export default store;
