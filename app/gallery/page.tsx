'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    id: '01',
    name: 'Wedding',
    image: '/gallery/wedding.jpg',
    link: '/gallery/wedding',
    desc: 'Love in its purest form.'
  },
  {
    id: '02',
    name: 'Vacation',
    image: '/gallery/vacation.jpg',
    link: '/gallery/vacation',
    desc: 'Escaping the ordinary.'
  },
  {
    id: '03',
    name: 'Event',
    image: '/gallery/event.jpg',
    link: '/gallery/event',
    desc: 'Gatherings & celebrations.'
  },
  {
    id: '04',
    name: 'Moment',
    image: '/gallery/moment.jpg',
    link: '/gallery/moment',
    desc: 'Fleeting seconds captured.'
  }
];

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(categories[0].image);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main className="relative min-h-screen bg-[#F4F9F6]">

      {/* Left: Interactive List */}
      <div className="relative z-10 w-full md:w-1/2 min-h-screen flex flex-col justify-center px-8 md:px-24 py-32 bg-[#F4F9F6]/90 md:bg-[#F4F9F6]">

        <div className="mb-16 animate-fade-in-down">
          <h1 className="text-4xl font-serif text-[#1a4a2e] mb-2">The Archive</h1>
          <p className="text-xs font-sans tracking-widest text-[#083316]/50 uppercase">Select a Category</p>
        </div>

        <div className="flex flex-col gap-8">
          {categories.map((cat, index) => (
            <Link
              key={cat.id}
              href={cat.link}
              className="group flex items-baseline gap-6 cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => {
                setActiveImage(cat.image);
                setActiveIndex(index);
              }}
            >
              <span className={`text-sm font-sans font-bold tracking-widest transition-colors duration-300 ${activeIndex === index ? 'text-[#083316]' : 'text-[#083316]/20'}`}>
                {cat.id}
              </span>
              <div className="flex flex-col">
                <h2 className={`text-4xl md:text-5xl font-serif italic transition-all duration-500 ${activeIndex === index ? 'text-[#1a4a2e] translate-x-4' : 'text-[#083316]/20'}`}>
                  {cat.name}
                </h2>
              </div>
            </Link>
          ))}
        </div>

      </div>

      {/* Right: Preview Image Area */}
      <div className="fixed top-0 right-0 w-full md:w-1/2 h-screen z-0">

        {/* Images */}
        <div className="relative w-full h-full bg-[#EAF3ED]">
          {categories.map((cat, index) => (
            <div
              key={cat.image}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeImage === cat.image ? 'opacity-100' : 'opacity-0'}`}
            >
              <Image
                src={cat.image}
                alt="Preview"
                fill
                className="object-cover"
                priority={index === 0}
              />
              {/* Mobile Overlay to dim background */}
              <div className="absolute inset-0 bg-[#F4F9F6]/80 md:hidden"></div>
            </div>
          ))}
        </div>

        {/* Vignette/Gradient to blend with left side on Desktop */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#F4F9F6] to-transparent z-10 hidden md:block" />

      </div>

    </main>
  );
}
