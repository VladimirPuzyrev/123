import React from 'react'
import './input.scss'


const Input = (props) => {
    return(
        <input onChange={(e)=> props.setValue(e.target.value)}
            name={props.name}
            value={props.value}
            type={props.type}
            placeholder={props.placeholder}
            className={props.className}
            onBlur={props.onBlur}
            onFocus={props.onFocus}
            requred
        />
    )
}
export default Input
