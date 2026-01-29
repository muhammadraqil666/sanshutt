'use client';

import Link from 'next/link';
import { CTAData } from '@/lib/data';

interface CTAProps {
    data: CTAData;
}

export default function CTA({ data }: CTAProps) {
    const { quote, buttonText, buttonLink } = data;

    return (
        <section className="w-full min-h-screen bg-[#FFFFFF] flex flex-col items-center justify-center text-center px-6">

            <div className="flex flex-col items-center gap-8 animate-fade-in-up">
                <p className="text-xl md:text-2xl font-serif italic text-[#1a4a2e] max-w-xl leading-relaxed">
                    {quote}
                </p>

                {/* Minimal Button */}
                <Link href={buttonLink}>
                    <button className="group relative px-6 py-2.5 overflow-hidden rounded-full border border-[#083316]/30 text-[#083316] hover:text-[#F4F9F6] transition-colors duration-500 ease-out">
                        <span className="relative z-10 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
                            {buttonText}
                        </span>
                        <div className="absolute inset-0 bg-[#083316] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out z-0" />
                    </button>
                </Link>
            </div>

        </section>
    );
}
