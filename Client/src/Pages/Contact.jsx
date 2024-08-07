import React, { useState, useEffect } from "react";
import "../Pages/Contact.css";
import { useAuth } from "../storage/auth";
import Footer from "../Components/Footer"

const Contact = () => {
  const {detail}=useAuth()
  const [user, setuser] = useState({
    Name:"",
    Email:"",
    Message:""
  })
  const [userData, setuserData] = useState(true)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuser({
      ...user,
      [name]: value,
    });
  };

  if(userData&&detail){
    setuser({
      Name:detail[0].Name,
      Email:detail[0].Email,
      Message:""
    })
    setuserData(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setuser({
      Name:detail[0].Name,
      Email:detail[0].Email,
      Message:""
    })
  };

  return (
    <>
      <div className="contimg">
        <img src="contimg.png" alt="contimg" />
      </div>
      <div className="container">
      <form className="Inpform" autoComplete="off" action="https://formspree.io/f/mgvweowk" method="POST">
      <h1>Contact</h1>
        <div className="contform">
          <label htmlFor="Name">Name:</label>
          <input
            type="text"
            name="Name"
            id="Name"
            value={user.Name}
            onChange={handleChange}
          />
          <label htmlFor="Email">Email:</label>
          <input
            type="email"
            name="Email"
            id="Email"
            value={user.Email}
            onChange={handleChange}
          />
          <label htmlFor="Message">Message:</label>
          <textarea
          rows="5"
          cols="50"
            type="text"
            name="Message"
            id="Message"
            value={user.Message}
            onChange={handleChange}
          />
          <button className="btn btn-danger" type="submit">Submit</button>
        </div>
      </form>
      </div>
      <footer>
        <p>&copy; 2024 Book Review Website. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Contact;
