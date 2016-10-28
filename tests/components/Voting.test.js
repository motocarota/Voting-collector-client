import React from 'react'
import ReactDOM from 'react-dom'
import Voting from '../../src/components/Voting'

it("renders a pair of buttons", () => { 
  const pair = [1, 2]
  const div = document.createElement('div')
  ReactDOM.render(<Voting pair={pair} />, div)
  //TODO complete the test with component DOM inspection 
  //https://facebook.github.io/jest/docs/tutorial-react.html


  const actual = 1,
    expected = 2
 
  expect( actual ).toBe( expected )
})

//TODO
// - test empty status
// - test winner
// - test voted