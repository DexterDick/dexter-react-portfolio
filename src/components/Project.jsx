import React from "react";
import projectData from "../utils/projectData";
function Project(props) {
    return (
        <div className="project">
            {projectData.map((project) => (
                <>
                    {console.log(project)}
                    <div>
                        <p> {project.title}</p>
                        <img src={project.img} alt="" />
                        <div class="highlight-text">
                            <div>
                                <a href={project.deployed} target="_blank">
                                    Deployed application
                                </a>
                            </div>
                            <div>
                                <a href={project.repo} target="_blank">
                                    GitHub repository
                                </a>
                            </div>
                        </div>
                    </div>
                </>
            ))}
        </div>
    );
}

export default Project;
