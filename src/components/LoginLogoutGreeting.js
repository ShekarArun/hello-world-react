import React, { Component } from 'react'

class LoginLogoutGreeting extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoggedIn: true
    }
  }

  handleFlipState = () => {
    this.setState(prevState => {
    //   console.log(`Current state: ${this.state.isLoggedIn}`)
      console.log('Previous state:')
      console.log(prevState)
      // Later realized that 'current' and 'previous' state are the same
      return { isLoggedIn: !prevState.isLoggedIn }
    }, () => { console.log(`New state: ${this.state.isLoggedIn}`) })
  }

  render () {
    const flipStateButton = <button onClick={this.handleFlipState}>Flip state!</button>
    return (
      this.state.isLoggedIn
        ? <div><h1>You're logged in! :)</h1>{flipStateButton}</div>
        : <div><h1>You're not logged in :(</h1>{flipStateButton}</div>
    )
  }
}

export default LoginLogoutGreeting
