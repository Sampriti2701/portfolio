import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, Terminal, GraduationCap } from 'lucide-react';
import { useMagnetic } from '../hooks/useMagnetic';
import './About.css';

// Import assets
import educationImg from '../assets/about/education_about.png';
import dsAlgoImg from '../assets/about/ds_algo_about.png';
import fullstackImg from '../assets/about/fullstack_about.jpg';
import mlImg from '../assets/about/ml_about.jpg';

const PillarCard = ({ icon: Icon, title, subtitle, description, image, delay, theme }) => {
    const magnetic = useMagnetic(0.15);
    
    return (
        <motion.div
            className={`pillar-card ${theme}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.6 }}
            ref={magnetic.ref}
            animate={{ x: magnetic.x, y: magnetic.y }}
            whileHover={{ y: -10 }}
        >
            <div className="pillar-visual">
                {image ? (
                    <img src={image} alt={title} className="pillar-image" />
                ) : (
                    <div className="pillar-icon-placeholder">
                        <Icon size={40} />
                    </div>
                )}
                <div className="pillar-icon-badge">
                    <Icon size={20} />
                </div>
            </div>
            <div className="pillar-info">
                <h3>{title}</h3>
                <h4>{subtitle}</h4>
                <p>{description}</p>
            </div>
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
                    <p className="section-subtitle">Fueling innovation through code and intelligence.</p>
                    <div className="section-underline"></div>
                </motion.div>

                <div className="about-content">
                    <motion.div
                        className="about-summary"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="lead">
                            I am <strong>Sampriti Ghosh</strong>, a dedicated 2025 Computer Science & IT graduate from UEM Kolkata, driven by a passion for creating impactful digital solutions.
                        </p>
                        <p>
                            My journey is defined by a blend of architectural precision in Full Stack development and the cognitive depth of Machine Learning. I thrive on solving complex problems and turning abstract ideas into scalable, production-ready systems.
                        </p>
                    </motion.div>

                    <div className="pillars-grid">
                        <PillarCard 
                            icon={GraduationCap} 
                            title="Education" 
                            subtitle="B.Tech CS & IT" 
                            description="University of Engineering & Management, Kolkata. Class of 2025. Focused on Core Engineering & AI."
                            image={educationImg}
                            theme="pillar-purple"
                            delay={0.1}
                        />
                        <PillarCard 
                            icon={Terminal} 
                            title="Machine Learning" 
                            subtitle="AI & Intelligence" 
                            description="Expertise in Deep Learning, NLP, and Predictive Modeling. Passionate about LLMs and Data Science."
                            image={mlImg}
                            theme="pillar-cyan"
                            delay={0.2}
                        />
                        <PillarCard 
                            icon={Code} 
                            title="Full Stack Dev" 
                            subtitle="Scalable Web Apps" 
                            description="Proficient in React, Node.js, and FastAPI. Experience building robust, high-performance web systems."
                            image={fullstackImg}
                            theme="pillar-blue"
                            delay={0.3}
                        />
                        <PillarCard 
                            icon={BookOpen} 
                            title="Problem Solving" 
                            subtitle="DS & Algorithms" 
                            description="Strong foundation in complex algorithms. 100+ LeetCode problems solved across diverse categories."
                            image={dsAlgoImg}
                            theme="pillar-lavender"
                            delay={0.4}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
