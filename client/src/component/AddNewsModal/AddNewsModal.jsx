import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import { useDispatch } from 'react-redux'
import { NewsCreate } from '../../actions/news'
import {Input} from '../Component'
import './AddNewsModal.scss'

const AddNewsModal = ({setAddOpen}) => {

    const [newsTitle, setNewsTitle] = useState()
    const [newsText, setNewsText] = useState()
    const dispatch = useDispatch()

    function handlerSubmit(e){
        e.preventDefault()
        
        dispatch(NewsCreate(newsTitle, newsText))
    }


    return(
        ReactDOM.createPortal(
            <div className='AddNewsModalOverlay'>
                <div className='AddNewsModalWindow'>
                    <a className='close' onClick={() => setAddOpen(false)}>Close</a>

                    <form onSubmit={handlerSubmit}>

                        <div className='input-block'>
                            <Input
                                type="text"
                                id="form__text"
                                placeholder=''
                                value={newsTitle}
                                setValue={setNewsTitle}
                                // onBlur={onBlur}
                                // onFocus={onFocus}
                                required
                            />

                            <label for='form__text'>Enter news title</label>
                        </div>

                        <div className='input-block'>
                            <Input
                                type="text"
                                id="form__text"
                                placeholder=''
                                value={newsText}
                                setValue={setNewsText}
                                // onBlur={onBlur}
                                // onFocus={onFocus}
                                required
                            />

                            <label for='form__text'>Enter news title</label>
                        </div>

                            <button type='Submit'>Add News</button>
                        </form>
                </div>
            </div>,
            document.querySelector('#root')
        )
    );
}

export default AddNewsModal;