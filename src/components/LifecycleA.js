import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: 'Arun'
    }
    console.log('LifecycleA constructor')
  }

  static getDerivedStateFromProps (props, state) {
    console.log('LifecycleA getDerivedStateFromProps')
    return null
  }

  componentDidMount () {
    console.log('LifecycleA componentDidMount')
  }

  shouldComponentUpdate () {
    console.log('LifecycleA shouldComponentUpdate')
    return true
  }

  getSnapshotBeforeUpdate (prevProps, prevState) {
    console.log('LifecycleA getSnapshotBeforeUpdate')
    return null
  }

  componentDidUpdate () {
    console.log('LifecycleA componentDidUpdate')
  }

  handleClick = () => {
    this.setState({ name: 'Arun New Name' })
  }

  render () {
    console.log('LifecycleA render')
    return (
      <div>
        <div>LifecycleA</div>
        <button onClick={this.handleClick}>Change State</button>
        <LifecycleB />
      </div>
    )
  }
}

export default LifecycleA
