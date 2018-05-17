import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectTimer } from '../../Actions'
import TimerView from './TimerView.js'

class ListTimers extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>
        {this.props.timers.map((timer, i) => <TimerView key={i} timer={timer} />)}
      </div>
    )
  }


}

const mapStateToProps = (state) => {
  return { timers: state.timers }
}

const mapDispatchToProps = () => {
  return { selectTimer }
}

export default connect(mapStateToProps, mapDispatchToProps())(ListTimers)
