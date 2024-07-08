import React from 'react'
import './Error.css'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <div id="full">
        <div className="header">
            <h1 id='error'>404</h1>
        </div>
        <h3>Sorry Page not Found!</h3>
        <p>It seems your are trying to access some different page which is not available in this website</p>
        <div className="buttons">
            <NavLink to='/' className='bn'>Home Page</NavLink>
            <NavLink to='/contact' className='bn'>Report problem</NavLink>
        </div>
    </div>
  )
}

export default Error