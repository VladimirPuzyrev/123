import axios from 'axios'

export const Server = async (avatar, name) => {
    console.log(avatar, name)
    try{
        const responce = await axios.post(`http://localhost:2228/api/auth/registration`, {
            Name: name,
            Avatar: avatar,
        })
        alert(responce.date)
    }catch(e){
        alert(e)
    }
}