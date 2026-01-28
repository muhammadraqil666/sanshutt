'use client';

import { useEffect, useRef, useState } from 'react';

interface RevealProps {
    children: React.ReactNode;
    className?: string; // Allow merging classes
    delay?: number; // Delay in seconds
    threshold?: number; // Intersection threshold
}

export default function Reveal({ children, className = "", delay = 0, threshold = 0.1 }: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Only animate once
                }
            },
            {
                threshold: threshold,
                rootMargin: "0px 0px -50px 0px"
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [threshold]);

    return (
        <div
            ref={ref}
            className={`${className} ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}
            style={{ animationDelay: `${delay}s`, animationFillMode: 'both' }}
        >
            {children}
        </div>
    );
}
