import React from 'react'
import './Server.scss'

export function Server(props) {
  return (
    <div className='server'>
        <img className='serverAvatar' src={props.avatar}/>
        <span className='serverName'>{props.name}</span>
    </div>
  )
}
