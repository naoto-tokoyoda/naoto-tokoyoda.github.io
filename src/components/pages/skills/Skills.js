
import Container from "../../UI/container/Container";

import classes from "../skills/Skills.module.css"
import HTML from "../../images/skill_icons/HTML_icon.png";
import CSS from "../../images/skill_icons/CSS_icon.png";
import JS from "../../images/skill_icons/JS_icon.png";
import React from "../../images/skill_icons/React_icon.png";
import Python from "../../images/skill_icons/Python_icon.png";
import Django from "../../images/skill_icons/django_icon.png";
import Java from "../../images/skill_icons/JAVA_icon.png";
import PHP from "../../images/skill_icons/PHP_icon.png";
import Laravel from "../../images/skill_icons/Laravel_icon.png";
import Git from "../../images/skill_icons/Git_icon.png";
import Webflow from "../../images/skill_icons/webflow_icon.png";
import API from "../../images/skill_icons/API_icon.png";
import GAS from "../../images/skill_icons/gas_icon.png";
import Wordpress from "../../images/skill_icons/wordpress_icon.png";


function Skills() {
  return (
    <div className={classes.skills} id="skills">
        <div className={classes.skill_title}>
            <h1>Skills</h1>
        </div>
        <Container className={classes.skill_container}>
                <ul className={classes.skill_grid}>
                        <li className={classes.skill_card}>
                                <img src={HTML} alt="HTML" className={classes.skill_image} />    
                                <p>HTML</p>
                        </li>
                
                        
                        <li className={classes.skill_card}>
                                <img src={CSS} alt="CSS" className={classes.skill_image} />    
                                <p>CSS</p>
                        </li>

                        <li className={classes.skill_card}>
                                <img src={JS} alt="JS" className={classes.skill_image} />    
                                <p>JavaScript</p>
                        </li>

                        <li className={classes.skill_card}>
                                <img src={React} alt="React" className={classes.skill_image} />    
                                <p>React</p>
                        </li>

                        <li className={classes.skill_card}>
                                <img src={Python} alt="Python" className={classes.skill_image} />    
                                <p>Python</p>
                        </li>

                        <li className={classes.skill_card}>
                                <img src={Django} alt="django" className={classes.skill_image} />    
                                <p>django</p>
                        </li>

                        <li className={classes.skill_card}>
                                <img src={Java} alt="Java" className={classes.skill_image} />    
                                <p>Java</p>
                        </li>

                        <li className={classes.skill_card}>
                                <img src={PHP} alt="PHP" className={classes.skill_image} />    
                                <p>PHP</p>
                        </li>

                        <li className={classes.skill_card}>
                                <img src={Laravel} alt="Laravel" className={classes.skill_image} />    
                                <p>Laravel</p>
                        </li>

                        <li className={classes.skill_card}>
                                <img src={Git} alt="Git" className={classes.skill_image} />    
                                <p>Git</p>
                        </li>

                        <li className={classes.skill_card}>
                                <img src={Webflow} alt="Webflow" className={classes.skill_image} />    
                                <p>Webflow</p>
                        </li>

                        <li className={classes.skill_card}>
                                <img src={API} alt="API" className={classes.skill_image} />    
                                <p>API</p>
                        </li> 

                        <li className={classes.skill_card}>
                                <img src={GAS} alt="GAS" className={classes.skill_image} />    
                                <p>GAS</p>
                        </li> 

                        <li className={classes.skill_card}>
                                <img src={Wordpress} alt="Wordpress" className={classes.skill_image} />    
                                <p>Wordpress</p>
                        </li> 

                </ul>
            
        </Container>
        
    </div>
  )
}

export default Skills