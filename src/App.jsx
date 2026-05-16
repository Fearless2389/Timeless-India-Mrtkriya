import { useEffect, useState } from 'react'
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
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <div className="relative">
      <CustomCursor />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
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
