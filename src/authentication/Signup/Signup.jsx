//TODO: Give error if password and confirm password dont match
//TODO: Style the placeholder in input properly
import React, {useState} from 'react'
import { account } from '../../appwrite/appwriteConfig'
import { Navigate, useNavigate } from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import Input from '../../components/otherComponents/Input/Input';
import styles from './Signup.module.css';

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
                navigate('/Prompt');   //*Success
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
        <form className={styles.card}>
        <div className={styles.card2}>
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
        </div>
        </form>
    );
}

export default Register





    // <div>
    //   <div class="container">
    //     <div class="card">
    //         <a class="singup">Sign Up</a>
    //         <div class="inputBox1">
    //             <input type="text" required="required"/>
    //             <span class="user">Email</span>
    //         </div>
    //         <div class="inputBox">
    //             <input type="text" required="required"/>
    //             <span>Username</span>
    //         </div>

    //         <div class="inputBox">
    //             <input type="password" required="required"/>
    //             <span>Password</span>
    //         </div>
    //         <button class="enter">Enter</button>
    //     </div>
    // </div>
    // </div>