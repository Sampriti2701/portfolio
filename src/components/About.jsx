import React from 'react';
import { motion } from 'framer-motion';
import { User, BookOpen, Code, Terminal } from 'lucide-react';
import './About.css';

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

                    <motion.div
                        className="about-cards"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="info-card">
                            <div className="info-icon"><User size={24} /></div>
                            <h3>Education</h3>
                            <p>B.Tech CS & IT</p>
                            <span>UEM Kolkata (2025)</span>
                        </div>

                        <div className="info-card">
                            <div className="info-icon"><Code size={24} /></div>
                            <h3>Focus</h3>
                            <p>Full Stack Dev</p>
                            <span>React, FastAPI, Node</span>
                        </div>

                        <div className="info-card">
                            <div className="info-icon"><Terminal size={24} /></div>
                            <h3>AI & Data</h3>
                            <p>Machine Learning</p>
                            <span>Deep Learning, NLP</span>
                        </div>

                        <div className="info-card">
                            <div className="info-icon"><BookOpen size={24} /></div>
                            <h3>Problem Solving</h3>
                            <p>Algorithms & DS</p>
                            <span>100+ LeetCode Solved</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
