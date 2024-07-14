import React, { useState } from "react";
import { useAuth } from "../storage/auth";
import "./Login.css";
import {useNavigate } from "react-router-dom";
import BaseUrl from "../BaseUrl";
import {toast} from "react-toastify"
import ClipLoader from "react-spinners/ClipLoader";

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
const {storeTokenInLS,token,setLoading,loading}= useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
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
        toast.success("Login successfull",{
          theme:"dark",
          autoClose:2000
        })
        setuser({
          Email: "",
          Password: "",
        });
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
    } finally{
      setLoading(false)
    }
  }
  console.log(loading)

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <h1 id="About">Login</h1>
      <div className="loginform" style={{width:"80vw"}}>
        <label htmlFor="Email">Email : </label>
        <input
          type="email"
          name="Email"
          id="loginEmail"
          value={user.Email}
          onChange={handleChange}
        />
        <label htmlFor="Password">Password : </label>
        <input
          type="password"
          name="Password"
          id="loginPassword"
          value={user.Password}
          onChange={handleChange}
        />
        <button className="loginbutton" type="submit">
          {loading?<ClipLoader size={20} color={"#ffffff"}/>:"Submit"}
        </button>
      </div>
    </form>
  );
};

export default Login;
