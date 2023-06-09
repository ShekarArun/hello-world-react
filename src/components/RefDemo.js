import React, { Component } from 'react'

class RefDemo extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()
    }

    componentDidMount() {
        this.inputRef.current.focus()
    }

    handleClick = () => {alert(this.inputRef.current.value)}
  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef} />
        <button onClick={this.handleClick}>Click me!</button>
        </div>
    )
  }
}

export default RefDemo