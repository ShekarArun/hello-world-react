import React from 'react'

const withCounter = (WrappedComponent, incrementCount = 1) => {
  class WithCounter extends React.Component {
    constructor (props) {
      super(props)

      this.state = {
        count: 0
      }
    }

    handleIncrementCount = () => {
      this.setState(prevState => { return { count: prevState.count + incrementCount } })
    }

    render () {
      return (
        <WrappedComponent
          count={this.state.count}
          handleIncrementCount={this.handleIncrementCount}
          {...this.props}
        />
      )
    }
  }
  return WithCounter
}

export default withCounter
