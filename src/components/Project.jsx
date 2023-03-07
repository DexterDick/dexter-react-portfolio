import React from "react";
function Project(props) {
    return (
        <div className="project">
            {props.projects.map((project) => (
                <div>
                    <p> {project.title}</p>
                    <img src={project.img} alt="" />
                </div>
            ))}
        </div>
    );
}

export default Project;
