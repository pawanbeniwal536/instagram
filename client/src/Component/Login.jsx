import React, { useEffect, useState } from "react";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password , setPassword] = useState("");

  const handleSubmit = async(e) => {
    if (username.length == "" || password.length == "") {
      alert("Creadential cannot be blank");
    }
    else{
    e.preventDefault();
    
    try {
      
    const response = await fetch("http://localhost:5000/api/signUp",
      {
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
      const data = await response.json();

    if (response.ok) {
      console.log("User registered successfully:", data);
    } else {
      console.error("Error:", data.message);
    }
  }
  catch (error) {
    console.error("Network error:", error);
  }
  alert("Invalid username and password");
}
  }

  return (
    <div className="wrapper">
      <div className="container">
        <div className="insta-logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            alt="Instagram" 
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <input type="text" placeholder="Username, email address" onChange={(e)=>setUsername(e.target.value)}/>
          </div>

          <div className="input-field">
            <input type="password" placeholder="Password"onChange={(e)=>setPassword(e.target.value)} />
          </div>

          <button className="login-btn">Log in</button>

          <a href="https://www.instagram.com/accounts/password/reset/?hl=en" className="forgot-password">Forgotten password?</a>
        </form>

        {/* <button className="signup-btn">Create new account</button> */}
      </div>

      <p className="meta">Meta</p>
    </div>
  );
};

export default Login;
