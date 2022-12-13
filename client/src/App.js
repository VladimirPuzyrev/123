import React, {useEffect} from 'react';
import {Header} from './component/Component'
import {Welcome, MainPage, LoginPage, Registration} from './Pages/Pages.js';
import { Routes, Route, Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "./actions/user";


function App() {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()

  if(isAuth){
    console.log('asd')
  }
  useEffect(() => {
      dispatch(auth())
  }, [])


  return (
      <div className='app'>

        {!isAuth &&
          <Routes>
            <Route path='/' element={<Header />}>
              <Route index element={<Welcome />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/registration" element={<Registration />} />
            </Route>
          </Routes> 
        }

        {isAuth &&
          <Routes>
            <Route path='/' element={<Header />}>
                <Route index element={<Welcome />} />
                <Route path='login' element={<Navigate to='/' />} />
            </Route> 
          </Routes> 
        }
      </div>
  );
}

export default App;
