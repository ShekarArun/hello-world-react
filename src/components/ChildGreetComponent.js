import React from 'react'

function ChildGreetComponent ({ handleGreeting }) {
  return (
    <div><button onClick={() => handleGreeting('Child prop param sample')}>Greet me! (Check console)</button></div>
  )
}

export default ChildGreetComponent
