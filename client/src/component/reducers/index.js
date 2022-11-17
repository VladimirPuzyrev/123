import {applyMiddleware, combineReducers, createStore} from "redux"
import {composeWithDevTools} from 'redux-devtools-extension'

const rootReducers = combineReducers({

})

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))


