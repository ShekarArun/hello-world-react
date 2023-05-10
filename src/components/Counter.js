import React, { Component } from 'react'

class Counter extends Component {
  constructor (props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  incrementCount () {
    this.setState({ count: this.state.count + 1 }, () => { console.log('Callback triggered after setState') })
  }

  incrementCountWithFunction () {
    this.setState((prevState, props) => {
      console.log('Previous state:', prevState)
      return { count: prevState.count + 1 }
    })
  }

  render () {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.incrementCount()}>Increment count!</button><br />
        <button onClick={() => this.incrementCountWithFunction()}>Increment bigger count!</button>
      </div>
    )
  }
}

export default Counter
