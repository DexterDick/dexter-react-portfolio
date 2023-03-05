import React, { useState } from "react";
import Navigation from "./Navigation";

import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./Footer";

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState("Home");

    // Check current page change bases on user choice.
    const renderPage = () => {
        if (currentPage === "Portfolio") return <Portfolio />;
        if (currentPage === "About") return <About />;
        if (currentPage === "Resume") return <Resume />;
        if (currentPage === "Contact") return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            {/*pass props to Navigigation to track current page */}
            <Navigation
                currentPage={currentPage}
                handlePageChange={handlePageChange}
            />
            {/*render page content on the screen */}
            <main>{renderPage()}</main>

            <Footer />
        </div>
    );
}
