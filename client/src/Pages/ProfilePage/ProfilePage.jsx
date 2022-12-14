import React from 'react'
import { Servers, Chats } from '../../component/Component';
import { userReducer } from '../../reducers/userReducer';
import { useSelector } from 'react-redux';
import './ProfilePage.scss'

function MainPage(){
    const isAuth = useSelector(state => state.user.value)
    console.log(isAuth)

    return(
        <div className='main-page'>

            <Servers />
            <Chats />

            <section className='main'>
                <div className='top-panel'>
                    <h2>`Hello, {userReducer.currentUser}`</h2>
                </div>

                <div className='messages-fill'>

                </div>

            </section>

        </div>

    )
}

export default MainPage;
