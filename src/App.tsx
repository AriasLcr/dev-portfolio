import './App.css'
import Navbar from './components/Navbar'
import WorkExperience from './components/WorkExperience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {

  return (
    <div className='w-full h-full'>
      <Navbar />
      <main className='pt-16'>
        <section id='home' className='place-items-center py-10'>
          <h1 className='font-sketch-written py-20'>Gabriel Arias</h1>
        </section>
        <div className='grid place-items-center'>
            <About />
            <WorkExperience />
            <Skills />
            <Projects/>
            <Contact />
        </div>
      </main>
    </div>
  )
}

export default App
