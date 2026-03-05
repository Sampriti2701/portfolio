import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2
                        className="hero-greeting"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        Hi, I'm
                    </motion.h2>

                    <motion.h1
                        className="hero-name"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        Sampriti Ghosh
                    </motion.h1>

                    <motion.h3
                        className="hero-title"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        Full Stack Developer | Aspiring Data Scientist
                    </motion.h3>

                    <motion.p
                        className="hero-description"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        Passionate about building intelligent systems using Machine Learning, AI, and modern web technologies. I love turning complex problems into elegant, functional digital experiences.
                    </motion.p>

                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        <a href="#projects" className="btn btn-primary">
                            View My Work <ArrowRight size={18} />
                        </a>
                        <a href="/resume.pdf" download className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                            Download Resume <Download size={18} />
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-image-container"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <div className="hero-photo-wrapper">
                        <img
                            src="/profile.jpg"
                            alt="Sampriti Ghosh"
                            className="hero-photo"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "https://ui-avatars.com/api/?name=Sampriti+Ghosh&size=400&background=967bb6&color=fff";
                            }}
                        />
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <span className="mouse">
                    <span className="wheel"></span>
                </span>
            </motion.div>
        </section>
    );
};

export default Hero;
