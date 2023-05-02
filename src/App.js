import './App.css'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import GreetWithoutJSX from './components/GreetWithoutJSX'

function App () {
  return (
    <div className='App'>
      <Greet name='Arun' location='Bangalore' />
      <Greet name='Anju' location='Mysore' />
      <Greet name='Padmaja' location='Russia' />
      <Welcome name='Neumann' />
      <GreetWithoutJSX />
    </div>
  )
}

export default App
