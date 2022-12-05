import React, { useState, useEffect } from 'react'
import './RegistrationForm.scss'
import {Input} from '../Component'
import { Link } from 'react-router-dom';
import { Registration } from '../../actions/user'
import { Invalid, Validation } from '../Validation';
export default function RegistrarionForm() {
    
    const [login, setLogin] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [passwordHide, setPasswordHide] = useState(false)
    
    const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const validLogin = /^[a-zA-Z]*$/

    const perfEmail = Validation(email, validEmail)
    const perfLogin = Validation(login, validLogin)

    function onBlur(e){
        e.preventDefault()
        const label = document.querySelector(`[for="${e.target.id}"]`)

        Invalid(e, 'form__login', perfLogin, label, 'Login must not have special characters')
        Invalid(e, 'form__email', perfEmail, label, 'Wrong email address')
    
        if(e.target.id === 'form__password'){
            if(!e.target.value == ''){
                if(e.target.value.length < 8){
                    e.currentTarget.classList.add('invalid')
                    label.textContent = 'Password must not be shorter than 8 characters';
                }
            }
        }

    }
    
    function onFocus(e){
        e.preventDefault()
        const label = document.querySelector(`[for="${e.target.id}"]`)

        if(e.target.classList.contains('invalid')){
            e.currentTarget.classList.remove('invalid')

            if(e.target.id === 'form__email'){
                label.textContent = 'Enter email address';
            }else if(e.target.id === 'form__login'){
                label.textContent = 'Enter login';
            }else if(e.target.id === 'form__password'){
                label.textContent = 'Enter password';
            }
        }
    
    }


    function formSend(e){
        e.preventDefault()

        Registration(login, email,  password)
    }

    return (
        <div className='registrations'>
            <Link to='/login' className='back_login'><img src="./back.svg"/></Link>

            <form 
                id="email-registration"
                onSubmit={formSend}
            >

                <h3>Registration</h3>

                <div className='input-block'>
                    <Input
                        type="text"
                        id="form__login"
                        placeholder=' '
                        value={login}
                        setValue={setLogin}
                        onBlur={onBlur}
                        onFocus={onFocus}
                        required
                    />

                    <label for='form__login' >Enter Login</label>
                </div>

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
                            onBlur={onBlur}
                            onFocus={onFocus}
                            required
                        />

                        <img
                            className='hide-svg'
                            src={passwordHide ? './password_visibality.svg' : './password_hide.svg'}
                            onClick={() => setPasswordHide(prevState => !prevState)}
                            title={passwordHide ? "Hide password" : "Show password"}
                        />

                        <label for='form__password'>Enter password</label>
                    </div>

            </form>

            <button className='register' form='email-registration'>REGISTER</button>
        </div>
    );
  };

