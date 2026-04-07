import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import './SocialSidebar.css';

const SocialSidebar = () => {
    const socials = [
        { Icon: Github, href: "https://github.com/Sampriti2701", label: "GitHub" },
        { Icon: Linkedin, href: "https://www.linkedin.com/in/sampriti-g-3657663aa", label: "LinkedIn" },
        { Icon: Mail, href: "mailto:sampritighosh2701@gmail.com", label: "Email" }
    ];

    return (
        <div className="social-sidebar-container">
            <motion.div 
                className="social-sidebar"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
            >
                {socials.map(({ Icon, href, label }, index) => (
                    <motion.a
                        key={index}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-sidebar-link"
                        aria-label={label}
                        whileHover={{ x: 5, color: 'var(--accent-primary)' }}
                    >
                        <Icon size={22} />
                        <span className="social-label">{label}</span>
                    </motion.a>
                ))}
                <div className="social-line"></div>
            </motion.div>
        </div>
    );
};

export default SocialSidebar;
