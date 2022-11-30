import React, { useState } from 'react';
import {Welcome, Registration} from './Pages/Pages.js';
import { Routes, Route} from "react-router-dom";

function App() {
//   const [currentForm, setCurrentForm] = useState('Welcome');

//  const toggleForm = (formName) => {
//     setCurrentForm(formName);
//   }

  return (
      <div className='app'>
        <Routes>
          <Route path="/login" element={<Welcome />} />
          <Route path="/registration" element={<Registration />} />
        </Routes> 
      </div>
  );
}

export default App;
