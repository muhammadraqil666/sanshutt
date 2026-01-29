'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { HeroData } from '@/lib/data';

interface HeroProps {
    data: HeroData;
}

export default function Hero({ data }: HeroProps) {
    const { images, eyebrow, companionText, mainTitle } = data;
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="relative w-full h-[100vh] min-h-[700px] flex flex-col items-center justify-center overflow-hidden bg-[#F4F9F6] bg-noise">

            {/* Background Slider - More visible for depth */}
            <div className="absolute inset-0 z-0 opacity-80 mix-blend-multiply">
                {images.map((src, index) => (
                    <div
                        key={src}
                        className={`absolute inset-0 transition-opacity duration-[3000ms] ease-in-out ${index === currentImage ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <Image
                            src={src}
                            alt="Background Texture"
                            fill
                            className="object-cover animate-slow-pan grayscale-[40%]"
                            priority={index === 0}
                        />
                    </div>
                ))}
            </div>

            {/* Vignette Overlay: Focus center, darker edges */}
            <div className="absolute inset-0 z-1 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4)_0%,rgba(244,249,246,0.95)_70%)]" />

            {/* Content */}
            <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center px-4 -mt-8">

                {/* Top Eyebrow */}
                <div className="flex items-center gap-4 animate-fade-in-down mb-8 opacity-80">
                    <div className="w-8 h-[1px] bg-[#083316]/30"></div>
                    <p className="text-[10px] md:text-xs font-semibold tracking-[0.3em] text-[#083316] uppercase font-sans">
                        {eyebrow}
                    </p>
                    <div className="w-8 h-[1px] bg-[#083316]/30"></div>
                </div>

                {/* Companion Text */}
                <div className="animate-fade-in-up z-20 relative translate-y-4 px-6" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
                    <span className="text-lg md:text-2xl font-serif italic text-[#1a4a2e] font-medium tracking-wide">
                        {companionText}
                    </span>
                </div>

                {/* Main Title - Curved Text (SVG) */}
                <div className="relative w-full max-w-4xl h-24 md:h-44 animate-fade-in-up flex items-center justify-center -mt-2 md:-mt-4" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
                    <svg viewBox="0 0 500 120" className="w-[110%] md:w-full h-full overflow-visible drop-shadow-2xl">
                        {/* Stronger, more intentional curve */}
                        <path id="curve" d="M 40,110 Q 250,75 460,110" fill="transparent" />
                        <text className="fill-[#083316]" textAnchor="middle">
                            <textPath
                                href="#curve"
                                startOffset="50%"
                                className="font-sans font-black text-[15vw] md:text-[96px] uppercase tracking-tighter"
                                style={{ fontFamily: 'var(--font-inter)' }}
                            >
                                {mainTitle}
                            </textPath>
                        </text>
                    </svg>
                </div>

            </div>
        </section>
    );
}
