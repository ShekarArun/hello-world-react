import React, { Component } from 'react'

class EventBind extends Component {
  constructor (props) {
    super(props)

    this.state = {
      message: 'Heyyoh!'
    }
  }

  handleClick = () => { this.setState({ message: 'Clicked off eh?' }) }

  render () {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}

export default EventBind
