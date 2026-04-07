import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
    const [isClicking, setIsClicking] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const cursorX = useSpring(0, { damping: 20, stiffness: 300 });
    const cursorY = useSpring(0, { damping: 20, stiffness: 300 });

    useEffect(() => {
        // Only show custom cursor on devices with a mouse
        const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
        if (isTouchDevice) {
            setIsVisible(false);
            return;
        }
        setIsVisible(true);

        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleHover = () => setIsHovering(true);
        const handleUnhover = () => setIsHovering(false);
        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        
        const updateInteractiveElements = () => {
            const interactiveElements = document.querySelectorAll('a, button, input, textarea, .project-card, .cert-item, .info-card');
            interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', handleHover);
                el.addEventListener('mouseleave', handleUnhover);
            });
        };

        updateInteractiveElements();
        // Re-run the update every few seconds to catch dynamically rendered elements if any
        const interval = setInterval(updateInteractiveElements, 2000);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            clearInterval(interval);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <>
            <motion.div
                className="custom-cursor"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    width: isHovering ? 50 : 24,
                    height: isHovering ? 50 : 24,
                    backgroundColor: isHovering ? 'rgba(150, 123, 182, 0.15)' : 'transparent',
                    border: isHovering ? '1px solid rgba(150, 123, 182, 0.6)' : '1.5px solid var(--accent-primary)',
                    scale: isClicking ? 0.8 : 1,
                }}
                transition={{ type: 'spring', stiffness: 250, damping: 20 }}
            />
            <motion.div
                className="cursor-dot"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    scale: isClicking ? 1.5 : 1,
                    backgroundColor: isHovering ? 'var(--accent-primary)' : 'var(--accent-primary)',
                }}
            />
        </>
    );
};

export default CustomCursor;
