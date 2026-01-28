'use client';

import Image from 'next/image';
import Link from 'next/link';

const weddings = [
    {
        slug: 'faiz-manda',
        couple: 'Faiz & Manda',
        date: '2024', // Placeholder date
        location: 'Jakarta', // Placeholder location
        cover: '/gallery/wedding/faiz_manda.jpeg'
    }
];

export default function WeddingGallery() {
    return (
        <main className="min-h-screen bg-[#F4F9F6] pt-32 pb-20 px-6 md:px-12">

            {/* Header */}
            <div className="flex flex-col items-center text-center mb-20 animate-fade-in-down">
                <div className="flex items-center gap-4 mb-4">
                    <Link href="/gallery" className="text-xs font-sans tracking-widest text-[#083316]/40 uppercase hover:text-[#083316] transition-colors">Archive</Link>
                    <span className="text-[#083316]/20">/</span>
                    <span className="text-xs font-sans tracking-widest text-[#083316] uppercase">Wedding</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-serif italic text-[#1a4a2e]">
                    Wedding Stories
                </h1>
            </div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {weddings.map((wedding, index) => (
                    <Link
                        href={`/gallery/wedding/${wedding.slug}`}
                        key={wedding.slug}
                        className="group flex flex-col gap-4 animate-fade-in-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        {/* Image Container */}
                        <div className="relative w-full aspect-[3/4] overflow-hidden rounded-sm bg-gray-100 shadow-sm">
                            <div className="absolute inset-0 bg-[#083316]/0 group-hover:bg-[#083316]/10 transition-colors duration-500 z-10" />
                            <Image
                                src={wedding.cover}
                                alt={wedding.couple}
                                fill
                                className="object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                            />
                        </div>

                        {/* Info */}
                        <div className="flex flex-col items-center text-center gap-1">
                            <h3 className="text-2xl font-serif text-[#1a4a2e] italic group-hover:text-[#083316] transition-colors">
                                {wedding.couple}
                            </h3>
                            <p className="text-xs font-sans tracking-widest text-[#083316]/50 uppercase">
                                {wedding.location} — {wedding.date}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>

        </main>
    );
}
