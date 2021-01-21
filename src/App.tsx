import React from 'react';
import './App.css';
import { AuthProvider } from './Auth/AuthProvider';
import { createBrowserHistory } from "history";
import Contents from "./Components/Pages/Contents";
import Login from "./Auth/SignIn";
import PrivateRoute from "./Auth/PrivateRoute";
import { Provider } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import store from "./Redux";
import SignUp from "./Auth/SignUp";

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
