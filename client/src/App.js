import React, { useState } from 'react';
import {Welcome, Register} from './pages/index.js';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
//   const [currentForm, setCurrentForm] = useState('Welcome');

//  const toggleForm = (formName) => {
//     setCurrentForm(formName);
//   }

  return (
    <Welcome />
    // currentForm === "Welcome" ? <Welcome onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
  );
}

export default App;
