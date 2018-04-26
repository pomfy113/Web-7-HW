import React, { Component } from 'react'
import './Password.css'

class Password extends Component {
    constructor(props) {
        super(props)
        this.state = {
            description: 'Description for password',
            password: 'p@ssw0rd'
        }
        this.availableCharacters()
    }

    availableCharacters() {
        let allChars = [];

        for(let i = 33; i < 127; i++) {
            allChars.push(String.fromCharCode(i));
        }

        this.chars = allChars
        this.charLen = allChars.length
    }

    random(n) {
        return Math.floor(Math.random() * n)
    }

    generatePassword() {
        // generate a password here
        let newPass = []
        for(let i = 0; i < 9; i++){
            newPass.push(this.chars[this.random(this.charLen)])
            if((i+1) % 3 == 0 && i != 8){
                newPass.push('-')
            }
        }

        this.setState({ password: newPass })
    }

    render() {
        return (
            <div>
                <div>
                    <div className="password-inputs">
                        <input
                          onChange={(e) => {this.setState({ description: e.target.value })}}
                          value={this.state.description}
                        />
                      <input
                        onChange={(e) => {this.setState({ password: e.target.value })}}
                        value={this.state.password}
                      />
                    </div>
                    <button onClick={(e) => { this.generatePassword() }}>
                        Generate Random Password
                    </button>
                    <div><h1>{this.state.password}</h1></div>

                </div>
            </div>
        )
    }
}

export default Password
