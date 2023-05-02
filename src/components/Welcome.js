import React, { Component } from 'react'

class Welcome extends Component {
  render () {
    return <h1>This greeting is through a class component, {this.props.name}</h1>
  }
}

export default Welcome
