import React, { useState } from "react";
import { account } from "../../appwrite/appwriteConfig";
import { Navigate, useNavigate } from "react-router-dom";
import Input from "../../components/otherComponents/Input/Input";
import styles from "./Login.module.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const [isMouseOver, setMouseOver] = useState(false);
  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }
  async function loginUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:1337/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        passwd,
      }),
    });
    const data = await response.json();
    if (data.user) {
      alert("Login Successful");
      navigate('/HomeScreen')
    } else {
      alert("Please check your username and password");
    }
    console.log("User for Login: ", data);
  }
  return (
    <div>
      <form className={styles.card} onSubmit={loginUser}>
        <div className={styles.card2}>
          <h1>Welcome back</h1>

          <Input
            onChange={(e) => {
              setEmail({
                email: e.target.value,
              });
            }}
            type="text"
            placeholder="email"
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPasswd({
                password: e.target.value,
              });
            }}
          />

          <button
            style={{ backgroundColor: isMouseOver ? "black" : "white" }}
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
