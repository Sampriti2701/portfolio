import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

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
                <motion.div 
                    className="footer-content"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="footer-brand">
                        &lt;Sampriti Ghosh /&gt;
                    </div>
                    <p className="footer-text">
                        Building intelligent systems with Full Stack Dev & ML.
                    </p>
                    <div className="footer-socials">
                        <motion.a 
                            href="https://github.com/Sampriti2701" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="GitHub"
                            whileHover={{ y: -5, color: 'var(--accent-primary)' }}
                        >
                            <Github size={20} />
                        </motion.a>
                        <motion.a 
                            href="https://www.linkedin.com/in/sampriti-g-3657663aa" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="LinkedIn"
                            whileHover={{ y: -5, color: 'var(--accent-primary)' }}
                        >
                            <Linkedin size={20} />
                        </motion.a>
                        <motion.a 
                            href="mailto:sampritighosh2701@gmail.com" 
                            aria-label="Email"
                            whileHover={{ y: -5, color: 'var(--accent-primary)' }}
                        >
                            <Mail size={20} />
                        </motion.a>
                    </div>
                </motion.div>

                <motion.div 
                    className="footer-bottom"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    <p>&copy; {currentYear} Sampriti Ghosh. All rights reserved.</p>

                    <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Scroll to top">
                        <ArrowUp size={20} />
                    </button>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
