import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import Voting from './components/Voting'
import App from './App'
import './index.css'

const routes = <Route component={App}>
  <Route path="/" component={Voting}/>  
</Route>
  

ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('root')
)
