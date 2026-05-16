import { useEffect } from 'react'
import CustomCursor from './components/CustomCursor.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Timeline from './components/Timeline.jsx'
import Process from './components/Process.jsx'
import Styles from './components/Styles.jsx'
import Culture from './components/Culture.jsx'
import Engineering from './components/Engineering.jsx'
import Community from './components/Community.jsx'
import StatsBar from './components/StatsBar.jsx'
import Quiz from './components/Quiz.jsx'
import References from './components/References.jsx'
import Footer from './components/Footer.jsx'
import AudioPlayer from './components/AudioPlayer.jsx'

export default function App() {
  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('light')
    root.classList.add('dark')
  }, [])

  return (
    <div className="relative">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Process />
        <Styles />
        <Culture />
        <Engineering />
        <Community />
        <StatsBar />
        <Quiz />
        <References />
      </main>
      <Footer />
      <AudioPlayer />
    </div>
  )
}
