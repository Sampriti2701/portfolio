import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Code, Sparkles, Brain, Database } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { useMagnetic } from '../hooks/useMagnetic';
import './Hero.css';

const Hero = () => {
    const workBtn = useMagnetic(0.3);
    const resumeBtn = useMagnetic(0.3);

    const floatingIcons = [
        { Icon: Code, top: '15%', left: '10%', delay: 0 },
        { Icon: Brain, top: '25%', right: '15%', delay: 1 },
        { Icon: Sparkles, bottom: '20%', left: '15%', delay: 2 },
        { Icon: Database, bottom: '30%', right: '10%', delay: 1.5 }
    ];

    return (
        <section id="home" className="hero-section">
            {/* Animated Background Blobs */}
            <div className="blob-container">
                <motion.div 
                    className="blob blob-1"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 70%", "60% 40% 30% 70% / 60% 30% 70% 40%"]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                    className="blob blob-2"
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -120, 0],
                        borderRadius: ["50% 50% 30% 70% / 50% 70% 30% 50%", "30% 70% 70% 30% / 50% 30% 70% 50%"]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            {/* Floating Parallax Icons */}
            {floatingIcons.map(({ Icon, ...pos }, index) => (
                <motion.div
                    key={index}
                    className="floating-icon-wrap"
                    style={{ position: 'absolute', ...pos }}
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 10, -10, 0]
                    }}
                    transition={{
                        duration: 5 + index,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: pos.delay
                    }}
                >
                    <Icon size={32} className="floating-icon" />
                </motion.div>
            ))}

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
                        Welcome, I'm
                    </motion.h2>

                    <motion.h1
                        className="hero-name"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        Sampriti Ghosh
                    </motion.h1>

                    <motion.div
                        className="hero-typing-container"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <h3 className="hero-title">
                            <TypeAnimation
                                sequence={[
                                    'Full Stack Developer (2025 Graduate)',
                                    3000,
                                    'Backend Engineering Specialist',
                                    2500,
                                    'Data Scientist & ML Enthusiast',
                                    2500,
                                    'Building Scalable AI Solutions',
                                    2500
                                ]}
                                wrapper="span"
                                speed={40}
                                repeat={Infinity}
                            />
                        </h3>
                    </motion.div>

                    <motion.p
                        className="hero-description"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        I specialize in building production-ready applications with FastAPI, PostgreSQL, and React. Passionate about creating intelligent systems that solve real-world problems through clean code and robust architecture.
                    </motion.p>

                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        <motion.a 
                            href="#projects" 
                            className="btn btn-primary"
                            ref={workBtn.ref}
                            animate={{ x: workBtn.x, y: workBtn.y }}
                        >
                            View My Work <ArrowRight size={18} />
                        </motion.a>
                        <motion.a 
                            href={`${import.meta.env.BASE_URL}resume.pdf`} 
                            download 
                            className="btn btn-outline" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            ref={resumeBtn.ref}
                            animate={{ x: resumeBtn.x, y: resumeBtn.y }}
                        >
                            Download Resume <Download size={18} />
                        </motion.a>
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
                            src={`${import.meta.env.BASE_URL}profile.jpg`}
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
                whileHover={{ scale: 1.2 }}
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
       