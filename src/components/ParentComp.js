import React, { Component } from 'react'
import MemoChildComp from './MemoChildComp'

class ParentComp extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: 'Arun'
    }
  }

  componentDidMount () {
    setInterval(() => { this.setState({ name: 'Arun' }) }, 2000)
  }

  render () {
    console.log('Rendering parent component')
    return (
      <div>
        ParentComp
        <MemoChildComp name={this.state.name} />
      </div>
    )
  }
}

export default ParentComp
