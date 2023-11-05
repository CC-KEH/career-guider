import React, { useState } from 'react';
import Input from '../../components/otherComponents/Input/Input';
import styles from './Signup.module.css';
import { account } from '../../appwrite/appwriteConfig';
import {v4 as uuidv4} from 'uuid';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [isMouseOver, setMouseOver] = useState(false);

  const Signup = async (e) => {
    e.preventDefault();
    const promise = account.create(uuidv4(),user.email,user.password,user.name);
    promise.then(
      function(response) {
        console.log(response)
        navigate('/homeScreen'); // success
      },
      function(error){
        console.log(error) // failure
      }
    )
  }
  
  function handleMouseOver() {
    setMouseOver(true);
  }
  
  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <form className={styles.card} onSubmit={Signup}>
      <div className={styles.card2}>
        <h1>Welcome {name}</h1>
        <Input
          type="text"
          placeholder="Username"
          onChange={(e) => setUser({...user,name: e.target.value})}
        />
        <Input
          type="text"
          placeholder="Email"
          onChange={(e) => setUser({...user,email: e.target.value})}
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
          onClick={Signup}
        >
          Register
        </button>
      </div>
    </form>
  );
}

export default Register;
