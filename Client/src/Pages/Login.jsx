import React, { useState } from "react";
import { useAuth } from "../storage/auth";
import "./Login.css";
import {useNavigate } from "react-router-dom";
import BaseUrl from "../BaseUrl";
const Login = () => {
  const navigate = useNavigate()
  const [user, setuser] = useState({
    Email: "",
    Password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuser({
      ...user,
      [name]: value,
    });
  };
const {storeTokenInLS,token}= useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BaseUrl}/user/login`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      if (response.ok) {
        storeTokenInLS(data.token)
        navigate("/")
        alert(data.message);
        setuser({
          Email: "",
          Password: "",
        });
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <div className="form" style={{width:"80vw"}}>
        <label htmlFor="Email">Email : </label>
        <input
          type="email"
          name="Email"
          id="Email"
          value={user.Email}
          onChange={handleChange}
        />
        <label htmlFor="Password">Password : </label>
        <input
          type="password"
          name="Password"
          id="Password"
          value={user.Password}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Login;
