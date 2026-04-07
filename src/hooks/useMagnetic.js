import { useRef, useState, useEffect } from 'react';

/**
 * Custom hook to add a magnetic pull effect to an element based on mouse proximity.
 */
export const useMagnetic = (strength = 0.5) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!ref.current) return;
            
            const { left, top, width, height } = ref.current.getBoundingClientRect();
            const centerX = left + width / 2;
            const centerY = top + height / 2;
            
            const distanceX = e.clientX - centerX;
            const distanceY = e.clientY - centerY;
            
            // Check if mouse is within a certain distance
            const threshold = 150;
            const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
            
            if (distance < threshold) {
                setPosition({
                    x: distanceX * strength,
                    y: distanceY * strength
                });
            } else {
                setPosition({ x: 0, y: 0 });
            }
        };

        const handleMouseLeave = () => {
            setPosition({ x: 0, y: 0 });
        };

        window.addEventListener('mousemove', handleMouseMove);
        if (ref.current) {
            ref.current.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (ref.current) {
                ref.current.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, [strength]);

    return { ref, x: position.x, y: position.y };
};
