import React from 'react'

export default React.createClass({

  getPair: function () {
    return this.props.pair || [1]
  },

  isDisabled: function () {
    return !!this.props.hasVoted
  },

  hasVotedFor: function (entry) {
    return this.props.hasVoted === entry
  },

  render: function () {
    const pair = this.getPair()
    if (pair.length < 2) {
      return <h2>NOT ENOUGH PAIR</h2>
    }
    return <div className='buttons'>
      <h1>Buttons</h1> 
      {pair.map(entry =>
        <button key={entry} onClick={() => this.props.vote(entry)} disabled={this.isDisabled}>
          <h1>{entry}</h1>
          {this.hasVotedFor(entry)
            ? <div className='label'> Voted </div>
            : null
          }
        </button>
      )}
    </div>
  }
})