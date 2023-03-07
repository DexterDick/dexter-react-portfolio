import React from "react";
import resume from "../../document/Dexter's Job resume.doc";
function Resume() {
    return (
        <section className="page">
            <h3>My Resume</h3>
            <a href={resume} alt="resume dowload">
                Resume
            </a>

            <h4>Front-End Skills</h4>
            <ul>
                <li>
                    <li>JavaScript</li>
                    <li>CSS</li>
                    <li>jQuery</li>
                    <li>HTML5</li>
                    <li>Bootstrap</li>
                    <li>React</li>
                </li>
            </ul>
            <h4>Back-End Skills</h4>
            <ul>
                <li>NodeJS</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>MySQL</li>
                <li>Progressive Web Applications (PWA)</li>
                <li>Model View Controller (MVC)</li>
            </ul>
            <h4>Developer tools</h4>
            <ul>
                <li>Node Package Manager (npm)</li>
                <li>Sass</li>
                <li>Visual Studio Code</li>
                <li>Chrome Developer Tools</li>
                <li>GitHub</li>
            </ul>
        </section>
    );
}

export default Resume;
