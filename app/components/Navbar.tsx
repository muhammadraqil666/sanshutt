'use client'

import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import { usePathname, useRouter } from 'next/navigation'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [isKatalogHovered, setIsKatalogHovered] = useState(false)
    const [activeVersion, setActiveVersion] = useState<'v1' | 'v2'>('v1')

    const pathname = usePathname()
    const router = useRouter()
    const isKatalog = pathname === '/katalog'
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleVersionChange = (version: 'v1' | 'v2') => {
        setActiveVersion(version);
        if (isKatalog) {
            window.dispatchEvent(new CustomEvent('nav-version-change', { detail: version }));
        } else {
            router.push('/katalog');
        }
        setIsOpen(false);
        setIsKatalogHovered(false);
    }

    const onKatalogMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsKatalogHovered(true);
    };

    const onKatalogMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsKatalogHovered(false);
        }, 300);
    };

    return (
        <div className={`fixed top-6 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-500 ${scrolled ? 'top-4' : 'top-8'}`}>
            <div className="relative w-full flex justify-center">
                <nav
                    className={`
          flex items-center justify-between gap-4 px-8 py-3 
          bg-[#083316]/90 backdrop-blur-md 
          rounded-full shadow-2xl shadow-[#083316]/20 
          border border-white/5 ring-1 ring-white/10
          w-[95%] max-w-4xl md:w-full z-50 relative
          transition-all duration-500 ease-out
          ${scrolled ? 'py-2 px-6 md:px-10 scale-[0.98]' : 'py-3 px-6 md:px-10 hover:scale-[1.01]'}
        `}
                >

                    {/* Logo / Brand Mark */}
                    <Link href="/" className="text-white font-serif italic text-lg tracking-wide hover:opacity-80 transition-opacity">
                        sh.
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-10">
                        <Link href="/" className="relative group text-white/50 hover:text-white text-[11px] font-bold uppercase tracking-[0.3em] transition-all">
                            Home
                            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-4" />
                        </Link>

                        <Link href="/gallery" className="relative group text-white/50 hover:text-white text-[11px] font-bold uppercase tracking-[0.3em] transition-all">
                            Gallery
                            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-4" />
                        </Link>

                        {/* Katalog with Modern Floating Control */}
                        <div
                            className="relative"
                            onMouseEnter={onKatalogMouseEnter}
                            onMouseLeave={onKatalogMouseLeave}
                        >
                            <button
                                className={`flex items-center gap-2 text-white/50 hover:text-white text-[11px] font-bold uppercase tracking-[0.3em] transition-all pb-1 ${isKatalog ? 'text-white' : ''}`}
                                onClick={() => router.push('/katalog')}
                            >
                                Katalog
                            </button>

                            {/* NEW LUXURY COMPACT SLIDER - Perfectly balanced & Unique */}
                            <div className={`
                                absolute top-full left-1/2 -translate-x-1/2 mt-4 p-1.5 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                                ${isKatalogHovered ? 'opacity-100 translate-y-0 visible scale-100' : 'opacity-0 -translate-y-4 invisible scale-75 pointer-events-none'}
                            `}>
                                <div className="bg-[#0b2b16]/98 backdrop-blur-3xl border border-white/10 rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] flex items-center p-1.5 gap-1.5">
                                    <div className="relative flex items-center gap-1.5 p-1 bg-white/5 rounded-xl border border-white/5">
                                        <div
                                            className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.3)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${activeVersion === 'v1' ? 'left-1' : 'left-[calc(50%+1px)]'}`}
                                        />
                                        <button
                                            onClick={() => handleVersionChange('v1')}
                                            className={`relative z-10 px-4 py-2 text-[9px] font-black tracking-[0.2em] transition-colors duration-300 ${activeVersion === 'v1' ? 'text-[#083316]' : 'text-white/30 hover:text-white/60'}`}
                                        >
                                            1.0
                                        </button>
                                        <button
                                            onClick={() => handleVersionChange('v2')}
                                            className={`relative z-10 px-4 py-2 text-[9px] font-black tracking-[0.2em] transition-colors duration-300 ${activeVersion === 'v2' ? 'text-[#083316]' : 'text-white/30 hover:text-white/60'}`}
                                        >
                                            2.0
                                        </button>
                                    </div>
                                    <div className="px-2 pr-3 flex flex-col justify-center border-l border-white/5 ml-1">
                                        <span className="text-[7px] text-white/20 font-black uppercase tracking-[0.3em]">Archiving</span>
                                        <span className="text-[8px] text-white/60 font-serif italic whitespace-nowrap">{activeVersion === 'v1' ? 'Legacy Version' : 'New Horizon'}</span>
                                    </div>
                                </div>
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-bottom-[6px] border-bottom-white/10"></div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Actions */}
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

                        {isKatalog ? (
                            <div className="hidden md:flex relative group">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="bg-white/5 border border-white/10 rounded-full py-2 px-6 pr-10 text-[10px] uppercase tracking-widest text-white focus:outline-none focus:bg-white/10 focus:border-white/30 transition-all w-32 hover:w-40 placeholder:text-white/10"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        window.dispatchEvent(new CustomEvent('nav-search', { detail: e.target.value }));
                                    }}
                                />
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                </div>
                            </div>
                        ) : (
                            <button className="hidden md:block relative overflow-hidden group bg-white text-[#083316] px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:shadow-[0_10px_30px_rgba(255,255,255,0.2)]">
                                <span className="relative z-10">Connect</span>
                                <div className="absolute inset-0 bg-[#F4F9F6] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out" />
                            </button>
                        )}
                    </div>
                </nav>

                {/* Mobile Menu Overlay */}
                <div className={`
        absolute top-full left-0 right-0 mt-6 mx-auto w-[92%] max-w-[320px]
        bg-[#083316]/98 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 
        flex flex-col items-center py-10 px-6
        transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) z-40
        shadow-[0_40px_80px_rgba(0,0,0,0.6)]
        ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-8 pointer-events-none'}
      `}>
                    <Link href="/" className="text-white/50 hover:text-white text-[11px] font-bold uppercase tracking-[0.4em] w-full text-center py-5 transition-all" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href="/gallery" className="text-white/50 hover:text-white text-[11px] font-bold uppercase tracking-[0.4em] w-full text-center py-5 transition-all" onClick={() => setIsOpen(false)}>Gallery</Link>

                    {/* Mobile Versions Section - Compact Sliding Control */}
                    <div className="w-full mt-6 flex flex-col items-center gap-4">
                        <p className="text-white/10 text-[8px] font-bold uppercase tracking-[0.6em]">Select Architecture</p>
                        <div className="relative flex items-center gap-1.5 p-1.5 bg-white/5 rounded-2xl border border-white/10 w-full max-w-[200px]">
                            <div
                                className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-white rounded-xl shadow-lg transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${activeVersion === 'v1' ? 'left-1.5' : 'left-[calc(50%+1px)]'}`}
                            />
                            <button
                                onClick={() => handleVersionChange('v1')}
                                className={`flex-1 relative z-10 py-3 text-[10px] font-black tracking-widest transition-colors ${activeVersion === 'v1' ? 'text-[#083316]' : 'text-white/30'}`}
                            >
                                1.0
                            </button>
                            <button
                                onClick={() => handleVersionChange('v2')}
                                className={`flex-1 relative z-10 py-3 text-[10px] font-black tracking-widest transition-colors ${activeVersion === 'v2' ? 'text-[#083316]' : 'text-white/30'}`}
                            >
                                2.0
                            </button>
                        </div>
                    </div>

                    <div className="w-full mt-10 pt-6 border-t border-white/5">
                        {isKatalog ? (
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full bg-white/5 border border-white/10 py-4 px-6 rounded-full text-[10px] text-white text-center font-bold uppercase tracking-[0.2em] focus:outline-none focus:bg-white/10 transition-all placeholder:text-white/20"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        window.dispatchEvent(new CustomEvent('nav-search', { detail: e.target.value }));
                                    }}
                                />
                            </div>
                        ) : (
                            <button className="w-full bg-white text-[#083316] py-5 rounded-full text-[10px] font-black uppercase tracking-[0.4em] shadow-2xl active:scale-95 transition-transform">
                                Connect
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
