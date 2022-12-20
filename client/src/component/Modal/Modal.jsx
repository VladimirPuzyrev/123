import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import { useDispatch } from 'react-redux'
import {ServerCreate} from '../../actions/servers'
import {Input, UploadAvatar} from '../Component'
import './Modal.scss'

const Modal = ({setAddOpen}) => {

    let [avatar, setAvatar] = useState()
    const [serverName, setServerName] = useState()

    // const popupDisplay = useSelector(state => state.files.popupDisplay)
    // const currentDir = useSelector(state => state.files.currentDir)
    // const dispatch = useDispatch()

    // function createHandler() {
    //     dispatch(createDir(currentDir, dirName))
    // }


    return(
        ReactDOM.createPortal(
            <div className='modalOverlay'>
                <div className='modalWindow'>
                    <a className='close' onClick={() => setAddOpen(false)}>Close</a>

                    <form >
                       <input type='file'                                 
                              value={avatar}
                              setValue={setAvatar}
                              accept="image/*"
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