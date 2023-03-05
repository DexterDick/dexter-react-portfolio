import React from "react";
import "../styles/Header.css";
import Navigation from "./Navigation";

function Header(props) {
    return (
        <header className="header">
            <h1>Dexter's portfolio </h1>

            <Navigation />
        </header>
    );
}

export default Header;
