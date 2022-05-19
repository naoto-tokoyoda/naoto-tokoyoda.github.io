import React from 'react'

import classes from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={classes.nav}>
        <div className={classes.title}>
            <h1><a href="Home">Naoto's portfolio</a></h1>
        </div>
        <ul className={classes.links}>
            <li><a href="Home">Home</a></li>
            <li><a href="Skills">Skills</a></li>
            <li><a href="Projects">Projects</a></li>
            <li><a href="Contact">Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navbar;