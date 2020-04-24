import React, { Component, Fragment } from 'react'

class ClassCounter extends Component {

  constructor(props) {
    super( props )
    
    this.state = {
      counter: 0
    }
    
  }

  handleOnClick = () => {
    this.setState( prevState => {
      return {
      counter: prevState.counter + 1
      }
    })
  }


  render() {
    return (
      <Fragment>
        <h2>Hello From Class Counter</h2>
        <button onClick={ this.handleOnClick }>ClassCounter: { this.state.counter }</button>
      </Fragment>
    )
  }
}

export default ClassCounter