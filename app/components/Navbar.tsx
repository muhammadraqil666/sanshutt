'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className={`fixed top-6 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-500 ${scrolled ? 'top-4' : 'top-8'}`}>
            <nav
                className={`
          flex items-center justify-between gap-12 px-8 py-3 
          bg-[#083316]/90 backdrop-blur-md 
          rounded-full shadow-2xl shadow-[#083316]/20 
          border border-white/5 ring-1 ring-white/10
          w-[90%] max-w-3xl md:w-full 
          transition-all duration-500 ease-out
          ${scrolled ? 'py-2 px-6 md:px-10 scale-[0.98]' : 'py-3 px-6 md:px-10 hover:scale-[1.01]'}
        `}
            >

                {/* Logo / Brand Mark (Optional, added for balance) */}
                <Link href="/" className="text-white font-serif italic text-lg tracking-wide hover:opacity-80 transition-opacity">
                    sh.
                </Link>

                {/* Links */}
                <div className="hidden md:flex items-center gap-8">
                    {['Home', 'Gallery', 'About Us'].map((item) => (
                        <Link
                            key={item}
                            href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                            className="relative group text-white/80 hover:text-white text-xs font-medium uppercase tracking-widest transition-colors"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                {/* Action Button */}
                <button className="relative overflow-hidden group bg-[#EAF3ED] text-[#083316] px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all hover:bg-white hover:shadow-lg hover:shadow-white/20">
                    <span className="relative z-10">Let’s Go</span>
                    <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
                </button>
            </nav>
        </div>
    )
}
