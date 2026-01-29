'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()
    const isKatalog = pathname === '/katalog'

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
                        {['Home', 'Gallery', 'Katalog'].map((item) => (
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

                        {/* Action Button / Search Bar */}
                        {isKatalog ? (
                            <div className="hidden md:flex relative group">
                                <input
                                    type="text"
                                    placeholder="Search team..."
                                    className="bg-white/10 border border-white/20 rounded-full py-2 px-6 pr-10 text-xs text-white focus:outline-none focus:bg-white/20 transition-all w-48"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        window.dispatchEvent(new CustomEvent('nav-search', { detail: e.target.value }));
                                    }}
                                />
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                </div>
                            </div>
                        ) : (
                            <button className="hidden md:block relative overflow-hidden group bg-[#EAF3ED] text-[#083316] px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all hover:bg-white hover:shadow-lg hover:shadow-white/20">
                                <span className="relative z-10">Let’s Go</span>
                                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
                            </button>
                        )}
                    </div>
                </nav>

                {/* Mobile Menu Overlay */}
                <div className={`
        absolute top-full left-0 right-0 mt-6 mx-auto w-[92%] max-w-[320px]
        bg-[#083316]/95 backdrop-blur-2xl rounded-[2rem] border border-white/10 
        flex flex-col items-center gap-2 py-8 px-6
        transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) z-40
        shadow-[0_20px_50px_rgba(0,0,0,0.3)]
        ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-8 pointer-events-none'}
      `}>
                    {['Home', 'Gallery', 'Katalog'].map((item, idx) => (
                        <Link
                            key={item}
                            href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                            className={`text-white/70 hover:text-white text-[13px] font-semibold uppercase tracking-[0.2em] w-full text-center py-4 transition-all duration-300 ${idx !== 2 ? 'border-b border-white/5' : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                        </Link>
                    ))}

                    <div className="w-full mt-4 pt-4 border-t border-white/10">
                        {isKatalog ? (
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search team..."
                                    className="w-full bg-white/5 border border-white/10 py-3.5 px-6 rounded-full text-xs text-white text-center focus:outline-none focus:bg-white/10 focus:border-white/20 transition-all placeholder:text-white/20"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        window.dispatchEvent(new CustomEvent('nav-search', { detail: e.target.value }));
                                    }}
                                />
                                <div className="absolute right-6 top-1/2 -translate-y-1/2 text-white/20">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                </div>
                            </div>
                        ) : (
                            <button className="w-full bg-[#EAF3ED] text-[#083316] py-4 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl active:scale-95 transition-transform">
                                Let’s Go
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
