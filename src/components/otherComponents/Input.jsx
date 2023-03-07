import React from 'react'

function Input(props){
    return <input 
    onChange={props.onChange}
    type={props.type} 
    placeholder={props.placeholder}
    value={props.value}
    />
}

export default Input;