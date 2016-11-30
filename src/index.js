import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import Voting from './components/Voting'
import Results from './components/Results'
import Home from './components/Home'
import App from './App'
import './index.css'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/results' component={Results} />
      <Route path='/voting' component={Voting} />
    </Route>
  </Router>,
  document.getElementById('root')
)
