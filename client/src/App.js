import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import NoteState from "./context/note/NoteState";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/routing/PrivateRoute"

import Alerts from "./components/layout/Alerts"
import setAuthToken from "./utils/setAuthToken"
import "./App.css";


  if(localStorage.token){
    setAuthToken(localStorage.token)
  }


function App() {
  return (
    <AuthState>
      <NoteState>
        <AlertState>
          <Router>
            <div className="App">
            <Alerts />
              <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </div>
          </Router>
        </AlertState>
      </NoteState>
    </AuthState>
  );
}

export default App;
