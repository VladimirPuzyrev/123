import React from 'react'
import './input.scss'


const Input = (props) => {
    return(
        <input onChange={(e)=> props.setValue(e.target.value)}
            value={props.value}
            type={props.type}
            placeholder={props.placeholder}
            className={props.className}
            requred
        />
    )
}
export default Input
