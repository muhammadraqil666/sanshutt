'use client';

import Link from 'next/link';

export default function CTA() {
    return (
        <section className="w-full min-h-screen bg-[#FFFFFF] flex flex-col items-center justify-center text-center px-6">

            <div className="flex flex-col items-center gap-8 animate-fade-in-up">
                {/* Reflective Text */}
                <p className="text-xl md:text-2xl font-serif italic text-[#1a4a2e] max-w-xl leading-relaxed">
                    "Some memories are meant to be kept in silence, waiting for the right eyes to find them."
                </p>

                {/* Minimal Button */}
                <Link href="/gallery">
                    <button className="group relative px-6 py-2.5 overflow-hidden rounded-full border border-[#083316]/30 text-[#083316] hover:text-[#F4F9F6] transition-colors duration-500 ease-out">
                        <span className="relative z-10 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
                            Enter Archive
                        </span>
                        <div className="absolute inset-0 bg-[#083316] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out z-0" />
                    </button>
                </Link>
            </div>

        </section>
    );
}
