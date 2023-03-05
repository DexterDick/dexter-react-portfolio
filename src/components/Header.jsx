import React, { useState } from "react";
import "../styles/Header.css";
import Navigation from "./Navigation";
import Resume from "./Resume";
import Contact from "./Contact";
import About from "./About";
import Portfolio from "./Portfolio";

function Header(props) {
    // used to track and set current page
    const [currentPage, setCurrentPage] = useState("Home");
    // redner current page base on user choice
    const renderPage = () => {
        currentPage === "About" && <About />;
        currentPage === "Contact" && <Contact />;
        currentPage === "Resume" && <Resume />;
        currentPage === "Portfolio" && <Portfolio />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <header className="header">
            <h1>Dexter's portfolio </h1>
            <Navigation
                currentPage={currentPage}
                handlePageChange={handlePageChange}
            />
            {/* used to set current page */}
            {renderPage()}
        </header>
    );
}

export default Header;
