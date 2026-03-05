import React from 'react';
import './Footer.css';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="footer-section">
            <div className="container footer-container">
                <div className="footer-content">
                    <div className="footer-brand">
                        &lt;Sampriti Ghosh /&gt;
                    </div>
                    <p className="footer-text">
                        Built with React, Vite & Framer Motion.
                    </p>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Sampriti Ghosh. All rights reserved.</p>

                    <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Scroll to top">
                        <ArrowUp size={20} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
