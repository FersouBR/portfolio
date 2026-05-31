import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <main className="container mx-auto px-6 py-20">

        <Hero />

        <About />

        <Projects />

        <Contact />

      </main>

    </div>
  )
}

export default App