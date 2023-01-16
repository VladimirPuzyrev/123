import React, {useEffect} from 'react';
import {Header} from './component/Component'
import {Welcome, MainPage, LoginPage, Registration, ProfilePage} from './Pages/Pages.js';
import { Routes, Route, Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "./actions/user";



function App() {
    const isAuth = useSelector(state => state.user.isAuth)
    const role = useSelector(state => state.user.currentUser.role)
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
              <Route path='/profile' element={<Navigate to='/' />} />
              <Route path='/main' element={<Navigate to='/' />} />
              <Route path='/chats' element={<Navigate to='/' />} />
            </Route>
          </Routes> 
        }

        {isAuth &&
          <Routes>
            <Route path='/' element={<Header />}>
              <Route index element={<Welcome />} />
              
              <Route path='/registration' element={<Navigate to='/main' />} />
              <Route path='/login' element={<Navigate to='/main' />} />
            </Route>

            <Route path="/main" element={<MainPage />} />
            <Route path='/profile' element={<ProfilePage />} />
          </Routes> 
        }
        
      </div>
  );
}

export default App;
