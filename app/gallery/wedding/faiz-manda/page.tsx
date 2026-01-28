'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function FaizMandaDetail() {
    return (
        <main className="min-h-screen bg-[#F4F9F6] pt-32 pb-20 px-6 md:px-12">
            <div className="flex flex-col items-center text-center mb-12 animate-fade-in-down">
                <Link href="/gallery/wedding" className="text-xs font-sans tracking-widest text-[#083316]/40 uppercase hover:text-[#083316] transition-colors mb-6">Back to Weddings</Link>
                <h1 className="text-4xl md:text-5xl font-serif italic text-[#1a4a2e] mb-2">Faiz & Manda</h1>
                <p className="text-xs font-sans tracking-widest text-[#083316]/50 uppercase">The Gallery</p>
            </div>

            <div className="max-w-4xl mx-auto aspect-[3/4] relative shadow-xl rounded-sm overflow-hidden animate-fade-in-up">
                <Image
                    src="/gallery/wedding/faiz_manda.jpeg"
                    alt="Faiz & Manda"
                    fill
                    className="object-cover"
                />
            </div>

            <p className="text-center mt-12 text-[#083316]/40 text-sm font-sans italic">More photos coming soon...</p>
        </main>
    )
}
