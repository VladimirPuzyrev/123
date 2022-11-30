import React, { useState } from 'react';
import './loginForm.scss'
import { Link } from 'react-router-dom';
import {Input} from '../Component'
import {useDispatch} from 'react-redux'
import {login} from '../../actions/user'

export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    console.log(email)
    return (
        <div className='login'>
            <form 
                className="email-login"
                >
                <h3>Sign Up</h3>

                    <div className='input-block'>
                        <Input
                            type="email"
                            className="form__email"
                            placeholder=' '
                            value={email}
                            setValue={setEmail}
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
                    <button className="login-button" type="submit" onClick={() => dispatch(login(email, password))}>Login</button>
                    <a className="forgot-button"  href='#'>Forgot Password?</a>
                </div>
            </form>

            <Link to='/registration'className='register'>Registration</Link>
        </div>
    );
  };

