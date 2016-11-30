import React from 'react'
import Winner from './Winner'
import Buttons from './Buttons'

function Voting (props) {
  return (
    <div className='voting'>
      <h1>Voting!</h1>
      {props.winner
         ? <Winner ref='winner' name={props.winner} />
         : <Buttons {...props} />}
    </div>)
}

export default Voting
