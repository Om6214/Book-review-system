import React,{useState} from "react";
import '../Pages/Login.css'

const Login = () => {
  const [user, setuser] = useState({
    Email:"",
    Password:""
  })

  const handleChange=(e)=>{
    e.preventDefault();
    const {name,value}=e.target;
    setuser({
      ...user,
      [name]:value
    })

  }

  const handleSubmit=()=>{

  }

  
  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <div className="form">
        <label htmlFor="Email">Email : </label>
        <input type="email" name="Email" id="Email" value={user.Email} onChange={handleChange}/>
        <label htmlFor="Password">Password : </label>
        <input type="password" name="Password" id="Password" value={user.Password} onChange={handleChange} />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Login;
