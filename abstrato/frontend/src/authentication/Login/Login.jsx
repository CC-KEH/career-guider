import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import Input from '../../components/otherComponents/Input/Input';
import styles from './Login.module.css';
import { account } from '../../appwrite/appwriteConfig';

function Login() {
  const navigate = useNavigate();
  const [isMouseOver, setMouseOver] = useState(false);
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  const loginUser = async(e) => {
    e.preventDefault();
    try {
      await account.createEmailSession(user.email,user.password);
      navigate('/homeScreen')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <form className={styles.card} onSubmit={loginUser}>
        <div className={styles.card2}>
          <h1>Welcome back</h1>

          <Input
            onChange={(e) => setUser({...user,email: e.target.value})}
            type="text"
            placeholder="Email"
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setUser({...user,password: e.target.value})}
          />

          <button
            style={{ backgroundColor: isMouseOver ? 'black' : 'white' }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            type="submit"
            onClick={loginUser}
          >
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
