import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import React, { useState } from 'react';
import './NavBar.css'
import Logo from './hugo-284.png'


export default function NavBar({ user, setUser }) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <>
    <nav className='navbar'>
      <Link to='/home' className='navbar-logo'><span class="logo"> <a href="/"> <img src={Logo} height="23" width="18" alt="Hugo logo" /></a> </span>Bearcabulary</Link>
      <div className='menu-icon' onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
      <li className='nav-item'><Link to="/home" className='nav-links' onClick={closeMobileMenu}>Home</Link></li>
      <li className='nav-item'><Link to="/dashboard" className='nav-links' onClick={closeMobileMenu}>Dashboard</Link>
      </li>
      <li className='nav-item'><Link to="" onClick={handleLogOut} className='nav-links-mobile'>Log Out</Link></li></ul>
      
    </nav> </>

  );
}
