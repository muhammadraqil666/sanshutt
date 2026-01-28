import Hero from './components/Hero'
import About from './components/About'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <About />
      <CTA />
      <Footer />
    </main>
  )
}
