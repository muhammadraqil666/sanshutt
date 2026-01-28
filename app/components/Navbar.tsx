'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className={`fixed top-6 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-500 ${scrolled ? 'top-4' : 'top-8'}`}>
            <div className="relative w-full flex justify-center">
                <nav
                    className={`
          flex items-center justify-between gap-4 px-8 py-3 
          bg-[#083316]/90 backdrop-blur-md 
          rounded-full shadow-2xl shadow-[#083316]/20 
          border border-white/5 ring-1 ring-white/10
          w-[95%] max-w-3xl md:w-full z-50 relative
          transition-all duration-500 ease-out
          ${scrolled ? 'py-2 px-6 md:px-10 scale-[0.98]' : 'py-3 px-6 md:px-10 hover:scale-[1.01]'}
        `}
                >

                    {/* Logo / Brand Mark */}
                    <Link href="/" className="text-white font-serif italic text-lg tracking-wide hover:opacity-80 transition-opacity">
                        sh.
                    </Link>

                    {/* Desktop Links */}
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

                    {/* Mobile Actions (Menu + Button) */}
                    <div className="flex items-center gap-4">

                        {/* Mobile Hamburger */}
                        <button
                            className="md:hidden text-white/80 hover:text-white transition-colors p-1"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            ) : (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                            )}
                        </button>

                        {/* Action Button */}
                        <button className="hidden md:block relative overflow-hidden group bg-[#EAF3ED] text-[#083316] px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all hover:bg-white hover:shadow-lg hover:shadow-white/20">
                            <span className="relative z-10">Let’s Go</span>
                            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu Overlay */}
                <div className={`
        absolute top-full left-0 right-0 mt-4 mx-auto w-[90%] max-w-[300px]
        bg-[#083316]/95 backdrop-blur-xl rounded-2xl border border-white/5 
        flex flex-col items-center gap-4 py-6 px-4
        transition-all duration-300 origin-top z-40
        ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'}
      `}>
                    {['Home', 'Gallery', 'About Us'].map((item) => (
                        <Link
                            key={item}
                            href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                            className="text-white/80 hover:text-white text-sm font-medium uppercase tracking-widest transition-colors w-full text-center py-2 border-b border-white/5 last:border-0"
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                        </Link>
                    ))}
                    <button className="mt-2 w-full bg-[#EAF3ED] text-[#083316] py-3 rounded-full text-xs font-bold uppercase tracking-wider">
                        Let’s Go
                    </button>
                </div>
            </div>
        </div>
    )
}
