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
import InlineCSSStyling from './components/InlineCSSStyling'
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form'
import LifecycleA from './components/LifecycleA'
import Table from './components/Table'
import ParentComp from './components/ParentComp'
import RefDemo from './components/RefDemo'
import FocusInput from './components/FocusInput'
import FRParentInput from './components/FRParentInput'
import PortalDemo from './components/PortalDemo'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'
import CounterComp from './components/CounterComp'
import ClickCounterTwo from './components/ClickCounterTwo'
import HoverTwo from './components/HoverTwo'
import ComponentLevelThree from './components/ComponentLevelThree'
import {UserProvider} from './components/userContext'

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
      <InlineCSSStyling />
      <h1 className='error'>This is an example of a CSS class imported from a regular stylesheet</h1>
      <h1 className={styles.success}>This is an example of a CSS module based stylesheet</h1>

      <Form />
      <LifecycleA />
      <Table />

      <ParentComp />
      <RefDemo />
      <FocusInput />
      <FRParentInput />
      <PortalDemo />

      <ClickCounter name='Arun' />
      <HoverCounter />

      <CounterComp
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />)}
      />
      <CounterComp
        render={(count, incrementCount) => (
          <HoverTwo count={count} incrementCount={incrementCount} />
        )}
      />

      <UserProvider value='Arun'>
        <ComponentLevelThree />
      </UserProvider>

      {/* Random padding so that I don't have to reach for the bottom of the screen and accidentally hover on the taskbar */}
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

export default App
