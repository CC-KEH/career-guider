//TODO: Give error if password and confirm password dont match
//TODO: Style the placeholder in input properly
import React, { useState } from "react";

import Input from "../../components/otherComponents/Input/Input";
import styles from "./Signup.module.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");

  const [isMouseOver, setMouseOver] = useState(false);

  async function registerUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:1337/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        passwd,
      }),
    });
    const data = await response.json();
    console.log("User for Register: ", data);
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
          onChange={(e) => {
            setName({
              name: e.target.value,
            });
          }}
          type="text"
          placeholder="Username"
        />
        <Input
          onChange={(e) => {
            setEmail({
              email: e.target.value,
            });
          }}
          type="text"
          placeholder="Email"
        />
        <Input type="password" placeholder="Password" />
        <Input
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => {
            setPasswd({
              passwd: e.target.value,
            });
          }}
        />

        <button
          style={{ backgroundColor: isMouseOver ? "black" : "white" }}
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
