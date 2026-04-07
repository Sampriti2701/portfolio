import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Layers, Database, Code, Shield } from 'lucide-react';
import { useMagnetic } from '../hooks/useMagnetic';
import './Skills.css';

const SkillCategory = ({ category, idx }) => {
    const magnetic = useMagnetic(0.2);
    return (
        <motion.div
            className="skill-category"
            ref={magnetic.ref}
            animate={{ x: magnetic.x, y: magnetic.y }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.02, boxShadow: "0 15px 30px rgba(150, 123, 182, 0.15)" }}
        >
            <h3>{category.title}</h3>
            <div className="skill-list">
                {category.skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                        <div className="skill-info">
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-percentage">{skill.level}%</span>
                        </div>
                        <div className="skill-bar-bg">
                            <motion.div
                                className="skill-bar-fill"
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                            ></motion.div>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

const Skills = () => {
    const categories = [
        {
            title: "Programming Languages",
            skills: [
                { name: "Python", level: 95 },
                { name: "JavaScript", level: 90 },
                { name: "Java", level: 85 }
            ]
        },
        {
            title: "Frameworks & Libraries",
            skills: [
                { name: "FastAPI", level: 90 },
                { name: "React", level: 85 },
                { name: "TensorFlow", level: 80 },
                { name: "LangChain", level: 75 }
            ]
        },
        {
            title: "Tools & Platforms",
            skills: [
                { name: "Git & GitHub", level: 90 },
                { name: "Docker", level: 80 },
                { name: "AWS", level: 70 },
                { name: "PostgreSQL", level: 85 }
            ]
        },
        {
            title: "Core Concepts",
            skills: [
                { name: "Data Structures & Algorithms", level: 90 },
                { name: "Machine Learning", level: 85 },
                { name: "RESTful APIs", level: 90 },
                { name: "Deep Learning & NLP", level: 80 }
            ]
        }
    ];

    const floatingIcons = [
        { Icon: Terminal, top: '5%', right: '10%', delay: 0 },
        { Icon: Cpu, bottom: '10%', left: '5%', delay: 1.5 },
        { Icon: Layers, top: '50%', right: '5%', delay: 0.5 },
        { Icon: Shield, bottom: '50%', left: '2%', delay: 2 }
    ];

    const marqueeTech = [
        "Python", "React", "FastAPI", "TensorFlow", "Node.js", "Docker", "AWS", "PostgreSQL", "JavaScript", "LangChain", "OpenAI", "Git"
    ];

    return (
        <section id="skills" className="skills-section">
            {/* Background floating elements */}
            {floatingIcons.map(({ Icon, ...pos }, idx) => (
                <motion.div
                    key={idx}
                    className="floating-skill-decor"
                    style={{ position: 'absolute', opacity: 0.08, ...pos, pointerEvents: 'none' }}
                    animate={{ y: [0, -20, 0], rotate: [0, 20, 0] }}
                    transition={{ duration: 5 + idx, repeat: Infinity, ease: "easeInOut", delay: pos.delay }}
                >
                    <Icon size={40} color="var(--accent-primary)" />
                </motion.div>
            ))}

            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">My Skills</h2>
                    <div className="section-underline"></div>
                </motion.div>

                {/* Tech Marquee */}
                <div className="tech-marquee-wrapper">
                    <motion.div 
                        className="tech-marquee-content"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ 
                            duration: 20, 
                            repeat: Infinity, 
                            ease: "linear" 
                        }}
                    >
                        {[...marqueeTech, ...marqueeTech].map((tech, idx) => (
                            <div key={idx} className="marquee-item">
                                {tech}
                            </div>
                        ))}
                    </motion.div>
                </div>

                <div className="skills-grid">
                    {categories.map((category, idx) => (
                        <SkillCategory key={idx} category={category} idx={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
