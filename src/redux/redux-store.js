import  { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { reducer as formReducer } from "redux-form";
import thunkMiddleWare from "redux-thunk";


import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import appReducer from './app-reducer';
  

import sidebarReducer from './sidebar-reducer';

let reducers = combineReducers({
  profilePage: profileReducer ,
  dialogsPage: dialogsReducer ,
  usersPage: usersReducer ,
  auth: authReducer ,
  app: appReducer ,
  form: formReducer ,
  sidebar: sidebarReducer // === profileReducer: sidebarReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)));



window.__store__ = store;

export default store;
