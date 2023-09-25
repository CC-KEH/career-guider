import React from 'react'
import styles from './Input.module.css';
function Input(props){
    return (
    <input className={styles.input}
    onChange={props.onChange}
    type={props.type} 
    placeholder={props.placeholder}
    value={props.value}
    />);
}

export default Input;