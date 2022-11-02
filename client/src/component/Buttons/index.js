import React from 'react'
import ReactDOM from 'react-dom'

class LoginButton extends React.Component{
    onClick(){
        window.location.assign('http://localhost:3000/registration')
    }

    render(){
        return <button onClick={(e) => this.onClick(e)} className='login-button'>Registration</button>
    }
}

export default LoginButton