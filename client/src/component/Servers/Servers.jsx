import React, {useEffect, useState} from 'react'
import {Modal, Input} from '../../component/Component.js';
import { logout } from '../../reducers/userReducer.js';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Outlet } from 'react-router-dom'
import { Server } from './Server/Server.jsx'

import './Servers.scss'
import { MainPage, ProfilePage } from '../../Pages/Pages.js';
import { ServerGet } from '../../actions/servers.js';

export default function Servers() {
    const dispatch = useDispatch()

    const servers = useSelector(state => state.server.servers).map(server => <Server key={server._id} server={server} avatar={server.avatar} name={server.name} />)
    const [addOpen, setAddOpen] = useState(false);
    useEffect(() => {
        dispatch(ServerGet())
    }, [])

    return(
        <>
            <section className='servers-panel'> 
                <div className='personal'>
                    <Link to='/profile' element={< ProfilePage />}><img src='./svg/profile.svg' alt='Profile'/></Link>
                    <Link to='/main' element={< MainPage />}><img src='./svg/messages.svg' alt='LS'/></Link>
                </div>

                <div className='servers'>
                    <ul className='all-servers'>
                        {servers}
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