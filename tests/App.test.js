import React from 'react'
import ReactDOM from 'react-dom'
import App from '../src/App'
import {List} from 'immutable'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})


it('should work with immutable', ()=>{
  let li = List.of(1,3)
  expect(li.size).toBe(2)
})


///* basic test example */
// it('test description', () => { 
//   const actual = 1,
//     expected = 2
//  
//   expect( actual ).toBe( expected )
// })