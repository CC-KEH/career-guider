import React, {useState} from 'react'
import { account } from '../../../appwrite/AppwriteConfig'
import { Navigate, useNavigate } from 'react-router-dom'
import Input from '../../otherComponents/Input/Input';
import styles from './Login.module.css';

function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
    email:"",
    password:""
    })
    const [isMouseOver, setMouseOver] = useState(false) 
    function handleMouseOver(){
        setMouseOver(true);
    }
    function handleMouseOut(){
        setMouseOver(false);
    }
    const loginUser = async(e)=>{
        e.preventDefault();
        try {
            await account.createEmailSession(user.email,user.password);
            navigate('/HomeScreen');
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <div className={styles.bodyy}>
        <form className={styles.container}>
        <h1>Welcome back</h1>
        
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
        <Input type="password" 
        placeholder="Password"
        onChange={(e)=>{
            setUser({
            ...user,
            password:e.target.value  
            })
        }}    
        />
        
        <button 
        style={{backgroundColor: isMouseOver? "black" : "white"}}
        onMouseOver = {handleMouseOver} 
        onMouseOut={handleMouseOut} type="submit"
        onClick={loginUser}
        >
        LOGIN</button>  
        </form>
        </div>
    );
}

export default Login
