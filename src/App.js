import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import './App.css'
import HomeComponent from './components/HomeComponent'
import LoginComponent from './components/LoginComponent'
import AccountComponent from './components/AccountComponent'
import PopularComponent from './components/PopularComponent'
import MovieItemDetailsComponent from './components/MovieItemDetailsComponent'
import SearchRouteComponent from './components/SearchRouteComponent'

import MovieContext from './context/MovieContext'

import ProtectedRouteComponent from './components/ProtectedRouteComponent'
import NotFoundComponent from './components/NotFoundComponent'

class App extends Component {
  state = {username: '', password: ''}

  triggerChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  triggerChangePassword = event => {
    this.setState({password: event.target.value})
  }

  triggerLogout = props => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
    this.setState({username: '', password: ''})
  }

  render() {
    const {username, password} = this.state

    return (
      <MovieContext.Provider
        value={{
          username,
          password,
          triggerChangeUsername: this.triggerChangeUsername,
          triggerChangePassword: this.triggerChangePassword,
          triggerLogout: this.triggerLogout,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginComponent} />
          <ProtectedRouteComponent exact path="/" component={HomeComponent} />
          <ProtectedRouteComponent
            exact
            path="/account"
            component={AccountComponent}
          />
          <ProtectedRouteComponent
            exact
            path="/popular"
            component={PopularComponent}
          />
          <ProtectedRouteComponent
            exact
            path="/search"
            component={SearchRouteComponent}
          />
          <ProtectedRouteComponent
            exact
            path="/movies/:id"
            component={MovieItemDetailsComponent}
          />

          <Route exact path="/not-found" component={NotFoundComponent} />
          <Redirect to="/not-found" />
        </Switch>
      </MovieContext.Provider>
    )
  }
}

export default App
