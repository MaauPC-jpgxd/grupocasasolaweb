import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Process from './components/Process/Process'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <Process />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App