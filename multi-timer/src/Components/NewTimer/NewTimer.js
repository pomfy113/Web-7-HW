import React, { Component } from 'react'
import { connect } from 'react-redux'

import { newTimer } from '../../Actions'

class NewTimer extends Component {
  constructor(props) {
    super(props)

    // Store the name of of input name below on state
    this.state = {

    }
  }

  render() {
    return (
      <div>
        {/* make this a controlled component */}
        <input type='text' name="name" onChange={(e) => this.setState({ input: e.target.value })}/>
        <h1>{this.state.input}</h1>
        {/* The save button should addTimer from props and pass the name from state */}
        <button onClick={() => this.props.newTimer(this.state.input)}>Save</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = () => {
  return { newTimer }
}

export default connect(mapStateToProps, mapDispatchToProps())(NewTimer)
