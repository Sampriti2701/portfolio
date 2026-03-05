import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
    const categories = [
        {
            title: "Programming Languages",
            skills: [
                { name: "Python", level: 90 },
                { name: "C++", level: 85 },
                { name: "JavaScript", level: 80 },
                { name: "Java", level: 75 }
            ]
        },
        {
            title: "Frameworks & Libraries",
            skills: [
                { name: "React", level: 85 },
                { name: "TensorFlow", level: 80 },
                { name: "Pandas", level: 85 },
                { name: "LangChain", level: 70 }
            ]
        },
        {
            title: "Tools & Platforms",
            skills: [
                { name: "Git & GitHub", level: 90 },
                { name: "VS Code", level: 95 },
                { name: "Jupyter Notebook", level: 90 },
                { name: "AWS", level: 65 }
            ]
        },
        {
            title: "Core Concepts",
            skills: [
                { name: "Machine Learning", level: 85 },
                { name: "Data Structures & Algorithms", level: 85 },
                { name: "Data Analytics", level: 80 },
                { name: "Deep Learning & NLP", level: 75 }
            ]
        }
    ];

    return (
        <section id="skills" className="skills-section">
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

                <div className="skills-grid">
                    {categories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            className="skill-category"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
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
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
