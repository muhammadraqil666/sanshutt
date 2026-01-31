// ============================================
// CENTRALIZED DATA FOR SANSSHUT WEBSITE
// ============================================
// This file contains all content for the website
// Layout, CSS, animations, and routing remain unchanged
// Only content is extracted here for easy management

// ============================================
// TYPE DEFINITIONS
// ============================================

export interface HeroData {
    images: string[];
    eyebrow: string;
    companionText: string;
    mainTitle: string;
}

export interface TeamMember {
    name: string;
    role: string;
    image: string;
}

export interface AboutData {
    archiveNumber: string;
    quote: string;
    description: string;
    established: string;
    images: {
        image1: string;
        image2: string;
    };
}

export interface CTAData {
    quote: string;
    buttonText: string;
    buttonLink: string;
}

export interface FooterData {
    brandName: string;
    tagline: string;
    copyrightText: string;
    socialLinks: {
        instagram: string;
        twitter: string;
        email: string;
    };
}

export interface GalleryCategory {
    id: string;
    name: string;
    image: string;
    link: string;
    desc: string;
}

export interface GalleryItem {
    slug: string;
    title: string; // For wedding: couple names, for others: event name
    date: string;
    location: string;
    cover: string;
}

export interface KatalogData {
    v1: TeamMember[];
    v2: TeamMember[];
}

export interface SiteData {
    hero: HeroData;
    about: AboutData;
    cta: CTAData;
    footer: FooterData;
    katalog: KatalogData;
    gallery: {
        categories: GalleryCategory[];
        wedding: GalleryItem[];
        vacation: GalleryItem[];
        event: GalleryItem[];
        moment: GalleryItem[];
    };
}

// ============================================
// MAIN DATA OBJECT
// ============================================

export const siteData: SiteData = {
    // ============================================
    // HOMEPAGE - HERO SECTION
    // ============================================
    hero: {
        images: [
            '/hero-1.png',
            '/hero-2.png',
            '/hero-3.png'
        ],
        eyebrow: 'together with our youth story',
        companionText: 'this is',
        mainTitle: 'SANSHUT'
    },

    // ============================================
    // HOMEPAGE - ABOUT SECTION
    // ============================================
    about: {
        archiveNumber: 'Archive 01',
        quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit."',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        established: 'Est. MMXVII',
        images: {
            image1: '/about/about_1.jpg',
            image2: '/about/about_2.jpg'
        },
    },

    // ============================================
    // HOMEPAGE - CTA SECTION
    // ============================================
    cta: {
        quote: '"Some memories are meant to be kept in silence, waiting for the right eyes to find them."',
        buttonText: 'Enter Archive',
        buttonLink: '/gallery'
    },

    // ============================================
    // FOOTER
    // ============================================
    footer: {
        brandName: 'sansshut.',
        tagline: 'Preserving the youth story.',
        copyrightText: 'SANSSHUT ARCHIVE. All rights reserved.',
        socialLinks: {
            instagram: '#',
            twitter: '#',
            email: '#'
        }
    },

    // ============================================
    // KATALOG SECTION
    // ============================================
    katalog: {
        v1: [
            {
                name: 'Adam',
                role: 'The Visual Storyteller',
                image: '/katalog-v1/a-adam.png'
            },
            {
                name: 'Aking',
                role: 'The Archive Custodian',
                image: '/katalog-v1/a-aking.png'
            },
            {
                name: 'Akuy',
                role: 'The Visual Alchemist',
                image: '/katalog-v1/a-akuy.png'
            },
            {
                name: 'Aldi',
                role: 'The Visual Storyteller',
                image: ''
            },
            {
                name: 'Aldiyo',
                role: 'The Visual Storyteller',
                image: '/katalog-v1/a-aldiyo.png'
            },
            {
                name: 'Alief',
                role: 'The Visual Storyteller',
                image: '/katalog-v1/a-alief.png'
            },
            {
                name: 'Arif',
                role: 'The Visual Storyteller',
                image: ''
            },
            {
                name: 'Dablu',
                role: 'The Motion Maestro',
                image: '/katalog-v1/a-dablu.png'
            },
            {
                name: 'Dino',
                role: 'The Visual Storyteller',
                image: ''
            },
            {
                name: 'Fahmi',
                role: 'The Light Sculptor',
                image: '/katalog-v1/a-fahmi.png'
            },
            {
                name: 'Faiz',
                role: 'The Moment Seizer',
                image: '/katalog-v1/a-faiz.png'
            },
            {
                name: 'Fikri',
                role: 'The Visual Weaver',
                image: ''
            },
            {
                name: 'Idin',
                role: 'The Visual Storyteller',
                image: ''
            },
            {
                name: 'Ikal',
                role: 'The Visual Storyteller',
                image: ''
            },
            {
                name: 'Iqbal',
                role: 'The Light Gatherer',
                image: ''
            },
            {
                name: 'Ozan',
                role: 'The Light Weaver',
                image: '/katalog-v1/a-ozan.png'
            },
            {
                name: 'Rey',
                role: 'The Visual Storyteller',
                image: ''
            },
            {
                name: 'Showi',
                role: 'The Visual Storyteller',
                image: ''
            },
            {
                name: 'Sultan',
                role: 'The Visual Voyager',
                image: ''
            },
            {
                name: 'Ulul',
                role: 'The Architect of Light',
                image: '/katalog-v1/a-ulul.png'
            }
        ],
        v2: [
            {
                name: 'Adam',
                role: 'Executive Creative Director',
                image: ''
            },
            {
                name: 'Aking',
                role: 'Chief of Operations',
                image: ''
            },
            {
                name: 'Akuy',
                role: 'Principal Visual Architect',
                image: ''
            },
            {
                name: 'Aldi',
                role: 'Senior Project Lead',
                image: ''
            },
            {
                name: 'Aldiyo',
                role: 'Associate Director',
                image: ''
            },
            {
                name: 'Alief',
                role: 'Digital Strategy Lead',
                image: ''
            },
            {
                name: 'Arif',
                role: 'Technical Operations Manager',
                image: ''
            },
            {
                name: 'Dablu',
                role: 'Head of Motion Graphics',
                image: ''
            },
            {
                name: 'Dino',
                role: 'Brand Experience Manager',
                image: ''
            },
            {
                name: 'Fahmi',
                role: 'Cinematic Arts Director',
                image: ''
            },
            {
                name: 'Faiz',
                role: 'Senior Media Producer',
                image: ''
            },
            {
                name: 'Fikri',
                role: 'Asset Strategy Director',
                image: ''
            },
            {
                name: 'Idin',
                role: 'Production Associate',
                image: ''
            },
            {
                name: 'Ikal',
                role: 'Corporate Communications',
                image: ''
            },
            {
                name: 'Iqbal',
                role: 'Managing Director',
                image: ''
            },
            {
                name: 'Ozan',
                role: 'Lighting & Mood Specialist',
                image: ''
            },
            {
                name: 'Rey',
                role: 'Relations Manager',
                image: ''
            },
            {
                name: 'Showi',
                role: 'Creative Content Specialist',
                image: ''
            },
            {
                name: 'Sultan',
                role: 'Strategic Project Lead',
                image: ''
            },
            {
                name: 'Ulul',
                role: 'Master of Visual Arts',
                image: ''
            }
        ]
    },

    // ============================================
    // GALLERY
    // ============================================
    gallery: {
        // Gallery Categories (shown on /gallery page)
        categories: [
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
        ],

        // ============================================
        // WEDDING GALLERY ITEMS
        // ============================================
        wedding: [
            {
                slug: 'faiz-manda',
                title: 'Faiz & Manda',
                date: '14 Desember 2025',
                location: 'Cianjur',
                cover: '/gallery/wedding/faiz_manda.jpeg'
            }
            // Add more wedding items here as needed
            // {
            //   slug: 'john-jane',
            //   title: 'John & Jane',
            //   date: '20 Juni 2025',
            //   location: 'Bandung',
            //   cover: '/gallery/wedding/john_jane.jpeg'
            // }
        ],

        // ============================================
        // VACATION GALLERY ITEMS
        // ============================================
        vacation: [
            // Currently empty - add items here when available
            // {
            //   slug: 'bali-trip',
            //   title: 'Bali Adventure',
            //   date: '10 Januari 2025',
            //   location: 'Bali',
            //   cover: '/gallery/vacation/bali.jpg'
            // }
        ],

        // ============================================
        // EVENT GALLERY ITEMS
        // ============================================
        event: [
            // Currently empty - add items here when available
            // {
            //   slug: 'company-gathering',
            //   title: 'Annual Gathering',
            //   date: '15 Maret 2025',
            //   location: 'Jakarta',
            //   cover: '/gallery/event/gathering.jpg'
            // }
        ],

        // ============================================
        // MOMENT GALLERY ITEMS
        // ============================================
        moment: [
            // Currently empty - add items here when available
            // {
            //   slug: 'sunset-beach',
            //   title: 'Sunset at the Beach',
            //   date: '5 Februari 2025',
            //   location: 'Anyer',
            //   cover: '/gallery/moment/sunset.jpg'
            // }
        ]
    }
};

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get gallery items by category
 */
export function getGalleryItems(category: 'wedding' | 'vacation' | 'event' | 'moment'): GalleryItem[] {
    return siteData.gallery[category];
}

/**
 * Get a specific gallery item by category and slug
 */
export function getGalleryItemBySlug(
    category: 'wedding' | 'vacation' | 'event' | 'moment',
    slug: string
): GalleryItem | undefined {
    return siteData.gallery[category].find(item => item.slug === slug);
}

/**
 * Get all gallery categories
 */
export function getGalleryCategories(): GalleryCategory[] {
    return siteData.gallery.categories;
}
