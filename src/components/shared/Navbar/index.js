/** @format */

import React, { useState, useEffect } from 'react';
import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
export default function Navbar() {
  return (
    <>
      <Nav>
        <NavLogo to='/'>Logo</NavLogo>
        <Bars />

        <NavMenu>
          <NavLink to='/' activeStyle={{ color: 'black' }}>
            Home
          </NavLink>
          <NavLink to='/register' activeStyle={{ color: 'black' }}>
            Login/Register
          </NavLink>
          {/* <NavLink to='/contact' activeStyle={{ color: 'black' }}>
            Contact
          </NavLink>
          <NavLink to='/signin' activeStyle={{ color: 'black' }}>
            Sign In
          </NavLink>
          <NavBtn>
            <NavBtnLink to='/sign-up'>Sign Up</NavBtnLink>
          </NavBtn> */}
        </NavMenu>
      </Nav>
    </>
  );
}
