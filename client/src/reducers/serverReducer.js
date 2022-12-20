const SET_SERVERS = "SET_SERVERS"
const SET_CURRENT_SERVER = "SET_CURRENT_SERVER"

// const ADD_FILE = "ADD_FILE"
// const SET_POPUP_DISPLAY = "SET_POPUP_DISPLAY"

const defaultState = {
    servers: [],
    currentServer: null,
    popupDisplay: 'none'
}

export default function fileReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_SERVERS: return {...state, servers: action.payload}
        case SET_CURRENT_SERVER: return {...state, currentServer: action.payload}
        // case ADD_FILE: return {...state, files: [...state.files, action.payload]}
        // case SET_POPUP_DISPLAY: return {...state, popupDisplay: action.payload}
        default:
            return state
    }
}

export const setServers = (servers) => ({type: SET_SERVERS, payload: servers})
export const setCurrentServer= (server) => ({type: SET_CURRENT_SERVER, payload: server})
// export const addFile = (file) => ({type: ADD_FILE, payload: file})
// export const setPopupDisplay = (display) => ({type: SET_POPUP_DISPLAY, payload: display})