import React from 'react'
import { Servers, Chats } from '../../component/Component';
import { userReducer } from '../../reducers/userReducer';
import { useSelector } from 'react-redux';
import './ProfilePage.scss'

function MainPage(){
    let login = useSelector(state => state.user.currentUser.login)
    return(
        <div className='main-page'>

            <Servers />
            <Chats />

            <section className='main'>
                <div className='top-panel'>
                    <h2>Hello, {login}</h2>
                </div>

                <div className='messages-fill'>

                </div>

            </section>

        </div>

    )
}

export default MainPage;
