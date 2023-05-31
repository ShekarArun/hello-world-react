import React, { Component } from 'react'
import ComponentLevelTwo from './ComponentLevelTwo'

class ComponentLevelOne extends Component {
  render() {
    return (
      <ComponentLevelTwo />
    )
  }
}

export default ComponentLevelOne