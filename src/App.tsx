import React from 'react';
import './App.css';
import { Router, Route, Switch } from "react-router-dom";
import Contents from "./Components/Templates/Contents";
import { createBrowserHistory } from "history";
import Login from "./Auth/Login";
import SignIn from "./Auth/SignIn";
import { Provider } from "react-redux";
import store from "./Redux";

export const history = createBrowserHistory();

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Contents} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signin" component={SignIn} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
