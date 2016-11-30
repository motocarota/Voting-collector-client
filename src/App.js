import React, { Component } from 'react'
import { Link } from 'react-router'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Voting collector client</h2>
        </div>
        <div className='App-intro'>
          <Link to='/'> Home </Link>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App
