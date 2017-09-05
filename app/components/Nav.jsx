import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Nav bar with the references to the sections 
 * home, battle and popular.
 */
const Nav = () => (
  <ul className='nav-menu'>
    <li>
      <NavLink exact activeClassName='active' to='/'>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName='active' to='/battle'>
        Battle
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName='active' to='/popular'>
        Popular
      </NavLink>
    </li>
  </ul>
)

export default Nav;
