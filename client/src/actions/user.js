import axios from 'axios'
import {setUser} from "../reducers/userReducer";

export const Registration = async (login, email, password) => {
    console.log(login,'|', email,'|', password,'|')
    try{
        const responce = await axios.post(`http://localhost:2228/api/auth/registration`, {
            login: login,
            email: email,
            password: password
        })
        alert(responce.date.message)
    }catch(e){     
        alert(e.response.data.message)
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
            alert(e.response.data.message)
        }
    }
}

export const auth =  () => {
    return async dispatch => {
        try {
            const response = await axios.get(`http://localhost:2228/api/auth/auth`,
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            )
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            alert(e.response.data.message)
            localStorage.removeItem('token')
        }
    }
}