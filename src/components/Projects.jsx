import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "Potato Disease Classification System",
            description: "A deep learning model that detects early blight and late blight diseases in potato plants using image classification.",
            tech: ["TensorFlow", "FastAPI", "React", "Docker"],
            github: "#", // User to add actual link later
            demo: "#"
        },
        {
            title: "Chat with Multiple PDFs",
            description: "An LLM-powered application that allows users to interact with multiple PDF documents using natural language queries.",
            tech: ["LangChain", "FAISS", "Google Gemini Pro", "Streamlit"],
            github: "#",
            demo: "#"
        },
        {
            title: "Log Classification System",
            description: "A machine learning system that automatically classifies system logs into categories for easier monitoring and debugging.",
            tech: ["Python", "Machine Learning", "NLP"],
            github: "#",
            demo: "#"
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Projects</h2>
                    <div className="section-underline"></div>
                </motion.div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                        >
                            <div className="project-header">
                                <Folder size={40} className="folder-icon" />
                                <div className="project-links">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Link">
                                        <Github size={20} />
                                    </a>
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <div className="project-body">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                            </div>

                            <div className="project-footer">
                                <ul className="tech-list">
                                    {project.tech.map((tech, idx) => (
                                        <li key={idx}>{tech}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
