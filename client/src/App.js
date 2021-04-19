import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NoteState from "./context/note/NoteState"
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import "./App.css";

function App() {
  return (
    <NoteState>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    </NoteState>
  );
}

export default App;
