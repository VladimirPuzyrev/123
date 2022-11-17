import axios from 'axios'

export const registration = async (login, email, password) => {
    try{
        const responce = axios.post('http://localhost:3000/registration', {
            login,
            email,
            password
        })
        alert(responce.data.message)
    }catch(e){
        alert(e)
    }
}