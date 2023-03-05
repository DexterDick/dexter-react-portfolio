import React from "react";
import "../styles/Navigation.css";

function Navigation({ currentPage, handlePageChange }) {
    return (
        <nav>
            <ul>
                <li>
                    <a href="#about" onClick={() => handlePageChange("About")}>
                        About Me
                    </a>
                </li>
                <li>
                    <a href="#/" onClick={() => handlePageChange("Portfolio")}>
                        Portfolio
                    </a>
                </li>
                <li>
                    <a href="#/" onClick={() => handlePageChange("Contact")}>
                        Contact
                    </a>
                </li>
                <li>
                    <a href="#/" onClick={() => handlePageChange("Resume")}>
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
