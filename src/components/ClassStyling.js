import React, { Component } from 'react'
import './ClassStylingStyleSheet.css'

class ClassStyling extends Component {
  constructor (props) {
    super(props)

    this.state = {
      largeSize: false,
      orangeColor: false
    }
  }

  handleToggleStyleClass = (className) => {
    this.setState(
      (prevState) => {
        console.log(`State of class ${className} is currently ${prevState[className]}`)
        return { [className]: !prevState[className] }
      },
      () => { console.log(`State of ${className} updated to ${this.state[className]}`) })
  }

  render () {
    const largeSizeFlag = this.state.largeSize ? 'large-size' : ''
    const orangeColorFlag = this.state.orangeColor ? 'orange-color' : ''

    return (
      <div>
        <h1 className={`${largeSizeFlag} ${orangeColorFlag}`}>
          This is an example of CSS class based styling
        </h1>
        <button onClick={() => this.handleToggleStyleClass('largeSize')}>Toggle size</button>
        <button onClick={() => this.handleToggleStyleClass('orangeColor')}>Toggle color</button>
        {/* <button onClick={() => this.flipStyleClassHandler('large-size')}>Toggle size</button>
        <button onClick={() => this.flipStyleClassHandler('orange-color')}>Toggle color</button> */}
      </div>
    )
  }
}

export default ClassStyling
