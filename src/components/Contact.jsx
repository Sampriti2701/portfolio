import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Get In Touch</h2>
                    <div className="section-underline"></div>
                </motion.div>

                <div className="contact-content">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3>Let's Connect</h3>
                        <p>
                            I'm currently seeking new opportunities where I can apply my skills in Full Stack Development and Machine Learning. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="contact-links">
                            <a href="mailto:sampritighosh2701@gmail.com" className="contact-item">
                                <div className="contact-icon"><Mail size={20} /></div>
                                <div>
                                    <h4>Email</h4>
                                    <span>sampritighosh2701@gmail.com</span>
                                </div>
                            </a>

                            <a href="https://github.com/Sampriti2701" target="_blank" rel="noopener noreferrer" className="contact-item">
                                <div className="contact-icon"><Github size={20} /></div>
                                <div>
                                    <h4>GitHub</h4>
                                    <span>/Sampriti2701</span>
                                </div>
                            </a>

                            <a href="#" target="_blank" rel="noopener noreferrer" className="contact-item">
                                <div className="contact-icon"><Linkedin size={20} /></div>
                                <div>
                                    <h4>LinkedIn</h4>
                                    <span>/in/sampritighosh</span> {/* Assuming a standard URL structure, user can update */}
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="contact-form-container"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" placeholder="John Doe" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="john@example.com" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" rows="5" placeholder="Your message..." required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary submit-btn">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
