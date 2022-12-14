import React, {useEffect} from 'react';
import {Header} from './component/Component'
import {Welcome, MainPage, LoginPage, Registration, ProfilePage} from './Pages/Pages.js';
import { Routes, Route, Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "./actions/user";


function App() {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()

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
              <Route path='/main' element={<Navigate to='/' />} />
            </Route>
          </Routes> 
        }

        {isAuth &&
          <Routes>
            <Route path="/main" element={<MainPage />} />
            <Route path='/profile' element={<ProfilePage />} />

            <Route path='/' element={<Navigate to='/main' />} />
            <Route path='/registration' element={<Navigate to='/main' />} />
            <Route path='/login' element={<Navigate to='/main' />} />
          </Routes> 
        }
      </div>
  );
}

export default App;
