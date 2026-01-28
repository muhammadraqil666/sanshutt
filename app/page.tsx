import Hero from './components/Hero'
import About from './components/About'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Reveal from './components/Reveal'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Reveal className="w-full">
        <About />
      </Reveal>
      <Reveal className="w-full">
        <CTA />
      </Reveal>
      <Reveal className="w-full">
        <Footer />
      </Reveal>
    </main>
  )
}
