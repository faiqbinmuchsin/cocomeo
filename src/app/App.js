import React, { Component } from 'react';
import './App.css';

import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "./routes";

class App extends Component {
  render() {
    const { store } = this.props;
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="App">
              <Switch>
                  {routes.map(route => <Route key={`${route.name}-${route.path}`} {...route} />)}
              </Switch>
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
