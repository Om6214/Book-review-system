import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="homefooter">
      <div className='left'>
        <h1 className="brand">Subscribe for updates</h1>
        <div className="footerform">
        <label htmlFor="Name">Name</label>
        <input type="text" name='Name' />
        <label htmlFor="Email">Email</label>
        <input type="email" name='email' />
        
      </div>
      <button className='footerbutton'>submit</button>
      </div>
      

      {/* Right section with links */}
      <div className="homelinks">
        <a href="#">About Us</a>
        <a href="#">License</a>
        <a href="#">Contribute</a>
        <a href="#">Contact Us</a>
      </div>
    </footer>
  );
}

export default Footer;
