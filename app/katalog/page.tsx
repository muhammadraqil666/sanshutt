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
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
                        <h1 key={`bg-text-${currentMember.name}`}
                            className="text-[40vw] md:text-[30vw] font-serif italic text-[#1a4a2e] opacity-[0.03] leading-none select-none tracking-tighter whitespace-nowrap transition-all duration-1000 rotate-[-10deg] md:rotate-0">
                            {currentMember.name}
                        </h1>
                    </div>

                    {/* 2. LAYER TENGAH: Foto Personil (Individual Fine-Tuning) */}
                    <div className="absolute inset-x-0 top-0 bottom-[25vh] md:bottom-[18vh] z-30 flex items-center justify-center pointer-events-none px-4 md:px-6">
                        <div key={`img-${currentMember.name}`} className="relative w-full h-full max-w-4xl flex items-center justify-center animate-img-fade-in">
                            <div className={`relative w-full h-[60vh] md:h-[90vh] transition-all duration-700 ease-out transform ${currentMember.name === 'Akuy'
                                ? 'scale-[0.8] md:scale-[0.85] translate-y-[4vh] md:translate-y-[8vh]'
                                : currentMember.name === 'Aking'
                                    ? 'scale-[1.1] md:scale-[1.38] -translate-y-[5vh] md:-translate-y-[18vh]'
                                    : currentMember.name === 'Iqbal'
                                        ? 'scale-110 md:scale-[1.28] -translate-y-[1vh] md:-translate-y-[3vh]'
                                        : currentMember.name === 'Ulul'
                                            ? 'scale-[0.7] md:scale-[0.85] translate-y-[5vh] md:translate-y-[12vh]'
                                            : currentMember.name === 'Sultan'
                                                ? 'scale-[0.5] md:scale-[0.6] translate-y-[6vh] md:translate-y-[12vh]'
                                                : currentMember.name === 'Faiz'
                                                    ? 'scale-[0.75] md:scale-[0.8] translate-y-[5vh] md:translate-y-[10vh]'
                                                    : currentMember.name === 'Fikri'
                                                        ? 'scale-[0.55] md:scale-[0.7] translate-y-[6vh] md:translate-y-[12vh]'
                                                        : currentMember.name === 'Fahmi'
                                                            ? 'scale-[0.65] md:scale-[0.75] translate-y-[6vh] md:translate-y-[12vh]'
                                                            : currentMember.name === 'Lutfi'
                                                                ? 'scale-90 md:scale-100 -translate-x-2 md:-translate-x-8 translate-y-[2vh]'
                                                                : currentMember.name === 'Adam'
                                                                    ? 'scale-[0.8] md:scale-[0.85] translate-y-[4vh] md:translate-y-[8vh]'
                                                                    : 'scale-90 md:scale-95 translate-y-[2vh]'
                                }`}>
                                {currentMember.image ? (
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
                                ) : (
                                    <div className="flex flex-col items-center justify-center h-full text-[#1a4a2e]/10">
                                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mb-4"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                                        <p className="font-serif italic text-sm tracking-widest opacity-40 uppercase">Photo coming soon</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Preload adjacent images for ultra-fast switching */}
                    <div className="hidden">
                        {filteredMembers[(currentIndex + 1) % filteredMembers.length]?.image && (
                            <Image
                                src={filteredMembers[(currentIndex + 1) % filteredMembers.length].image}
                                alt="preload"
                                width={1}
                                height={1}
                                priority
                            />
                        )}
                        {filteredMembers[(currentIndex - 1 + filteredMembers.length) % filteredMembers.length]?.image && (
                            <Image
                                src={filteredMembers[(currentIndex - 1 + filteredMembers.length) % filteredMembers.length].image}
                                alt="preload"
                                width={1}
                                height={1}
                                priority
                            />
                        )}
                    </div>

                    {/* 3. LAYER INFO: Positioning correctly at bottom */}
                    <div className="absolute inset-x-0 bottom-0 z-40 flex flex-col items-center pointer-events-none">
                        <div className="w-full h-[45vh] bg-gradient-to-t from-[#F4F9F6] via-[#F4F9F6]/90 to-transparent absolute bottom-0 -z-10"></div>

                        <div className="pb-12 md:pb-24 flex flex-col items-center pointer-events-auto">
                            <div className="w-8 md:w-10 h-[1px] bg-[#1a4a2e]/10 mb-6 md:mb-8"></div>
                            <div className="text-center relative px-4">
                                <div className="absolute inset-0 bg-[#F4F9F6]/20 blur-2xl -z-10"></div>
                                <h2 key={`name-fg-${currentMember.name}`}
                                    className="text-5xl md:text-8xl lg:text-[10rem] font-serif italic text-[#1a4a2e] leading-none mb-4 md:mb-6 tracking-tight">
                                    {currentMember.name}
                                </h2>
                                <div className="inline-flex items-center gap-3 md:gap-4 px-5 md:px-8 py-2 md:py-2.5 border border-[#1a4a2e]/10 rounded-full bg-white/50 backdrop-blur-md shadow-sm">
                                    <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-[#1a4a2e]/20"></span>
                                    <p className="text-[9px] md:text-[13px] font-sans text-[#083316]/50 tracking-[0.4em] md:tracking-[0.6em] uppercase font-bold">
                                        {currentMember.role}
                                    </p>
                                    <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-[#1a4a2e]/20"></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4. NAVIGASI */}
                    {filteredMembers.length > 1 && (
                        <div className="absolute inset-x-4 md:inset-x-10 bottom-[15vh] md:top-1/2 md:-translate-y-1/2 z-50 flex justify-between md:block pointer-events-none">
                            <button
                                onClick={prevMember}
                                className="w-12 h-12 md:w-20 md:h-20 md:absolute md:left-0 rounded-full border border-[#1a4a2e]/10 flex items-center justify-center text-[#1a4a2e]/20 hover:text-[#1a4a2e] hover:bg-white transition-all duration-300 pointer-events-auto bg-white/30 md:bg-white/10 backdrop-blur-sm group"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                            </button>
                            <button
                                onClick={nextMember}
                                className="w-12 h-12 md:w-20 md:h-20 md:absolute md:right-0 rounded-full border border-[#1a4a2e]/10 flex items-center justify-center text-[#1a4a2e]/20 hover:text-[#1a4a2e] hover:bg-white transition-all duration-300 pointer-events-auto bg-white/30 md:bg-white/10 backdrop-blur-sm group"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
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
                @keyframes img-fade-in {
                    from { opacity: 0; transform: scale(0.98) translateY(10px); }
                    to { opacity: 1; transform: scale(1) translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.8s ease-out forwards;
                }
                .animate-img-fade-in {
                    animation: img-fade-in 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
                }
            `}</style>
        </main>
    );
}
