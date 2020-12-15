import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Login from "./SignIn";

const PrivateRoute = ({ ...options }) => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) options.component = Login;
  return <Route {...options} />;
};

export default PrivateRoute;