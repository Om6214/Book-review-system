import React, { useState, useEffect } from "react";
import "../Pages/Contact.css";
import { useAuth } from "../storage/auth";

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
      <form action="https://formspree.io/f/mgvweowk" method="POST">
        <div className="form">
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
          <input
            type="text"
            name="Message"
            id="Message"
            value={user.Message}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Contact;
