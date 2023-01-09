import axios from 'axios'
import {editUser, setUser} from "../reducers/userReducer";

export const Registration = async (login, email, password) => {
    console.log(login,'|', email,'|', password,'|')
    try{
        const responce = await axios.post(`http://localhost:2228/api/auth/registration`, {
            login: login,
            email: email,
            password: password
        })
    }catch(e){     
        alert(e)
    }
}

export const LoginAut =  (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post(`http://localhost:2228/api/auth/login`, {
                email,
                password
            })
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            alert(e)
        }
    }
}


export const auth =  () => {
    return async dispatch => {
        try {
            const response = await axios.get(`http://localhost:2228/api/auth/auth`,
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            )
            if(response.data.user === undefined){
                alert('local storage empty')
            }else{
                dispatch(setUser(response.data.user))
                localStorage.setItem('token', response.data.token)
            }
        } catch (e) {
            alert(e.response.data.message)
            localStorage.removeItem('token')
        }
    }
}

export const edit = (login, email, password) => {
    return async dispatch => {
        try {
            const response = await axios.put(`http://localhost:2228/api/auth/profile`, {
                login: login,
                email: email,
                password: password
            }, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            })

            dispatch(editUser(response.data.user))

        } catch (e) {
            alert(e.response.data.message)
            localStorage.removeItem('token')
        }
    }
}