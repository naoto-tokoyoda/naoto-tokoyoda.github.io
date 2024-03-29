import React from 'react'

//css
import classes from './ProjectsUI.module.css'

//image
import ProjectImage1 from '../../images/project_images/project_image1.png'
import ProjectImage2 from '../../images/project_images/project_image2.png'
import ProjectImage3 from '../../images/project_images/project_image3.png'
import GitHub_image from '../../images/project_images/normal-github.svg';

function ProjectsUI() {
  return (
    <>
        <div className={classes.projectsUI}>
            <div className={classes.project}>

                {/* box1 */}
                <div className={classes.project_image}>
                    <img src={ProjectImage1} alt="ProjectImage1" />
                    <a href="/">
                        <img src={GitHub_image} alt="" />
                    </a>
                </div>

                {/* box2 */}
                <div className={classes.project_explanations}>
                    <div className={classes.project_explanation} >
                        <h1>Project1</h1>
                        <p>Explanation.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer </p>
                    </div>

                    <div className={classes.icons_container} >
                        <div className={classes.icons}>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={classes.projectsUI}>
            <div className={classes.project}>

                <div className={classes.project_image}>
                    <img src={ProjectImage2} alt="ProjectImage2" />
                    <a href="/">
                        {/* Repo */}
                        <img src={GitHub_image} alt="" />
                    </a>
                </div>

                <div className={classes.project_explanations}>
                    <div className={classes.project_explanation} >
                        <h1>Project2</h1>
                        <p>Explanation.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer </p>
                    </div>

                    <div className={classes.icons_container} >
                        <div className={classes.icons}>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={classes.projectsUI}>
            <div className={classes.project}>

                <div className={classes.project_image}>
                    <img src={ProjectImage3} alt="ProjectImage3" />
                    <a href="/">
                        {/* Repo */}
                        <img src={GitHub_image} alt="" />
                    </a>
                </div>

                <div className={classes.project_explanations}>
                    <div className={classes.project_explanation} >
                        <h1>Project3</h1>
                        <p>Explanation.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer </p>
                    </div>

                    <div className={classes.icons_container} >
                        <div className={classes.icons}>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProjectsUI