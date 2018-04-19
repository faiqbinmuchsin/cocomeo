import React, { Component } from 'react';
import './App.css';

// import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "./routes";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <Switch>
                {routes.map(route => <Route key={`${route.name}-${route.path}`} {...route} />)}
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
