import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './components/Header.js'
import Home from './components/Home.js'
import Products from './components/Products.js'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import Logout from './components/Logout.js'

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path='/products' component={Products} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/logout' component={Logout} />
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
