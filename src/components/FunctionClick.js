import React from 'react'

function FunctionClick () {
  const functionClickHandler = () => { console.log('Function Click button clicked!') }
  return (
    <div><button onClick={functionClickHandler}>Function Click (Check console)</button></div>
  )
}

export default FunctionClick
