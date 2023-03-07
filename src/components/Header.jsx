import React from "react";
import "../styles/Header.css";
import Navigation from "./Navigation";

function Header(props) {
    return (
        <header className="header">
            <h1>
                Dexter's <span className="portfolio">portfolio</span>{" "}
            </h1>

            <Navigation
                currentPage={props.currentPage}
                handlePageChange={props.handlePageChange}
            />
        </header>
    );
}

export default Header;
