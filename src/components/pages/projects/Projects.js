import React from 'react'


//css
import classes from "./Projects.module.css"

//UI components
import Container from '../../UI/container/Container';
import ProjectsUI from '../../UI/projectsUI/ProjectsUI';
import { useMatchMedia } from "../../useMatchMedia";

function Projects() {
  const isMobileScreen = useMatchMedia("(min-width:960px)", true);


  return (
    <div className={classes.projects} id="projects">
        <div className={classes.projects_title}>
            <h1>Projects</h1>
        </div>

        {isMobileScreen 
        ? <Container className={classes.projects_container} >
            <ProjectsUI />
          </Container>
        : <ProjectsUI />}
        {/* <Container className={classes.projects_container} >
            <ProjectsUI />
          </Container> */}
        
    </div>
  )
}

export default Projects