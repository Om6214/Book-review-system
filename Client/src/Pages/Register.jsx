import { useState } from "react";
import React from "react";
import "./Register.css"
import BaseUrl from "../BaseUrl";
import {toast} from "react-toastify"

const Register = () => {
  const [user, setuser] = useState({
    Name: "",
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BaseUrl}/user/registration`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success("Login successfull",{
          theme:"dark",
          autoClose:2000
        })
        setuser({
          Name: "",
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
        <label htmlFor="Name">Name : </label>
        <input
        style={{padding:"10px",border:"1px solid #696997",borderRadius:"4px"}}
          type="text"
          name="Name"
          id="Name"
          value={user.Name}
          onChange={handleChange}
        />
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
        <button className="regisbutton" type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Register;
