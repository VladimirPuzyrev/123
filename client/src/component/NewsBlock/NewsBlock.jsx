import React from 'react'
import './NewsBlock.scss'

export function NewsBlock(props) {
  return (
      <li>
        <div className='newsBlock'>
            <h2 className='newsTitle'>{props.title}</h2>
            <span className='newsText'>{props.text}</span>
            <span className='newsAutor'>{props.autor}</span>
        </div>
      </li>
  )
}
