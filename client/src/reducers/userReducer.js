const SET_USER = "SET_USER"
const EDIT_USER = "EDIT_USER"
const LOGOUT = "LOGOUT"

const defaultState = {
    currentUser: {},
    isAuth: false
}

export function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                currentUser: action.payload,
                isAuth: true
            }
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                currentUser: {},
                isAuth: false
            }
        case EDIT_USER:
            return {
                ...state,
                currentUser: action.payload,
                isAuth: true
            }
        default:
            return state
    }
}



export const setUser = user => ({type: SET_USER, payload: user})
export const editUser = user => ({type: EDIT_USER, payload: user})
export const logout = () => ({type: LOGOUT})