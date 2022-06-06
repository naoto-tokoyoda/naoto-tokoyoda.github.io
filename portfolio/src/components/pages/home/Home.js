import React from 'react';
import Navbar from '../../Navbar';
import Button from '../../UI/button/Button';

import Profile_image from '../../images/profile_image.jpg';
import Angle_down from '../../images/angle_down.png';
import LinkedIn_image from '../../images/linkedin_icon.png';
import GitHub_image from '../../images/github_icon.svg';

import classes from './Home.module.css';


function Home() {
  return (
    <div className={classes.home}>
      <Navbar />
      <div className={classes.profile_wrapper}>
        <div className={classes.profile_intro_wrapper}>

          <div className={classes.profile_greet}>
            <h3>Hi There! I am</h3>
            <h1>Naoto Tokoyoda</h1>
          </div>
          <div className={classes.profile_introduction}>
            <h3>Graduate of information technology with experience across full-stack development. I am passionate about coding and solving problems with thinking about what is the best solution for everyone making happy. I am trying to find a role where I can grow and learn from other experienced team members.</h3>
          </div>

          <div className={classes.icons_wrapper}>
            <Button className={classes.icon_resume}>
              Resume
            </Button>
            <Button className={classes.icon_linkedIn_wrapper}>
              <img src={LinkedIn_image} alt="linkedIn" className={classes.icon_linkedIn}/>
            </Button>
            <Button className={classes.icon_gitHub_wrapper}>
              <img src={GitHub_image} alt="github" className={classes.icon_github}/>
            </Button>
            
          </div>
        </div>

        <div className={classes.profile_image_wrapper}>
          <img src={Profile_image} alt="profile" className={classes.profile_image}/>
        </div>
      </div>

      <div className={classes.angle_arrow_wrapper}>
        <img src={Angle_down} alt="" className={classes.angle_down}/>
      </div>

    </div>
  )
}

export default Home;