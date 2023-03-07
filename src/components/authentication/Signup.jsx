//TODO: Give error if password and confirm password dont match
//TODO: Style the placeholder in input properly
//TODO: Increase the size of Welcome Text

import React, {useState} from 'react'
import { account } from '../../appwrite/AppwriteConfig'
import { Navigate, useNavigate } from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import Input from '../otherComponents/Input'

function Signup() {
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
                navigate('/profile');   //*Success
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
        <form className="form">
        <h1>Welcome {user.name}</h1>

        <br></br>  
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
        placeholder="email"
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
    );
}

export default Signup
