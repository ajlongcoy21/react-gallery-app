import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => (
  <li>
    <NavLink to={`${props.navLink}`} onClick={props.onClick}>{props.navText}</NavLink>
  </li>

);

export default Nav;