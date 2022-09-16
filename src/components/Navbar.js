import React from 'react'

import classes from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={classes.nav}>
        <div className={classes.title}>
            <h1><a href="Home">Naoto's portfolio</a></h1>
        </div>
        <ul className={classes.links}>
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navbar;