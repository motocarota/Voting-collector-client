import React from 'react'

function Results ({ pair }) {
  return (
    <div>
      RRRResults!
      {pair.map(entry =>
        <div key={entry} className='entry'>
          <h1>{entry}</h1>
        </div>)
      }
    </div>
  )
}

export default Results
