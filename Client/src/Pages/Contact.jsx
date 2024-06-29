import React,{useState} from "react";
import { useAuth } from "../storage/auth";

const Contact = () => {
  const { detail } = useAuth();
  const [user, setuser] = useState({
    Name:detail[0].Name,
    Email:detail[0].Email,
    Message:""
  })

  const handleChange=(e)=>{
    const {name,value}=e.target
    setuser({
      ...user,
      [name]:value
    })
  }
  return (
    <>
      <form >
      <div className="form">
        <label htmlFor="Name">Name : </label>
        <input type="text" name="Name" id="Name" value={user.Name} onChange={handleChange} />
        <label htmlFor="Name">Email : </label>
        <input type="email" name="Email" id="Email" value={user.Email} onChange={handleChange} />
        <label htmlFor="Name">Message : </label>
        <input type="text" name="Message" id="Message" value={user.Message} onChange={handleChange} />
      </div>

      </form>
    </>
  );
};

export default Contact;
