import React, { Component } from 'react'

class ClassClick extends Component {
  handleClassClick () {
    console.log('Class Click Button clicked!')
  }

  render () {
    return (
      <div><button onClick={this.handleClassClick}>Class Click (Check console)</button></div>
    )
  }
}

export default ClassClick
