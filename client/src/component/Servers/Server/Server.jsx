import React from 'react'

export function Server(props) {
  return (
    <div className='server'>
        <img className='serverAvatar' src={props.avatar}/>
        <span className='serverName'>{props.name}</span>
    </div>
  )
}
