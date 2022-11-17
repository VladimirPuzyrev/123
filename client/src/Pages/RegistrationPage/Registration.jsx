import React, { useState } from 'react'
import {RegistrationForm} from '../../component/Component.js';
import './Registration.scss'


function Registration() {

  
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [login, setLogin] = useState()

  return (
    <div className='page'>
      <header>
        <span>Be</span>
          <a><img/></a>
        <span>Up</span>
      </header>

      <section className='registration'>

        <div className='registration__form'>    
          <RegistrationForm
            onEmailSubmit={setEmail}
            onPasswordSubmit={setPassword}
            onLoginSubmit={setLogin}
          />
        </div>
        
      </section>
    </div>

  )
}

export default Registration