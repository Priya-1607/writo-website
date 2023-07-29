import React from 'react';
//import logo from './images/logo.svg'
//import './css/nav.module.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import '../../App.css'


// Logo component
const Logo = () => {
  return (
    <a href="#" className="logo">
    <img src={`${process.env.PUBLIC_URL}/assets//images/logo.svg`} width="162" height="50" alt="EduWeb logo" />
    </a>
  );
};

// NavItem component
const NavItem = ({ href, text }) => {
  return (
    <li className="navbar-item">
      <a href={href} className="navbar-link" data-nav-link>
        {text}
      </a>
    </li>
  );
};


const DropdownItem = ({ href, text, imgSrc }) => {
  return (
    <a href={href} className="dropbtn flex items-center gap-x-3">
      {text}
      <img src={imgSrc} alt="" />
    </a>
  );
};

// ChildDropdownItem component
const ChildDropdownItem = ({ href, text, imgSrc }) => {
  return (
    <a href={href}>
      <div className="flex items-center justify-between">
        <p>{text}</p>
        <img src={imgSrc} alt="" />
      </div>
    </a>
  );
};

// Header component
const Header = () => {
  return (
    <header className="header" data-header>
      <div className="container">
        <Logo />

        <nav className="navbar" data-navbar>
          <div className="wrapper">
            <Logo />
            <button className="nav-close-btn" aria-label="close menu" data-nav-toggler>
              jhmnm
             
              {/* <ion-icon name="close-outline" aria-hidden="true"></ion-icon> */}
            </button>
          </div>

          <ul className="navbar-list">
            {/* NavItem components */}
             {/* NavItem component */}
             <NavItem href="#" text="Mentorship Program">
              <button className="mentorship-btn">new</button>
            </NavItem>
            <NavItem href="#home" text="Courses" />
            <NavItem href="#about" text="Training Program">
              <button className="scholarshipbtn">UP TO% OFF</button>
            </NavItem>
            <NavItem href="#courses" text="Community" />


            {/* NavItem component  to check git*/}
            <NavItem href="#blog" text="Practice" />

            <Stack direction="row" spacing={7} sx={{height:"4rem"}}>
            <Button variant="outlined" color="error">
       Login
      </Button>
      <Button variant="contained" color="error">
       Enroll now
      </Button>
     
    </Stack>
 
          </ul>
        </nav>


        
      </div>
    </header>
    
  );
};

export default Header;
