import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePassword } from './actions'

import './password-list.css'

class PasswordList extends Component {
  getList() {
    return this.props.passwords.map((pass, index) => {
      return (
        <div className='individual-password' key={index}>
         <span><strong>Name:</strong> {pass.name}</span>
         <span><strong>Password:</strong> {pass.password}</span>
         <button onClick={() => this.props.deletePassword(index)}>Delete</button>
        </div>)
    })
  }

  render() {
    return (
      <div id='password-saved'>
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

const mapDispatchToProps = () =>{
    return {
        deletePassword
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(PasswordList)
