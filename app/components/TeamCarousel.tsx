'use client';

import { useState } from 'react';
import Image from 'next/image';
import { TeamMember } from '@/lib/data';

interface TeamCarouselProps {
    members: TeamMember[];
}

export default function TeamCarousel({ members }: TeamCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? members.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === members.length - 1 ? 0 : prev + 1));
    };

    if (members.length === 0) return null;

    const currentMember = members[currentIndex];

    return (
        <div className="relative w-full max-w-sm mx-auto">
            {/* Card Container - Glassmorphism style */}
            <div className="relative bg-white/40 backdrop-blur-md rounded-2xl shadow-[0_8px_32px_0_rgba(8,51,22,0.08)] border border-white/20 p-6 overflow-hidden transition-all duration-500 hover:shadow-[0_8px_40px_0_rgba(8,51,22,0.12)] min-h-[500px] flex flex-col justify-between">

                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#1a4a2e]/5 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#1a4a2e]/5 rounded-full blur-3xl pointer-events-none"></div>

                {/* Person Image Container */}
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl bg-[#EAF3ED]/50 mb-6">
                    <Image
                        src={currentMember.image}
                        alt={currentMember.name}
                        fill
                        className="object-contain object-bottom transition-all duration-700 hover:scale-105"
                        style={{
                            filter: 'drop-shadow(0px 10px 20px rgba(0,0,0,0.15))'
                        }}
                        priority
                    />

                    {/* Artistic gradient to blend bottom of person into card */}
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/40 to-transparent z-10"></div>
                </div>

                {/* Member Info */}
                <div className="relative z-20 text-center mb-4">
                    <h3 className="text-2xl font-serif italic text-[#1a4a2e] mb-1">
                        {currentMember.name}
                    </h3>
                    <p className="text-[10px] font-sans tracking-[0.3em] text-[#083316]/40 uppercase font-bold">
                        {currentMember.role}
                    </p>
                </div>

                {/* Premium Navigation Controls */}
                {members.length > 1 && (
                    <div className="flex justify-between items-center px-2 z-30">
                        <button
                            onClick={goToPrevious}
                            className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-[#083316]/5 flex items-center justify-center text-[#083316]/60 hover:bg-[#083316] hover:text-white transition-all duration-500 shadow-sm group"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-0.5 transition-transform"><polyline points="15 18 9 12 15 6"></polyline></svg>
                        </button>

                        {/* Pagination Dots - Minimalist */}
                        <div className="flex justify-center gap-1.5 px-4">
                            {members.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`h-1 transition-all duration-500 rounded-full ${index === currentIndex
                                            ? 'bg-[#083316] w-6'
                                            : 'bg-[#083316]/10 w-2 hover:bg-[#083316]/20'
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={goToNext}
                            className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-[#083316]/5 flex items-center justify-center text-[#083316]/60 hover:bg-[#083316] hover:text-white transition-all duration-500 shadow-sm group"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
