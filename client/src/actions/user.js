import axios from 'axios'

export const Registration = async (login, email, password, error) => {
    console.log(login,'|', email,'|', password,'|')
    try{
        const responce = await axios.post(`http://localhost:2228/api/auth/registration`, {
            login: login,
            email: email,
            password: password
        })
        alert(responce.date)
    }catch(e){
        alert(e)
    }
}

export const login =  (email, password) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`http://localhost:2228/api/auth/login`, {
                email,
                password
            })
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}