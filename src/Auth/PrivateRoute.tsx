import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import Login from "./SignIn";
import { Route } from "react-router-dom";

const PrivateRoute = ({ ...options }) => {
  const { currentUser } = useContext(AuthContext);
  
  if (!currentUser) options.component = Login;
  return <Route {...options} />;
};

export default PrivateRoute;