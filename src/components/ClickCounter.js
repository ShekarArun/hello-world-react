import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickCounter extends Component {
  render () {
    const { count, handleIncrementCount } = this.props
    return (
      <button onClick={handleIncrementCount}>{this.props.name} Clicked {count} times</button>
    )
  }
}

export default withCounter(ClickCounter, 2)
