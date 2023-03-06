import React from "react";
import projectData from "../../utils/projectData";
import Project from "../Project";
function Portfolio() {
    return (
        <section>
            <h3>Portfolio page</h3>;<div className="portfolio-grid"></div>
            <Project projects={projectData} />
        </section>
    );
}

export default Portfolio;
