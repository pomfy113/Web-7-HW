import React, { Component } from 'react'
import { connect } from 'react-redux'
import './password-list.css'

class PasswordList extends Component {
  getList() {
    return this.props.passwords.map((pass, index) => {
      return (
        <div className='individual-password' key={index}>
         <span><strong>Name:</strong> {pass.name}</span>
         <span><strong>Password:</strong> {pass.password}</span>
        </div>)
    })
  }

  render() {
    return (
      <div>
        {this.getList()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    passwords: state.passwords
  }
}

export default connect(mapStateToProps)(PasswordList)
