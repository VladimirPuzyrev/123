import React, { useState } from 'react'
import {RegistrationForm} from '../../component/Component.js';
import './Registration.scss'


function Registration() {



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
          />
        </div>
        
      </section>
    </div>

  )
}

export default Registration