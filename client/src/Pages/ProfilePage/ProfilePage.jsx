import React, { useState } from 'react'
import { Servers, Chats, Input } from '../../component/Component';
import { userReducer } from '../../reducers/userReducer';
import { useDispatch, useSelector } from 'react-redux';
import './ProfilePage.scss'
import { edit } from '../../actions/user';

function MainPage(){
    const [editLogin, setEditLogin] = useState()
    const [editEmail, setEditEmail] = useState()
    const [password, setPassword] = useState()
    const [passwordHide, setPasswordHide] = useState(false)
    const dispatch = useDispatch()
    
    const login = useSelector(state => state.user.currentUser.login)
    const email = useSelector(state => state.user.currentUser.email)
    function formSend(e){
        e.preventDefault()

        dispatch(edit(editLogin, editEmail, password))

    }
    return(
        <div className='main-page'>

            <Servers />
            <Chats />

            <section className='main'>
                <div className='top-panel'>
                    <h2>Hello, {login}, {email}</h2>
                </div>

                <div className='info-fill'>
                    <img></img>

                    <form onSubmit={formSend}>
                    <Input
                            value={editLogin}
                            setValue={setEditLogin}
                            placeholder={login}
                            type='text'
                            id='ssss'
                        />

                        <Input
                            value={editEmail}
                            setValue={setEditEmail}
                            placeholder={email}
                            type='text'
                            id='sss'
                        />
                        
                        <Input
                            value={password}
                            setValue={setPassword}
                            placeholder='password'
                            type='password'
                            id='sssss'
                        />

                        <button type='submit'></button>
                    </form>


                </div>

            </section>

        </div>

    )
}

export default MainPage;
