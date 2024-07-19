import React from 'react'
import classes from './Navbar.module.css'

const Navbar= () => {
    return <nav className = {`${classes.nav} ${classes.item}`}>
    <div>
      <a className={classes.item} href='/profile'>Profile</a>
    </div>
    <div>
      <a className={classes.item} href='/dialogs'>Messages </a>
    </div>
    <div >
      <a className={classes.item} href='#'>News </a>
    </div>
    <div>
      <a className={classes.item} href='#'>Music </a>
    </div>
    <div>
      <a className={classes.item} href='#'>Settings </a>
    </div>
  </nav>
}

export default Navbar