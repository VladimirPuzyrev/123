import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import { useDispatch } from 'react-redux'
import {ServerCreate} from '../../actions/servers'
import {Input, UploadAvatar} from '../Component'
import './Modal.scss'

const Modal = ({setAddOpen}) => {

    const [serverName, setServerName] = useState()
    const dispatch = useDispatch()

    function handlerSubmit(e){
        e.preventDefault()
        
        dispatch(ServerCreate(serverName))
    }


    return(
        ReactDOM.createPortal(
            <div className='modalOverlay'>
                <div className='modalWindow'>
                    <a className='close' onClick={() => setAddOpen(false)}>Close</a>

                    <form onSubmit={handlerSubmit}>

                        <div className='input-block'>
                            <Input
                                type="text"
                                id="form__text"
                                placeholder=''
                                value={serverName}
                                setValue={setServerName}
                                // onBlur={onBlur}
                                // onFocus={onFocus}
                                required
                            />

                            <label for='form__text'>Enter server name</label>
                        </div>

                            <button type='Submit'>Create Server</button>
                        </form>
                </div>
            </div>,
            document.querySelector('#root')
        )
    );
}

export default Modal;