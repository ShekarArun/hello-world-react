import React, { Component } from 'react'
import InputToBeFocussed from './InputToBeFocussed'

class FocusInput extends Component {
    constructor(props) {
      super(props)
    
      this.componentRef = React.createRef()
    }

    handleClick = () => {
        console.log('Parent ref')
        console.log(this.componentRef)
        this.componentRef.current.focusInput()
    }
  render() {
    return (
      <div>
        <InputToBeFocussed ref={this.componentRef} />
        <button onClick={this.handleClick}>Focus on input</button>
      </div>
    )
  }
}

export default FocusInput