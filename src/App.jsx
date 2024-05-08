
import './App.css'
import Weather from './Components/Weather'


function App() {

  return (
   <div className='App h-screen bg-zinc-950 flex items-center justify-center'>

  <Weather/>
   <div className=' absolute bottom-0 text-zinc-300'>
    <h1>Developed by | <a className=' font-medium text-indigo-400 hover:text-indigo-500 delay-75 transition-all' href="">Devyani Patil</a></h1>
   </div>
   </div>
  )
}

export default App
