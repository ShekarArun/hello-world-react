import React, { Component } from 'react'
import ComponentLevelThree from './ComponentLevelThree'
import UserContext from './userContext'

class ComponentLevelTwo extends Component {
  render () {
    return (
      <div>
        Hello {this.context}! This was generated using the default context value
        <ComponentLevelThree />
      </div>
    )
  }
}

ComponentLevelTwo.contextType = UserContext

export default ComponentLevelTwo
