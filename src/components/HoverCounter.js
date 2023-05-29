import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {
  render () {
    const { count, handleIncrementCount } = this.props
    return (
      <h2 onMouseOver={handleIncrementCount}>Hovered {count} times</h2>
    )
  }
}

export default withCounter(HoverCounter, 3)
