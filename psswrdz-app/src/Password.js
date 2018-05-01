import React, { Component } from 'react'
import './Password.css'
import { connect } from 'react-redux'
import { addPassword } from './actions'
import zxcvbn from 'zxcvbn'

class Password extends Component {
    constructor(props) {
        super(props)
        this.alpha = this.allAlpha();
        this.num = this.allNum();
        this.all = this.allChars();


        this.state = {
            name: 'Description for password',
            password: 'p@ssw0rd',
            hypen: false,
            available: this.alpha
        }
    }

    changeAvailable(type){
        switch(type){
            case 'alpha':
                this.setState({ available: this.alpha });
                break;
            case 'alphanum':
                this.setState({ available: this.alpha.concat(this.num) });
                break;
            case 'all':
                this.setState({ available: this.all});
                break;
        }
    }

    allAlpha(){
        let chars = [];
        for(let i = 65; i < 123; i++) {
            if(i < 91 || i > 96){
                chars.push(String.fromCharCode(i));
            }
        }
        return chars
    }

    allNum(){
        let chars = [];
        for(let i = 48; i < 57; i++) {
            chars.push(String.fromCharCode(i));
        }
        return chars;
    }

    allChars(){
        let chars = [];
        for(let i = 33; i < 127; i++) {
            chars.push(String.fromCharCode(i));
        }
        return chars;
    }

    random(n) {
        return Math.floor(Math.random() * n)
    }

    generatePassword() {
        // generate a password here
        let newPass = "";
        let length = this.state.available.length;
        for(let i = 0; i < 9; i++){
            newPass += this.state.available[this.random(length)]

            if(this.state.hypen && (i+1) % 3 === 0 && i !== 8){
                newPass += '-'
            }
        }

        this.setState({ password: newPass })
    }

    render() {
        const password_status = zxcvbn(this.state.password)
        return (
            <div>
                <div>
                    <div className="password-inputs">
                        <input
                          type="text"
                          onChange={(e) => {this.setState({ name: e.target.value })}}
                          value={this.state.name}
                        />
                      <input
                        type="text"
                        onChange={(e) => {this.setState({ password: e.target.value })}}
                        value={this.state.password}
                      />
                      <div className="password-checkbox">
                          <span>
                              <input
                                type='checkbox'
                                onChange={(e) => {this.setState({ hypen: !this.state.hypen })}}
                                checked={this.state.hypen}
                              />
                              <label>Insert hypens</label>
                          </span>
                          <select
                              onChange={(e) => {
                                  this.changeAvailable(e.target.value);
                              }}>
                              <option value="alpha">Alphabet</option>
                              <option value="alphanum">Alphabet + Numbers</option>
                              <option value="all">Alphabet + Numbers + Symbols</option>
                          </select>
                      </div>
                      {this.state.type}
                    </div>

                    <button id="generate" onClick={(e) => { this.generatePassword() }}>
                        Generate Random Password
                    </button>
                    <div>{this.state.name} - {this.state.password}</div>
                    <div>Password Strength - {password_status.score}</div>

                    <div>
                      <button onClick={(e) => {
                        this.props.addPassword(this.state.name, this.state.password)
                      }}>Save</button>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = () => {
  return {
    addPassword
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(Password)
