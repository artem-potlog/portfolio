import { useLenis } from './lib/useLenis'
import Header from './components/Header'
import ScrollProgress from './components/ScrollProgress'
import ChapterNav from './components/ChapterNav'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Thesis from './sections/Thesis'
import Impact from './sections/Impact'
import Work from './sections/Work'
import Experience from './sections/Experience'
import About from './sections/About'
import Contact from './sections/Contact'

export default function App() {
  useLenis()

  return (
    <div className="grain relative min-h-screen bg-ink text-bone">
      <ScrollProgress />
      <Header />
      <ChapterNav />

      <main>
        <Hero />
        <Thesis />
        <Impact />
        <Work />
        <Experience />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
