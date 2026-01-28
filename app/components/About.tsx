'use client';

import Image from 'next/image';

export default function About() {
    return (
        <section className="relative w-full min-h-screen bg-[#F4F9F6] flex items-center justify-center overflow-hidden">

            <div className="w-full max-w-5xl px-8 relative flex flex-col md:flex-row lg:block items-center justify-center min-h-[500px] gap-12 lg:gap-0">

                {/* Floating Image 1 (Top Left) */}
                <div className="lg:absolute lg:top-20 lg:left-0 w-64 md:w-56 lg:w-64 aspect-[3/4] transform rotate-1 md:-rotate-2 hover:rotate-0 transition-transform duration-500 ease-out z-10">
                    <div className="relative w-full h-full grayscale hover:grayscale-0 transition-all duration-700 shadow-lg bg-white p-2 pb-6 rounded-sm">
                        <div className="relative w-full h-full overflow-hidden">
                            <Image
                                src="/about/about_1.jpg"
                                alt="Memory 1"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Center Text */}
                <div className="relative z-20 max-w-md text-center md:text-left lg:ml-80 py-12">

                    <p className="text-xs font-bold tracking-[0.3em] text-[#083316]/30 uppercase mb-6">Archive 01</p>

                    <h2 className="text-2xl md:text-3xl font-serif text-[#1a4a2e] mb-6 leading-tight">
                        &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&rdquo;
                    </h2>

                    <p className="text-sm text-[#083316]/60 font-sans leading-relaxed mb-6">
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                    </p>

                    <span className="inline-block border-b border-[#083316] text-xs font-bold uppercase tracking-widest pb-1">
                        Est. MMXVII
                    </span>
                </div>

                {/* Floating Image 2 (Bottom Right) */}
                <div className="lg:absolute lg:bottom-0 lg:right-0 w-64 md:w-56 lg:w-64 aspect-[4/3] transform md:rotate-2 hover:rotate-0 transition-transform duration-500 ease-out z-10">
                    <div className="relative w-full h-full grayscale hover:grayscale-0 transition-all duration-700 shadow-lg bg-white p-2 pb-6 rounded-sm">
                        <div className="relative w-full h-full overflow-hidden">
                            <Image
                                src="/about/about_2.jpg"
                                alt="Memory 2"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Connecting Line (Subtle) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[1px] bg-[#083316]/5 -rotate-45 -z-0 hidden lg:block"></div>

            </div>
        </section>
    );
}
