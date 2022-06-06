import React from 'react'


//css
import classes from "./Projects.module.css"

//UI components
import Container from '../../UI/container/Container';
import ProjectsUI from '../../UI/projectsUI/ProjectsUI';
import Card from '../../UI/card/Card'



function Projects() {
  return (
    <div className={classes.projects}>
        <div className={classes.projects_title}>
            <h1>Projects</h1>
        </div>
        <Container className={classes.projects_container}>
            <ProjectsUI />
        </Container>
        
    </div>
  )
}

export default Projects