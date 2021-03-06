import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import User from './users/pages/Users'
import NewPlace from './places/pages/NewPlace'
import MainNavigation from './shared/components/Navigation/MainNavigation'

const App = () => {
  return <Router>
    <MainNavigation />
    <main>
      <Switch>
        <Route path='/' component={User} exact />
        <Route path='/places/new' component={NewPlace} />
        <Redirect to='/' />
      </Switch>
    </main>
  </Router>
}

export default App
