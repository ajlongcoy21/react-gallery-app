// Import react and navlink

import React from 'react';
import { NavLink } from 'react-router-dom';

// Create react element Nav

const Nav = (props) => (

  // Display the list elements and links for the default choices for the user

  <li>
    <NavLink to={`${props.navLink}`} onClick={props.onClick}>{props.navText}</NavLink>
  </li>

);

// Export element to be used by the main app.js

export default Nav;