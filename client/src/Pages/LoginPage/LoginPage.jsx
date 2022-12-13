import React from 'react'
import {Login} from '../../component/Component.js';
import './LoginPage.scss'


function LoginPage(){

        return(
            <div className='page'>

                <section className='join'>

                    <div className='join__form'>    
                        <Login/>
                    </div>

                </section>

            </div>

        )
    }

export default LoginPage;