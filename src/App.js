import React, { Component } from 'react'
import Voting from './components/Voting'
import logo from './logo.svg'
import './App.css'

const pair = ['Trainspotting', '28 Days Later']

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Clean state</h1>
        <Voting pair={pair} />
        <hr/>
        <h1>Voted Trainspotting</h1>
        <Voting pair={pair} hasVoted="Trainspotting" />
        <hr/>
        <h1>Winner 28 Days Later</h1>
        <Voting pair={pair} winner="28 Days Later" />        
      </div>
    )
  }
}

export default App
