import axios from 'axios'
import { setNews, addNews } from '../reducers/newsReducer'

export const NewsGet = () => {
    return async dispatch => {
        try {
            const response = await axios.get(`http://localhost:2228/api/news/newslist`, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            })
            dispatch(setNews(response.data))
        } catch (e) {
            alert(e)
        }
    }
}

export const NewsCreate = (title, text) => {
    return async dispatch => {
            try{
                const response = await axios.post(`http://localhost:2228/api/news/createnews`, {
                    title: title,
                    text: text,
            }, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            })
            dispatch(addNews(response.data))
        }catch(e){
            alert(e)
        }
    }
}