import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleTimer } from '../../Actions'

class TimerView extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>
        <h2>{this.props.timer.name}</h2>
        <h1>{this.props.timer.time}</h1>
        <button>Start</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = () => {
  return { toggleTimer }
}

export default connect(mapStateToProps, mapDispatchToProps())(TimerView)
