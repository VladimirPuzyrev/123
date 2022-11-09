import React, { useState } from 'react'
import {Login} from '../../component/Component.js';
import './Welcome.scss'


function Welcome(){

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

        return(
            <div className='page'>
                <header>
                    <span>Be</span>
                    <a><img/></a>
                    <span>Up</span>
                </header>

                <section className='join'>

                    <div className='join__form'>    
                        <Login 
                            onEmailSubmit={setEmail}
                            onPasswordSubmit={setPassword}
                         />
                    </div>

                </section>

            </div>

        )
    }

export default Welcome;