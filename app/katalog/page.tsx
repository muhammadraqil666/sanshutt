'use client';

import { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import { siteData } from '@/lib/data';

export default function Katalog() {
    const { teamMembers } = siteData.katalog;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');

    // Filter members based on search query
    const filteredMembers = useMemo(() => {
        return teamMembers.filter(member =>
            member.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [teamMembers, searchQuery]);

    // Handle search event from Navbar
    useEffect(() => {
        const handleSearch = (e: Event) => {
            const customEvent = e as CustomEvent;
            setSearchQuery(customEvent.detail || '');
            setCurrentIndex(0); // Reset index directly here
        };
        window.addEventListener('nav-search', handleSearch);
        return () => window.removeEventListener('nav-search', handleSearch);
    }, []);

    const nextMember = () => {
        if (filteredMembers.length === 0) return;
        setCurrentIndex((prev) => (prev + 1) % filteredMembers.length);
    };

    const prevMember = () => {
        if (filteredMembers.length === 0) return;
        setCurrentIndex((prev) => (prev - 1 + filteredMembers.length) % filteredMembers.length);
    };

    const currentMember = filteredMembers[currentIndex];

    return (
        <main className="h-screen w-full bg-[#F4F9F6] relative overflow-hidden flex items-center justify-center">

            {filteredMembers.length > 0 ? (
                <>
                    {/* 1. LAYER PALING BELAKANG: Nama Watermark Raksasa */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                        <h1 key={`bg-text-${currentMember.name}`}
                            className="text-[30vw] font-serif italic text-[#1a4a2e] opacity-[0.02] leading-none select-none tracking-tighter whitespace-nowrap transition-all duration-1000">
                            {currentMember.name}
                        </h1>
                    </div>

                    {/* 2. LAYER TENGAH: Foto Personil (Individual Fine-Tuning) */}
                    <div className="absolute inset-x-0 top-0 bottom-[18vh] z-30 flex items-center justify-center pointer-events-none px-6">
                        <div key={`img-${currentMember.name}`} className="relative w-full h-full max-w-4xl flex items-center justify-center">
                            <div className={`relative w-full h-[75vh] md:h-[90vh] transition-all duration-700 ease-out transform ${currentMember.name === 'Aking'
                                ? 'scale-125 md:scale-[1.38] -translate-y-[15vh] md:-translate-y-[18vh]'
                                : currentMember.name === 'Iqbal'
                                    ? 'scale-115 md:scale-[1.28] -translate-y-[2vh] md:-translate-y-[3vh]'
                                    : currentMember.name === 'Ulul'
                                        ? 'scale-[0.5] md:scale-[0.6] translate-y-[12vh] md:translate-y-[16vh]'
                                        : currentMember.name === 'Sultan'
                                            ? 'scale-[0.6] md:scale-[0.7] translate-y-[8vh] md:translate-y-[12vh]'
                                            : currentMember.name === 'Fikri'
                                                ? 'scale-[0.65] md:scale-[0.75] translate-y-[8vh] md:translate-y-[12vh]'
                                                : currentMember.name === 'Fahmi'
                                                    ? 'scale-[0.75] md:scale-[0.85] translate-y-[8vh] md:translate-y-[12vh]'
                                                    : currentMember.name === 'Lutfi'
                                                        ? 'scale-100 md:scale-105 -translate-x-4 md:-translate-x-8 translate-y-0'
                                                        : 'scale-100 md:scale-105 translate-y-0'
                                }`}>
                                <Image
                                    src={currentMember.image}
                                    alt={currentMember.name}
                                    fill
                                    className="object-contain object-center"
                                    style={{
                                        filter: 'drop-shadow(0px 30px 50px rgba(0,0,0,0.08))',
                                    }}
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* 3. LAYER INFO: Positioning correctly at bottom */}
                    <div className="absolute inset-x-0 bottom-0 z-40 flex flex-col items-center pointer-events-none">
                        <div className="w-full h-[45vh] bg-gradient-to-t from-[#F4F9F6] via-[#F4F9F6]/90 to-transparent absolute bottom-0 -z-10"></div>

                        <div className="pb-16 md:pb-24 flex flex-col items-center pointer-events-auto">
                            <div className="w-10 h-[1px] bg-[#1a4a2e]/10 mb-8"></div>
                            <div className="text-center relative">
                                <div className="absolute inset-0 bg-[#F4F9F6]/20 blur-2xl -z-10"></div>
                                <h2 key={`name-fg-${currentMember.name}`}
                                    className="text-7xl md:text-8xl lg:text-[10rem] font-serif italic text-[#1a4a2e] leading-none mb-6">
                                    {currentMember.name}
                                </h2>
                                <div className="inline-flex items-center gap-4 px-8 py-2.5 border border-[#1a4a2e]/10 rounded-full bg-white/50 backdrop-blur-md shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#1a4a2e]/20"></span>
                                    <p className="text-[10px] md:text-[13px] font-sans text-[#083316]/50 tracking-[0.6em] uppercase font-bold">
                                        {currentMember.role}
                                    </p>
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#1a4a2e]/20"></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4. NAVIGASI */}
                    {filteredMembers.length > 1 && (
                        <div className="absolute inset-x-4 md:inset-x-10 top-1/2 -translate-y-1/2 z-50 flex justify-between pointer-events-none">
                            <button
                                onClick={prevMember}
                                className="w-14 h-14 md:w-20 md:h-20 rounded-full border border-[#1a4a2e]/10 flex items-center justify-center text-[#1a4a2e]/20 hover:text-[#1a4a2e] hover:bg-white transition-all duration-300 pointer-events-auto bg-white/10 backdrop-blur-sm group"
                            >
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                            </button>
                            <button
                                onClick={nextMember}
                                className="w-14 h-14 md:w-20 md:h-20 rounded-full border border-[#1a4a2e]/10 flex items-center justify-center text-[#1a4a2e]/20 hover:text-[#1a4a2e] hover:bg-white transition-all duration-300 pointer-events-auto bg-white/10 backdrop-blur-sm group"
                            >
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                            </button>
                        </div>
                    )}

                    {/* 5. FOOTER CONTROLS */}
                    <div className="absolute bottom-8 left-0 right-0 z-50 flex flex-col items-center gap-5">
                        <div className="flex items-center gap-3">
                            {filteredMembers.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`h-[2px] rounded-full transition-all duration-700 pointer-events-auto ${idx === currentIndex ? 'w-10 bg-[#1a4a2e]/40' : 'w-2 bg-[#1a4a2e]/10'}`}
                                ></button>
                            ))}
                        </div>
                        <button onClick={() => window.location.href = '/'} className="text-[10px] font-sans text-[#083316]/30 tracking-[0.5em] uppercase hover:text-[#1a4a2e] transition-colors flex items-center gap-3">
                            <span className="w-6 h-[1px] bg-[#1a4a2e]/10"></span>
                            Archive
                            <span className="w-6 h-[1px] bg-[#1a4a2e]/10"></span>
                        </button>
                    </div>
                </>
            ) : (
                <div className="flex flex-col items-center gap-6 animate-fade-in">
                    <p className="font-serif italic text-2xl text-[#1a4a2e]/40">No members found matching &quot;{searchQuery}&quot;</p>
                    <button
                        onClick={() => setSearchQuery('')}
                        className="text-[10px] font-sans text-[#1a4a2e]/60 tracking-[0.4em] uppercase border border-[#1a4a2e]/10 px-8 py-3 rounded-full hover:bg-white transition-all"
                    >
                        Clear Search
                    </button>
                </div>
            )}

            <style jsx global>{`
                body {
                    background-color: #F4F9F6;
                    overflow: hidden;
                    margin: 0;
                }
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.8s ease-out forwards;
                }
            `}</style>
        </main>
    );
}
