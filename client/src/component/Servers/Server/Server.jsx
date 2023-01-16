import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ServerGet } from '../../../actions/servers'
import './Server.scss'

export function Server(props) {
  
  function serverChats() {
    alert('nigga')
  }

  return (
    <Link to={`/main/${props.server._id}`}>
      <li>
        <div className='server' onClick={serverChats}>
            <img className='serverAvatar' src={props.avatar}/>
            <span className='serverName'>{props.name}</span>
        </div>
      </li>
    </Link>
  )
}
