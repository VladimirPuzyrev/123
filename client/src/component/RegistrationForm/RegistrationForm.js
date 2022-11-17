import React, { useState } from 'react'
import { v4 as uuidV4 } from 'uuid'
import './RegistrationForm.scss'
import {Input} from '../Component'
export default function RegstrarionForm() {

    function formSend(e){
        e.preventDefault()

        const [login, setLogin] = useState()
        const [email, setEmail] = useState()
        const [password, setPassword] = useState()

    }

    return (
        <div className='registrations'>
            <form 
                className="email-registration"
                onSubmit={formSend}
            >
                <h3>Registration</h3>

                <div className='input-block'>
                    <Input
                        type="text"
                        className="form__login"
                        placeholder=' '
                        value={login}
                        setValue={setLogin}
                        required
                    />

                    <label>Enter Login</label>
                </div>

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


                <div className='input-block'>
                    <input
                        type="password"
                        className="form__сonfirm"
                        placeholder=' '
                    />

                    <label>Confirm password</label>
                </div>
        
            </form>

            <button className='register' type='submit'>REGISTER</button>
        </div>
    );
  };

