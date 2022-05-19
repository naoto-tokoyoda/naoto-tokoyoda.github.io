import React from 'react';
import Navbar from '../../Navbar';
import Card from '../../UI/card/Card'

import classes from './Home.module.css';


function Home() {
  return (
    <div className={classes.home}>
      <Navbar />
      <div className={classes.profile}>
            <div className={classes.profile_intro_wrapper}>
                <h3>Hi There! I am</h3>
                <h1>Naoto Tokoyoda</h1>
                <h3>Graduate of information technology with experience across full-stack development. I am passionate about coding and solving problems with thinking about what is the best solution for everyone making happy. I am trying to find a role where I can grow and learn from other experienced team members.</h3>
                <Card />
            </div>
            <div className={classes.profile_image_wrapper}>
              <h1>This is profile_image_wrapper</h1>
            </div>
        </div>

    </div>
  )
}

export default Home;