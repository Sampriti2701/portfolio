import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, CheckCircle } from 'lucide-react';
import { useMagnetic } from '../hooks/useMagnetic';
import './Contact.css';

const Contact = () => {
    const [formState, setFormState] = useState('idle'); // idle, sending, success, error
    const magneticBtn = useMagnetic(0.3);

    const [capturedData, setCapturedData] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormState('sending');
        
        const form = e.target;
        const data = new FormData(form);

        // Capture form data for mailto fallback
        const name = data.get('name');
        const email = data.get('email');
        const message = data.get('message');
        setCapturedData({ name, email, message });
        
        try {
            const response = await fetch("https://formspree.io/f/mnqkzpnp", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            const result = await response.json();

            if (response.ok) {
                setFormState('success');
                form.reset();
                setTimeout(() => setFormState('idle'), 5000);
            } else {
                console.error("Formspree Error:", result);
                setFormState('error');
            }
        } catch (error) {
            console.error("Submission Error:", error);
            setFormState('error');
        }
    };

    const getMailtoLink = () => {
        if (!capturedData) return `mailto:sampritighosh2701@gmail.com`;
        const { name, email, message } = capturedData;
        const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
        const body = encodeURIComponent(`From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        return `mailto:sampritighosh2701@gmail.com?subject=${subject}&body=${body}`;
    };

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

                            <a href="https://www.linkedin.com/in/sampriti-g-3657663aa" target="_blank" rel="noopener noreferrer" className="contact-item">
                                <div className="contact-icon"><Linkedin size={20} /></div>
                                <div>
                                    <h4>LinkedIn</h4>
                                    <span>/sampriti-g-3657663aa</span>
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
                        {formState === 'success' ? (
                            <motion.div 
                                className="success-message"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                            >
                                <CheckCircle size={60} className="success-icon" />
                                <h3>Message Sent!</h3>
                                <p>Thank you for reaching out. I'll get back to you very soon.</p>
                                <button className="btn btn-outline" onClick={() => setFormState('idle')}>Send Another</button>
                            </motion.div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" name="name" placeholder="John Doe" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email" placeholder="john@example.com" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" name="message" rows="5" placeholder="Your message..." required></textarea>
                                </div>
                                <motion.button 
                                    type="submit" 
                                    className={`btn btn-primary submit-btn ${formState === 'sending' ? 'loading' : ''}`}
                                    disabled={formState === 'sending'}
                                    ref={magneticBtn.ref}
                                    animate={{ x: magneticBtn.x, y: magneticBtn.y }}
                                >
                                    {formState === 'sending' ? 'Sending...' : (
                                        <>Send Message <Send size={18} /></>
                                    )}
                                </motion.button>
                                {formState === 'error' && (
                                    <div className="error-fallback">
                                        <p className="error-message">Oops! Something went wrong. Send directly via email instead:</p>
                                        <a href={getMailtoLink()} className="btn btn-outline mailto-btn">
                                            <Mail size={16} /> Send via Email
                                        </a>
                                    </div>
                                )}
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
