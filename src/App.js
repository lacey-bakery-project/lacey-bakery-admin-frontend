import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Header from './components/Header.js'
import Home from './components/Home.js'
import Products from './components/Products.js'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import Logout from './components/Logout.js'
import { loginAdmin, getUsername } from '../src/actions'

function App(props) {

  useEffect(() => {
    const token = localStorage.getItem('token')
    const role = localStorage.getItem('role')
    const username = localStorage.getItem('username')
    if (token && role === 'admin') {
      props.loginAdmin(true)
    }
    if (username) {
      props.getUsername(username)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log("App render. Admin status:", props.admin)


  return (
    <div className="App">
      <Header />

      <main>
        <Switch>
          <Route path='/products' component={Products} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/logout' component={Logout} />
          <Route exact path='/' component={Home} />
        </Switch>
      </main>
    </div>
  );
}

const mapStateToProps = state => {
  return ({
    admin: state.admin.admin
  })
}

export default connect(mapStateToProps, { loginAdmin, getUsername })(App)
