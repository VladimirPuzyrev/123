import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import serverReducer from "./serverReducer";
import {userReducer} from "./userReducer"



const rootReducer = combineReducers({
    user: userReducer,
    server: serverReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))