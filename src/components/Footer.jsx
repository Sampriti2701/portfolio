import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail, Cpu, Globe, Zap } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const techStack = [
        { icon: Globe, name: 'React' },
        { icon: Zap, name: 'Framer Motion' },
        { icon: Cpu, name: 'Vite' }
    ];

    return (
        <footer className="footer-section">
            <div className="container footer-container">
                <div className="footer-top">
                    <motion.div 
                        className="footer-brand-section"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="footer-logo">
                            <span className="logo-accent">&lt;</span>
                            Sampriti Ghosh
                            <span className="logo-accent"> /&gt;</span>
                        </div>
                        <p className="footer-tagline">
                            Architecting the future with code and intelligence.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="footer-tech-stack"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="tech-title">Built with</span>
                        <div className="tech-icons">
                            {techStack.map((tech, index) => (
                                <motion.div 
                                    key={index}
                                    className="tech-item"
                                    whileHover={{ y: -5, color: 'var(--accent-primary)' }}
                                    title={tech.name}
                                >
                                    <tech.icon size={18} />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div 
                        className="footer-social-links"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="social-pill">
                            <a href="https://github.com/Sampriti2701" target="_blank" rel="noopener noreferrer">
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/sampriti-g-3657663aa" target="_blank" rel="noopener noreferrer">
                                <Linkedin size={20} />
                            </a>
                            <a href="mailto:sampritighosh2701@gmail.com">
                                <Mail size={20} />
                            </a>
                        </div>
                    </motion.div>
                </div>

                <div className="footer-separator"></div>

                <div className="footer-bottom">
                    <p className="copyright">&copy; {currentYear} Sampriti Ghosh. Developed with passion.</p>
                    
                    <motion.button 
                        onClick={scrollToTop} 
                        className="scroll-top-btn"
                        whileHover={{ scale: 1.1, backgroundColor: 'var(--accent-primary)', color: 'white' }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ArrowUp size={20} />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
