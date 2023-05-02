import React from 'react'

const GreetWithoutJSX = () => {
  return React.createElement('div', null, React.createElement('h1', null, 'This is a greeting without JSX'))
}

export default GreetWithoutJSX
