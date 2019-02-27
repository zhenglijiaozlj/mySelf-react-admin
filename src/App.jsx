import React, {Component}from'react'
import {BrowserRouter as Router}from 'react-router-dom'
import {Route,Switch,Redirect}from 'react-router-dom'
import './assets/index.less'
import Login from './pages/login/index.jsx'
import Admin from './pages/admin/index.jsx'
export default class App extends Component{
  render(){
    return(
      <Router>
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/' component={Admin}/>
        </Switch>
      </Router>
    )
  }
}