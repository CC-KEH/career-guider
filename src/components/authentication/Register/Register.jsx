//TODO: Give error if password and confirm password dont match
//TODO: Style the placeholder in input properly
import React, {useState} from 'react'
import { account } from '../../../appwrite/AppwriteConfig'
import { Navigate, useNavigate } from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import Input from '../../otherComponents/Input/Input'
import styles from './Register.module.css';
import NavbarIn from '../../otherComponents/Navbar/NavbarIn'

function Register() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
    name: "",
    email:"",
    password:""
    })
    const signupUser = async(e)=>{
        e.preventDefault()
        const promise = account.create(uuidv4(),user.email,user.password,user.name);
        promise.then(
            function(response){
                console.log(response);
                navigate('/HomeScreen');   //*Success
            },
            function(error){
                console.log(error);     //*Failure
            }
        )
    }

    const [name,setName] = useState("")
    const [isMouseOver, setMouseOver] = useState(false) 

    function handleMouseOver(){
        setMouseOver(true);
    }
    function handleMouseOut(){
        setMouseOver(false);
    }

    return(
        <div className={styles.bodyy}>
        <form className={styles.container}>
        <h1>Welcome {user.name}</h1>
        <Input
        onChange={(e)=>{
            setUser({
            ...user,
            name:e.target.value  
            })
        }} 
        type="text" 
        placeholder="Username"
        />
        <Input
        onChange={(e)=>{
            setUser({
            ...user,
            email:e.target.value  
            })
        }} 
        type="text" 
        placeholder="Email"
        />
        <Input type="password" placeholder="Password"/>
        <Input type="password" 
        placeholder="Confirm Password"
        onChange={(e)=>{
            setUser({
            ...user,
            password:e.target.value  
            })
        }}/>
        
        <button 
        style={{backgroundColor: isMouseOver? "black" : "white"}}
        onMouseOver = {handleMouseOver} 
        onMouseOut={handleMouseOut} type="submit"
        onClick={signupUser}
        >
        Register</button>  
        </form>
        </div>
    );
}

export default Register
