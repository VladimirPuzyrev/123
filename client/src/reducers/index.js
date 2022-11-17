import {applyMiddleware, combineReducers, createStore} from "redux"
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk"
import {userReducer} from "./userReducer"

const rootReducers = combineReducers({
    user: userReducer
})

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))


