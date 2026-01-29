'use client';

import { FooterData } from '@/lib/data';

interface FooterProps {
    data: FooterData;
}

export default function Footer({ data }: FooterProps) {
    const { brandName, tagline, copyrightText, socialLinks } = data;
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-[#083316] text-[#EAF3ED] py-16 px-6 md:px-12">

            <div className="max-w-6xl mx-auto flex flex-col gap-12">

                {/* Top Section: Brand & Nav */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

                    {/* Brand */}
                    <div className="flex flex-col gap-2">
                        <h3 className="text-2xl font-serif italic tracking-wide">
                            {brandName}
                        </h3>
                        <p className="text-xs text-[#EAF3ED]/60 font-sans tracking-widest uppercase max-w-[200px]">
                            {tagline}
                        </p>
                    </div>

                    {/* (Navigation Removed) */}

                </div>

                {/* Divider */}
                <div className="w-full h-[1px] bg-[#EAF3ED]/10"></div>

                {/* Bottom Section: Copyright & Socials */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-[#EAF3ED]/40 font-sans tracking-wider">

                    <p>
                        &copy; {currentYear} {copyrightText}
                    </p>

                    <div className="flex gap-6 items-center">
                        {/* Instagram Icon */}
                        <a href={socialLinks.instagram} className="hover:text-white transition-colors opacity-70 hover:opacity-100">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>

                        {/* Twitter / X Icon */}
                        <a href={socialLinks.twitter} className="hover:text-white transition-colors opacity-70 hover:opacity-100">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                            </svg>
                        </a>

                        {/* Email Icon */}
                        <a href={socialLinks.email} className="hover:text-white transition-colors opacity-70 hover:opacity-100">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                        </a>
                    </div>

                </div>

            </div>

        </footer>
    );
}
