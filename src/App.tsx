import React from 'react';
import './App.css';
import { Router, Route, Switch } from "react-router-dom";
import Contents from "./Components/Pages/Contents";
import { createBrowserHistory } from "history";
import Login from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";
import { Provider } from "react-redux";
import store from "./Redux";
import { AuthProvider } from './Auth/AuthProvider';
import PrivateRoute from "./Auth/PrivateRoute";

export const history = createBrowserHistory();

function App() {
  return (
    <div>
      <Provider store={store}>
        <AuthProvider>
          <Router history={history}>
            <Switch>
              <PrivateRoute exact path="/" component={Contents} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={SignUp} />
            </Switch>
          </Router>
        </AuthProvider>
      </Provider>
    </div>
  );
}

export default App;
