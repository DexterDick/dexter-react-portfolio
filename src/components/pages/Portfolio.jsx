import React from "react";
import projectData from "../../utils/projectData";
import Project from "../Project";
import "../../styles/portfolio.css";
function Portfolio() {
    return (
        <section className="page">
            <h3>Portfolio page</h3>
            <div className="portfolio-grid">
                <Project />
            </div>
        </section>
    );
}

export default Portfolio;
