import React, { Component } from 'react'
import ChildGreetComponent from './ChildGreetComponent'

class ParentGreetComponent extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: 'Parent 1'
    }
  }

  greet = (childComponentParam) => {
    console.log(`Hello! ${this.state.name}`)
    console.log(`Prop from child component: ${childComponentParam}`)
  }

  render () {
    return (
      <div><ChildGreetComponent handleGreeting={this.greet} /></div>
    )
  }
}

export default ParentGreetComponent
