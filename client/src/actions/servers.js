import axios from 'axios'
import { setServers, addServer } from '../reducers/serverReducer'

export const ServerGet = () => {
    return async dispatch => {
        try {
            const response = await axios.get(`http://localhost:2228/api/server/serverlist`, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            })
            dispatch(setServers(response.data))
        } catch (e) {
            alert(e)
        }
    }
}

export const ServerCreate = (name) => {
    return async dispatch => {
            try{
                const response = await axios.post(`http://localhost:2228/api/server/createserver`, {
                    name: name,
                    avatar: 'default',
            }, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            })
            dispatch(addServer(response.data))
        }catch(e){
            alert(e)
        }
    }
}