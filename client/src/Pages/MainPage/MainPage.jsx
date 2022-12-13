import React, {useState} from 'react'
import {Modal, Input} from '../../component/Component.js';
import { logout } from '../../reducers/userReducer.js';
import { useSelector, useDispatch } from 'react-redux';
import './Main.scss'


function MainPage(){
    const serverList = document.querySelector('.all-servers')
    const [addOpen, setAddOpen] = useState(false);
    const [ProfileOpen, setProfileOpen] = useState(false);

    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()
    
    return(
        <div className='main-page'>
            <section className='servers-panel'>
                <div className='personal'>
                    <a><img src='./svg/profile.svg' onClick={() => setProfileOpen(true)} /></a>
                    <a><img src='./svg/messages.svg'/></a>
                </div>

                <div className='servers'>
                    <ul className='all-servers'>
                        {}
                    </ul>
                    <a className='add-server' onClick={() => setAddOpen(true)}> <img src='./svg/Add.svg'/> </a>
                    {addOpen && <Modal setAddOpen={setAddOpen} />}

                </div>

                <div className='settings'>
                    <a><img /></a>
                    <a onClick={() => dispatch(logout())}><img src='./svg/Logout.svg' alt='Exit' /></a>
                </div>
            </section>

            <section className='chats-panel'>
                <h2>Chats</h2>

                <div className='chats'>
                    <ul className='all-chats'>

                    </ul>
                    <a className='add-chat'><img /></a>
                </div>

                <div>
                    <a><img /></a>
                </div>

            </section>

            <section className='main'>
                <div className='top-panel'>
                    <h2>Chats Name</h2>
                </div>

                <div className='messages-fill'>

                </div>

                <div className='messages-field'>
                    <input type='file' id='add-file'/>
                    <label class='add-label'for='add-file'>
                        <img alt='add file' src='./svg/Add.svg'></img>
                    </label>
                    <input type='text' id='messages-input' />
                    {/* Smile and stickers*/}
                </div>
            </section>

            <section className='people'>
                <h2>Text</h2>

                <div>
                    <ul>
                        
                    </ul>
                </div>
            </section>

            
        </div>

    )
}

export default MainPage;