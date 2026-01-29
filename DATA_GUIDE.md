# 📚 Panduan Data-Driven Website

## 🎯 Ringkasan

Website SANSSHUT sekarang **sepenuhnya data-driven**. Semua konten (teks, gambar, link) telah dipindahkan dari hardcode ke file data terpusat di `lib/data.ts`.

## ✅ Apa yang Sudah Dilakukan

### 1. **File Data Terpusat** (`lib/data.ts`)
- ✅ Semua konten website disimpan dalam satu file
- ✅ TypeScript interfaces untuk type safety
- ✅ Helper functions untuk akses data
- ✅ Struktur data yang jelas dan terorganisir

### 2. **Komponen yang Sudah Direfactor**
- ✅ `Hero.tsx` - Menerima data via props
- ✅ `About.tsx` - Menerima data via props
- ✅ `CTA.tsx` - Menerima data via props
- ✅ `Footer.tsx` - Menerima data via props

### 3. **Halaman yang Sudah Direfactor**
- ✅ `app/page.tsx` - Homepage menggunakan data
- ✅ `app/gallery/page.tsx` - Gallery categories dari data
- ✅ `app/gallery/wedding/page.tsx` - Wedding items dari data
- ✅ `app/gallery/vacation/page.tsx` - Vacation items dari data (dengan empty state)
- ✅ `app/gallery/event/page.tsx` - Event items dari data (dengan empty state)
- ✅ `app/gallery/moment/page.tsx` - Moment items dari data (dengan empty state)

## 📝 Cara Mengubah Konten

### 1. **Mengubah Konten Homepage**

Buka `lib/data.ts` dan edit bagian yang sesuai:

```typescript
// Hero Section
hero: {
  images: ['/hero-1.png', '/hero-2.png', '/hero-3.png'],
  eyebrow: 'together with our youth story',
  companionText: 'this is',
  mainTitle: 'SANSHUT'
}

// About Section
about: {
  archiveNumber: 'Archive 01',
  quote: '"Lorem ipsum dolor sit amet..."',
  description: 'Sed do eiusmod tempor...',
  established: 'Est. MMXVII',
  images: {
    image1: '/about/about_1.jpg',
    image2: '/about/about_2.jpg'
  }
}

// CTA Section
cta: {
  quote: '"Some memories are meant to be kept..."',
  buttonText: 'Enter Archive',
  buttonLink: '/gallery'
}

// Footer
footer: {
  brandName: 'sansshut.',
  tagline: 'Preserving the youth story.',
  copyrightText: 'SANSSHUT ARCHIVE. All rights reserved.',
  socialLinks: {
    instagram: '#',
    twitter: '#',
    email: '#'
  }
}
```

### 2. **Menambah Item Gallery**

#### Menambah Wedding:
```typescript
wedding: [
  {
    slug: 'faiz-manda',
    title: 'Faiz & Manda',
    date: '14 Desember 2025',
    location: 'Cianjur',
    cover: '/gallery/wedding/faiz_manda.jpeg'
  },
  // Tambahkan wedding baru di sini
  {
    slug: 'john-jane',
    title: 'John & Jane',
    date: '20 Juni 2025',
    location: 'Bandung',
    cover: '/gallery/wedding/john_jane.jpeg'
  }
]
```

#### Menambah Vacation:
```typescript
vacation: [
  {
    slug: 'bali-trip',
    title: 'Bali Adventure',
    date: '10 Januari 2025',
    location: 'Bali',
    cover: '/gallery/vacation/bali.jpg'
  }
]
```

#### Menambah Event:
```typescript
event: [
  {
    slug: 'company-gathering',
    title: 'Annual Gathering',
    date: '15 Maret 2025',
    location: 'Jakarta',
    cover: '/gallery/event/gathering.jpg'
  }
]
```

#### Menambah Moment:
```typescript
moment: [
  {
    slug: 'sunset-beach',
    title: 'Sunset at the Beach',
    date: '5 Februari 2025',
    location: 'Anyer',
    cover: '/gallery/moment/sunset.jpg'
  }
]
```

### 3. **Mengubah Katalog (Our Team)**

Buka `lib/data.ts` dan edit bagian `katalog`:

```typescript
katalog: {
  teamMembers: [
    {
      name: 'Ulul',
      role: 'The Architect of Light',
      image: '/katalog/a_ulul.png'
    }
    // Tambah anggota tim baru di sini
  ]
}
```

### 4. **Mengubah Gallery Categories**

```typescript
categories: [
  {
    id: '01',
    name: 'Wedding',
    image: '/gallery/wedding.jpg',
    link: '/gallery/wedding',
    desc: 'Love in its purest form.'
  },
  // Edit atau tambah kategori baru
]
```

## 🔧 Struktur Data

### GalleryItem Interface
Setiap item gallery memiliki field:
- `slug` - URL-friendly identifier (contoh: 'faiz-manda')
- `title` - Judul/nama (contoh: 'Faiz & Manda')
- `date` - Tanggal event (contoh: '14 Desember 2025')
- `location` - Lokasi (contoh: 'Cianjur')
- `cover` - Path ke gambar cover (contoh: '/gallery/wedding/faiz_manda.jpeg')

## 🎨 Keuntungan Sistem Data-Driven

### ✅ Yang Berubah:
- Konten sekarang terpusat di `lib/data.ts`
- Mudah diubah tanpa menyentuh komponen
- Siap untuk integrasi admin panel
- Type-safe dengan TypeScript

### ✅ Yang TIDAK Berubah:
- Layout tetap sama
- CSS tetap sama
- Animasi tetap sama
- Routing tetap sama
- Performance tetap optimal

## 🚀 Langkah Selanjutnya (Opsional)

Jika ingin mengembangkan lebih lanjut:

1. **Admin Panel** - Buat UI untuk edit data tanpa coding
2. **CMS Integration** - Integrasikan dengan headless CMS (Contentful, Sanity, dll)
3. **Database** - Pindahkan data ke database (PostgreSQL, MongoDB, dll)
4. **API Routes** - Buat API untuk CRUD operations

## 📌 Catatan Penting

1. **Gambar**: Pastikan semua path gambar di data sesuai dengan lokasi file di folder `public/`
2. **Slug**: Harus unique dan URL-friendly (lowercase, no spaces, gunakan dash)
3. **Empty State**: Halaman vacation, event, dan moment akan otomatis menampilkan "Collection Empty" jika array kosong
4. **Type Safety**: TypeScript akan memberikan error jika struktur data tidak sesuai

## 🔍 Troubleshooting

**Q: Konten tidak muncul?**
- Pastikan path gambar benar
- Cek console browser untuk error
- Pastikan struktur data sesuai interface

**Q: Ingin menambah field baru?**
- Edit interface di `lib/data.ts`
- Update data object
- Update komponen yang menggunakan data tersebut

**Q: Website error setelah edit data?**
- Cek syntax TypeScript (missing comma, bracket, dll)
- Pastikan semua required fields terisi
- Restart dev server: `npm run dev`

## 📞 Support

Jika ada pertanyaan atau butuh bantuan, silakan hubungi developer atau buka issue di repository.

---

**Dibuat pada**: 28 Januari 2026  
**Versi**: 1.0.0  
**Status**: ✅ Production Ready
