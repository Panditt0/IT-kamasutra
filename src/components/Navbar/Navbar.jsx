import React from 'react'
import classes from './Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faEnvelope, faNewspaper, faMusic, faCog } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return <nav className={classes.nav}>
    <div>
      <NavLink className={classes.item} to='/profile'><FontAwesomeIcon icon={faUserCircle} />Profile</NavLink>
    </div>
    <div>
      <NavLink className={classes.item} to='/dialogs'> <FontAwesomeIcon icon={faEnvelope} />Messages </NavLink>
    </div>
    <div >
      <NavLink className={classes.item} to='/news'> <FontAwesomeIcon icon={faNewspaper} />News </NavLink>
    </div>
    <div>
      <NavLink className={classes.item} to='/music'><FontAwesomeIcon icon={faMusic} />Music </NavLink>
    </div>
    <div>
      <NavLink className={classes.item} to='/settings'><FontAwesomeIcon icon={faCog} />Settings </NavLink>
    </div>
  </nav>
}

export default Navbar