import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Github, ExternalLink, Folder, ChevronLeft, ChevronRight } from 'lucide-react';
import './Projects.css';

const ProjectCard = ({ project, index }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-100, 100], [15, -15]);
    const rotateY = useTransform(x, [-100, 100], [-15, 15]);

    function handleMouse(event) {
        // Disable tilt on touch devices
        const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
        if (isTouchDevice) {
            x.set(0);
            y.set(0);
            return;
        }

        const rect = event.currentTarget.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        
        event.currentTarget.style.setProperty('--mouse-x', `${mouseX}px`);
        event.currentTarget.style.setProperty('--mouse-y', `${mouseY}px`);
        
        x.set(mouseX - rect.width / 2);
        y.set(mouseY - rect.height / 2);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            className="project-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            style={{ rotateX, rotateY, perspective: 1000 }}
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
        >
            <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                    <div className="project-links">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Link">
                            <Github size={22} />
                        </a>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                            <ExternalLink size={22} />
                        </a>
                    </div>
                </div>
                <div className="project-spotlight"></div>
            </div>

            <div className="project-content">
                <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <Folder size={24} className="folder-icon" />
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-footer">
                    <ul className="tech-list">
                        {project.tech.map((tech, idx) => (
                            <li key={idx}>{tech}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const scrollRef = useRef(null);

    const projects = [
        {
            title: "Chat with Multiple PDFs",
            description: "Developed an LLM-powered application using LangChain and Google Gemini that allows users to interact with multiple PDF documents. Implemented FAISS vector embeddings for efficient semantic search across documents.",
            tech: ["LangChain", "Google Gemini", "FAISS", "Python", "Streamlit"],
            github: "https://github.com/Sampriti2701/Chat-with-pdf",
            demo: "#",
            image: `${import.meta.env.BASE_URL}projects/multi-pdf-chat.png`
        },
        {
            title: "SmartRide – Full Stack Ride Booking",
            description: "A production-ready ride booking system similar to Uber. Features JWT auth, role-based access control, and real-time ride updates using WebSockets.",
            tech: ["FastAPI", "PostgreSQL", "React", "WebSockets", "Docker"],
            github: "https://github.com/Sampriti2701/smartride-backend",
            demo: "#",
            image: `${import.meta.env.BASE_URL}projects/smartride.png`
        },
        {
            title: "Log Classification System",
            description: "An ML-powered system that automatically classifies system logs into categories like INFO, WARN, ERROR for efficient debugging and monitoring.",
            tech: ["Python", "Machine Learning", "NLP", "FastAPI"],
            github: "https://github.com/Sampriti2701/Log-Classification-System",
            demo: "#",
            image: `${import.meta.env.BASE_URL}projects/log-classification.png`
        },
        {
            title: "Potato Disease Classification",
            description: "A deep learning model that detects early blight and late blight diseases in potato plants using image classification with high accuracy.",
            tech: ["TensorFlow", "React", "FastAPI", "Docker"],
            github: "https://github.com/Sampriti2701/potato-disease",
            demo: "https://potato-disease-classifier-5ua6.onrender.com/",
            image: `${import.meta.env.BASE_URL}projects/potato-disease.png`
        }
    ];

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            const scrollAmount = current.offsetWidth * 0.8;
            current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

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
                    <h2 className="section-title">Featured Projects</h2>
                    <div className="section-underline"></div>
                </motion.div>

                <div className="carousel-wrapper">
                    <button className="carousel-btn prev" onClick={() => scroll('left')} aria-label="Previous Projects">
                        <ChevronLeft size={30} />
                    </button>

                    <div className="projects-carousel" ref={scrollRef}>
                        <div className="projects-grid-horizontal">
                            {projects.map((project, index) => (
                                <ProjectCard key={index} project={project} index={index} />
                            ))}
                        </div>
                    </div>

                    <button className="carousel-btn next" onClick={() => scroll('right')} aria-label="Next Projects">
                        <ChevronRight size={30} />
                    </button>
                </div>

                <motion.div 
                    className="view-all-container"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <a 
                        href="https://github.com/Sampriti2701?tab=repositories" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-outline view-all-btn"
                    >
                        View More Projects on GitHub <Github size={18} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
