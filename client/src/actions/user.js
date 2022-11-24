import axios from 'axios'

export const registration = async (login, email, password) => {
    try{
        const responce = await axios.post(`http://localhost:2228/api/auth/registration`, {
            login,
            email,
            password
        })
        alert(responce.data.message)
    }catch(e){
        alert(e)
    }
}

export const login = async (login, email, password) => {
    return async dispatch => {
            try{
            const responce = await axios.post(`http://localhost:2228/api/auth/login`, {
                login,
                email,
                password
            })
        }catch(e){
            alert(e)
        } 
    }

}