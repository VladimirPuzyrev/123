import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../reducers/userReducer";


import './Header.scss'

export default function Header() {

    const isAuth = useSelector(state => state.user.isAuth)
    const role = useSelector(state => state.user.currentUser.role)
    const dispatch = useDispatch()

    return(
        <>
            <header>
                <div className='logo'>
                    <span>Be</span>
                    <a><img/></a>
                    <span>Up</span>
                </div>

                <nav className='nav-link'>
                    {!isAuth && <Link to='/'>Weclome</Link>}
                    {!isAuth && <Link to='/login'>Login</Link>}
                    {!isAuth && <Link to='/registration'>Registration</Link>}
                    {isAuth && <a onClick={() => dispatch(logout())}>Exit</a>}
                    {(isAuth) && <Link to='/main'>Main</Link>}
                </nav>
            </header>

            <Outlet />
        </>
    )
}