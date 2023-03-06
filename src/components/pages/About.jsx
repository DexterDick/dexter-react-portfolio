import React from "react";
import Dexter from "../../assets/Dexter.jpg";
function About() {
    return (
        <div>
            <h3>About page</h3>
            <img src={Dexter} alt="Dexter Dick" />
            <p>
                Hi, I’m Dexter! I’m a Full stack web developer with broad skills
                and experience in HTML, CSS, JavaScript, Node.js, React, SQL,
                MongoDB, and Express. I have a passion for creating beautiful
                and functional websites that meet the needs of my clients. I’m
                currently enrolled in UofT coding Bootcamp to further develop my
                coding skills with the goal of obtaining a full stack developer
                position after graduation. In my spare time, I enjoy coding,
                reading, exercising, and spending time with friends and family.
                If you’re looking for a talented and hardworking web developer,
                you can reach me at dexterdick@hotmail.com.
            </p>
        </div>
    );
}

export default About;
