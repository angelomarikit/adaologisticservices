import { Navbar } from './components/Navbar'
import { StickyCallBar } from './components/StickyCallBar'
import { AboutSection } from './sections/AboutSection'
import { AreaShowcase } from './sections/AreaShowcase'
import { Contact } from './sections/Contact'
import { CtaBand } from './sections/CtaBand'
import { Footer } from './sections/Footer'
import { Hero } from './sections/Hero'
import { LegalSection } from './sections/LegalSection'
import { LocationSection } from './sections/LocationSection'
import { ProcessSection } from './sections/ProcessSection'
import { Services } from './sections/Services'
import { StatsStrip } from './sections/StatsStrip'
import { WhyAdao } from './sections/WhyAdao'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <AboutSection />
        <Services />
        <WhyAdao />
        <ProcessSection />
        <AreaShowcase />
        <LocationSection />
        <LegalSection />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
      <StickyCallBar />
    </>
  )
}

export default App
