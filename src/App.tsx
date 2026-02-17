import './App.css'
import WorkExperience from './components/WorkExperience'
import Skills from './components/Skills'
import Projects from './components/Projects'

function App() {

  return (
    <div className='w-full h-full place-items-center py-10'>
      <h1 className='font-sketch-written py-20'>Gabriel Arias</h1>
      <div className='h-250 grid place-items-center'>
        <WorkExperience />
        <Skills />
        <Projects/>
      </div>
    </div>
  )
}

export default App
