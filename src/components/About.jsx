import React from 'react';
import { motion } from 'framer-motion';
import { User, BookOpen, Code, Terminal } from 'lucide-react';
import { useMagnetic } from '../hooks/useMagnetic';
import './About.css';

const InfoCard = ({ icon: Icon, title, subtitle, label, delay }) => {
    const magnetic = useMagnetic(0.2);
    
    return (
        <motion.div
            className="info-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            ref={magnetic.ref}
            animate={{ x: magnetic.x, y: magnetic.y }}
            whileHover={{ 
                scale: 1.05, 
                rotateX: -5, 
                rotateY: 5,
                boxShadow: "0 20px 40px rgba(150, 123, 182, 0.2)"
            }}
            style={{ perspective: 1000 }}
        >
            <div className="info-icon"><Icon size={24} /></div>
            <h3>{title}</h3>
            <p>{subtitle}</p>
            <span>{label}</span>
        </motion.div>
    );
};

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">About Me</h2>
                    <div className="section-underline"></div>
                </motion.div>

                <div className="about-content">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="lead">
                            I am Sampriti Ghosh, a 2025 passout B.Tech student in Computer Science & Information Technology from UEM Kolkata.
                        </p>
                        <p>
                            I enjoy building AI-powered applications and full-stack web systems. My journey in tech has been driven by a deep curiosity about how intelligent systems can solve real-world problems and improve human experiences.
                        </p>
                        <p>
                            My core interests include <strong>Machine Learning, Deep Learning, NLP, and modern web development</strong>. I thrive in challenging environments where I can leverage my skills to create robust, scalable, and intuitive software solutions.
                        </p>
                    </motion.div>

                    <div className="about-cards-container">
                        <div className="about-cards">
                            <InfoCard 
                                icon={User} 
                                title="Education" 
                                subtitle="B.Tech CS & IT" 
                                label="UEM Kolkata (2025)" 
                                delay={0.1}
                            />
                            <InfoCard 
                                icon={Code} 
                                title="Focus" 
                                subtitle="Full Stack Dev" 
                                label="React, FastAPI, Node" 
                                delay={0.2}
                            />
                            <InfoCard 
                                icon={Terminal} 
                                title="AI & Data" 
                                subtitle="Machine Learning" 
                                label="Deep Learning, NLP" 
                                delay={0.3}
                            />
                            <InfoCard 
                                icon={BookOpen} 
                                title="Problem Solving" 
                                subtitle="Algorithms & DS" 
                                label="100+ LeetCode Solved" 
                                delay={0.4}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
