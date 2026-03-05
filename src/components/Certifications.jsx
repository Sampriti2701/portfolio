import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
    const certs = [
        {
            title: "Google Data Analytics Professional Certificate",
            issuer: "Google"
        },
        {
            title: "Generative AI with Large Language Models",
            issuer: "DeepLearning.AI & AWS"
        },
        {
            title: "HackerRank Software Engineer Certification",
            issuer: "HackerRank"
        }
    ];

    const achievements = [
        {
            title: "100+ problems solved on LeetCode"
        },
        {
            title: "5-star Python badge on HackerRank"
        }
    ];

    return (
        <section id="certifications" className="certifications-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Certifications & Achievements</h2>
                    <div className="section-underline"></div>
                </motion.div>

                <div className="cert-achieve-grid">
                    <motion.div
                        className="certifications-list"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3><Award className="heading-icon" /> Certifications</h3>
                        <div className="items-container">
                            {certs.map((cert, index) => (
                                <div key={index} className="cert-item">
                                    <div className="cert-icon-wrap">
                                        <Award size={20} />
                                    </div>
                                    <div className="cert-details">
                                        <h4>{cert.title}</h4>
                                        <span className="cert-issuer">{cert.issuer}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="achievements-list"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3><Star className="heading-icon" /> Achievements</h3>
                        <div className="items-container">
                            {achievements.map((ach, index) => (
                                <div key={index} className="cert-item achievement-item">
                                    <div className="cert-icon-wrap achievement-icon-wrap">
                                        <Star size={20} />
                                    </div>
                                    <div className="cert-details">
                                        <h4>{ach.title}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
