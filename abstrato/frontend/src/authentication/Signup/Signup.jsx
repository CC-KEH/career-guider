import React, { useState } from 'react';
import Input from '../../components/otherComponents/Input/Input';
import styles from './Signup.module.css';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [passwd, setPasswd] = useState('');
  const [isMouseOver, setMouseOver] = useState(false);

  function registerUser(e) {
    e.preventDefault();
    client.post(
      "/accounts/register",
      {
        email: email,
        username: username,
        password: passwd
      }
    ).then(function(res) {
      client.post(
        "/accounts/login",
        {
          email: email,
          password: passwd
        }
      ).then(function(res) {
        setCurrentUser(true);
        navigate('/HomeScreen')
      });
    });
  }

  function handleMouseOver() {
    setMouseOver(true);
  }
  
  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <form className={styles.card} onSubmit={registerUser}>
      <div className={styles.card2}>
        <h1>Welcome {name}</h1>
        <Input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setPasswd(e.target.value)}
        />

        <button
          style={{ backgroundColor: isMouseOver ? 'black' : 'white' }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          type="submit"
          onClick={registerUser}
        >
          Register
        </button>
      </div>
    </form>
  );
}

export default Register;
