import React, { useState } from 'react';
import './loginForm.scss'
import { Link } from 'react-router-dom';
import {Input} from '../Component'
import {LoginAut} from '../../actions/user'
import {useDispatch} from 'react-redux'
import { Validation } from '../Validation';

export default function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [passwordHide, setPasswordHide] = useState(false)
    const dispatch = useDispatch()

    const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    function onBlur(e){
        e.preventDefault()
        const label = document.querySelector(`[for="${e.target.id}"]`)

        if(e.target.value === Validation(email, validEmail)){
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

        dispatch(LoginAut(email, password))
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
                </div>
            </form>

            <Link to='/registration'className='register'>Registration</Link>
        </div>
    );
  };

