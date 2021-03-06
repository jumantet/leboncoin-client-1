import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Cookies from "js-cookie";

import Header from "./components/Header/Header";

import Home from "./containers/Home/Home";
import Offers from "./containers/Offers/Offers";
import Offer from "./containers/Offer/Offer";
import SignUp from "./containers/SignUp/SignUp";
import LogIn from "./containers/LogIn/LogIn";
import Publish from "./containers/Publish/Publish";
import Profile from "./containers/Profile/Profile";

import "./assets/css/reset.css";
import "./App.css";

class App extends Component {
  state = {
    token: Cookies.get("token") || null,
    email: Cookies.get("email") || null,
    username: Cookies.get("username") || null,
    phone: Cookies.get("phone") || null,
    isToggle: false,
    windowWidth: window.innerWidth
  };

  componentDidMount = () => {
    window.addEventListener("resize", () =>
      this.setState({ windowWidth: window.innerWidth })
    );
  };

  setUser = user => {
    if (user) {
      const { token, email, account } = user;
      this.setState({
        token: token,
        email: email,
        username: account.username,
        phone: account.phone
      });

      Cookies.set("token", token);
      Cookies.set("email", email);
      Cookies.set("username", account.username);
      Cookies.set("phone", account.phone);
    } else {
      console.log("no user was passed in setUser()");
    }
  };

  getUser = () => {
    if (this.state.token) {
      return {
        token: this.state.token,
        email: this.state.email,
        username: this.state.username
      };
    } else {
      console.log("getUser() does not find a user, check token");
    }
  };

  logOut = () => {
    this.setState({
      token: null,
      email: null,
      username: null,
      phone: null
    });

    Cookies.remove("token");
    Cookies.remove("email");
    Cookies.remove("username");
    Cookies.remove("phone");
  };

  toggleMenu = () => {
    const isToggle = this.state.isToggle;
    this.setState({
      isToggle: !isToggle
    });
  };

  render() {
    return (
      <Router>
        <>
          <Header
            token={this.state.token}
            username={this.state.username}
            isToggle={this.state.isToggle}
            windowWidth={this.state.windowWidth}
            logOut={this.logOut}
            toggleMenu={this.toggleMenu}
          />
          <Switch>
            <Route
              exact={true}
              path="/"
              render={props => {
                // props = {
                //  history (push triggers redirection)
                //  match
                //  location
                // }
                return <Home {...props} />;
              }}
            />
            <Route
              exact={true}
              path="/offres"
              render={props => {
                // props = {
                //  history (push triggers redirection)
                //  match
                //  location
                // }
                return (
                  <Offers {...props} windowWidth={this.state.windowWidth} />
                );
              }}
            />
            <Route
              path="/offer/:offerId"
              render={props => <Offer {...props} />}
            />
            <Route
              path="/sign_up"
              render={props => <SignUp setUser={this.setUser} {...props} />}
            />

            <Route
              path="/log_in"
              render={props => <LogIn setUser={this.setUser} {...props} />}
            />
            <Route
              path="/publish"
              render={props => {
                if (this.state.token) {
                  return <Publish getUser={this.getUser} {...props} />;
                } else {
                  return <Redirect to="/log_in" />; // source: https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Redirect.md
                }
              }}
            />
            <Route
              path="/profile"
              render={props => {
                if (this.state.token) {
                  return <Profile getUser={this.getUser} {...props} />;
                } else {
                  return <Redirect to="/offres" />;
                }
              }}
            />
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;
