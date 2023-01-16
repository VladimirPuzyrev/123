import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import newsReducer from "./newsReducer";
import serverReducer from "./serverReducer";
import {userReducer} from "./userReducer"



const rootReducer = combineReducers({
    user: userReducer,
    server: serverReducer,
    news: newsReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))