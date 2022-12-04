import React, { useState } from 'react';
import './loginForm.scss'
import { Link } from 'react-router-dom';
import {Input} from '../Component'
import {login} from '../../actions/user'

export default function Login() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()


    const validationEmail = (email) => {
        if(!String(email)
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
            return email
        }else{
            return true
        }
    }


    function onBlur(e){
        e.preventDefault()

        if(e.target.value === validationEmail(email)){
            e.currentTarget.classList.add('invalid')
        }

    }

    function onFocus(e){
        e.preventDefault()

        if(e.target.classList.contains('invalid')){
            e.currentTarget.classList.remove('invalid')
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
                            className="form__email"
                            placeholder=''
                            value={email}
                            setValue={setEmail}
                            onBlur={onBlur}
                            onFocus={onFocus}
                            required
                        />

                        <label>Enter email</label>
                    </div>


                    <div className='input-block'>
                    <Input
                        type="password"
                        className="form__password"
                        placeholder=' '
                        value={password}
                        setValue={setPassword}
                        required
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
                    <a className="forgot-button"  href='#'>Forgot Password?</a>
                </div>
            </form>

            <Link to='/registration'className='register'>Registration</Link>
        </div>
    );
  };

