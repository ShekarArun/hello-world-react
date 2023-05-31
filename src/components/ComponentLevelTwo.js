import React, { Component } from 'react'
import ComponentLevelThree from './ComponentLevelThree'

class ComponentLevelTwo extends Component {
  render() {
    return (
      <ComponentLevelThree />
    )
  }
}

export default ComponentLevelTwo