import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class ComponentLevelThree extends Component {
  render() {
    return (
      <UserConsumer>
        {(username) => {
          return <div>Hello {username}, this message was generated using Context!</div>
        }}
      </UserConsumer>
    )
  }
}

export default ComponentLevelThree