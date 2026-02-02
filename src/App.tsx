import './App.css'
import WorkExperience from './components/WorkExperience'

function App() {

  return (
    <div className='w-full h-full place-items-center py-10'>
      <h1 className='font-sketch-written py-20'>Gabriel Arias</h1>
      <div className='h-250 grid place-items-center'>
        <WorkExperience />
      </div>
    </div>
  )
}

export default App
