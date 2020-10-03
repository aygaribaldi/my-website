import React from "react";
import logo from "./logo.svg";
import "./styles/App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Route
        exact
        path={`/`}
        render={(routerProps) => <Home routerProps={routerProps} />}
      />
    </div>
  );
}

export default App;
