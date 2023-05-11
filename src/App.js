import './App.css'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import GreetWithoutJSX from './components/GreetWithoutJSX'
import StateHandlingMessage from './components/StateHandlingMessage'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentGreetComponent from './components/ParentGreetComponent'
import LoginLogoutGreeting from './components/LoginLogoutGreeting'
import NameList from './components/NameList'
import PeopleAttributesList from './components/PeopleAttributesList'
import ClassStyling from './components/ClassStyling'

function App () {
  return (
    <div className='App'>
      <Greet name='Arun' location='Bangalore' />
      <Greet name='Anju' location='Mysore' />
      <Greet name='Padmaja' location='Russia' />
      <Welcome name='Neumann' />
      <GreetWithoutJSX />
      <StateHandlingMessage />
      <Counter />
      <FunctionClick />
      <ClassClick />
      <EventBind />
      <ParentGreetComponent />
      <LoginLogoutGreeting />
      <NameList />
      <PeopleAttributesList />
      <ClassStyling />

      {/* Random padding so that I don't have to reach for the bottom of the screen and accidentally hover on the taskbar */}
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

export default App
