import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Input from '../../components/otherComponents/Input/Input';
import styles from './Login.module.css';
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [passwd, setPasswd] = useState('');
  const [isMouseOver, setMouseOver] = useState(false);
  const [user, setCurrentUser] = useState(false);
  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  function loginUser(e) {
    e.preventDefault();
    client.post(
      "/accounts/login",
      {
        email: email,
        password: passwd
      }
    ).then(function(res) {
      setCurrentUser(true);
    });
    if(user) {
      navigate("/homeScreen");
    }
  }

  return (
    <div>
      <form className={styles.card} onSubmit={loginUser}>
        <div className={styles.card2}>
          <h1>Welcome back</h1>

          <Input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
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
