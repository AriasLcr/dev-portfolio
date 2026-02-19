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
        <section id='home' className='place-items-center'>
          <h1 className='text-[6.5rem] sm:text-[8rem] md:text-[10rem] py-20'>Gabriel Arias</h1>
        </section>
        <div className='grid place-items-center gap-10'>
            <About />
            <WorkExperience />
            <Skills />
            <Projects/>
            <Contact />
        </div>

      </main>
      <div className='flex mt-30 mb-5 items-end justify-center'>
        © 2026 - Made by Gabriel Arias 🐊
      </div>
    </div>
  )
}

export default App
