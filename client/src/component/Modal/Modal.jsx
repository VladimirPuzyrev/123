import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import {Server} from '../../actions/servers'
import {Input, UploadAvatar} from '../Component'
import './Modal.scss'

const Modal = ({setIsOpen}) => {

    const [file, setFile] = useState()
    const [serverName, setServerName] = useState()

    function handlerSubmit(e){
        e.preventDefault()
        
        Server(file, serverName)
    }

    return(
        ReactDOM.createPortal(
            <div className='modalOverlay'>
                <div className='modalWindow'>
                    <a className='close' onClick={() => setIsOpen(false)}>Close</a>

                    <form onSubmit={handlerSubmit}>
                       <input type='file'                                 
                            value={file}
                            setValue={setFile}
                        />

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