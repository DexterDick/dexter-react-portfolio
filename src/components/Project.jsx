import React from "react";
function Project(props) {
    return (
        <div>
            {props.projects.map((project) => (
                <p> {project.title}</p>
            ))}
        </div>
    );
}

export default Project;
