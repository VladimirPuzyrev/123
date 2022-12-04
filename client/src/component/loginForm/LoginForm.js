import React, { useState } from 'react';
import './loginForm.scss'
import { Link } from 'react-router-dom';
import {Input} from '../Component'
import {login} from '../../actions/user'

export default function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [passwordHide, setPasswordHide] = useState(false)


    const validationEmail = (email) => {
        if(!String(email)
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
            return email
        }else{
            return true
        }
    }

    function forgotPassword(){
        //пакет для отправки сообщения и модальное окно
        
    }

    function onBlur(e){
        e.preventDefault()
        const label = document.querySelector(`[for="${e.target.id}"]`)

        if(e.target.value === validationEmail(email)){
            if(!e.target.value == ''){
                e.currentTarget.classList.add('invalid')
                label.textContent = 'Wrong email address';
            }
        }

    }

    function onFocus(e){
        e.preventDefault()
        const label = document.querySelector(`[for="${e.target.id}"]`)

        if(e.target.classList.contains('invalid')){
            e.currentTarget.classList.remove('invalid')
            label.textContent = 'Enter email address';
        }

    }


    function formSend(e){
        e.preventDefault()

    }


    return (
        <div className='login'>
            <form 
                className="email-login"
                onSubmit={formSend}
                >
                <h3>Sign Up</h3>

                    <div className='input-block'>
                        <Input
                            type="email"
                            id="form__email"
                            placeholder=''
                            value={email}
                            setValue={setEmail}
                            onBlur={onBlur}
                            onFocus={onFocus}
                            required
                        />

                        <label for='form__email'>Enter email</label>
                    </div>


                    <div className='input-block'>
                    <Input
                        type={passwordHide ? "text" : "password"}
                        id="form__password"
                        placeholder=' '
                        value={password}
                        setValue={setPassword}
                        required
                    />
                    <img
                        className='hide-svg'
                        src={passwordHide ? './password_hide.svg' : './password_visibality.svg'}
                        onClick={() => setPasswordHide(prevState => !prevState)}
                        title={passwordHide ? "Hide password" : "Show password"}
                    />

                        <label>Enter password</label>
                    </div>
                    
                    <div className='form__remember'>
                        <label>Remember password?</label>
                        
                        <input
                            type="checkbox"
                            className='remember'
                        />
                    </div>

                <div className='form__button'>
                    <button className="login-button" type="submit">Login</button>
                    <a className="forgot-button" onClick={() => forgotPassword()}>Forgot Password?</a>
                </div>
            </form>

            <Link to='/registration'className='register'>Registration</Link>
        </div>
    );
  };

