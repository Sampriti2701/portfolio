import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, ExternalLink, Laptop, Github, Trophy, GraduationCap } from 'lucide-react';
import { useMagnetic } from '../hooks/useMagnetic';
import './Certifications.css';

const AchievementCard = ({ ach }) => {
    const magnetic = useMagnetic(0.2);
    return (
        <motion.div 
            className="cert-item achievement-item"
            ref={magnetic.ref}
            animate={{ x: magnetic.x, y: magnetic.y }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(150, 123, 182, 0.15)" }}
        >
            <div className="cert-icon-wrap achievement-icon-wrap">
                <Star size={20} />
            </div>
            <div className="cert-details">
                <h4>
                    {ach.link ? (
                        <a href={ach.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                            {ach.title} <ExternalLink size={14} className="inline-icon" />
                        </a>
                    ) : (
                        ach.title
                    )}
                </h4>
            </div>
        </motion.div>
    );
};

const Certifications = () => {
    const certs = [
        {
            title: "Software Engineer Certificate",
            issuer: "HackerRank",
            link: "https://www.hackerrank.com/certificates/52256bce7035"
        },
        {
            title: "Python (Basic) Certificate",
            issuer: "HackerRank",
            link: "https://www.hackerrank.com/certificates/ccdc0e39e90a"
        },
        {
            title: "Generative AI with LLMs",
            issuer: "DeepLearning.AI & AWS",
            link: "https://www.coursera.org/account/accomplishments/verify/..."
        }
    ];

    const achievements = [
        {
            title: "LeetCode Profile",
            link: "https://leetcode.com/u/sampritighosh2701/"
        },
        {
            title: "5-star Python badge on HackerRank",
            link: "https://www.hackerrank.com/profile/Sampriti2701"
        }
    ];

    const floatingIcons = [
        { Icon: Star, top: '10%', left: '5%', delay: 0 },
        { Icon: Trophy, bottom: '15%', right: '8%', delay: 1 }
    ];

    return (
        <section id="certifications" className="certifications-section">
             {/* Background floating elements */}
             {floatingIcons.map(({ Icon, ...pos }, idx) => (
                <motion.div
                    key={idx}
                    className="floating-decor"
                    style={{ position: 'absolute', opacity: 0.1, ...pos, pointerEvents: 'none' }}
                    animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
                    transition={{ duration: 4 + idx, repeat: Infinity, ease: "easeInOut", delay: pos.delay }}
                >
                    <Icon size={48} color="var(--accent-primary)" />
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
                        <h3><GraduationCap className="heading-icon" /> Certifications</h3>
                        <div className="items-container">
                            {certs.map((cert, index) => (
                                <motion.div 
                                    key={index} 
                                    className="cert-item"
                                    whileHover={{ x: 10, backgroundColor: 'var(--accent-secondary)' }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="cert-icon-wrap">
                                        <Award size={20} />
                                    </div>
                                    <div className="cert-details">
                                        <h4>
                                            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                                                {cert.title} <ExternalLink size={14} className="inline-icon" />
                                            </a>
                                        </h4>
                                        <span className="cert-issuer">{cert.issuer}</span>
                                    </div>
                                </motion.div>
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
                                <AchievementCard key={index} ach={ach} />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
