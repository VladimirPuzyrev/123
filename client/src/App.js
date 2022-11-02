import React, { useState } from 'react';
import {Welcome, Register} from './pages/index.js';
import {Route, Router} from 'react-router-dom'

function App() {
//   const [currentForm, setCurrentForm] = useState('Welcome');

//  const toggleForm = (formName) => {
//     setCurrentForm(formName);
//   }

  return (
    <Router>
      <div className='app'>
        <Route path='/' exact component={Welcome}/>
        <Route path='/registration' exact component={Register}/>
      </div>
    </Router>
  );
}

export default App;
