import React from 'react'
import './Chats.scss'

import { Outlet } from 'react-router-dom'


export default function Chats() {
  return (
    <>
        <section className='chats-panel'>
            <h2>Chats</h2>
            <button type='Submit'>Create Chats</button>

            <div className='chats'>
                <ul className='all-chats'>

                </ul>
                <a className='add-chat'><img /></a>
            </div>

            <div>
                <a><img /></a>
            </div>

        </section>

        <Outlet />
    </>
  )
}
