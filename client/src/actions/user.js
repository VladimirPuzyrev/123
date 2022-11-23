import axios from 'axios'

export const registration = async (login, email, password) => {
    try{
        const responce = await axios.post('http://localhost:2228/api/auth/registration', {
            login,
            email,
            password
        })
        alert(responce.data.message)
    }catch(e){
        alert(e)
    }
}