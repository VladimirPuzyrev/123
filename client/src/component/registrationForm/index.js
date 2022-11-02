import React, { useRef, useForm } from 'react'
import { v4 as uuidV4 } from 'uuid'

import './registration.scss'

export default function Regstrarion({onFormSwitch, onEmailSubmit, onPasswordSubmit}) {

    const emailRef = useRef()
    const passwordRef = useRef()

    function handleSubmit(e){
        e.preventDefault()

        onEmailSubmit(emailRef.current.value)
        onPasswordSubmit(passwordRef.current.value)

    }

    return (
        <div className='login'>
            <form 
                className="email-login"
                onSubmit={handleSubmit}

                >
                <h3>Sign Up</h3>

                    <div className='input-block'>
                        <input
                            type="email"
                            className="form__email"
                            placeholder=' '
                            ref={emailRef}
                            required
                        />

                        <label>Enter email</label>
                        <label className='wrong'></label>
                    </div>


                    <div className='input-block'>
                    <input
                        type="password"
                        className="form__password"
                        placeholder=' '
                        ref={passwordRef}
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

            <button className='register'>REGISTER</button>
        </div>
    );
  };

