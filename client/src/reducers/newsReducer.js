const ADD_NEWS = "ADD_NEWS"
const SET_NEWS = "SET_NEWS"

const defaultState = {
    news: [],
}

export default function newsReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_NEWS: return {...state, news: action.payload}
        case ADD_NEWS: return {...state, news: [...state.news, action.payload]}
        default:
            return state
    }
}

export const addNews= (news) => ({type: ADD_NEWS, payload: news})
export const setNews= (news) => ({type: SET_NEWS, payload: news})
