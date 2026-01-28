'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '../../components/Reveal';

const weddings = [
    {
        slug: 'faiz-manda',
        couple: 'Faiz & Manda',
        date: '14 Desember 2025',
        location: 'Cianjur', // Placeholder location
        cover: '/gallery/wedding/faiz_manda.jpeg'
    }
];

export default function WeddingGallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <main className="min-h-screen bg-[#F4F9F6] pt-32 pb-20 px-6 md:px-12">

            {/* Header */}
            <Reveal>
                <div className="flex flex-col items-center text-center mb-20">
                    <div className="flex items-center gap-4 mb-4">
                        <Link href="/gallery" className="text-xs font-sans tracking-widest text-[#083316]/40 uppercase hover:text-[#083316] transition-colors">Archive</Link>
                        <span className="text-[#083316]/20">/</span>
                        <span className="text-xs font-sans tracking-widest text-[#083316] uppercase">Wedding</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-serif italic text-[#1a4a2e]">
                        Wedding Stories
                    </h1>
                </div>
            </Reveal>

            {/* Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {weddings.map((wedding, index) => (
                    <Reveal key={wedding.slug} delay={index * 0.1} className="h-full">
                        <Link
                            href={`/gallery/wedding/${wedding.slug}`}
                            className="group relative flex flex-col bg-white p-4 pb-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 ease-out hover:-translate-y-1 rounded-sm h-full"
                        >
                            {/* Image Container */}
                            <button
                                type="button"
                                className="relative w-full overflow-hidden bg-gray-100 mb-6 rounded-sm cursor-zoom-in text-left p-0 border-0 focus:outline-none focus:ring-2 focus:ring-[#083316]/20 transition-all"
                                onClick={(e) => {
                                    e.preventDefault(); // Prevent navigation when clicking image
                                    e.stopPropagation();
                                    setSelectedImage(wedding.cover);
                                }}
                            >
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/2 transition-colors duration-500 z-10" />
                                <Image
                                    src={wedding.cover}
                                    alt={wedding.couple}
                                    width={800}
                                    height={1200}
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                {/* Zoom indicator hint */}
                                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-white/80 p-1.5 rounded-full backdrop-blur-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#083316]"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                                </div>
                            </button>

                            {/* Info */}
                            <div className="flex flex-col items-center text-center gap-2 mt-auto">
                                <h3 className="text-3xl font-serif text-[#1a4a2e] italic tracking-wide group-hover:text-[#083316] transition-colors">
                                    {wedding.couple}
                                </h3>
                                <div className="w-8 h-[1px] bg-[#083316]/20 my-1 group-hover:w-16 transition-all duration-500" />
                                <p className="text-[10px] font-sans tracking-[0.2em] text-[#083316]/60 uppercase font-medium">
                                    {wedding.location} • {wedding.date}
                                </p>
                            </div>
                        </Link>
                    </Reveal>
                ))}
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 animate-fade-in backdrop-blur-sm"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-6 right-6 p-2 text-white/70 hover:text-white transition-colors bg-white/10 rounded-full hover:bg-white/20"
                        onClick={() => setSelectedImage(null)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>

                    <div
                        className="relative w-full max-w-6xl max-h-[90vh] flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={selectedImage}
                            alt="Wedding Preview Fullscreen"
                            width={1920}
                            height={1080}
                            className="w-auto h-auto max-w-full max-h-full object-contain rounded-md shadow-2xl"
                            priority
                        />
                    </div>
                </div>
            )}

        </main>
    );
}
