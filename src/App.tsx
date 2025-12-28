import './App.css'
import WorkExperience from './components/WorkExperience'

function App() {

  return (
    <div className='w-full h-full place-items-center'>
      <h1 className='font-sketch-written'>Gabriel Arias</h1>
      <div className='h-250 grid place-items-center'>
        <WorkExperience />
      </div>
    </div>
  )
}

export default App
