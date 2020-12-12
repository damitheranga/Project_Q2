import React from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import More from "./Components/More";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Body />
          </Route>
          <Route exact path="/more/:book_name">
            <More />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
