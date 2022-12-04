import React, { useState, useEffect } from 'react'
import './RegistrationForm.scss'
import {Input} from '../Component'
import { Link } from 'react-router-dom';
import { Registration } from '../../actions/user'

export default function RegistrarionForm() {
    
    const [login, setLogin] = useState()
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

    const validationLogin = (login) => {
        if(!String(login)
        .match(/[\!\@\#\$\%\^\&\*\(\)\+\"\№\;\%\:\?\*]/)){
            return login
        }else{
            return true
        }
    }

    function onBlur(e){
        e.preventDefault()

        const label = document.querySelector(`[for="${e.target.id}"]`)
        if(e.target.id === 'form__email'){
            if(!e.target.value == ''){
                if(e.target.value === validationEmail(email)){
                    e.currentTarget.classList.add('invalid')
                    label.textContent = 'Wrong email address';
                }
            }

        }else if(e.target.id === 'form__login'){
            if(!e.target.value == ''){
                if(e.target.value === validationLogin(login)){
                    e.currentTarget.classList.add('invalid')
                    label.textContent = 'Login must not have special characters';
                }
            }

        }else if(e.target.id === 'form__password'){
            if(!e.target.value == ''){
                if(e.target.value.lenght < 8){
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

        if(email === validationEmail(email)){
            return alert('Wrong email!')
        }else if(password.lenght <= 8){
            return alert('Short password!')
        }else if(login === validationLogin(login)){
            return alert('Wrong email!')
        }

        Registration(email, login, password)
    }

    return (
        <div className='registrations'>
            <Link to='/login' className='back_login'><img src="./back.svg"/></Link>

            <form 
                className="email-registration"
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

            <button className='register' form='reg'>REGISTER</button>
        </div>
    );
  };

