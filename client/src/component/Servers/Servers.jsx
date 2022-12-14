import React, {useState} from 'react'
import {Modal, Input} from '../../component/Component.js';
import { logout } from '../../reducers/userReducer.js';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Outlet } from 'react-router-dom'

import './Servers.scss'
import { ProfilePage } from '../../Pages/Pages.js';

export default function Servers() {
    const serverList = document.querySelector('.all-servers')
    const [addOpen, setAddOpen] = useState(false);
    const [ProfileOpen, setProfileOpen] = useState(false);

    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()
    

    return(
        <>
            <section className='servers-panel'> 
                <div className='personal'>
                    <Link to='/profile' element={< ProfilePage />}><img src='./svg/profile.svg' alt='Profile'/></Link>
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

            <Outlet />
        </>
    )
}