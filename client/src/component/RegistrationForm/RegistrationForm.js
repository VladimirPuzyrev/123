import React, { useRef } from 'react'
import { v4 as uuidV4 } from 'uuid'
import './RegistrationForm.scss'

export default function RegstrarionForm({onEmailSubmit, onPasswordSubmit, onLoginSubmit}) {

    const loginRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirm = useRef()

    function handleSubmit(e){
        e.preventDefault()

        onEmailSubmit(emailRef.current.value)
        onLoginSubmit(loginRef.current.value)

        if(passwordRef === passwordConfirm){
            onPasswordSubmit(passwordRef.current.value)
        }else{
            //quyreSelector('.not-same')
        }

    }

    return (
        <div className='registrations'>
            <form 
                className="email-registration"
                onSubmit={handleSubmit}
            >
                <h3>Registration</h3>

                <div className='input-block'>
                    <input
                        type="text"
                        className="form__login"
                        placeholder=' '
                        ref={loginRef}
                        required
                    />

                    <label>Enter Login</label>
                </div>

                <div className='input-block'>
                    <input
                        type="email"
                        className="form__email"
                        placeholder=' '
                        ref={emailRef}
                        required
                    />

                    <label>Enter email</label>
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


                <div className='input-block'>
                    <input
                        type="password"
                        className="form__сonfirm"
                        placeholder=' '
                        ref={passwordConfirm}
                        required
                    />

                    <label>Confirm password</label>
                </div>
        
            </form>

            <button className='register'>REGISTER</button>
        </div>
    );
  };

